import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Politique de confidentialité | Ouest Menuiserie Générale',
  robots: { index: false },
}

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="bg-[#f6e9dd]">
      <Navbar />
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24 font-[var(--font-work-sans)]">
        <h1 className="text-3xl md:text-4xl font-semibold mb-12">Politique de confidentialité</h1>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">1. Responsable du traitement</h2>
          <p className="leading-relaxed">
            Ouest Menuiserie Générale (OMG) — 165 Route de Rennes, 44700 Orvault<br />
            Contact : romain@menuiserie-omg.fr
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">2. Données collectées</h2>
          <p className="leading-relaxed">
            Le site collecte uniquement les données que vous saisissez dans le formulaire de contact : nom, adresse email, message.<br />
            Aucune donnée n&apos;est collectée automatiquement (pas de cookies de tracking, pas d&apos;analytics).
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">3. Finalité du traitement</h2>
          <p className="leading-relaxed">
            Les données collectées sont utilisées exclusivement pour répondre à vos demandes de contact ou de devis.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">4. Base légale</h2>
          <p className="leading-relaxed">
            Le traitement repose sur l&apos;intérêt légitime de l&apos;entreprise (article 6.1.f du RGPD) : répondre aux demandes entrantes.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">5. Durée de conservation</h2>
          <p className="leading-relaxed">
            Les données sont conservées le temps nécessaire au traitement de votre demande, et au maximum 3 ans à compter du dernier contact.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">6. Destinataires</h2>
          <p className="leading-relaxed">
            Les données ne sont ni vendues, ni cédées à des tiers. Elles sont transmises à Resend (service d&apos;envoi d&apos;email) dans le seul but d&apos;acheminer votre message.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">7. Vos droits</h2>
          <p className="leading-relaxed">
            Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement et d&apos;opposition. Pour exercer ces droits : romain@menuiserie-omg.fr
          </p>
          <p className="mt-3 leading-relaxed">
            Vous pouvez également introduire une réclamation auprès de la CNIL : https://www.cnil.fr
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">8. Cookies</h2>
          <p className="leading-relaxed">
            Ce site n&apos;utilise pas de cookies de tracking ou d&apos;analyse. Aucun cookie tiers n&apos;est déposé sur votre appareil.
          </p>
        </section>
      </div>
      <Footer />
    </main>
  )
}
