'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor } from '@/lib/sanity'

interface Projet {
  titre: string
  description: string
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
    <section className="flex flex-col gap-[40px] px-[12px] py-[40px] md:px-[60px]">
      {/* Onglets */}
      <div className="border-4 border-[#eb7a59] rounded-[30px] flex items-center justify-between px-[20px] py-[20px] md:px-[40px]">
        {onglets.map((onglet) => {
          const isActif = actif === onglet.id
          return (
            <button
              key={onglet.id}
              onClick={() => setActif(onglet.id)}
              className={`text-[14px] leading-[18px] md:text-[25px] md:leading-[30px] transition-all duration-200 ${
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
        <div className="overflow-x-auto flex gap-[20px] md:overflow-x-visible md:gap-[30px]">
          {projets.map((projet) => {
            const imageSrc = projet.images?.[0]
              ? urlFor(projet.images[0]).url()
              : null

            return (
              <div
                key={projet.slug.current}
                className="group relative h-[280px] w-[220px] shrink-0 overflow-hidden md:flex-1 md:h-[447px] md:w-auto md:shrink"
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

                {/* Overlay hover */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-[20px] px-[20px] text-center">
                  <div className="flex flex-col gap-[10px]">
                    <p className="text-[32px] leading-[38px] tracking-[-0.64px] text-[#f1f1f1]">
                      {projet.titre}
                    </p>
                    <p className="text-[25px] leading-[36px] text-[#f1f1f1]">
                      {projet.description}
                    </p>
                  </div>
                  <Link
                    href={`/realisations/${projet.slug.current}`}
                    className="btn-tertiary text-[#f1f1f1] border-[#6a786a]"
                  >
                    Voir le projet
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}
