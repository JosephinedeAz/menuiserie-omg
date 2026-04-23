"use client";

import { useState } from "react";

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

  const data = testimonials.length > 0 ? testimonials : MOCK_TESTIMONIALS;
  const current = data[activeIndex];

  return (
    <div className="flex flex-col gap-[20px] md:gap-[40px]">
      <div className="flex flex-col gap-[20px] md:gap-[49px]">
        {/* Verbatim mobile */}
        <p className="italic text-[33px] text-black tracking-[-1.32px] leading-[37px] md:hidden">
          &ldquo;{current.contenu}&rdquo;
        </p>
        {/* Verbatim desktop */}
        <p className="hidden md:block italic text-[50px] text-black tracking-[-2px] leading-[56px]">
          &ldquo;{current.contenu}&rdquo;
        </p>

        {/* Signature mobile */}
        <p className="text-[21px] text-black text-right md:hidden">
          {current.auteur}, {current.date}, {current.lieu}
        </p>
        {/* Signature desktop */}
        <p className="hidden md:block text-[32px] text-black text-right tracking-[-0.64px] leading-[38px]">
          {current.auteur}, {current.date}, {current.lieu}
        </p>
      </div>

      {/* Dots */}
      {data.length > 1 && (
        <div className="flex items-center justify-center gap-2">
          {data.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
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
