import React, { useState } from 'react';
import { Download, Printer, CheckCircle2, ShieldCheck, X, Compass, MapPin } from 'lucide-react';

export const OfflinePackModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    const textContent = `ARUNYA — MOUNTAIN EXPEDITION OFFLINE PACK\n` +
      `Generated: ${new Date().toLocaleDateString()}\n\n` +
      `EMERGENCY CONTACTS:\n` +
      `Statewide Emergency: 112\n` +
      `Directorate of Tourism Itanagar: +91-360-2214745\n` +
      `Ziro Helpline: +91-3788-224255\n` +
      `Anini DC Office: +91-3801-222224\n\n` +
      `PERMIT REMINDERS:\n` +
      `- Keep 3 physical paper copies of approved e-ILP in waterproof pouch\n` +
      `- Carry original photo ID\n\n` +
      `OFFLINE LOCAL PHRASES:\n` +
      `Hello / Peace (Apatani): O-la / Donyi Polo\n` +
      `Auspicious Greetings (Monpa): Tashi Delek\n` +
      `Thank you (Adi): Aito Ka-pe\n\n` +
      `RESPONSIBLE TRAVEL PROTOCOL:\n` +
      `- Zero single-use plastic\n` +
      `- Ask before photography\n` +
      `- Pay local guides directly\n`;

    const blob = new Blob([textContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ARUNYA-Mountain-Expedition-Pack.txt';
    a.click();
    URL.revokeObjectURL(url);
    setDownloaded(true);
  };

  return (
    <div className='fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in'>
      <div className='relative w-full max-w-lg bg-[#091824] rounded-3xl border border-white/20 p-6 sm:p-8 space-y-6 shadow-2xl'>
        <button onClick={onClose} className='absolute top-6 right-6 p-2 rounded-full bg-white/10 text-gray-300 hover:text-white'>
          <X className='w-5 h-5' />
        </button>

        <div>
          <span className='font-mono text-xs uppercase tracking-widest text-[#E5A93C]'>OFFLINE MODE</span>
          <h3 className='font-serif text-3xl text-white font-light mt-1'>Download for the Mountains</h3>
          <p className='text-xs text-gray-400 font-light mt-1'>
            Many remote valleys of Arunachal have zero cellular connectivity. Download or print your offline expedition dossier containing emergency numbers, permit checklists, and phrases.
          </p>
        </div>

        <div className='p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2 text-xs text-gray-300'>
          <div className='font-mono font-semibold text-[#F3BA54]'>Offline Pack Contents:</div>
          <ul className='space-y-1 text-gray-400 font-mono text-[11px]'>
            <li>✓ Offline District Emergency Contacts & Hospital Numbers</li>
            <li>✓ Mandatory ILP / PAP Checkpost Checklist</li>
            <li>✓ Common Tribal Phonetic Phrases (Apatani, Monpa, Adi)</li>
            <li>✓ High Ridge Wilderness Survival & Hearth Etiquette</li>
          </ul>
        </div>

        <div className='flex gap-3'>
          <button
            onClick={handleDownload}
            className='flex-1 py-3 rounded-xl bg-gradient-to-r from-[#E5A93C] to-[#C2593F] text-[#07131D] text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-2'
          >
            <Download className='w-4 h-4' />
            <span>{downloaded ? 'Downloaded Pack!' : 'Download Text Dossier'}</span>
          </button>
          <button
            onClick={() => window.print()}
            className='px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors flex items-center gap-2'
            title='Print Dossier'
          >
            <Printer className='w-4 h-4' />
          </button>
        </div>
      </div>
    </div>
  );
};