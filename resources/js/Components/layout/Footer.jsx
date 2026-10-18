import { CONTACT_INFO } from '@/data/navigation';

export const Footer = () => {
  const phoneNumber = '254729115021';
  const displayPhoneNumber = '+254 729 115 021';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <footer id="contact" className="relative bg-[#0E0E0F] text-[#F5F1EB] pt-16 md:pt-20 pb-8 md:pb-10">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div>
          {/* Top Section: Header & Cards */}
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#D9FF66] text-[#0E0E0F] text-[9px] md:text-[11px] font-bold tracking-widest uppercase">
              Move. Stay. Fresh. • Kilifi HQ
            </div>

            <h2 className="mt-5 md:mt-6 font-black tracking-[-0.06em] leading-[0.85] text-[40px] md:text-[84px]">
              BOOK IN
              <br />
              <span className="text-[#FF5A2C]">ONE CALL</span>
            </h2>

            <div className="mt-6 md:mt-8 grid md:grid-cols-2 gap-5 md:gap-6">
              {/* Physical Location Card */}
              <div className="rounded-[20px] md:rounded-[24px] bg-[#F5F1EB] text-[#0E0E0F] p-5 md:p-6">
                <div className="text-[9px] md:text-[11px] tracking-widest uppercase opacity-50 font-bold">
                  Location
                </div>
                <div className="mt-2 font-black text-[14px] md:text-[16px] leading-tight">
                  Kilifi, Coastal Kenya
                </div>
                <div className="mt-1 text-[10px] md:text-[12px] opacity-60 leading-snug">
                  Serving Mombasa • Diani • Malindi • Watamu • Kilifi • Mtwapa •
                  Mariakani • Ukunda
                </div>

                <div className="mt-3 md:mt-4 h-[60px] md:h-[72px] rounded-[12px] md:rounded-[14px] bg-[#0E0E0F]/5 border border-black/5 grid place-items-center text-[9px] md:text-[11px] font-bold tracking-wide">
                  MBA → [SGR] → ZAI HQ • Fixed fare map
                </div>
              </div>

              {/* WhatsApp & Call Direct Box */}
              <div className="rounded-[20px] md:rounded-[24px] bg-[#151515] border border-white/[0.07] p-5 md:p-6">
                <div className="text-[9px] md:text-[11px] tracking-widest uppercase opacity-50 font-bold">
                  Call / WhatsApp
                </div>
                <div className="mt-2 font-black text-[19px] md:text-[22px] tracking-tight">
                  {displayPhoneNumber}
                </div>
                <div className="mt-1 text-[11px] md:text-[13px] opacity-60">
                  Response under 15min • 24/7 MBA
                </div>

                <div className="mt-4 md:mt-5 flex gap-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-[40px] md:h-[44px] px-4 md:px-5 rounded-full bg-[#D9FF66] text-[#0E0E0F] font-bold text-[11px] md:text-[13px] inline-flex items-center gap-2 hover:bg-[#e4ff85] transition"
                  >
                    <span>WhatsApp Us</span>
                    <span>↗</span>
                  </a>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="h-[40px] md:h-[44px] px-4 md:px-5 rounded-full border border-white/15 bg-white/[0.04] font-bold text-[11px] md:text-[13px] inline-flex items-center hover:bg-white/[0.08] transition"
                  >
                    Email
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 md:mt-10 flex gap-5 md:gap-6 text-[9px] md:text-[11px] tracking-widest uppercase font-bold opacity-40">
              <span>© ZAI TOURS & STAYS 2026</span>
              <span className="hidden md:inline">• Kilifi • Licensed • Insured</span>
            </div>
          </div>
        </div>

        {/* Global Footer Sub-bar */}
        <div className="mt-12 md:mt-16 border-t border-white/10 pt-6 md:pt-8 flex flex-wrap justify-between gap-3 md:gap-4 text-[9px] md:text-[11px] tracking-wide">
          <div className="flex gap-4 md:gap-6 opacity-50">
            <span>Move. Stay. Fresh.</span>
            <span>Built in Kilifi • 2026</span>
          </div>

          <div className="flex gap-4 md:gap-6 opacity-70">
            <a
              href={CONTACT_INFO.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100 underline decoration-white/20 underline-offset-4"
            >
              Instagram
            </a>
            <a
              href={CONTACT_INFO.socials.airbnb}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100 underline decoration-white/20 underline-offset-4"
            >
              Airbnb
            </a>
            <a
              href={CONTACT_INFO.socials.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100 underline decoration-white/20 underline-offset-4"
            >
              Google Maps
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
