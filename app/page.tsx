// Next.js 14 - Pixel Perfect Version (Closer to provided design)
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";
import Image from "next/image";
import useScrollToTop from "@/hooks/use_scroll_to_top";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

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
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const { setSchouldScrollToTop } = useScrollToTop();

  const handleMenuClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    link: string,
  ) => {
    setActiveSection(link);
    if (link === "contact") {
      e.preventDefault();
      setOpen(true);
    } else {
      if (link === "home") {
        e.preventDefault();
        setSchouldScrollToTop(true);
      }
      setOpen(false);
    }

    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className={`${poppins.className} text-gray-800`}>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 bg-white shadow-xl">
        <div className="flex items-center">
          <Image
            src="/images/globe.png"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <h1 className="font-bold text-lg">
            EldNet-<span className="text-blue-600">Tech</span>
          </h1>
        </div>

        <div className="flex gap-8 items-center">
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            {[
              { label: "Accueil", link: "home" },
              { label: "À propos", link: "about" },
              { label: "Services", link: "services" },
            ].map((item) => (
              <motion.a
                key={item.link}
                whileHover={{ scale: 1.08 }}
                className={`${activeSection === item.link ? "border-b-2 border-blue-600" : ""} cursor-pointer hover:text-blue-600 transition-colors duration-200`}
                onClick={(e) => handleMenuClick(e, item.link)}
                href={`#${item.link}`}
              >
                {item.label}
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
          </motion.button>{" "}
        </div>

        {/* MOBILE */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>☰</button>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute right-4 top-16 bg-white shadow-md rounded-lg p-4"
            >
              <nav className="flex flex-col gap-4 text-sm font-medium">
                {[
                  { label: "Accueil", link: "home" },
                  { label: "À propos", link: "about" },
                  { label: "Services", link: "services" },
                  { label: "Contact", link: "contact" },
                ].map((item) => (
                  <motion.a
                    key={item.link}
                    whileHover={{ scale: 1.08 }}
                    className={`${activeSection === item.link ? "border-b-2 border-blue-600" : ""} cursor-pointer hover:text-blue-600 transition-colors duration-200`}
                    onClick={(e) => handleMenuClick(e, item.link)}
                    href={`#${item.link}`}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          )}
        </div>
      </header>

      {/* HERO */}
      <section
        id="hero_section"
        className="grid md:grid-cols-2 items-center bg-[#0B2A4A] text-white px-10 py-16 mt-[4.5rem]"
      >
        <div>
          <h2 className="text-4xl font-semibold leading-tight mb-4">
            Propulsez votre croissance avec des solutions IT expertes et
            sécurisées.
          </h2>
          <p className="text-sm text-gray-300 mb-6">
            Des experts IT dédiés à l'accompagnement et à la croissance de votre
            activité.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            className="bg-blue-600 px-6 py-3 rounded-md text-sm"
            href="#about"
          >
            EN SAVOIR PLUS
          </motion.a>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="px-10 py-16 grid md:grid-cols-2 gap-10 bg-gray-50"
      >
        <div>
          <h3 className="flex items-center gap-4 text-xl font-semibold mb-4">
            <Image
              src={"/images/about_0.png"}
              alt="about_0"
              width={50}
              height={50}
            />
            <span className="flex flex-col gap-1">
              <span>{"À PROPOS DE NOUS"}</span>
              <span className="w-[30%] h-0.5 bg-blue-600" />
            </span>
            {/* <span className="relative">
              {"À PROPOS DE NOUS"}
              <span className="absolute left-0 -bottom-1 w-[30%] h-0.5 bg-blue-600" />
            </span> */}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            EldNet-Tech est un partenaire technologique stratégique spécialisé
            dans la gestion d'infrastructures, la cybersécurité et le
            développement de solutions sur mesure. Nous accompagnons les
            transformations digitales avec des solutions agiles, sécurisées et
            parfaitement adaptées à vos enjeux.
          </p>
          <button className="mt-6 bg-blue-600 text-white px-5 py-2 text-sm rounded-md">
            DÉCOUVRIR PLUS
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            {
              title: "Expertise éprouvée",
              description: "Une équipe certifiée et experimentée.",
              icon: "/images/about_1.png",
            },
            {
              title: "Accompagnement sur mesure",
              description:
                "Des solutions adaptées à votre secteur et à vos objectifs.",
              icon: "/images/about_2.png",
            },
            {
              title: "Sécurité renforcée",
              description: "Protection proactive de vos données et système.",
              icon: "/images/about_3.png",
            },
            {
              title: "Performance optimisée",
              description: "Amélioration continue de vos infrastructures.",
              icon: "/images/about_4.png",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-4 rounded-md shadow-sm text-sm flex gap-1"
            >
              <div>
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={50}
                  height={50}
                  className="w-full"
                />
              </div>
              <div>
                <h4 className="font-semibold mt-2">{item.title}</h4>
                <p className="text-xs text-gray-600 mt-1">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA BAR */}
      <section
        id="contact"
        className="bg-[#0B2A4A] text-white px-10 py-8 flex flex-col md:flex-row justify-between items-center"
      >
        <p className="text-sm">Prêt à transformer votre infrastructure ?</p>
        <button
          onClick={() => setOpen(true)}
          className="border border-white px-6 py-2 rounded-md text-sm mt-4 md:mt-0"
        >
          NOUS CONTACTER
        </button>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-10 py-16">
        <h3 className="text-center text-xl font-semibold mb-10">
          NOS SERVICES
        </h3>

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
            <input
              className="w-full border p-2 mb-3 text-sm"
              placeholder="Nom"
            />
            <input
              className="w-full border p-2 mb-3 text-sm"
              placeholder="Email"
            />
            <textarea
              className="w-full border p-2 mb-3 text-sm"
              placeholder="Message"
            />
            <div className="flex justify-end gap-2 text-sm">
              <button onClick={() => setOpen(false)}>Annuler</button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
                Envoyer
              </button>
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
