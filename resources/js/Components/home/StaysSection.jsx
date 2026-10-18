import { motion } from 'motion/react';
import { CONTACT_INFO } from '@/data/navigation';

export const StaysSection = ({ stays = [] }) => {
  return (
    <section id="stays" className="relative bg-[#F5F1EB] text-[#0E0E0F] py-14 md:py-32">
      <div className="mx-auto max-w-[1600px] px-4 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row gap-5 md:gap-6 md:justify-between md:items-end">
          <div className="flex gap-4 md:gap-6">
            <div className="text-[10px] md:text-[12px] font-bold tracking-widest opacity-40 mt-2 md:mt-3">
              02 / STAYS
            </div>
            <h2 className="font-black tracking-[-0.06em] leading-[0.85] text-[36px] md:text-[84px]">
              STAYS THAT
              <br />
              FEEL LIKE <span className="text-[#FF5A2C]">HOME</span>
            </h2>
          </div>

          <div className="max-w-[420px] text-[13px] md:text-[15px] leading-[1.5] opacity-70">
            Curated Airbnbs. Self check-in, fast WiFi, full kitchens. Perfect for layovers, project stays, or soft landings. Studio: KES 2500, 1 Bedroom: KES 3500. Our Locations: Watamu, Kilifi Town, Eldoret Town, Nairobi. Make inquiries via WhatsApp (Instant reply).
          </div>
        </div>

        {/* Stays Grid */}
        {stays.length === 0 ? (
          <div className="mt-8 md:mt-14 rounded-[20px] md:rounded-[28px] border border-black/10 bg-white/60 p-8 md:p-14 text-center">
            <div className="text-[16px] md:text-[22px] font-black tracking-tight">
              New stays dropping soon
            </div>
            <div className="mt-2 text-[12px] md:text-[14px] opacity-60">
              We're restocking our listings. Message us on WhatsApp for current availability.
            </div>
            <a
              href={CONTACT_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 md:gap-2 h-[34px] md:h-[40px] px-4 md:px-5 rounded-full bg-[#0E0E0F] text-[#F5F1EB] text-[10px] md:text-[12px] font-bold tracking-wide hover:bg-black transition"
            >
              Ask on WhatsApp
              <span className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#FF5A2C] text-white grid place-items-center text-[8px] md:text-[10px]">
                →
              </span>
            </a>
          </div>
        ) : (
          <div className="mt-8 md:mt-14 grid md:grid-cols-2 gap-4 md:gap-5">
            {stays.map((stay, idx) => {
              const thumbnail = stay.image
                ? `/storage/${stay.image}`
                : `/stays/stay-${(idx % 4) + 1}.jpg`;

              return (
                <motion.div
                  key={stay.id ?? stay.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ delay: idx * 0.07 }}
                  whileHover={{ y: -6 }}
                  className="group relative rounded-[20px] md:rounded-[28px] bg-white border border-black/[0.06] p-3 md:p-4 overflow-hidden shadow-sm"
                >
                  {/* Visual Thumbnail Area */}
                  <div className="relative aspect-[1.6/1] rounded-[14px] md:rounded-[20px] overflow-hidden bg-[#0E0E0F]">
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{
                        backgroundImage: `url('${thumbnail}')`,
                      }}
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-[linear-gradient(transparent,rgba(0,0,0,0.55))]"
                    />

                    {/* Top Badges */}
                    <div className="absolute top-2.5 left-2.5 md:top-4 md:left-4 flex gap-1.5 md:gap-2">
                      {stay.is_superhost && (
                        <span className="px-2 py-0.5 md:px-3 md:py-1 rounded-full bg-[#D9FF66] text-[#0E0E0F] text-[9px] md:text-[11px] font-bold tracking-wide">
                          Superhost
                        </span>
                      )}
                      {stay.rating && (
                        <span className="px-2 py-0.5 md:px-3 md:py-1 rounded-full bg-white/90 text-[#0E0E0F] text-[9px] md:text-[11px] font-bold">
                          ★ {stay.rating}
                        </span>
                      )}
                    </div>

                    {/* Bottom Overlay Title Info */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 md:bottom-4 md:left-4 md:right-4 flex justify-between items-end">
                      <div className="text-white">
                        <div className="text-[10px] md:text-[13px] opacity-70 tracking-wide">
                          {stay.bedrooms} • {stay.max_guests} guests
                        </div>
                        <div className="text-[14px] md:text-[18px] font-black tracking-tight leading-none mt-0.5 md:mt-1">
                          {stay.title}
                        </div>
                      </div>
                      <div className="w-7 h-7 md:w-9 md:h-9 rounded-full bg-white text-black grid place-items-center font-bold text-[10px] md:text-[12px]">
                        ↗
                      </div>
                    </div>

                    {/* Geometric Graphic Emblem */}
                    <div
                      aria-hidden="true"
                      className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 w-[52px] h-[52px] md:w-[72px] md:h-[72px] rounded-full border border-white/15 grid place-items-center"
                    >
                      <div className="w-[34px] h-[34px] md:w-[48px] md:h-[48px] rounded-full border border-white/20 grid place-items-center text-white/40 text-[12px] md:text-[16px]">
                        ✦
                      </div>
                    </div>
                  </div>

                  {/* Card Meta & Nightly Rate */}
                  <div className="px-1 md:px-2 pt-3 md:pt-4 pb-1 md:pb-2 flex justify-between items-end">
                    <div>
                      <div className="text-[10px] md:text-[12px] opacity-50 tracking-wide">{stay.location}</div>
                      <div className="mt-1.5 md:mt-2 flex flex-wrap gap-1 md:gap-2 text-[8px] md:text-[10px] font-bold tracking-wide">
                        {stay.tags?.map((amenity) => (
                          <span
                            key={amenity}
                            className="px-1.5 py-0.5 md:px-2 md:py-1 rounded-full bg-black/[0.06] text-[#0E0E0F]"
                          >
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-[9px] md:text-[11px] uppercase tracking-widest opacity-40 font-bold">
                        From
                      </div>
                      <div className="font-black text-[16px] md:text-[20px] tracking-tight">
                        {stay.currency} {stay.price_per_night?.toLocaleString()}
                        <span className="text-[9px] md:text-[11px] font-bold opacity-40">/night</span>
                      </div>
                      <a
                        href={stay.airbnb_url || CONTACT_INFO.socials.airbnb}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 md:mt-3 inline-flex items-center gap-1.5 md:gap-2 h-[30px] md:h-[36px] px-3 md:px-4 rounded-full bg-[#0E0E0F] text-[#F5F1EB] text-[9px] md:text-[11px] font-bold tracking-wide hover:bg-black transition"
                      >
                        Book on Airbnb
                        <span className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#FF5A2C] text-white grid place-items-center text-[8px] md:text-[10px]">
                          →
                        </span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Footer Note */}
        <div className="mt-6 md:mt-10 flex flex-col md:flex-row flex-wrap gap-3 md:gap-4 items-start md:items-center md:justify-between">
          <div className="text-[10px] md:text-[12px] tracking-wide opacity-60 max-w-[600px]">
            All listings are Airbnb Superhost track, verified by Zai team. Instant book • Self
            check-in • M-Pesa accepted • Invoice available.
          </div>
        </div>
      </div>
    </section>
  );
};
