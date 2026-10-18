import { useState } from 'react';
import { motion } from 'motion/react';
import { LAUNDRY_SERVICES } from '@/data/laundry';
import { FreshLabVisual } from './FreshLabVisual';

export const LaundrySection = () => {
  const [pickupEnabled, setPickupEnabled] = useState(false);
  const [tapCount, setTapCount] = useState(0);

  const handleSelectDropoff = () => {
    setPickupEnabled(false);
    setTapCount((prev) => prev + 1);
  };

  const handleSelectPickup = () => {
    setPickupEnabled(true);
    setTapCount((prev) => prev + 1);
  };

  return (
    <section id="laundry" className="relative bg-[#0E0E0F] py-14 md:py-32 overflow-hidden">
      {/* Background Neon Halo */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[680px] h-[680px] bg-[#D9FF66]/[0.08] rounded-full blur-[90px] pointer-events-none"
      />

      <div className="mx-auto max-w-[1600px] px-4 md:px-10 relative">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6 md:gap-10 items-start">
          {/* Left Service Menu & Toggles */}
          <div>
            <div className="flex gap-4 md:gap-6">
              <div className="text-[10px] md:text-[12px] font-bold tracking-widest opacity-40 mt-2 md:mt-3">
                03 / LAUNDRY
              </div>
              <h2 className="font-black tracking-[-0.06em] leading-[0.85] text-[38px] md:text-[92px]">
                ALWAYS
                <br />
                <span className="text-[#D9FF66]">FRESH</span>
              </h2>
            </div>

            <p className="mt-4 md:mt-6 max-w-[520px] text-[14px] md:text-[18px] leading-[1.4] text-white/60">
              Tourists drop bags. We return them crisp. 24hr turnaround in Athi River &amp; environs.
              Hotel-grade press, eco wash.
            </p>

            {/* Interactive Mode Toggle */}
            <div className="mt-5 md:mt-8 inline-flex items-center gap-2 md:gap-3 rounded-full bg-white/[0.06] border border-white/10 p-1 md:p-1.5">
              <button
                type="button"
                onClick={handleSelectDropoff}
                aria-pressed={!pickupEnabled}
                className={`h-[30px] md:h-[36px] px-3 md:px-5 rounded-full text-[10px] md:text-[12px] font-bold transition ${
                  !pickupEnabled ? 'bg-[#F5F1EB] text-[#0E0E0F]' : 'text-white/60 hover:text-white'
                }`}
              >
                Drop-off {!pickupEnabled ? '• Active' : ''}
              </button>

              <button
                type="button"
                onClick={handleSelectPickup}
                aria-pressed={pickupEnabled}
                className={`h-[30px] md:h-[36px] px-3 md:px-5 rounded-full text-[10px] md:text-[12px] font-bold transition flex items-center gap-1.5 md:gap-2 ${
                  pickupEnabled ? 'bg-[#D9FF66] text-[#0E0E0F]' : 'text-white/60 hover:text-white'
                }`}
              >
                <span>Pickup &amp; Delivery</span>
                <span className="text-[8px] md:text-[10px] px-1 md:px-1.5 py-0.5 rounded bg-black/10">
                  +200 KES {pickupEnabled ? '• Active' : ''}
                </span>
              </button>
            </div>

            {/* Mode helper feedback */}
            <div className="mt-2 md:mt-3 text-[9px] md:text-[11px] font-bold tracking-wide opacity-70 flex items-center gap-1.5 md:gap-2">
              <span>
                {pickupEnabled
                  ? '✓ Pickup enabled — driver collects within 10km (+200 KES)'
                  : '✓ Drop-off mode — bring to Greenpark Gate'}
              </span>
              <span className="px-1.5 py-0.5 md:px-2 rounded-full bg-white/10 text-[8px] md:text-[10px]">
                {tapCount} taps
              </span>
            </div>

            {/* Pricing Cards Grid */}
            <div className="mt-6 md:mt-10 grid sm:grid-cols-2 gap-3 md:gap-4">
              {LAUNDRY_SERVICES.map((service) => (
                <motion.div
                  key={service.title}
                  whileHover={{ scale: 1.02 }}
                  className="group relative rounded-[16px] md:rounded-[22px] bg-[#151515] border border-white/[0.07] p-4 md:p-6 hover:border-white/20 transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/[0.06] border border-white/10 grid place-items-center text-[12px] md:text-[14px]">
                      {service.icon}
                    </div>
                    <span className="text-[9px] md:text-[11px] px-1.5 md:px-2 py-0.5 md:py-1 rounded-full bg-[#D9FF66]/15 text-[#D9FF66] border border-[#D9FF66]/20 font-bold tracking-wide">
                      {service.unit}
                    </span>
                  </div>

                  <div className="mt-2.5 md:mt-4 font-bold tracking-tight leading-tight">
                    {service.title}
                  </div>
                  <div className="mt-1 flex items-baseline gap-1.5 md:gap-2">
                    <span className="text-[20px] md:text-[26px] font-black tracking-tight">{service.price}</span>
                    <span className="text-[10px] md:text-[12px] opacity-50">{service.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quality Standard Badges */}
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-[#2E3A2F] border border-white/10 text-[11px] font-bold tracking-wide">
                ECO DETERGENT • NO BLEACH
              </span>
              <span className="px-4 py-2 rounded-full bg-white/[0.06] border border-white/10 text-[11px] font-bold tracking-wide">
                FOLDING LIKE UNIQLO
              </span>
            </div>
          </div>

          {/* Right Visual Component (Fresh Lab Drum) */}
          <FreshLabVisual pickupEnabled={pickupEnabled} />
        </div>
      </div>
    </section>
  );
};
