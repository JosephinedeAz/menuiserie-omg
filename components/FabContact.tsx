'use client'

import Link from "next/link";
import { useMenu } from "@/context/MenuContext";

export default function FabContact() {
  const { isMenuOpen } = useMenu()
  if (isMenuOpen) return null
  return <Link href="/contact" className="btn-fab">Contactez-nous</Link>;
}
