import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { DESTINATIONS } from '../../data/destinations';
import { Destination } from '../../types';
import { RotateCw, Compass, ZoomIn, ZoomOut, Play, Pause, MapPin } from 'lucide-react';

interface MountainRelief3DProps {
  onSelectDestination: (dest: Destination) => void;
  selectedCategory: string;
}

export const MountainRelief3D: React.FC<MountainRelief3DProps> = ({ onSelectDestination, selectedCategory }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredDest, setHoveredDest] = useState<Destination | null>(null);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [altitudeScale, setAltitudeScale] = useState(1);

  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const terrainMeshRef = useRef<THREE.Mesh | null>(null);
  const pinGroupRef = useRef<THREE.Group | null>(null);
  const isDragging = useRef(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0.65, y: -0.4 });
  const currentRotation = useRef({ x: 0.65, y: -0.4 });
  const zoomDistance = useRef(24);

  // Filter destinations based on selectedCategory
  const activeDestinations = selectedCategory === 'all'
    ? DESTINATIONS
    : DESTINATIONS.filter(d => d.category === selectedCategory);

  // Map latitude/longitude to 3D terrain coordinates (-15 to 15 range)
  // Arunachal coordinates roughly: 91.5°E to 97.5°E (lon) and 26.5°N to 29.5°N (lat)
  const mapCoordsTo3D = (lat: number, lng: number) => {
    const x = ((lng - 94.5) / 3.0) * 14;
    const z = -((lat - 28.0) / 1.5) * 9;
    return { x, z };
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.fog = new THREE.FogExp2(0x07131D, 0.024);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 18, 22);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 3. Lighting
    const ambientLight = new THREE.AmbientLight(0x2d4a58, 1.8);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xf6ad55, 2.5);
    sunLight.position.set(20, 25, 15);
    scene.add(sunLight);

    const rimLight = new THREE.DirectionalLight(0x4fd1c5, 1.2);
    rimLight.position.set(-20, 15, -15);
    scene.add(rimLight);

    // 4. Arunachal Topographic Terrain Mesh
    const terrainGeo = new THREE.PlaneGeometry(32, 22, 90, 70);
    terrainGeo.rotateX(-Math.PI / 2);

    const pos = terrainGeo.attributes.position;
    const colors: number[] = [];
    const colorLow = new THREE.Color(0x0c2530);    // River valleys (Siang/Subansiri)
    const colorMid = new THREE.Color(0x1d5c48);    // Dense subtropical forests
    const colorHigh = new THREE.Color(0xb27830);   // Alpine ridges
    const colorSnow = new THREE.Color(0xf0fdf4);   // Glaciated Himalayan peaks

    for (let i = 0; i < pos.count; i++) {
      const vx = pos.getX(i);
      const vz = pos.getZ(i);

      // Procedural elevation replicating eastern Himalayas sloping down to Brahmaputra
      const northernSlope = Math.max(0, -vz * 0.45); // Higher in the north
      const rugged1 = Math.sin(vx * 0.5 + vz * 0.3) * 2.2;
      const rugged2 = Math.cos(vx * 0.9 - vz * 0.7) * 1.5;
      const highPeaks = Math.exp(-Math.pow(vx + 6, 2) / 12 - Math.pow(vz + 5, 2) / 8) * 5.5; // Gorichen massif
      const eastMassif = Math.exp(-Math.pow(vx - 9, 2) / 16 - Math.pow(vz + 4, 2) / 10) * 4.8; // Namcha Barwa / Dapha Bum
      const riverCanyon = Math.sin(vx * 0.4) * 0.6 - Math.abs(vx - 0.5) * 0.2; // Siang Gorge

      const elev = Math.max(0.1, northernSlope + rugged1 + rugged2 + highPeaks + eastMassif + riverCanyon);
      pos.setY(i, elev);

      // Color interpolation
      let c = colorLow.clone();
      if (elev < 2.0) {
        c.lerp(colorMid, elev / 2.0);
      } else if (elev < 5.0) {
        c = colorMid.clone().lerp(colorHigh, (elev - 2.0) / 3.0);
      } else {
        c = colorHigh.clone().lerp(colorSnow, (elev - 5.0) / 3.0);
      }
      colors.push(c.r, c.g, c.b);
    }
    terrainGeo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    terrainGeo.computeVertexNormals();

    const terrainMat = new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 0.75,
      metalness: 0.1,
      flatShading: true
    });
    const terrainMesh = new THREE.Mesh(terrainGeo, terrainMat);
    scene.add(terrainMesh);
    terrainMeshRef.current = terrainMesh;

    // Topographic wire contours overlay
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xe5a93c,
      wireframe: true,
      transparent: true,
      opacity: 0.15
    });
    const wireMesh = new THREE.Mesh(terrainGeo, wireMat);
    wireMesh.position.y = 0.02;
    terrainMesh.add(wireMesh);

    // 5. 3D Floating Pins Group
    const pinGroup = new THREE.Group();
    terrainMesh.add(pinGroup);
    pinGroupRef.current = pinGroup;

    // Pin geometries
    const pinStemGeo = new THREE.CylinderGeometry(0.04, 0.04, 1.8, 8);
    const pinHeadGeo = new THREE.SphereGeometry(0.32, 16, 16);

    activeDestinations.forEach(dest => {
      const { x, z } = mapCoordsTo3D(dest.coordinates.lat, dest.coordinates.lng);
      const destPin = new THREE.Group();
      destPin.position.set(x, 2.5, z);
      destPin.userData = { destination: dest };

      // Glowing pin stem
      const stemMat = new THREE.MeshBasicMaterial({ color: 0xe5a93c, transparent: true, opacity: 0.65 });
      const stem = new THREE.Mesh(pinStemGeo, stemMat);
      stem.position.y = -0.9;
      destPin.add(stem);

      // Glowing orb head
      const headMat = new THREE.MeshStandardMaterial({
        color: dest.category === 'village' ? 0x38b2ac : dest.category === 'trek' ? 0xe5a93c : 0xc2593f,
        emissive: dest.category === 'village' ? 0x234e52 : 0x744210,
        emissiveIntensity: 0.8,
        roughness: 0.3
      });
      const head = new THREE.Mesh(pinHeadGeo, headMat);
      destPin.add(head);

      pinGroup.add(destPin);
    });

    // 6. Interactive Flight Trail lines connecting key cultural valleys
    const curvePoints = [
      new THREE.Vector3(-10, 3.2, 4),   // Thembang / Dirang
      new THREE.Vector3(-5, 4.5, -2),   // Mechuka
      new THREE.Vector3(0, 2.8, 1),     // Ziro Valley
      new THREE.Vector3(4, 3.8, -4),    // Tuting / Siang
      new THREE.Vector3(8, 4.2, 0),     // Anini
      new THREE.Vector3(12, 3.0, 3)     // Dong Valley
    ];
    const curve = new THREE.CatmullRomCurve3(curvePoints);
    const trailGeo = new THREE.TubeGeometry(curve, 64, 0.05, 8, false);
    const trailMat = new THREE.MeshBasicMaterial({ color: 0xe5a93c, transparent: true, opacity: 0.45 });
    const trailMesh = new THREE.Mesh(trailGeo, trailMat);
    terrainMesh.add(trailMesh);

    // 7. Mouse Drag & Orbit Interaction
    const handleMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      previousMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) {
        // Raycasting for pin hover
        const rect = container.getBoundingClientRect();
        const mouse = new THREE.Vector2(
          ((e.clientX - rect.left) / rect.width) * 2 - 1,
          -(((e.clientY - rect.top) / rect.height) * 2 - 1)
        );
        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(mouse, camera);

        if (pinGroupRef.current) {
          const intersects = raycaster.intersectObjects(pinGroupRef.current.children, true);
          if (intersects.length > 0) {
            let topObj: THREE.Object3D | null = intersects[0].object;
            while (topObj && !topObj.userData.destination && topObj.parent) {
              topObj = topObj.parent;
            }
            if (topObj && topObj.userData.destination) {
              setHoveredDest(topObj.userData.destination);
              container.style.cursor = 'pointer';
              return;
            }
          }
        }
        setHoveredDest(null);
        container.style.cursor = 'grab';
        return;
      }

      const deltaX = e.clientX - previousMousePosition.current.x;
      const deltaY = e.clientY - previousMousePosition.current.y;

      targetRotation.current.y += deltaX * 0.008;
      targetRotation.current.x = Math.max(0.2, Math.min(1.2, targetRotation.current.x + deltaY * 0.008));

      previousMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging.current = false;
    };

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      zoomDistance.current = Math.max(14, Math.min(36, zoomDistance.current + e.deltaY * 0.02));
    };

    const handleClick = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const mouse = new THREE.Vector2(
        ((e.clientX - rect.left) / rect.width) * 2 - 1,
        -(((e.clientY - rect.top) / rect.height) * 2 - 1)
      );
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);

      if (pinGroupRef.current) {
        const intersects = raycaster.intersectObjects(pinGroupRef.current.children, true);
        if (intersects.length > 0) {
          let topObj: THREE.Object3D | null = intersects[0].object;
          while (topObj && !topObj.userData.destination && topObj.parent) {
            topObj = topObj.parent;
          }
          if (topObj && topObj.userData.destination) {
            onSelectDestination(topObj.userData.destination);
          }
        }
      }
    };

    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('click', handleClick);

    // 8. Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth auto rotation if enabled
      if (isAutoRotating && !isDragging.current) {
        targetRotation.current.y += 0.0015;
      }

      // Smooth lerp rotation
      currentRotation.current.x += (targetRotation.current.x - currentRotation.current.x) * 0.06;
      currentRotation.current.y += (targetRotation.current.y - currentRotation.current.y) * 0.06;

      if (terrainMeshRef.current) {
        terrainMeshRef.current.rotation.x = currentRotation.current.x;
        terrainMeshRef.current.rotation.y = currentRotation.current.y;
      }

      // Camera distance zoom lerp
      camera.position.z += (zoomDistance.current - camera.position.z) * 0.06;

      // Pulsate 3D pins
      if (pinGroupRef.current) {
        pinGroupRef.current.children.forEach((pin, idx) => {
          const hoverOffset = Math.sin(elapsed * 2.5 + idx) * 0.2;
          pin.position.y = 2.6 + hoverOffset;
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('click', handleClick);
      cancelAnimationFrame(animId);
      renderer.dispose();
      terrainGeo.dispose();
      trailGeo.dispose();
    };
  }, [activeDestinations, isAutoRotating]);

  return (
    <div className='relative w-full h-[580px] sm:h-[660px] overflow-hidden select-none'>
      {/* Three.js Canvas */}
      <div ref={containerRef} className='w-full h-full cursor-grab active:cursor-grabbing' />

      {/* 3D Top Overlay Badge */}
      <div className='absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#07131D]/80 border border-[#E5A93C]/30 backdrop-blur-md text-[11px] font-mono text-[#F3BA54] shadow-lg'>
        <Compass className='w-3.5 h-3.5 animate-spin' style={{ animationDuration: '12s' }} />
        <span>3D Himalayan Topographic Relief</span>
      </div>

      {/* Floating Destination Tooltip on Hover */}
      {hoveredDest && (
        <div className='absolute bottom-20 left-1/2 -translate-x-1/2 z-30 pointer-events-none animate-fadeIn'>
          <div className='glass-panel-warm px-4 py-2.5 rounded-2xl border border-[#E5A93C]/50 shadow-2xl flex items-center gap-3 backdrop-blur-md'>
            <div className='w-9 h-9 rounded-xl overflow-hidden bg-black/40 flex-shrink-0 border border-white/20'>
              <img src={hoveredDest.images[0]} alt={hoveredDest.name} className='w-full h-full object-cover' />
            </div>
            <div>
              <div className='font-serif text-white font-medium text-sm flex items-center gap-1.5'>
                {hoveredDest.name}
                <span className='font-mono text-[10px] text-[#E5A93C]'>({hoveredDest.altitude})</span>
              </div>
              <div className='text-[11px] text-[#98A7A0] flex items-center gap-2'>
                <span>{hoveredDest.district}</span>
                <span>•</span>
                <span className='text-[#38b2ac]'>{hoveredDest.community} tribe</span>
              </div>
            </div>
            <span className='px-2.5 py-1 rounded-full bg-[#E5A93C]/20 text-[#F3BA54] text-[10px] font-bold tracking-wide uppercase ml-2'>
              Click to Explore
            </span>
          </div>
        </div>
      )}

      {/* 3D Interactive Control Toolbar */}
      <div className='absolute bottom-4 right-4 z-20 flex items-center gap-2 p-1.5 rounded-full bg-[#07131D]/85 border border-white/15 backdrop-blur-md shadow-2xl'>
        <button
          onClick={() => setIsAutoRotating(!isAutoRotating)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
            isAutoRotating ? 'bg-[#E5A93C] text-[#07131D] font-bold shadow-md' : 'text-gray-300 hover:text-white'
          }`}
          title={isAutoRotating ? 'Pause Scenic Orbit' : 'Resume Scenic Orbit'}
        >
          {isAutoRotating ? <Pause className='w-3.5 h-3.5' /> : <Play className='w-3.5 h-3.5' />}
          <span className='hidden sm:inline'>{isAutoRotating ? 'Orbit Active' : 'Orbit Paused'}</span>
        </button>

        <button
          onClick={() => {
            targetRotation.current = { x: 0.65, y: -0.4 };
            zoomDistance.current = 24;
          }}
          className='p-1.5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors'
          title='Reset Camera Orientation'
        >
          <RotateCw className='w-4 h-4' />
        </button>
      </div>

      {/* Quick Help Legend */}
      <div className='absolute bottom-4 left-4 z-20 hidden sm:flex items-center gap-3 text-[11px] text-gray-400 font-mono bg-[#07131D]/75 px-3 py-1.5 rounded-full border border-white/10'>
        <span className='flex items-center gap-1'>
          <span className='w-2 h-2 rounded-full bg-[#38b2ac]' /> Village
        </span>
        <span className='flex items-center gap-1'>
          <span className='w-2 h-2 rounded-full bg-[#E5A93C]' /> High Pass / Trek
        </span>
        <span className='flex items-center gap-1'>
          <span className='w-2 h-2 rounded-full bg-[#c2593f]' /> Cultural Region
        </span>
        <span className='text-gray-500'>| Drag to Orbit • Scroll to Zoom</span>
      </div>
    </div>
  );
};
