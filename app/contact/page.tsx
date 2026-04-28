import Navbar from '@/components/Navbar'
import ContactHeader from '@/components/ContactHeader'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function ContactPage() {
  return (
    <main className="bg-[#f6e9dd]">
      <Navbar />
      <ContactHeader />
      <ContactForm />
      <div className="hidden md:block"><Footer /></div>
      <div className="md:hidden"><Footer mobile /></div>
    </main>
  )
}
