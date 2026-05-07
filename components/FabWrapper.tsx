'use client'

import { usePathname } from 'next/navigation'
import FabContact from '@/components/FabContact'

export default function FabWrapper() {
  const pathname = usePathname()
  if (pathname === '/contact') return null
  return <FabContact />
}
