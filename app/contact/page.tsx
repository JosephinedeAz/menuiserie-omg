import Navbar from '@/components/Navbar'
import ContactHeader from '@/components/ContactHeader'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function ContactPage() {
  return (
    <main className="bg-[#f6e9dd]">
      <Navbar />
      <div className="mb-[27px] md:mb-[40px]"><ContactHeader /></div>
      <div className="mb-[40px] md:mb-[60px]"><ContactForm /></div>
      <div className="mb-[40px] md:mb-[60px] hidden md:block"><Footer /></div>
      <div className="mb-[40px] md:mb-[60px] md:hidden"><Footer mobile /></div>
    </main>
  )
}
