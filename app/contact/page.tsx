import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import ContactHeader from '@/components/ContactHeader'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contact — Devis gratuit',
  description: 'Contactez Ouest Menuiserie Générale pour un devis gratuit. Menuisier artisan à Nantes et alentours.',
  openGraph: {
    title: 'Contact — Ouest Menuiserie Générale',
    description: 'Demandez un devis gratuit à votre menuisier artisan à Nantes.',
    url: '/contact',
  },
}

export default function ContactPage() {
  return (
    <main className="bg-[#f6e9dd]">
      <Navbar />
      <div className="mb-[27px] md:mb-[40px]"><ContactHeader /></div>
      <div className="mb-[40px] md:mb-[60px]"><ContactForm /></div>
      <div className="mt-[130px]"><Footer /></div>
    </main>
  )
}
