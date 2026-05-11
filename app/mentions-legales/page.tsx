import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Mentions légales | Ouest Menuiserie Générale',
  robots: { index: false },
}

export default function MentionsLegalesPage() {
  return (
    <main className="bg-[#f6e9dd]">
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24 font-[var(--font-work-sans)]">
        <h1 className="text-3xl md:text-4xl font-semibold mb-12">Mentions légales</h1>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Éditeur du site</h2>
          <p className="leading-relaxed">
            Ouest Menuiserie Générale (OMG)<br />
            SASU au capital social variable<br />
            SIRET : 932 998 867 00018<br />
            Immatriculée le 1er octobre 2024<br />
            Siège social : 165 Route de Rennes, 44700 Orvault<br />
            Email : romain@menuiserie-omg.fr
          </p>
          <p className="mt-3 leading-relaxed">
            Directeur de la publication : Romain Glémain
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Hébergeur</h2>
          <p className="leading-relaxed">
            Vercel Inc.<br />
            340 Pine Street, Suite 1601<br />
            San Francisco, CA 94104, États-Unis<br />
            https://vercel.com
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Propriété intellectuelle</h2>
          <p className="leading-relaxed">
            L&apos;ensemble du contenu de ce site (textes, images, visuels) est la propriété exclusive de Ouest Menuiserie Générale ou de ses ayants droit. Toute reproduction, même partielle, est interdite sans autorisation préalable.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Responsabilité</h2>
          <p className="leading-relaxed">
            Ouest Menuiserie Générale s&apos;efforce d&apos;assurer l&apos;exactitude des informations publiées sur ce site. La société ne saurait être tenue responsable des erreurs, omissions ou résultats qui pourraient être obtenus par un mauvais usage de ces informations.
          </p>
        </section>
      </div>
      <Footer />
    </main>
  )
}
