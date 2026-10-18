import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CONTACT_INFO } from '@/data/navigation';

const TECH_NAV_ITEMS = [
  { num: '01', label: 'Transport', href: '#transport' },
  { num: '02', label: 'Accommodation', href: '#stays' },
  { num: '03', label: 'Laundry', href: '#laundry' },
  { num: '04', label: 'About', href: '#about' },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-[#000000] border-b border-white/[0.08] backdrop-blur-md">
      <div className="mx-auto max-w-[1700px] px-4 sm:px-6 md:px-10 h-[56px] flex items-center justify-between">

        {/* Left: Brand Identity Text */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="flex items-center gap-2 group text-[11px] sm:text-[12px] font-mono font-bold tracking-[0.12em] sm:tracking-[0.16em] uppercase text-white/95 hover:text-white transition"
          >
            <span>ZAI TOURS &amp; STAYS</span>
            <span className="text-white/40 font-normal">—</span>
            <span className="text-white/80">KILIFI, KE</span>
            <span className="hidden sm:inline text-white/40 font-normal">—</span>
            <span className="hidden sm:inline text-white/60">EST. 2022</span>
          </a>
        </div>

        {/* Center-Right: Boxed Monospace Nav Items & CTA */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-3">
          {TECH_NAV_ITEMS.map((item) => (
            <a
              key={item.num}
              href={item.href}
              className="px-3.5 py-1.5 rounded-[5px] border border-white/15 bg-white/[0.02] hover:bg-white/[0.08] hover:border-white/35 text-[11.5px] font-mono text-white/80 hover:text-white transition-all duration-150 flex items-center gap-1.5"
            >
              <span className="text-white/45">[{item.num}]</span>
              <span>{item.label}</span>
            </a>
          ))}

          {/* Far Right: [BOOK NOW] Lime Yellow CTA */}
          <a
            href="#contact"
            className="ml-2 px-4 py-1.5 rounded-[5px] bg-[#D9FF00] text-black font-mono font-black text-[11.5px] tracking-wider uppercase hover:bg-[#c9ef00] transition-all shadow-md shadow-[#D9FF00]/15 inline-flex items-center justify-center"
          >
            [BOOK NOW]
          </a>
        </div>

        {/* Mobile Actions: Compact [BOOK NOW] & Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="#contact"
            className="px-3 py-1 rounded-[5px] bg-[#D9FF00] text-black font-mono font-black text-[10.5px] tracking-wider uppercase"
          >
            [BOOK NOW]
          </a>

          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            className="w-8 h-8 rounded-[5px] border border-white/20 grid place-items-center focus:outline-none bg-white/[0.04]"
          >
            <div className="w-[14px] h-[10px] relative">
              <span
                className={`absolute left-0 w-full h-[1.5px] bg-white transition-all duration-200 ${
                  mobileMenuOpen ? 'top-[4px] rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute left-0 top-[4px] w-full h-[1.5px] bg-white transition-opacity duration-200 ${
                  mobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`absolute left-0 w-full h-[1.5px] bg-white transition-all duration-200 ${
                  mobileMenuOpen ? 'top-[4px] -rotate-45' : 'top-[8px]'
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#000000] border-b border-white/10 px-6 py-6"
          >
            <div className="grid gap-2 font-mono">
              {TECH_NAV_ITEMS.map((item) => (
                <a
                  key={item.num}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="px-4 py-3 rounded-[6px] border border-white/15 bg-white/[0.03] text-[13px] text-white/90 flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="text-white/40">[{item.num}]</span>
                </a>
              ))}
            </div>

            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
                'Hi Zai Tours & Stays, I would like to book.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="mt-4 flex h-[44px] items-center justify-center rounded-[6px] bg-[#D9FF00] text-black font-mono font-black text-[13px] tracking-wider uppercase"
            >
              [BOOK ON WHATSAPP]
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
