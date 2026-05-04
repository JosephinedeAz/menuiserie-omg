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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
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

  const di = "bg-[#fafaf9] border-2 border-[#e5e5e5] rounded-[10px] h-[60px] w-full px-[16px] text-[20px] outline-none focus:border-[#b85a3c] transition-colors" // desktop input
  const mi = "bg-[#fafaf9] border-[1.5px] border-[#e5e5e5] rounded-[10px] h-[48px] w-full px-[14px] text-[16px] outline-none focus:border-[#b85a3c] transition-colors" // mobile input
  const dl = "font-normal text-[25px] leading-[36px] text-[#4a544a]" // desktop label
  const ml = "font-normal text-[16px] leading-[24px] text-[#4a544a]" // mobile label

  return (
    <section className="px-[16px] md:px-[60px] py-[32px] md:py-[60px] flex flex-col items-center">

      {/* ── Desktop ── */}
      <div className="hidden md:flex gap-[100px] items-start justify-center w-full">

        {/* Colonne gauche */}
        <div className="flex-1 flex flex-col items-start">
          <div className="relative w-full aspect-[1024/1536]">
            <Image src="/images/atelier.png" alt="Atelier Ouest Menuiserie Générale" fill className="object-cover" />
          </div>
          <div className="flex flex-col gap-[10px] mt-[16px] font-normal text-[25px] leading-[36px] text-black">
            <p>téléphone: 06 71 23 48 58</p>
            <p>mail: romain.glemain@gmail.com</p>
          </div>
        </div>

        {/* Formulaire desktop */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-[32px] w-[672px]">
          <div className="grid grid-cols-2 gap-[24px]">
            <div className="flex flex-col gap-[12px]">
              <label className={dl}>Prénom</label>
              <input name="prenom" value={form.prenom} onChange={handleChange} className={di} />
            </div>
            <div className="flex flex-col gap-[12px]">
              <label className={dl}>Nom</label>
              <input name="nom" value={form.nom} onChange={handleChange} className={di} />
            </div>
          </div>
          <div className="flex flex-col gap-[12px]">
            <label className={dl}>Adresse e-mail</label>
            <input name="email" type="email" value={form.email} onChange={handleChange} className={di} />
          </div>
          <div className="flex flex-col gap-[12px]">
            <label className={dl}>Téléphone</label>
            <input name="telephone" type="tel" value={form.telephone} onChange={handleChange} className={di} />
          </div>
          <div className="flex flex-col gap-[12px]">
            <label className={dl}>Adresse postale</label>
            <input name="adresse" value={form.adresse} onChange={handleChange} className={di} />
          </div>
          <div className="flex flex-col gap-[12px]">
            <label className={dl}>Budget <span className="text-[#808080]">(optionnel)</span></label>
            <input name="budget" value={form.budget} onChange={handleChange} className={di} />
          </div>
          <div className="flex flex-col gap-[12px]">
            <label className={dl}>Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} className="bg-[#fafaf9] border-2 border-[#e5e5e5] rounded-[10px] h-[180px] w-full px-[16px] py-[12px] text-[20px] outline-none focus:border-[#b85a3c] transition-colors resize-none" />
          </div>
          <button type="submit" disabled={status === 'loading'} className="btn-primary w-full text-[30px] leading-[36px] py-[10px] disabled:opacity-60">
            {status === 'loading' ? 'Envoi en cours...' : 'Réaliser votre projet'}
          </button>
          {status === 'success' && <p className="text-green-700 text-[18px]">Votre message a bien été envoyé, nous vous répondrons rapidement.</p>}
          {status === 'error' && <p className="text-red-600 text-[18px]">Une erreur est survenue, veuillez réessayer ou nous contacter directement.</p>}
        </form>
      </div>

      {/* ── Mobile ── */}
      <form onSubmit={handleSubmit} className="md:hidden flex flex-col gap-[20px] w-full">
        <div className="flex gap-[12px]">
          <div className="flex flex-col gap-[10px] flex-1">
            <label className={ml}>Prénom</label>
            <input name="prenom" value={form.prenom} onChange={handleChange} className={mi} />
          </div>
          <div className="flex flex-col gap-[10px] flex-1">
            <label className={ml}>Nom</label>
            <input name="nom" value={form.nom} onChange={handleChange} className={mi} />
          </div>
        </div>
        <div className="flex flex-col gap-[10px]">
          <label className={ml}>Adresse e-mail</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} className={mi} />
        </div>
        <div className="flex flex-col gap-[10px]">
          <label className={ml}>Téléphone</label>
          <input name="telephone" type="tel" value={form.telephone} onChange={handleChange} className={mi} />
        </div>
        <div className="flex flex-col gap-[10px]">
          <label className={ml}>Adresse postale</label>
          <input name="adresse" value={form.adresse} onChange={handleChange} className={mi} />
        </div>
        <div className="flex flex-col gap-[10px]">
          <label className={ml}>Budget <span className="text-[#808080]">(optionnel)</span></label>
          <input name="budget" value={form.budget} onChange={handleChange} className={mi} />
        </div>
        <div className="flex flex-col gap-[10px]">
          <label className={ml}>Message</label>
          <textarea name="message" value={form.message} onChange={handleChange} className="bg-[#fafaf9] border-[1.5px] border-[#e5e5e5] rounded-[10px] h-[130px] w-full px-[14px] py-[10px] text-[16px] outline-none focus:border-[#b85a3c] transition-colors resize-none" />
        </div>
        <button type="submit" disabled={status === 'loading'} className="btn-primary w-full text-[18px] leading-[24px] py-[14px] disabled:opacity-60">
          {status === 'loading' ? 'Envoi en cours...' : 'Réaliser votre projet'}
        </button>
        {status === 'success' && <p className="text-green-700 text-[16px]">Votre message a bien été envoyé, nous vous répondrons rapidement.</p>}
        {status === 'error' && <p className="text-red-600 text-[16px]">Une erreur est survenue, veuillez réessayer ou nous contacter directement.</p>}
        <div className="flex flex-col gap-[6px] font-normal text-[16px] leading-[24px] text-[#333]">
          <p>téléphone: 06 71 23 48 58</p>
          <p>mail: romain.glemain@gmail.com</p>
        </div>
      </form>

    </section>
  )
}
