import { motion } from 'motion/react';

/**
 * Route map visual card — currently unused on the Home page,
 * kept available for future use (e.g. a dedicated transport page).
 */
export const RouteMapCard = () => {
  return (
    <div className="relative lg:pt-8">
      {/* Visual Canvas Card */}
      <div className="relative aspect-[4/4.8] lg:aspect-[4/5] rounded-[32px] bg-[#151515] border border-white/[0.07] overflow-hidden">
        {/* Subtle Grid Lines */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        {/* Ambient Glows */}
        <div
          aria-hidden="true"
          className="absolute -top-20 -right-20 w-[380px] h-[380px] rounded-full bg-[#FF5A2C]/30 blur-[80px]"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-20 -left-20 w-[360px] h-[360px] rounded-full bg-[#D9FF66]/20 blur-[90px]"
        />

        {/* SVG Route Visualization */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 400 520"
          aria-hidden="true"
        >
          <path
            d="M 90 110 Q 160 180 140 260 T 220 380 Q 260 420 300 430"
            fill="none"
            stroke="white"
            strokeOpacity="0.15"
            strokeWidth="1"
            strokeDasharray="6 8"
          />
          {/* JKIA Node */}
          <circle cx="90" cy="110" r="18" fill="#0E0E0F" stroke="white" strokeOpacity="0.2" />
          <circle cx="90" cy="110" r="4" fill="#FF5A2C" />

          {/* SGR Node */}
          <circle cx="140" cy="260" r="18" fill="#0E0E0F" stroke="white" strokeOpacity="0.2" />
          <circle cx="140" cy="260" r="4" fill="#D9FF66" />

          {/* Athi River HQ Node */}
          <circle cx="220" cy="380" r="22" fill="#F5F1EB" />
          <text
            x="220"
            y="385"
            textAnchor="middle"
            fontSize="12"
            fontWeight="900"
            fill="#0E0E0F"
          >
            ZAI
          </text>
        </svg>

        {/* Geographic Waypoint Badges */}
        <div className="absolute top-[92px] left-[118px] px-3 py-1 rounded-full bg-[#0E0E0F] border border-white/10 text-[11px] font-bold">
          JKIA • 12km
        </div>
        <div className="absolute top-[242px] left-[170px] px-3 py-1 rounded-full bg-[#0E0E0F] border border-white/10 text-[11px] font-bold">
          SGR Nairobi Terminus
        </div>
        <div className="absolute bottom-[95px] left-[240px] px-3 py-1 rounded-full bg-[#F5F1EB] text-[#0E0E0F] text-[11px] font-bold">
          Athi River HQ
        </div>

        {/* Floating Flight Status Card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="absolute top-6 right-6 w-[210px] rounded-[18px] bg-[#F5F1EB] text-[#0E0E0F] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
        >
          <div className="flex justify-between items-start">
            <div className="w-9 h-9 rounded-full bg-[#0E0E0F] text-[#F5F1EB] grid place-items-center text-[14px]">
              ✈
            </div>
            <span className="text-[10px] px-2 py-1 rounded-full bg-[#0E0E0F]/10 font-bold tracking-wide">
              24/7
            </span>
          </div>
          <div className="mt-3 font-black text-[14px] leading-tight">
            Airport pickup • No queues
          </div>
          <div className="mt-1 text-[11px] opacity-60 leading-snug">
            Flight tracking • 2am landings • Fixed fare
          </div>
          <div className="mt-3 h-[28px] rounded-full bg-[#0E0E0F] text-[#F5F1EB] grid place-items-center text-[11px] font-bold">
            Flight KQ 300 • On time
          </div>
        </motion.div>

        {/* Floating Car Hire Card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-6 left-6 right-6 rounded-[20px] bg-[#1E1E1E]/90 backdrop-blur border border-white/10 p-4 flex items-center gap-4"
        >
          <div className="w-12 h-12 rounded-[14px] bg-[#FF5A2C] grid place-items-center text-white font-black text-[16px]">
            A
          </div>
          <div className="flex-1">
            <div className="text-[12px] font-bold tracking-wide">
              Car Hire • Driver Included
            </div>
            <div className="text-[11px] opacity-60">
              Alphard • Prado • Noah • Knows shortcuts to Amboseli
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-white text-black grid place-items-center font-bold">
            ↗
          </div>
        </motion.div>

        {/* Live Route Pulse */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          className="absolute top-[48%] left-[54%] w-3 h-3 rounded-full bg-[#FF5A2C] shadow-[0_0_0_8px_rgba(255,90,44,0.15)]"
        />
      </div>

      {/* Metrics Row */}
      <div className="mt-4 grid grid-cols-3 gap-3">
        {[
          { k: '500+', v: 'pickups done' },
          { k: '4.9', v: 'Airbnb rating' },
          { k: '15m', v: 'avg response' },
        ].map((metric) => (
          <div
            key={metric.k}
            className="rounded-[16px] bg-white/[0.06] border border-white/[0.06] px-4 py-3"
          >
            <div className="font-black text-[18px] tracking-tight leading-none">
              {metric.k}
            </div>
            <div className="text-[10px] opacity-50 uppercase tracking-widest mt-1">
              {metric.v}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
