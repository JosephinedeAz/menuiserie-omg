'use client'

import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import CardRealisation from '@/components/CardRealisation'
import { urlFor } from '@/lib/sanity'

interface Projet {
  titre: string
  description: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  imageHero: any
  slug: { current: string }
}

interface SectionServiceRealisationsProps {
  projets: Projet[]
}

export default function SectionServiceRealisations({
  projets,
  className,
}: SectionServiceRealisationsProps & { className?: string }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const handleScroll = () => {
      const index = Math.round(el.scrollLeft / el.offsetWidth)
      setActiveIndex(index)
    }
    el.addEventListener('scroll', handleScroll, { passive: true })
    return () => el.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (index: number) => {
    const el = scrollRef.current
    if (!el) return
    el.scrollTo({ left: index * el.offsetWidth, behavior: 'smooth' })
  }

  if (!projets || projets.length === 0) return null

  return (
    <section className={`flex flex-col gap-[30px] items-center px-[12px] py-[10px] md:px-[60px] ${className ?? ''}`}>
      <p className="font-semibold text-[40px] leading-[48px] tracking-[-1.6px] text-black w-full md:font-medium md:text-[60px] md:leading-[72px] md:tracking-normal">
        Nos plus belles réalisations.
      </p>

      <div
        ref={scrollRef}
        className="w-full overflow-x-auto flex items-stretch snap-x snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: 'none' }}
      >
        <div className="flex items-stretch gap-[70px] px-[2px] py-[4px] min-w-full">
          {projets.map((projet) => (
            <div key={projet.slug.current} className="w-[249px] shrink-0 snap-center md:w-full md:shrink-0 md:flex md:items-stretch">
              <CardRealisation
                titre={projet.titre}
                description={projet.description}
                imageSrc={
                  projet.imageHero
                    ? urlFor(projet.imageHero).url()
                    : '/placeholder.jpg'
                }
                imageAlt={projet.titre}
                slug={projet.slug.current}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-[10px] items-center">
        {projets.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            className={`rounded-full transition-all duration-200 ${
              i === activeIndex
                ? 'bg-[#b85a3c] w-[24px] h-[8px]'
                : 'bg-[#b8976d] w-[8px] h-[8px]'
            }`}
            aria-label={`Réalisation ${i + 1}`}
          />
        ))}
      </div>

      <Link
        href="/realisations"
        className="btn-secondary"
      >
        Voir toutes nos réalisations
      </Link>
    </section>
  )
}
