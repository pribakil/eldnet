// Next.js 14 - Pixel Perfect Version (Closer to provided design)
"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";
import Image from "next/image";
import useScrollToTop from "@/hooks/use_scroll_to_top";
import {
  AppWindow,
  Building2,
  CheckCircle,
  Clock,
  Lock,
  Mail,
  Network,
  Phone,
  Star,
  Users,
  Wrench,
} from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const services = [
  {
    title: "CONSEIL INFORMATIQUE",
    desc: "Audit et Conseil Stratégique - Analyse experte pour aligner vos technologies sur vos objectifs d'affaires et optimiser vos processus.",
    icon: <Users className="text-white" size={20} />,
  },
  {
    title: "SÉCURITÉ INFORMATIQUE",
    desc: "Cybersécurité & Protection proactive et réactive contre les menaces, gestion des vulnérabilités et conformité.",
    icon: <Lock className="text-white" size={20} />,
  },
  {
    title: "GESTION DE RÉSEAU",
    desc: "Infogérance & supervision : Supervision en temps réel, maitrise et optimisation de la performance du réseau.",
    icon: <Network className="text-white" size={20} />,
  },
  {
    title: "SUPPORT TECHNIQUE",
    desc: "Assistance et Support : Assistance réactive et expertise technique pour accompagner vos équipes au quotidienne.",
    icon: <Phone className="text-white" size={20} />,
  },
  {
    title: "SUPPORT TECHNIQUE CRITIQUE",
    desc: "Assistance & Support Critique : Intervention 24/7 pour environnements sensibles. Réduction des risques et continuité d'activité.",
    icon: <Wrench className="text-white" size={20} />,
  },
  {
    title: "DÉVELOPPEMENT LOGICIEL",
    desc: "Solutions Logicielles sur Mesure : Conception, développement et intégration des solutions adaptées à vos métiers.",
    icon: <AppWindow className="text-white" size={20} />,
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
    <main
      className={`${poppins.className} text-gray-800 w-full overflow-x-hidden`}
    >
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 flex flex-wrap justify-between items-center gap-3 bg-white shadow-xl px-4 py-4 sm:px-6">
        <div className="flex items-center gap-3">
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

        <div className="flex flex-wrap gap-4 items-center">
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
        className="grid md:grid-cols-2 items-center bg-[#0B2A4A] text-white py-16 px-4 mt-[4.5rem] sm:px-6 lg:px-10"
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
        className="px-4 grid gap-10 bg-gray-50 py-8 sm:px-6 lg:px-10 md:grid-cols-2"
      >
        <div>
          <h3 className="gap-4 text-xl font-semibold mb-4 flex items-center">
            <div className="w-16 h-16 rounded-full bg-blue-50 p-4 flex items-center justify-center">
              <Building2 className="text-blue-500" size={40} />
            </div>
            <span className="flex flex-col gap-1">
              <span>{"À PROPOS DE NOUS"}</span>
              <span className="w-[32px] h-0.5 bg-blue-600" />
            </span>
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

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {[
            {
              title: "Expertise éprouvée",
              description: "Une équipe certifiée et experimentée.",
              icon: <CheckCircle className="text-blue-500" size={40} />,
            },
            {
              title: "Accompagnement sur mesure",
              description:
                "Des solutions adaptées à votre secteur et à vos objectifs.",
              icon: <Wrench className="text-blue-500" size={40} />,
            },
            {
              title: "Sécurité renforcée",
              description: "Protection proactive de vos données et système.",
              icon: <Lock className="text-blue-500" size={40} />,
            },
            {
              title: "Performance optimisée",
              description: "Amélioration continue de vos infrastructures.",
              icon: <Star className="text-blue-500" size={40} />,
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-4 rounded-md shadow-lg text-sm flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <div className="w-16 h-16 rounded-full bg-blue-50 p-4 flex items-center justify-center">
                {item.icon}
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
        className="bg-[#0B2A4A] text-white px-4 flex flex-col gap-4 justify-between items-center py-8 sm:px-6 lg:px-10 md:flex-row"
      >
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-semibold">
            {"Prêt à transformer votre infrastructure ?"}
          </h3>
          <p className="text-sm">
            {
              "Échangeons dès aujourd'hui sur vos futurs projets technologiques."
            }
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          onClick={() => setOpen(true)}
          className="border border-white px-6 py-2 rounded-md text-sm mt-4 md:mt-0"
        >
          NOUS CONTACTER
        </motion.button>{" "}
      </section>

      {/* SERVICES */}
      <section id="services" className="py-8 px-4 sm:px-6 lg:px-10">
        <h3 className="text-center text-xl font-semibold mb-10">
          <span className="flex flex-col gap-1">
            <span>{"NOS SERVICES"}</span>
            <span className="w-[32px] h-0.5 bg-blue-600 self-center" />
          </span>
        </h3>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="bg-white rounded-md shadow-lg overflow-hidden"
            >
              <div
                className="h-40 bg-cover bg-center"
                style={{ backgroundImage: `url(/images/service_${i + 1}.png)` }}
              />
              <div className="p-4 relative">
                <span className="w-10 h-10 flex items-center justify-center p-2 bg-blue-500 rounded-full absolute -top-5 left-4 border-2 border-white">
                  {s.icon}
                </span>
                <h4 className="text-sm font-semibold mb-2 mt-4">{s.title}</h4>
                <p className="text-xs text-gray-600">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section
        id="values"
        className="bg-[#0B2A4A] px-4 flex flex-col justify-between items-center py-8 sm:px-6 lg:px-10"
      >
        <div className="flex flex-col items-center gap-2 mb-8 text-white">
          <h3 className="text-xl font-semibold">
            {"Qu'es-qui nous caracterise ?"}
          </h3>
          <p className="text-sm">{"Nos leitmotivs."}</p>
        </div>

        <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Expertise certifiée",
              description: "Des professionnels qualifiés et certifiés.",
              icon: <CheckCircle className="text-blue-500" size={40} />,
            },
            {
              title: "Disponibilité 24/7",
              description: "Une équipe à votre écoute à tout moment.",
              icon: <Clock className="text-blue-500" size={40} />,
            },
            {
              title: "Solution sur mesure",
              description: "Des services adaptés à vos besoins spécifiques.",
              icon: <Wrench className="text-blue-500" size={40} />,
            },
            {
              title: "Engagement qualité",
              description: "AUn engagement fort pour votre satisfaction.",
              icon: <Star className="text-blue-500" size={40} />,
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-4 rounded-md shadow-sm text-sm flex flex-col gap-4 sm:flex-row sm:items-center"
            >
              <div>{item.icon}</div>
              <div>
                <h4 className="font-semibold mt-2">{item.title}</h4>
                <p className="text-xs text-gray-600 mt-1">{item.description}</p>
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
            <div className="flex flex-col items-center">
              <h3 className="text-center text-xl font-semibold">
                {"NOUS CONTACTER"}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {"Cliquez pour nous contacter"}
              </p>
            </div>

            <div className="flex flex-col gap-4 p-4 sm:p-6 lg:p-10 border border-gray-200 rounded-md my-6 shadow-lg">
              <p className="flex gap-2">
                <Phone className="text-blue-500" size={20} />
                <a
                  href="tel:+243860400145"
                  className="text-md font-semibold hover:underline"
                >
                  +243 86 04 00 145
                </a>
              </p>
              <p className="flex gap-2">
                <Mail className="text-blue-500" size={20} />
                <a
                  href="mailto:contact@eldnet.tech"
                  className="text-md font-semibold hover:underline"
                >
                  contact@eldnet.tech
                </a>
              </p>
            </div>

            <div className="flex justify-end">
              <button
                className="border border-gray-200 py-2 px-6 rounded-md text-sm hover:bg-gray-100 transition-colors duration-200"
                onClick={() => setOpen(false)}
              >
                Fermer
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="text-center text-xs text-gray-500 bg-gray-100 py-8">
        © 2026 EldNet-Tech
      </footer>
    </main>
  );
}
