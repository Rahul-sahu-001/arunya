import React, { useState } from 'react';
import { PERMIT_DETAILS, EMERGENCY_CONTACTS, TRANSPORT_GATEWAYS } from '../../data/permits';
import { ShieldAlert, ArrowUpRight, CheckCircle2, Phone, Car, Navigation } from 'lucide-react';

export const PermitGuide: React.FC = () => {
  const [selectedPermitTab, setSelectedPermitTab] = useState<'ILP' | 'PAP'>('ILP');
  const currentPermit = PERMIT_DETAILS.find(p => p.type === selectedPermitTab) || PERMIT_DETAILS[0];

  return (
    <section id='permit-info' className='py-24 bg-[#07131D] text-[#EEF3F0] relative border-t border-white/10'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='mb-12'>
          <span className='font-mono text-xs uppercase tracking-[0.25em] text-[#E5A93C] font-semibold block mb-2'>
            BEFORE YOU GO
          </span>
          <h2 className='font-serif text-3xl sm:text-5xl font-light text-white leading-tight'>
            Permits, Gateways & Essential Travel Guidance
          </h2>
          <p className='text-sm text-[#98A7A0] max-w-xl mt-2 font-light'>
            All travellers require government entry permits (ILP for Indian citizens; PAP for foreign nationals). Plan your entry checklist verified by official tourism portals.
          </p>
        </div>

        {/* Permit Dossier Tabs */}
        <div className='rounded-3xl bg-[#091824] border border-white/15 p-6 sm:p-10 shadow-2xl space-y-8 mb-12'>
          <div className='flex items-center justify-between pb-6 border-b border-white/10'>
            <div className='flex gap-2'>
              <button
                onClick={() => setSelectedPermitTab('ILP')}
                className={`px-5 py-2.5 rounded-2xl text-xs font-mono font-bold transition-all ${
                  selectedPermitTab === 'ILP'
                    ? 'bg-[#E5A93C] text-[#07131D] shadow-lg'
                    : 'glass-panel text-gray-300 hover:text-white'
                }`}
              >
                Inner Line Permit (ILP) — Indian Citizens
              </button>
              <button
                onClick={() => setSelectedPermitTab('PAP')}
                className={`px-5 py-2.5 rounded-2xl text-xs font-mono font-bold transition-all ${
                  selectedPermitTab === 'PAP'
                    ? 'bg-[#E5A93C] text-[#07131D] shadow-lg'
                    : 'glass-panel text-gray-300 hover:text-white'
                }`}
              >
                Protected Area Permit (PAP) — Foreign Nationals
              </button>
            </div>
            <a
              href={currentPermit.officialPortal}
              target='_blank'
              rel='noopener noreferrer'
              className='hidden sm:flex items-center gap-1.5 text-xs font-bold text-[#F3BA54] hover:underline font-mono'
            >
              <span>Official Application Portal</span>
              <ArrowUpRight className='w-4 h-4' />
            </a>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in'>
            <div className='p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3'>
              <h4 className='font-mono text-xs uppercase text-[#E5A93C] font-semibold'>Permit Eligibility & Cost</h4>
              <p className='text-xs text-gray-300 font-light leading-relaxed'>{currentPermit.forWhom}</p>
              <div className='pt-2 font-mono text-xs text-white'>
                <div>Validity: <strong>{currentPermit.validity}</strong></div>
                <div>Official Cost: <strong>{currentPermit.cost}</strong></div>
                <div>Processing Time: <strong>{currentPermit.processingTime}</strong></div>
              </div>
            </div>

            <div className='p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3'>
              <h4 className='font-mono text-xs uppercase text-emerald-400 font-semibold'>Mandatory Documents</h4>
              <ul className='space-y-1.5 text-xs text-gray-300 font-light'>
                {currentPermit.documentsRequired.map((doc, i) => (
                  <li key={i} className='flex items-start gap-2'>
                    <CheckCircle2 className='w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5' />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className='p-6 rounded-2xl bg-[#091426] border border-blue-500/20 space-y-3'>
              <h4 className='font-mono text-xs uppercase text-sky-400 font-semibold'>Checkpost Rules</h4>
              <ul className='space-y-1.5 text-xs text-gray-300 font-light'>
                {currentPermit.importantRules.map((r, i) => (
                  <li key={i} className='flex items-start gap-1.5'>
                    <span className='text-[#E5A93C]'>•</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Gateways & Emergency Network */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='p-6 sm:p-8 rounded-3xl bg-[#091824] border border-white/15 space-y-4'>
            <h4 className='font-serif text-2xl text-white font-normal flex items-center gap-2'>
              <Car className='w-5 h-5 text-[#E5A93C]' /> Transport Gateways
            </h4>
            <div className='space-y-3'>
              {TRANSPORT_GATEWAYS.map((g, i) => (
                <div key={i} className='p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs space-y-1'>
                  <div className='font-semibold text-white'>{g.name} — <span className='text-[#F3BA54] font-mono'>{g.bestFor}</span></div>
                  <p className='text-gray-400 font-light'>{g.modes.join(' • ')}</p>
                </div>
              ))}
            </div>
          </div>

          <div className='p-6 sm:p-8 rounded-3xl bg-[#091824] border border-white/15 space-y-4'>
            <h4 className='font-serif text-2xl text-white font-normal flex items-center gap-2'>
              <Phone className='w-5 h-5 text-[#C2593F]' /> Emergency Contacts
            </h4>
            <div className='space-y-3'>
              {EMERGENCY_CONTACTS.map((e, i) => (
                <div key={i} className='p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs flex items-center justify-between'>
                  <span className='text-gray-300'>{e.district}</span>
                  <span className='font-mono font-bold text-[#E5A93C]'>{e.contact}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};