export const MarqueeTicker = () => {
  return (
    <div className="relative border-y border-white/[0.06] bg-[#F5F1EB] text-[#0E0E0F] overflow-hidden w-full max-w-[100vw]">
      <div className="flex whitespace-nowrap py-2 sm:py-2.5 animate-[marquee_18s_linear_infinite] w-max select-none">
        {Array.from({ length: 12 }).map((_, idx) => (
          <span
            key={idx}
            className="flex items-center gap-6 px-6 text-[14px] font-black tracking-[0.14em] uppercase shrink-0"
          >
            <span>Transport</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A2C]" />
            <span>Stays</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#0E0E0F]" />
            <span>Laundry</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A2C]" />
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};
