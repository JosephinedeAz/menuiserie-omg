"use client";

import { useEffect, useRef, useState } from "react";

interface Testimonial {
  auteur: string;
  date: string;
  lieu: string;
  contenu: string;
}

const MOCK_TESTIMONIALS: Testimonial[] = [
  {
    auteur: "Laurent",
    date: "mars 2025",
    lieu: "Nantes",
    contenu: "Très satisfait de ma nouvelle terrasse, excellent devis et délais de chantier plus court que prévu, je recommande vivement",
  },
  {
    auteur: "Marie",
    date: "février 2025",
    lieu: "Saint-Nazaire",
    contenu: "Travail soigné et équipe très professionnelle. Notre cuisine a été entièrement rénovée dans les délais prévus. Parfait.",
  },
];

interface TestimonialCarouselProps {
  testimonials?: Testimonial[];
}

export default function TestimonialCarousel({ testimonials = [] }: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  const data = testimonials.length > 0 ? testimonials : MOCK_TESTIMONIALS;
  const current = data[activeIndex];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const observers: IntersectionObserver[] = [];
    slideRefs.current.forEach((slide, i) => {
      if (!slide) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIndex(i);
        },
        { root: container, threshold: 0.5 }
      );
      observer.observe(slide);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [data.length]);

  function handleDotClick(i: number) {
    setActiveIndex(i);
    slideRefs.current[i]?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }

  return (
    <div className="flex flex-col gap-[20px] md:gap-[40px]">
      {/* Mobile: horizontal scroll carousel */}
      <div className="md:hidden flex flex-col gap-[20px]">
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        >
          {data.map((t, i) => (
            <div
              key={i}
              ref={(el) => { slideRefs.current[i] = el; }}
              className="snap-center shrink-0 w-full flex flex-col gap-[20px]"
            >
              <p className="italic text-[25px] leading-[36px] font-normal text-black w-full">
                &ldquo;{t.contenu}&rdquo;
              </p>
              <p className="text-[18px] leading-[19px] font-normal text-black text-right w-full">
                {t.auteur}, {t.date}, {t.lieu}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: index-based single slide */}
      <div className="hidden md:flex flex-col gap-[49px]">
        <p className="italic text-[50px] text-black tracking-[-2px] leading-[56px]">
          &ldquo;{current.contenu}&rdquo;
        </p>
        <p className="text-[32px] text-black text-right tracking-[-0.64px] leading-[38px]">
          {current.auteur}, {current.date}, {current.lieu}
        </p>
      </div>

      {/* Dots */}
      {data.length > 1 && (
        <div className="flex items-center justify-center gap-2">
          {data.map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              aria-label={`Témoignage ${i + 1}`}
              className={`size-3 rounded-full transition-colors duration-200 ${
                i === activeIndex ? "bg-[#b85a3c]" : "bg-[#b8976d]/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
