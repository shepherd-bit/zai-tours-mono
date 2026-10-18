import { motion } from 'motion/react';

export const FreshLabVisual = ({ pickupEnabled }) => {
  return (
    <div className="relative lg:sticky lg:top-[96px]">
      <div className="rounded-[32px] bg-[#F5F1EB] text-[#0E0E0F] p-6 md:p-8 border border-black/5 shadow-md">
        {/* Lab Header */}
        <div className="flex justify-between items-center">
          <div className="text-[12px] font-black tracking-[0.2em] uppercase opacity-60">
            ZAI FRESH LAB • KILIFI
          </div>
          <div className="w-2 h-2 rounded-full bg-[#FF5A2C] animate-pulse" />
        </div>

        {/* Animated Washing Machine Drum Graphic */}
        <div className="mt-6 relative aspect-[1/1.05] rounded-[28px] bg-[#0E0E0F] overflow-hidden border border-black/10 grid place-items-center">
          {/* Washer Image Background */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/washer/washing-machine.jpg')" }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-black/30"
          />

          {/* Rotating Outer Drum Rim */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
            className="relative w-[42%] aspect-square rounded-full border-[10px] border-[#1C1C1C] bg-[#111] shadow-[inset_0_0_40px_rgba(0,0,0,0.8)] grid place-items-center"
          >
            {/* Inner Window */}
            <div className="w-[78%] aspect-square rounded-full border border-white/10 grid place-items-center">
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
                className="text-[28px] text-[#F5F1EB]"
              >
                ◐
              </motion.div>
            </div>

            {/* Perimeter Rivets */}
            <div className="absolute inset-0 rounded-full" aria-hidden="true">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white/20 rounded-full"
                  style={{
                    left: `${50 + 38 * Math.cos((i * 45 * Math.PI) / 180)}%`,
                    top: `${50 + 38 * Math.sin((i * 45 * Math.PI) / 180)}%`,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Floating Rising Wash Bubbles */}
          <motion.div
            animate={{ y: [-10, -60], opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, delay: 0 }}
            className="absolute top-1/2 left-[48%] w-2 h-2 rounded-full bg-[#D9FF66]/70 pointer-events-none"
          />
          <motion.div
            animate={{ y: [-10, -70], opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 3, delay: 0.6 }}
            className="absolute top-1/2 left-[54%] w-1.5 h-1.5 rounded-full bg-white/60 pointer-events-none"
          />
          <motion.div
            animate={{ y: [-10, -50], opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 2.8, delay: 1.1 }}
            className="absolute top-1/2 left-[46%] w-1 h-1 rounded-full bg-[#FF5A2C]/60 pointer-events-none"
          />

          {/* Drum Bottom Status Display */}
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
            <div className="flex gap-2">
              <div className="w-7 h-7 rounded-full bg-[#2A2A2A] border border-white/10" />
              <div className="w-7 h-7 rounded-full bg-[#D9FF66] grid place-items-center text-[10px] font-black text-[#0E0E0F]">
                ●
              </div>
            </div>
            <div className="text-[10px] tracking-widest text-white/40 font-bold">
              24HR • ECO • 40°C
            </div>
          </div>
        </div>

        {/* Turnaround Metrics */}
        <div className="mt-6 grid grid-cols-3 gap-3">
          {[
            { k: '24h', v: 'standard' },
            { k: '6h', v: 'express' },
            { k: '10km', v: 'delivery' },
          ].map((item) => (
            <div
              key={item.k}
              className="rounded-[14px] bg-[#0E0E0F]/5 border border-black/5 px-3 py-3"
            >
              <div className="font-black text-[16px] leading-none">{item.k}</div>
              <div className="text-[10px] uppercase tracking-widest opacity-50 mt-1">
                {item.v}
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Delivery Mode Status Card */}
        <div className="mt-4 rounded-[14px] bg-[#0E0E0F] text-[#F5F1EB] p-4 flex gap-3 items-center">
          <div className="w-10 h-10 rounded-full bg-[#D9FF66] text-black grid place-items-center font-black">
            ✓
          </div>
          <div className="text-[12px] leading-tight">
            <span className="font-bold">Pickup active:</span>{' '}
            {pickupEnabled
              ? 'Driver will collect +200 KES within 10km radius'
              : 'Drop at Greenpark Gate, Watamu • 8am-8pm daily'}
          </div>
        </div>
      </div>
    </div>
  );
};
