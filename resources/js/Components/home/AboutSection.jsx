export const AboutSection = () => {
  return (
    <section id="about" className="relative bg-[#F5F1EB] text-[#0E0E0F] py-20 md:py-32 border-t border-black/5">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10 grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
        {/* Left Column: Founder Quote & Key Stats */}
        <div>
          <div className="text-[10px] md:text-[12px] font-bold tracking-widest opacity-40">
            04 / ABOUT
          </div>

          <blockquote className="mt-5 md:mt-6 font-black tracking-[-0.05em] leading-[0.9] text-[30px] md:text-[64px]">
            "Nobody should feel lost on a vacation tour.{' '}
            <span className="text-[#FF5A2C]">
              We are here for you.
            </span>
            "
          </blockquote>

          <div className="mt-10 md:mt-12 grid grid-cols-3 gap-3 md:gap-4 max-w-[560px]">
            {[
              { n: '2022', l: 'Founded in Kilifi' },
              { n: '6', l: 'Curated stays' },
              { n: '24/7', l: 'On-call driver' },
            ].map((stat) => (
              <div
                key={stat.n}
                className="rounded-[16px] md:rounded-[18px] bg-white border border-black/5 p-3 md:p-4 shadow-sm"
              >
                <div className="font-black text-[19px] md:text-[22px] tracking-tight leading-none">
                  {stat.n}
                </div>
                <div className="text-[9px] md:text-[11px] leading-tight opacity-60 mt-1">
                  {stat.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Narrative & Values */}
        <div className="lg:pt-8 md:lg:pt-10">
          <div className="rounded-[24px] md:rounded-[28px] bg-white border border-black/5 p-6 md:p-8 md:md:p-10 shadow-sm">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#0E0E0F] text-[#F5F1EB] grid place-items-center font-black text-[18px] md:text-[24px]">
              R
            </div>

            <h3 className="mt-5 md:mt-6 font-black text-[19px] md:text-[22px] tracking-tight leading-tight">
              Rashid is a Licensed Tour Driver & Airbnb Superhost.
            </h3>

            <p className="mt-3 md:mt-4 text-[13px] md:text-[15px] leading-[1.6] opacity-70">
              Based in Kilifi, Coastal Kenya. Rashid knows every shortcut from Moi International
              Airport to Diani, Malindi, and Watamu. Flight tracked, fixed fare, no haggling.
            </p>

            <p className="mt-3 md:mt-4 text-[13px] md:text-[15px] leading-[1.6] opacity-70">
              Zai Tours & Stays delivers reliable airport pickups, curated coastal Airbnbs,
              and hotel-grade laundry — all handled by one tight, competent crew.
            </p>

            {/* Guiding Principles */}
            <div className="mt-6 md:mt-8 grid grid-cols-1 gap-2.5 md:gap-3">
              {[
                { k: 'Punctual', v: 'We track flights & SGR times. Early is on time.' },
                { k: 'Local', v: 'Kilifi born. We know shortcuts, not just highways.' },
                { k: 'Clean', v: 'Stays cleaned by us, laundry pressed by us. Same standard.' },
              ].map((pillar) => (
                <div
                  key={pillar.k}
                  className="flex gap-2.5 md:gap-3 rounded-[12px] md:rounded-[14px] bg-[#F5F1EB] p-3 md:p-4"
                >
                  <span className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-[#0E0E0F] text-white grid place-items-center text-[9px] md:text-[10px] font-bold shrink-0">
                    {pillar.k[0]}
                  </span>
                  <div>
                    <span className="font-black text-[11px] md:text-[13px]">{pillar.k} — </span>
                    <span className="text-[11px] md:text-[13px] opacity-70">{pillar.v}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Badges */}
            <div className="mt-6 md:mt-8 flex flex-wrap gap-1.5 md:gap-2">
              <span className="px-2.5 py-1 md:px-3 md:py-1.5 rounded-full bg-[#0E0E0F] text-[#F5F1EB] text-[9px] md:text-[11px] font-bold tracking-wide">
                M-Pesa Accepted
              </span>
              <span className="px-2.5 py-1 md:px-3 md:py-1.5 rounded-full bg-white border border-black/10 text-[9px] md:text-[11px] font-bold tracking-wide">
                Airbnb Superhost
              </span>
              <span className="px-2.5 py-1 md:px-3 md:py-1.5 rounded-full bg-white border border-black/10 text-[9px] md:text-[11px] font-bold tracking-wide">
                Licensed Tour Driver
              </span>
            </div>
          </div>

          {/* Real Human Contact Guarantee */}
          <div className="mt-3 md:mt-4 rounded-[18px] md:rounded-[20px] bg-[#0E0E0F] text-[#F5F1EB] p-5 md:p-6 flex items-center gap-3 md:gap-4">
            <div className="flex -space-x-1.5 md:-space-x-2">
              <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#2E3A2F] border-2 border-[#0E0E0F] grid place-items-center text-[9px] md:text-[10px] font-bold">
                RK
              </div>
              <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#FF5A2C] border-2 border-[#0E0E0F] grid place-items-center text-[9px] md:text-[10px] font-bold">
                ZT
              </div>
            </div>
            <div className="text-[10px] md:text-[12px] leading-tight">
              <div className="font-bold">You talk to a human in 1 call.</div>
              <div className="opacity-60">No bot, no queue. Rashid or driver on line.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
