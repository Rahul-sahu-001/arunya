import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Sun, CloudFog, Sparkles } from 'lucide-react';

export type NatureAtmosphere = 'sunrise' | 'mist' | 'starlight';

interface Hero3DCanvasProps {
  onAtmosphereChange?: (mode: NatureAtmosphere) => void;
}

export const Hero3DCanvas: React.FC<Hero3DCanvasProps> = ({ onAtmosphereChange }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [atmosphere, setAtmosphere] = useState<NatureAtmosphere>('sunrise');

  // References for animation
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const mountainMeshRef = useRef<THREE.Mesh | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const mistParticlesRef = useRef<THREE.Points | null>(null);
  const sunLightRef = useRef<THREE.DirectionalLight | null>(null);
  const ambientLightRef = useRef<THREE.AmbientLight | null>(null);
  const mousePos = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  // Atmospheric color palettes
  const palettes = {
    sunrise: {
      fog: 0x0c1b26,
      ambient: 0x243238,
      sun: 0xf6ad55,
      sunIntensity: 2.2,
      mountainPeak: 0xe5a93c,
      mountainBase: 0x091b24,
      wire: 0xf3ba54,
      particle: 0xffd166,
      speed: 0.0018
    },
    mist: {
      fog: 0x08171f,
      ambient: 0x14282a,
      sun: 0x4fd1c5,
      sunIntensity: 1.4,
      mountainPeak: 0x2e8b57,
      mountainBase: 0x05131a,
      wire: 0x38b2ac,
      particle: 0x81e6d9,
      speed: 0.0012
    },
    starlight: {
      fog: 0x050b14,
      ambient: 0x0d1527,
      sun: 0x90cdf4,
      sunIntensity: 1.0,
      mountainPeak: 0xa0aec0,
      mountainBase: 0x030712,
      wire: 0x63b3ed,
      particle: 0xffffff,
      speed: 0.0008
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene & Camera Setup
    const width = container.clientWidth;
    const height = container.clientHeight;
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.fog = new THREE.FogExp2(palettes.sunrise.fog, 0.028);

    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 100);
    camera.position.set(0, 5, 22);
    camera.lookAt(0, 1.5, 0);
    cameraRef.current = camera;

    // 2. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 3. Lighting
    const ambientLight = new THREE.AmbientLight(palettes.sunrise.ambient, 1.6);
    scene.add(ambientLight);
    ambientLightRef.current = ambientLight;

    const sunLight = new THREE.DirectionalLight(palettes.sunrise.sun, palettes.sunrise.sunIntensity);
    sunLight.position.set(15, 18, 12);
    scene.add(sunLight);
    sunLightRef.current = sunLight;

    // 4. Procedural Himalayan Mountain Geometry
    const gridX = 72;
    const gridY = 54;
    const planeGeo = new THREE.PlaneGeometry(54, 38, gridX, gridY);
    planeGeo.rotateX(-Math.PI / 2.3);

    const posAttr = planeGeo.attributes.position;
    const vertex = new THREE.Vector3();
    const colors = [];
    const colorPeak = new THREE.Color(palettes.sunrise.mountainPeak);
    const colorBase = new THREE.Color(palettes.sunrise.mountainBase);

    for (let i = 0; i < posAttr.count; i++) {
      vertex.fromBufferAttribute(posAttr, i);

      // Create majestic Himalayan ridges using layered harmonic sin/cos waves
      const nx = vertex.x * 0.14;
      const nz = vertex.z * 0.14;
      
      const ridge1 = Math.sin(nx * 1.2 + nz * 0.6) * 3.2;
      const ridge2 = Math.cos(nx * 2.1 - nz * 1.4) * 1.8;
      const peak = Math.sin(nx * 0.7) * Math.cos(nz * 0.8) * 4.2;
      const micro = Math.sin(nx * 4.5 + nz * 3.2) * 0.45;

      const elevation = Math.max(-1.5, ridge1 + ridge2 + peak + micro);
      vertex.y = elevation;
      posAttr.setXYZ(i, vertex.x, vertex.y, vertex.z);

      // Height-based coloring (snowcaps and peaks glow golden/emerald)
      const ratio = Math.min(Math.max((elevation + 1.5) / 8.5, 0), 1);
      const c = colorBase.clone().lerp(colorPeak, ratio);
      colors.push(c.r, c.g, c.b);
    }
    planeGeo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    planeGeo.computeVertexNormals();

    // Mountain Solid Shader Material
    const mountainMat = new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 0.85,
      metalness: 0.15,
      flatShading: true,
      transparent: true,
      opacity: 0.78
    });

    const mountainMesh = new THREE.Mesh(planeGeo, mountainMat);
    mountainMesh.position.set(0, -3.5, -4);
    scene.add(mountainMesh);
    mountainMeshRef.current = mountainMesh;

    // Topographic Contour Wireframe overlay
    const wireMat = new THREE.MeshBasicMaterial({
      color: palettes.sunrise.wire,
      wireframe: true,
      transparent: true,
      opacity: 0.18
    });
    const wireMesh = new THREE.Mesh(planeGeo, wireMat);
    wireMesh.position.set(0, -3.48, -4);
    scene.add(wireMesh);

    // 5. 3D Floating Himalayan Mist (Clouds through Valleys)
    const mistCount = 220;
    const mistGeo = new THREE.BufferGeometry();
    const mistPositions = new Float32Array(mistCount * 3);
    const mistSpeeds = new Float32Array(mistCount);

    for (let i = 0; i < mistCount; i++) {
      mistPositions[i * 3] = (Math.random() - 0.5) * 48;
      mistPositions[i * 3 + 1] = Math.random() * 4 - 1.5; // low valley mist
      mistPositions[i * 3 + 2] = (Math.random() - 0.5) * 32 - 2;
      mistSpeeds[i] = 0.012 + Math.random() * 0.02;
    }
    mistGeo.setAttribute('position', new THREE.BufferAttribute(mistPositions, 3));

    // Custom circle texture for soft round particles
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, 'rgba(255,255,255,0.9)');
      grad.addColorStop(0.3, 'rgba(255,255,255,0.3)');
      grad.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 64, 64);
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const mistMat = new THREE.PointsMaterial({
      size: 3.2,
      map: particleTexture,
      transparent: true,
      opacity: 0.14,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const mistParticles = new THREE.Points(mistGeo, mistMat);
    scene.add(mistParticles);
    mistParticlesRef.current = mistParticles;

    // 6. 3D Golden Fireflies / Forest Spores
    const particleCount = 140;
    const pGeo = new THREE.BufferGeometry();
    const pPositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pPositions[i * 3] = (Math.random() - 0.5) * 40;
      pPositions[i * 3 + 1] = Math.random() * 12 - 2;
      pPositions[i * 3 + 2] = (Math.random() - 0.5) * 26 + 4;
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));

    const pMat = new THREE.PointsMaterial({
      size: 0.45,
      map: particleTexture,
      color: palettes.sunrise.particle,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);
    particlesRef.current = particles;

    // 7. Mouse / Pointer Interaction
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mousePos.current.targetX = x * 2.8;
      mousePos.current.targetY = y * 1.5;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // 8. Resize Handler
    const handleResize = () => {
      if (!container || !camera || !renderer) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // 9. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Buttery smooth camera mouse lerp
      mousePos.current.x += (mousePos.current.targetX - mousePos.current.x) * 0.04;
      mousePos.current.y += (mousePos.current.targetY - mousePos.current.y) * 0.04;

      if (cameraRef.current) {
        cameraRef.current.position.x = mousePos.current.x;
        cameraRef.current.position.y = 5 + mousePos.current.y;
        cameraRef.current.lookAt(0, 1.2, -4);
      }

      // Gentle natural mountain wind breathing
      if (mountainMeshRef.current) {
        mountainMeshRef.current.rotation.z = Math.sin(elapsed * 0.15) * 0.015;
      }

      // Drift mist particles along the valley
      if (mistParticlesRef.current) {
        const mPos = mistParticlesRef.current.geometry.attributes.position as THREE.BufferAttribute;
        for (let i = 0; i < mistCount; i++) {
          let x = mPos.getX(i);
          let y = mPos.getY(i);
          x += mistSpeeds[i] * 0.6;
          // Loop back when drifting off screen
          if (x > 25) x = -25;
          // Slight vertical undulation like real fog
          y += Math.sin(elapsed + i) * 0.003;
          mPos.setXY(i, x, y);
        }
        mPos.needsUpdate = true;
      }

      // Dancing golden fireflies
      if (particlesRef.current) {
        const pPos = particlesRef.current.geometry.attributes.position as THREE.BufferAttribute;
        for (let i = 0; i < particleCount; i++) {
          let y = pPos.getY(i) + Math.sin(elapsed * 1.5 + i) * 0.006;
          let x = pPos.getX(i) + Math.cos(elapsed * 0.8 + i) * 0.004;
          if (y > 10) y = -2;
          pPos.setXY(i, x, y);
        }
        pPos.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      planeGeo.dispose();
      mistGeo.dispose();
      pGeo.dispose();
      particleTexture.dispose();
      if (container && renderer.domElement) {
        container.innerHTML = '';
      }
    };
  }, []);

  // Update atmosphere palette on user selection
  const changeAtmosphere = (mode: NatureAtmosphere) => {
    setAtmosphere(mode);
    onAtmosphereChange?.(mode);

    const pal = palettes[mode];
    if (sceneRef.current) {
      sceneRef.current.fog = new THREE.FogExp2(pal.fog, mode === 'mist' ? 0.038 : 0.024);
    }
    if (ambientLightRef.current) {
      ambientLightRef.current.color.setHex(pal.ambient);
      ambientLightRef.current.intensity = mode === 'starlight' ? 1.0 : 1.6;
    }
    if (sunLightRef.current) {
      sunLightRef.current.color.setHex(pal.sun);
      sunLightRef.current.intensity = pal.sunIntensity;
    }
    if (particlesRef.current) {
      (particlesRef.current.material as THREE.PointsMaterial).color.setHex(pal.particle);
      (particlesRef.current.material as THREE.PointsMaterial).size = mode === 'starlight' ? 0.28 : 0.45;
    }
  };

  return (
    <div className='absolute inset-0 z-0 pointer-events-none overflow-hidden'>
      {/* Three.js Canvas Container */}
      <div ref={containerRef} className='w-full h-full' />

      {/* Floating 3D Nature Controls Bar */}
      <div className='absolute bottom-6 right-6 z-20 pointer-events-auto hidden sm:flex items-center gap-1.5 p-1.5 rounded-full bg-[#07131D]/80 border border-white/15 backdrop-blur-md shadow-2xl'>
        <div className='px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest text-[#98A7A0] flex items-center gap-1.5 border-r border-white/10'>
          <span className='w-2 h-2 rounded-full bg-[#E5A93C] animate-pulse' />
          3D Atmosphere
        </div>

        <button
          onClick={() => changeAtmosphere('sunrise')}
          className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
            atmosphere === 'sunrise'
              ? 'bg-[#E5A93C] text-[#07131D] font-bold shadow-md'
              : 'text-gray-300 hover:text-white hover:bg-white/10'
          }`}
          title='First Sunrise at Dong Valley (Golden Hour)'
        >
          <Sun className='w-3.5 h-3.5' />
          <span>Dong Dawn</span>
        </button>

        <button
          onClick={() => changeAtmosphere('mist')}
          className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
            atmosphere === 'mist'
              ? 'bg-[#38b2ac] text-[#07131D] font-bold shadow-md'
              : 'text-gray-300 hover:text-white hover:bg-white/10'
          }`}
          title='Namdapha Rainforest Deep Mist & Fireflies'
        >
          <CloudFog className='w-3.5 h-3.5' />
          <span>Namdapha Mist</span>
        </button>

        <button
          onClick={() => changeAtmosphere('starlight')}
          className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
            atmosphere === 'starlight'
              ? 'bg-[#63b3ed] text-[#07131D] font-bold shadow-md'
              : 'text-gray-300 hover:text-white hover:bg-white/10'
          }`}
          title='Sela Pass Clear High Altitude Starlight'
        >
          <Sparkles className='w-3.5 h-3.5' />
          <span>Sela Stars</span>
        </button>
      </div>
    </div>
  );
};
