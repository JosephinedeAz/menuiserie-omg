'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity'

interface Projet {
  titre: string
  descriptionCourte: string
  images: any[]
  slug: { current: string }
  categorie: string
}

type Categorie = 'menuiserie-interieure' | 'menuiserie-exterieure' | 'ameublement'

type ProjetsParCategorie = {
  'menuiserie-interieure': Projet[]
  'menuiserie-exterieure': Projet[]
  'ameublement': Projet[]
}

interface Props {
  projetsParCategorie: ProjetsParCategorie
}

const onglets: { id: Categorie; label: string }[] = [
  { id: 'menuiserie-interieure', label: 'Menuiserie intérieure' },
  { id: 'menuiserie-exterieure', label: 'Menuiserie extérieure' },
  { id: 'ameublement', label: 'Ameublement' },
]

export default function SectionRealisationsGalerie({ projetsParCategorie }: Props) {
  const [actif, setActif] = useState<Categorie>('menuiserie-interieure')
  const projets = projetsParCategorie[actif]

  return (
    <section className="flex flex-col gap-[40px] bg-[#f6e9dd] border-2 border-[#e5bc89] rounded-[30px] px-[12px] pt-[12px] pb-[16px] md:bg-transparent md:border-0 md:rounded-none md:pt-[40px] md:pb-[40px] md:px-[60px]">
      {/* Onglets — mobile : pills scrollables / desktop : onglets texte */}
      <div className="md:hidden overflow-x-auto flex gap-[3px] mx-auto">
        {onglets.map((onglet) => {
          const isActif = actif === onglet.id
          return (
            <button
              key={onglet.id}
              onClick={() => setActif(onglet.id)}
              className={`rounded-[30px] p-[10px] text-[12px] leading-[13px] text-[#1d1d1d] shrink-0 transition-all duration-200 ${
                isActif
                  ? 'bg-[#eb7a59] border border-[#eb7a59]'
                  : 'border border-[#eb7a59]'
              }`}
            >
              {onglet.label}
            </button>
          )
        })}
      </div>

      <div className="hidden md:flex border-4 border-[#eb7a59] rounded-[30px] items-center justify-between px-[40px] py-[20px]">
        {onglets.map((onglet) => {
          const isActif = actif === onglet.id
          return (
            <button
              key={onglet.id}
              onClick={() => setActif(onglet.id)}
              className={`text-[25px] leading-[30px] transition-all duration-200 ${
                isActif
                  ? 'font-semibold underline'
                  : 'font-normal cursor-pointer'
              }`}
            >
              {onglet.label}
            </button>
          )
        })}
      </div>

      {/* Grille */}
      {projets.length === 0 ? (
        <p className="text-black text-[20px]">Aucun projet dans cette catégorie.</p>
      ) : (
        <>
          {/* Mobile : cartes empilées */}
          <div className="md:hidden flex flex-col gap-[12px] max-w-[300px] w-full mx-auto">
            {projets.map((projet) => {
              const imageSrc = projet.images?.[0]
                ? urlFor(projet.images[0]).url()
                : null

              return (
                <Link key={projet.slug.current} href={`/realisations/${projet.slug.current}`} className="flex flex-col w-full overflow-hidden">
                  <div className="relative h-[254px] w-full">
                    {imageSrc ? (
                      <Image
                        src={imageSrc}
                        alt={projet.titre}
                        fill
                        className="object-cover w-full h-full"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-[#d6c4ad]" />
                    )}
                  </div>
                  <div className="bg-[#e5bc89] flex items-end justify-end gap-[8px] pb-[12px] pl-[4px] pr-[8px] pt-[4px]">
                    <div className="flex-1 flex flex-col">
                      <p
                        className="text-[12px] leading-[13px] text-center text-[#1d1d1d] font-bold"
                        style={{ fontFamily: 'Work Sans' }}
                      >
                        {projet.titre}
                      </p>
                      <p
                        className="text-[12px] leading-[13px] text-center text-[#1d1d1d] font-normal"
                        style={{ fontFamily: 'Work Sans' }}
                      >
                        {projet.descriptionCourte}
                      </p>
                    </div>
                    <span
                      className="border border-[#6a786a] rounded-[10px] px-[8px] py-[4px] text-[12px] leading-[13px] tracking-[0.12px] text-[#1d1d1d] font-medium shrink-0"
                      style={{ fontFamily: 'Work Sans' }}
                    >
                      Voir le projet
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Desktop : grille avec overlay hover */}
          <div className="hidden md:flex gap-[30px]">
            {projets.map((projet) => {
              const imageSrc = projet.images?.[0]
                ? urlFor(projet.images[0]).url()
                : null

              return (
                <Link
                  key={projet.slug.current}
                  href={`/realisations/${projet.slug.current}`}
                  className="group relative flex-1 h-[447px] overflow-hidden"
                >
                  {imageSrc ? (
                    <Image
                      src={imageSrc}
                      alt={projet.titre}
                      fill
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-[#d6c4ad]" />
                  )}

                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-[20px] px-[20px] text-center">
                    <div className="flex flex-col gap-[10px]">
                      <p className="text-[32px] leading-[38px] tracking-[-0.64px] text-[#f1f1f1]">
                        {projet.titre}
                      </p>
                      <p className="text-[25px] leading-[36px] text-[#f1f1f1]">
                        {projet.descriptionCourte}
                      </p>
                    </div>
                    <span className="btn-tertiary text-[#f1f1f1] border-[#6a786a]">
                      Voir le projet
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </>
      )}
    </section>
  )
}
