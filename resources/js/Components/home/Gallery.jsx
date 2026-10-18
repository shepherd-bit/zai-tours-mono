import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { CONTACT_INFO } from '@/data/navigation';

/**
 * Accepts either a remote URL / root path or a storage-relative file path
 * (e.g. "gallery/abc.jpg" written by the Filament upload).
 */
const toSrc = (image) => {
  if (!image) return null;
  if (/^(?:https?:)?\/\//.test(image) || image.startsWith('/')) return image;
  return `/storage/${image}`;
};

const ARROW_BTN =
  'w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/15 bg-white/[0.03] grid place-items-center text-[14px] md:text-[16px] font-bold transition disabled:opacity-25 disabled:cursor-not-allowed enabled:hover:bg-[#FF5A2C] enabled:hover:border-[#FF5A2C] enabled:hover:text-white';

export const Gallery = ({ galleryImages = [] }) => {
  const trackRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(galleryImages.length > 1);
  const [progress, setProgress] = useState(0);
  const [current, setCurrent] = useState(1);

  const syncState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;

    const max = el.scrollWidth - el.clientWidth;
    const ratio = max > 0 ? el.scrollLeft / max : 0;

    setProgress(Math.min(1, Math.max(0, ratio)));
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < max - 4);

    if (max > 0 && max - el.scrollLeft <= 4) {
      setCurrent(galleryImages.length);
      return;
    }

    const firstCard = el.firstElementChild;
    if (firstCard) {
      const gap = parseFloat(getComputedStyle(el).gap) || 0;
      const step = firstCard.offsetWidth + gap;
      const index = step > 0 ? Math.round(el.scrollLeft / step) + 1 : 1;
      setCurrent(Math.min(galleryImages.length, Math.max(1, index)));
    }
  }, [galleryImages.length]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    syncState();
    el.addEventListener('scroll', syncState, { passive: true });
    window.addEventListener('resize', syncState);
    return () => {
      el.removeEventListener('scroll', syncState);
      window.removeEventListener('resize', syncState);
    };
  }, [syncState]);

  const scrollByDirection = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.round(el.clientWidth * 0.8), behavior: 'smooth' });
  };

  return (
    <section id="gallery" className="relative bg-[#0E0E0F] py-14 md:py-32">
      <div className="mx-auto max-w-[1600px] px-4 md:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row gap-5 md:gap-6 md:justify-between md:items-end">
          <div className="flex gap-4 md:gap-6">
            <div className="text-[10px] md:text-[12px] font-bold tracking-widest opacity-40 mt-2 md:mt-3">
              05 / GALLERY
            </div>
            <h2 className="font-black tracking-[-0.06em] leading-[0.85] text-[36px] md:text-[84px]">
              MOMENTS FROM
              <br />
              THE <span className="text-[#FF5A2C]">COAST</span>
            </h2>
          </div>

          <div className="max-w-[420px] flex flex-col gap-4 md:gap-5">
            <p className="text-[13px] md:text-[15px] leading-[1.5] text-white/60">
              Beach days, marine parks, forest trails and city runs — a look at where our guests
              end up. Tap the arrows or swipe through, then book your own.
            </p>

            <div className="flex items-center justify-between gap-3">
              <span className="lg:hidden h-8 px-3 rounded-full border border-white/15 text-[10px] font-bold tracking-widest grid place-items-center text-white/70">
                SWIPE →
              </span>

              <div className="flex gap-2 md:gap-3 lg:ml-auto">
                <button
                  type="button"
                  onClick={() => scrollByDirection(-1)}
                  disabled={!canPrev}
                  aria-label="Previous gallery images"
                  className={ARROW_BTN}
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => scrollByDirection(1)}
                  disabled={!canNext}
                  aria-label="Next gallery images"
                  className={ARROW_BTN}
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        {galleryImages.length === 0 ? (
          <div className="mt-8 md:mt-14 rounded-[20px] md:rounded-[28px] border border-white/10 bg-white/[0.04] p-8 md:p-14 text-center">
            <div className="text-[16px] md:text-[22px] font-black tracking-tight">
              Gallery loading soon
            </div>
            <div className="mt-2 text-[12px] md:text-[14px] text-white/60">
              Fresh coast photos are on the way. Message us on WhatsApp for a sneak peek.
            </div>
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 md:gap-2 h-[34px] md:h-[40px] px-4 md:px-5 rounded-full bg-[#F5F1EB] text-[#0E0E0F] text-[10px] md:text-[12px] font-bold tracking-wide hover:bg-white transition"
            >
              Ask on WhatsApp
              <span className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#FF5A2C] text-white grid place-items-center text-[8px] md:text-[10px]">
                →
              </span>
            </a>
          </div>
        ) : (
          <>
            {/* Carousel Track — uniform height, each frame takes the image's own aspect ratio */}
            <div
              ref={trackRef}
              className="mt-8 md:mt-14 flex items-start gap-4 md:gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth select-none pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {galleryImages.map((image, idx) => {
                const src = toSrc(image.image);

                return (
                  <motion.figure
                    key={image.id ?? image.site}
                    whileHover={{ y: -6 }}
                    className="group relative shrink-0 snap-start rounded-[20px] md:rounded-[28px] bg-[#151515] border border-white/[0.07] overflow-hidden"
                  >
                    {/* Fallback emblem shown while an image loads or if it fails */}
                    <div aria-hidden="true" className="absolute inset-0 grid place-items-center">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/10 grid place-items-center text-white/25 text-[14px] md:text-[16px]">
                        ✦
                      </div>
                    </div>

                    {src ? (
                      <img
                        src={src}
                        alt={image.site}
                        loading="lazy"
                        draggable={false}
                        onLoad={syncState}
                        onError={(event) => {
                          event.currentTarget.style.opacity = '0';
                        }}
                        className="relative block h-[380px] md:h-[460px] w-auto max-w-none aspect-[auto_4/3] transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="relative h-[380px] md:h-[460px] w-[260px] md:w-[320px]" />
                    )}

                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-[linear-gradient(transparent,rgba(0,0,0,0.65))]"
                    />

                    {/* Slide Index */}
                    <span className="absolute top-3 left-3 md:top-4 md:left-4 h-6 md:h-7 px-2.5 md:px-3 rounded-full bg-black/40 border border-white/15 backdrop-blur text-[9px] md:text-[11px] font-bold tracking-widest grid place-items-center text-white">
                      {String(idx + 1).padStart(2, '0')}
                    </span>

                    {/* Caption */}
                    <figcaption className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4 flex justify-between items-end gap-3">
                      <div className="text-white min-w-0">
                        <div className="text-[10px] md:text-[12px] opacity-70 tracking-wide">
                          {image.location}
                        </div>
                        <div className="mt-1 text-[15px] md:text-[20px] font-black tracking-tight leading-none break-words">
                          {image.site}
                        </div>
                      </div>
                      <div className="shrink-0 w-7 h-7 md:w-9 md:h-9 rounded-full bg-white text-black grid place-items-center font-bold text-[10px] md:text-[12px]">
                        ↗
                      </div>
                    </figcaption>
                  </motion.figure>
                );
              })}
            </div>

            {/* Scroll Progress + Counter */}
            <div className="mt-6 md:mt-8 flex items-center gap-4 md:gap-6">
              <div className="text-[10px] md:text-[12px] font-bold tracking-widest tabular-nums">
                {String(current).padStart(2, '0')}
                <span className="opacity-40"> / {galleryImages.length}</span>
              </div>

              <div className="flex-1 h-[2px] rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full bg-[#FF5A2C] transition-[width] duration-150 ease-out"
                  style={{ width: `${Math.max(6, progress * 100)}%` }}
                />
              </div>

              <div className="hidden sm:block text-[10px] md:text-[12px] font-bold tracking-widest uppercase opacity-50">
                4.9 rating • 40+ trips
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
