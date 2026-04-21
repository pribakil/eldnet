// Next.js 14 - Pixel Perfect Version (Closer to provided design)
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["300","400","500","600","700"] });

const services = [
  {
    title: "CONSEIL INFORMATIQUE",
    desc: "Audit et Conseil Stratégique - Analyse experte pour aligner vos technologies.",
  },
  {
    title: "SÉCURITÉ INFORMATIQUE",
    desc: "Cybersécurité & Protection proactive contre les menaces.",
  },
  {
    title: "GESTION DE RÉSEAU",
    desc: "Infogérance & supervision temps réel.",
  },
  {
    title: "SUPPORT TECHNIQUE",
    desc: "Assistance et expertise quotidienne.",
  },
  {
    title: "SUPPORT CRITIQUE",
    desc: "Intervention 24/7 pour environnements sensibles.",
  },
  {
    title: "DÉVELOPPEMENT LOGICIEL",
    desc: "Solutions sur mesure adaptées à vos besoins.",
  },
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className={`${poppins.className} text-gray-800`}>

      {/* NAVBAR */}
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow-sm">
        <h1 className="font-bold text-lg">EldNet-Tech</h1>

        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {["Accueil", "À propos", "Services", "Contact"].map((item) => (
            <motion.a key={item} whileHover={{ scale: 1.08 }} className="cursor-pointer">
              {item}
            </motion.a>
          ))}
        </nav>

        {/* CTA */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => setOpen(true)}
          className="hidden md:block bg-blue-700 text-white px-5 py-2 rounded-md text-sm"
        >
          Nous contacter
        </motion.button>

        {/* MOBILE */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>☰</button>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute right-4 top-16 bg-white shadow-md rounded-lg p-4"
            >
              {["Accueil", "À propos", "Services", "Contact"].map((item) => (
                <div key={item} className="py-1 text-sm">{item}</div>
              ))}
            </motion.div>
          )}
        </div>
      </header>

      {/* HERO */}
      <section className="grid md:grid-cols-2 items-center bg-[#0B2A4A] text-white px-10 py-16">
        <div>
          <h2 className="text-4xl font-semibold leading-tight mb-4">
            Propulsez votre croissance avec des solutions IT expertes et sécurisées.
          </h2>
          <p className="text-sm text-gray-300 mb-6">
            Des experts IT dédiés à l'accompagnement et à la croissance de votre activité.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-blue-600 px-6 py-3 rounded-md text-sm"
          >
            EN SAVOIR PLUS
          </motion.button>
        </div>

        <div className="relative h-[320px] rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-[#0B2A4A]/60" />
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-10 py-16 grid md:grid-cols-2 gap-10 bg-gray-50">
        <div>
          <h3 className="text-xl font-semibold mb-4">À PROPOS DE NOUS</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            EldNet-Tech est un partenaire technologique stratégique spécialisé dans la gestion d'infrastructures, la cybersécurité et le développement de solutions sur mesure.
          </p>
          <button className="mt-6 bg-blue-600 text-white px-5 py-2 text-sm rounded-md">
            DÉCOUVRIR PLUS
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            "Expertise éprouvée",
            "Accompagnement sur mesure",
            "Sécurité renforcée",
            "Performance optimisée",
          ].map((item) => (
            <motion.div
              key={item}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-4 rounded-md shadow-sm text-sm"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA BAR */}
      <section className="bg-[#0B2A4A] text-white px-10 py-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">Prêt à transformer votre infrastructure ?</p>
        <button
          onClick={() => setOpen(true)}
          className="border border-white px-6 py-2 rounded-md text-sm mt-4 md:mt-0"
        >
          NOUS CONTACTER
        </button>
      </section>

      {/* SERVICES */}
      <section className="px-10 py-16">
        <h3 className="text-center text-xl font-semibold mb-10">NOS SERVICES</h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="bg-white rounded-md shadow-sm overflow-hidden"
            >
              <div className="h-40 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475')] bg-cover bg-center" />
              <div className="p-4">
                <h4 className="text-sm font-semibold mb-2">{s.title}</h4>
                <p className="text-xs text-gray-600">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white p-6 rounded-md w-[90%] md:w-[400px]"
          >
            <h3 className="font-semibold mb-4">Contact</h3>
            <input className="w-full border p-2 mb-3 text-sm" placeholder="Nom" />
            <input className="w-full border p-2 mb-3 text-sm" placeholder="Email" />
            <textarea className="w-full border p-2 mb-3 text-sm" placeholder="Message" />
            <div className="flex justify-end gap-2 text-sm">
              <button onClick={() => setOpen(false)}>Annuler</button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Envoyer</button>
            </div>
          </motion.div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="text-center text-xs text-gray-500 py-6 bg-gray-100">
        © 2026 EldNet-Tech
      </footer>
    </main>
  );
}
