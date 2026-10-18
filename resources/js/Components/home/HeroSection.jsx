import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { MarqueeTicker } from './MarqueeTicker';
import { CONTACT_INFO } from '@/data/navigation';

export const HeroSection = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.2]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[calc(100svh-56px)] md:min-h-[calc(100vh-56px)] flex flex-col justify-between overflow-hidden bg-[#0E0E0F]"
    >
      {/* Ambient background glow matching site theme */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[540px] bg-[#FF5A2C]/[0.05] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[460px] h-[460px] bg-white/[0.03] rounded-full blur-[160px] pointer-events-none" />

      {/* Main Hero Container filling the upper/middle viewport space */}
      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="mx-auto max-w-[1600px] w-full px-4 sm:px-6 md:px-10 pt-6 sm:pt-10 md:pt-12 pb-4 flex-1 flex flex-col justify-center"
      >
        {/* Mobile: Large ZAI + TOURS & STAYS at top */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="hidden max-lg:flex flex-col items-center justify-center mb-8"
        >
          <div className="flex items-baseline font-black tracking-[-0.05em] leading-none text-white select-none drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)]">
            <span className="text-[110px] sm:text-[150px] md:text-[180px] font-black uppercase text-[#F5F1EB]">
              ZAI
            </span>
            <span className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-[#FF5A2C] ml-1.5 sm:ml-2.5 -translate-y-2 sm:-translate-y-4 md:-translate-y-5 inline-block shadow-lg shadow-[#FF5A2C]/60" />
          </div>
          <div className="font-black text-[46px] sm:text-[60px] md:text-[72px] tracking-[-0.04em] leading-[0.88] text-white uppercase select-none mt-2">
            TOURS &amp; STAYS
          </div>
        </motion.div>

        {/* Main Grid: Left Staggered Visual Cards with Solid Bold ZAI / Right Content */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 sm:gap-10 lg:gap-16 items-center my-auto">

          {/* Left Column: 3 Staggered Vertical Cards with Solid Bold "ZAI" Typography */}
          <div className="relative flex items-center justify-center py-4 sm:py-6 order-2 lg:order-1 select-none w-full">
            {/* Background ambient radial glow directly behind the card cluster */}
            <div className="absolute w-[320px] sm:w-[460px] h-[320px] sm:h-[460px] bg-gradient-to-tr from-[#FF5A2C]/12 via-white/[0.03] to-transparent rounded-full blur-[110px] pointer-events-none" />

            {/* Container for the 3 staggered cards */}
            <div className="relative w-full max-w-[540px] h-[340px] sm:h-[420px] md:h-[460px] flex items-center justify-center">

              {/* Card 1: Leftmost Card (Top-Aligned / Highest in Cascade) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="absolute top-0 left-0 w-[140px] sm:w-[185px] md:w-[210px] h-[230px] sm:h-[300px] md:h-[340px] rounded-[22px] sm:rounded-[28px] bg-gradient-to-br from-[#241a15]/95 via-[#161210]/90 to-[#0b0908]/98 border border-[#FF5A2C]/25 p-3.5 sm:p-5 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.15)] backdrop-blur-md transition-all z-0 overflow-hidden group"
              >
                {/* Warm sunset amber highlight */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-[#FF5A2C]/15 rounded-full blur-2xl pointer-events-none" />

                {/* Card Header */}
                <div className="relative flex items-center justify-between z-10">
                  <span className="text-[9px] sm:text-[11px] font-bold tracking-[0.2em] text-[#FF5A2C] uppercase">
                    01 / TRANSPORT
                  </span>
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#FF5A2C] animate-pulse" />
                </div>

                {/* Card Body Abstract Vector Graphics (Sunset Safari & Mobility radar) */}
                <div className="relative my-auto py-2 flex flex-col items-center justify-center opacity-60 z-10">
                  <svg viewBox="0 0 120 120" className="w-14 sm:w-20 md:w-24 h-14 sm:h-20 md:h-24 stroke-white/35 fill-none">
                    <circle cx="60" cy="60" r="48" strokeDasharray="3 3" strokeWidth="1" />
                    <circle cx="60" cy="60" r="30" strokeWidth="1" stroke="#FF5A2C" strokeOpacity="0.5" />
                    <circle cx="60" cy="60" r="6" fill="#FF5A2C" />
                    <path d="M60 12 L60 108 M12 60 L108 60" strokeWidth="0.75" strokeOpacity="0.3" />
                    <path d="M22 40 Q 60 85, 98 42" stroke="#FF5A2C" strokeWidth="2" strokeDasharray="4 4" />
                  </svg>
                </div>

                {/* Card Footer Info */}
                <div className="relative border-t border-white/[0.08] pt-2.5 sm:pt-3 z-10">
                  <div className="text-[10px] sm:text-[12px] font-bold text-white/95 leading-tight">
                    <span>PRIVATE </span>
                    <span className="text-[#FF5A2C]">TRANSPORT</span>
                  </div>
                  <div className="text-[8px] sm:text-[9.5px] text-white/45 uppercase tracking-wider mt-0.5">
                    JKIA • SGR • Coastal
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Middle Card (Staggered Down / Mid-Cascade / Overlapping Card 1) */}
              <motion.div
                initial={{ opacity: 0, y: 45 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.12, ease: [0.2, 0.8, 0.2, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="absolute top-[40px] sm:top-[52px] md:top-[60px] left-[90px] sm:left-[130px] md:left-[150px] w-[140px] sm:w-[185px] md:w-[210px] h-[230px] sm:h-[300px] md:h-[340px] rounded-[22px] sm:rounded-[28px] bg-gradient-to-br from-[#23242b]/95 via-[#16171d]/90 to-[#0c0d11]/98 border border-white/20 p-3.5 sm:p-5 flex flex-col justify-between shadow-[0_25px_60px_rgba(0,0,0,0.9),inset_0_1px_2px_rgba(255,255,255,0.2)] backdrop-blur-xl transition-all z-10 overflow-hidden group"
              >
                {/* Warm interior golden glow */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-white/[0.08] rounded-full blur-2xl pointer-events-none" />

                {/* Card Header */}
                <div className="relative flex items-center justify-between z-10">
                  <span className="text-[9px] sm:text-[11px] font-bold tracking-[0.2em] text-[#FF5A2C] uppercase">
                    02 / STAYS
                  </span>
                  <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-white/10 border border-white/20 text-white text-[8px] sm:text-[9px] font-bold">
                    <span>LIVE</span>
                  </div>
                </div>

                {/* Card Body Abstract Architecture blueprint & living suite lines */}
                <div className="relative my-auto py-1 sm:py-2 flex flex-col items-center justify-center opacity-70 z-10">
                  <div className="w-full h-18 sm:h-24 md:h-26 border border-white/15 rounded-xl p-2 relative overflow-hidden bg-black/30">
                    <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:10px_10px] opacity-20" />
                    <div className="flex justify-between items-start text-[8px] sm:text-[9px] font-mono text-white/60">
                      <span>VILLA 04</span>
                      <span>KILIFI CRK</span>
                    </div>
                    <div className="mt-2 sm:mt-2.5 flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-sm border border-white/40" />
                      <div className="h-1 flex-1 bg-white/15 rounded-full overflow-hidden">
                        <div className="w-3/4 h-full bg-[#FF5A2C]" />
                      </div>
                    </div>
                    <div className="mt-2 sm:mt-2.5 grid grid-cols-3 gap-1 text-center text-[7px] sm:text-[8px] font-mono text-white/50">
                      <div className="p-0.5 rounded bg-white/[0.05]">OCEAN</div>
                      <div className="p-0.5 rounded bg-white/[0.05]">POOL</div>
                      <div className="p-0.5 rounded bg-white/[0.05]">CHEF</div>
                    </div>
                  </div>
                </div>

                {/* Card Footer Info */}
                <div className="relative border-t border-white/[0.1] pt-2.5 sm:pt-3 z-10">
                  <div className="text-[10px] sm:text-[12px] font-bold text-white flex items-center justify-between">
                    <span>Curated Stays</span>
                    <span className="text-[#FF5A2C] text-[9px] sm:text-[10px]">★ 4.98</span>
                  </div>
                  <div className="text-[8px] sm:text-[9.5px] text-white/50 uppercase tracking-wider mt-0.5">
                    Athi River • Coast Stays
                  </div>
                </div>
              </motion.div>

              {/* Card 3: Rightmost Card (Staggered Down Furthest / Lowest in Cascade / Overlapping Card 2) */}
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.24, ease: [0.2, 0.8, 0.2, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="absolute top-[80px] sm:top-[104px] md:top-[120px] left-[180px] sm:left-[260px] md:left-[300px] w-[140px] sm:w-[185px] md:w-[210px] h-[230px] sm:h-[300px] md:h-[340px] rounded-[22px] sm:rounded-[28px] bg-gradient-to-br from-[#181d22]/95 via-[#101418]/90 to-[#080b0e]/98 border border-white/20 p-3.5 sm:p-5 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.15)] backdrop-blur-md transition-all z-20 overflow-hidden group"
              >
                {/* Fresh ambient glow */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-white/[0.06] rounded-full blur-2xl pointer-events-none" />

                {/* Card Header */}
                <div className="relative flex items-center justify-between z-10">
                  <span className="text-[9px] sm:text-[11px] font-bold tracking-[0.2em] text-[#FF5A2C] uppercase">
                    03 / LAUNDRY
                  </span>
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#FF5A2C]" />
                </div>

                {/* Card Body Wave & Water splash dynamic vectors */}
                <div className="relative my-auto py-2 flex flex-col items-center justify-center opacity-60 z-10">
                  <svg viewBox="0 0 120 120" className="w-14 sm:w-20 md:w-24 h-14 sm:h-20 md:h-24 stroke-white/35 fill-none">
                    <path d="M10 40 Q 35 20, 60 40 T 110 40" strokeWidth="1.5" stroke="#FF5A2C" strokeOpacity="0.6" />
                    <path d="M10 60 Q 35 40, 60 60 T 110 60" stroke="#FFFFFF" strokeWidth="1.5" />
                    <path d="M10 80 Q 35 60, 80 80 T 110 80" strokeWidth="1.5" strokeOpacity="0.4" />
                    <circle cx="60" cy="60" r="28" strokeDasharray="3 3" strokeWidth="1" />
                    <circle cx="60" cy="60" r="4" fill="#FF5A2C" />
                  </svg>
                </div>

                {/* Card Footer Info */}
                <div className="relative border-t border-white/[0.08] pt-2.5 sm:pt-3 z-10">
                  <div className="text-[10px] sm:text-[12px] font-bold text-white/95">
                    Crisp Care
                  </div>
                  <div className="text-[8px] sm:text-[9.5px] text-white/45 uppercase tracking-wider mt-0.5">
                    Wash • Fold • Same-Day
                  </div>
                </div>
              </motion.div>

              {/* SOLID BOLD "ZAI" OVERLAY MATCHING "TOURS & STAYS" AND THE REST OF THE SITE */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none z-30 max-lg:hidden"
              >
                <div className="flex items-baseline font-black tracking-[-0.05em] leading-none text-white select-none drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)]">
                  <span className="text-[110px] sm:text-[150px] md:text-[180px] lg:text-[195px] font-black uppercase text-[#F5F1EB]">
                    ZAI
                  </span>
                  <span className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-[#FF5A2C] ml-1.5 sm:ml-2.5 -translate-y-2 sm:-translate-y-4 md:-translate-y-5 inline-block shadow-lg shadow-[#FF5A2C]/60" />
                </div>
              </motion.div>

            </div>
          </div>

          {/* Right Column: Typography, Copy & Action Buttons */}
          <div className="flex flex-col justify-center order-1 lg:order-2 pl-0 lg:pl-4 max-lg:items-center max-lg:text-center">
            {/* Main Headline - hidden on mobile */}
            <h1 className="font-black text-[46px] sm:text-[60px] md:text-[72px] lg:text-[80px] xl:text-[92px] tracking-[-0.04em] leading-[0.88] text-white uppercase select-none max-lg:hidden">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
                className="block"
              >
                TOURS
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.12, ease: [0.2, 0.8, 0.2, 1] }}
                className="block"
              >
                &amp; STAYS
              </motion.span>
            </h1>

            {/* Subtitle / Value Prop */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24, ease: [0.2, 0.8, 0.2, 1] }}
              className="mt-4 sm:mt-6 text-[16px] sm:text-[18px] md:text-[19px] leading-relaxed text-white/75 max-w-[500px] font-normal"
            >
              One call. Three solutions. Transport, stays, laundry — sorted.
            </motion.p>

            {/* Tagline / Uppercase Kicker */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32, ease: [0.2, 0.8, 0.2, 1] }}
              className="mt-3 text-[11px] sm:text-[12px] font-bold tracking-[0.18em] text-white/45 uppercase"
            >
              WE RUN THE ERRANDS. YOU RUN THE TRIP.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
              className="mt-6 sm:mt-8 flex flex-row items-center justify-start gap-3.5 max-lg:w-full max-lg:justify-center"
            >
              {/* Explore Services CTA (Dark border button) */}
              <a
                href="#transport"
                className="h-[46px] sm:h-[50px] px-6 sm:px-7 rounded-md border border-white/20 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/40 text-white font-bold text-[12px] sm:text-[13px] tracking-[0.14em] uppercase inline-flex items-center gap-2.5 transition duration-200 backdrop-blur-sm whitespace-nowrap"
              >
                <span>EXPLORE SERVICES</span>
              </a>

              {/* View Stays CTA (Solid high-contrast button) */}
              <a
                href="#stays"
                className="h-[46px] sm:h-[50px] px-6 sm:px-7 rounded-md bg-[#F5F1EB] text-[#0E0E0F] hover:bg-white font-bold text-[12px] sm:text-[13px] tracking-[0.14em] uppercase inline-flex items-center gap-2.5 transition duration-200 shadow-lg shadow-white/5 whitespace-nowrap"
              >
                <span>VIEW STAYS</span>
              </a>
            </motion.div>
          </div>

        </div>

        {/* Bottom Location & Status Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
          className="mt-auto pt-6 pb-2 border-t border-white/[0.08] grid grid-cols-1 md:grid-cols-3 items-center gap-3 text-[11px] sm:text-[12px] tracking-[0.18em] uppercase font-semibold text-white/60"
        >
          {/* Left: — BASED IN KILIFI */}
          <div className="flex items-center gap-3 max-lg:hidden">
            <span className="w-5 h-5 rounded-full border border-white/25 grid place-items-center text-[9px] font-black text-white/80 shrink-0">
              N
            </span>
            <span className="text-white/80">— BASED IN KILIFI</span>
          </div>

          {/* Center: WHATSAPP 24/7 • */}
          <div className="flex items-center justify-start md:justify-center max-lg:hidden">
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}?text=${encodeURIComponent(
                'Hi Zai Tours & Stays, I would like to make an inquiry.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] hover:border-white/20 transition group"
            >
              <span className="text-white/80 group-hover:text-white transition">WHATSAPP 24/7</span>
              <span className="w-2 h-2 rounded-full bg-[#FF5A2C] animate-pulse" />
            </a>
          </div>

          {/* Right: KILIFI . MOMBASA . LAMU */}
          <div className="flex items-center justify-start md:justify-end gap-2 text-white/50 max-lg:justify-center max-lg:col-span-full">
            <span>KILIFI</span>
            <span className="text-white/30">•</span>
            <span>MOMBASA</span>
            <span className="text-white/30">•</span>
            <span>LAMU</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Running Marquee Ticker - Anchored right at the bottom edge of the screen */}
      <div className="w-full shrink-0">
        <MarqueeTicker />
      </div>
    </section>
  );
};
