'use client'

import { useState } from 'react'
import { PortableText } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/react'

type Props = {
  contenu: PortableTextBlock[]
}

const portableTextComponents = {
  marks: {
    strong: ({ children }: { children: React.ReactNode }) => (
      <strong className="font-bold">{children}</strong>
    ),
  },
}

export default function DetailsTechniques({ contenu }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex gap-[29px] items-start mt-[44px]">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`border rounded-full size-[60px] md:size-[90px] flex items-center justify-center text-[38px] md:text-[50px] leading-none shrink-0 transition-colors duration-200 ${
          isOpen
            ? 'border-[#eb7a59] text-[#eb7a59]'
            : 'border-black text-black'
        }`}
      >
        +
      </button>

      <div className={`flex flex-col gap-[10px] ${!isOpen ? 'cursor-pointer' : ''}`} onClick={!isOpen ? () => setIsOpen(true) : undefined}>
        <h3
          className={`font-bold text-[21px] leading-[25px] tracking-[-0.42px] md:text-[32px] md:leading-[38px] md:tracking-[-0.64px] transition-colors duration-200 ${
            isOpen ? 'text-[#eb7a59]' : 'text-[#1d1d1d]'
          }`}
        >
          Les détails techniques
        </h3>

        {isOpen && (
          <div className="text-[12px] leading-[13px] md:text-[25px] md:leading-[36px]">
            <PortableText value={contenu} components={portableTextComponents} />
          </div>
        )}
      </div>
    </div>
  )
}
