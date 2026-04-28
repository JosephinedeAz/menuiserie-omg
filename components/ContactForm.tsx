'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({
    prenom: '', nom: '', email: '', telephone: '',
    adresse: '', budget: '', message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    setStatus('loading')
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nom: `${form.prenom} ${form.nom}`,
        email: form.email,
        telephone: form.telephone,
        message: `Adresse: ${form.adresse}\nBudget: ${form.budget}\n\n${form.message}`,
      }),
    })
    setStatus(res.ok ? 'success' : 'error')
  }

  const inputClass = "bg-[#fafaf9] border-2 border-[#e5e5e5] rounded-[10px] h-[60px] w-full px-[16px] text-[20px] outline-none focus:border-[#b85a3c] transition-colors"
  const labelClass = "font-normal text-[25px] leading-[36px] text-[#4a544a]"

  return (
    <section className="px-[60px] py-[60px] flex flex-col items-center">
      <div className="flex gap-[100px] items-start justify-center w-full">

        {/* Colonne gauche — image + coordonnées */}
        <div className="flex-1 flex flex-col items-start">
          <div className="relative w-full aspect-[1024/1536]">
            <Image
              src="/images/atelier.png"
              alt="Atelier Ouest Menuiserie Générale"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-[10px] mt-[16px] font-normal text-[25px] leading-[36px] text-black">
            <p>téléphone: 06 71 23 48 58</p>
            <p>mail: romain.glemain@gmail.com</p>
          </div>
        </div>

        {/* Colonne droite — formulaire */}
        <div className="flex flex-col gap-[32px] w-[672px]">

          {/* Prénom + Nom */}
          <div className="grid grid-cols-2 gap-[24px]">
            <div className="flex flex-col gap-[12px]">
              <label className={labelClass}>Prénom</label>
              <input name="prenom" value={form.prenom} onChange={handleChange} className={inputClass} />
            </div>
            <div className="flex flex-col gap-[12px]">
              <label className={labelClass}>Nom</label>
              <input name="nom" value={form.nom} onChange={handleChange} className={inputClass} />
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-[12px]">
            <label className={labelClass}>Adresse e-mail</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} className={inputClass} />
          </div>

          {/* Téléphone */}
          <div className="flex flex-col gap-[12px]">
            <label className={labelClass}>Téléphone</label>
            <input name="telephone" type="tel" value={form.telephone} onChange={handleChange} className={inputClass} />
          </div>

          {/* Adresse postale */}
          <div className="flex flex-col gap-[12px]">
            <label className={labelClass}>Adresse postale</label>
            <input name="adresse" value={form.adresse} onChange={handleChange} className={inputClass} />
          </div>

          {/* Budget */}
          <div className="flex flex-col gap-[12px]">
            <label className={labelClass}>
              Budget <span className="text-[#808080]">(optionnel)</span>
            </label>
            <input name="budget" value={form.budget} onChange={handleChange} className={inputClass} />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-[12px]">
            <label className={labelClass}>Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="bg-[#fafaf9] border-2 border-[#e5e5e5] rounded-[10px] h-[180px] w-full px-[16px] py-[12px] text-[20px] outline-none focus:border-[#b85a3c] transition-colors resize-none"
            />
          </div>

          {/* CTA */}
          <button
            onClick={handleSubmit}
            disabled={status === 'loading'}
            className="btn-primary w-full text-[30px] leading-[36px] py-[10px] disabled:opacity-60"
          >
            {status === 'loading' ? 'Envoi en cours...' : status === 'success' ? 'Message envoyé ✓' : 'Réaliser votre projet'}
          </button>

          {status === 'error' && (
            <p className="text-red-600 text-[18px]">Une erreur est survenue, veuillez réessayer.</p>
          )}

        </div>
      </div>
    </section>
  )
}
