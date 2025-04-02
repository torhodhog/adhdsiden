'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'


export default function Home() {
  return (
    <main className="min-h-screen bg-[#5D8664] text-white pb-8">
      
      {/* HERO */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full h-screen flex items-center justify-center px-6 md:px-16"
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 max-w-7xl w-full">
          
          {/* Tekst */}
          <div className="max-w-md">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              ADHD-portalen
            </h1>
            <p className="text-lg mb-6">
              Kurs, podcast, forum og personlig oppfølging – alt på ett sted, for deg som lever med eller rundt ADHD.
            </p>
            <Link
              href="/kurs"
              className="inline-block bg-white text-[#5D8664] font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition"
            >
              Kom i gang
            </Link>
          </div>

          {/* Bilde + vertikal meny */}
          <div className="relative">
            <img
              src="/heroo.png"
              alt="ADHD Coach"
              className="max-h-[80vh] w-auto"
            />
            <div className="absolute top-1/2 -translate-y-1/2 right-[-180px] hidden lg:flex flex-col gap-4">
              {[
                { title: 'Kurs', href: '/kurs' },
                { title: 'Podcast', href: '/podcast' },
                { title: 'Forum', href: '/forum' },
                { title: 'Min Side', href: '/min-side' },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="bg-white text-[#5D8664] font-semibold py-3 px-6 rounded-xl shadow hover:scale-105 hover:bg-gray-50 transition text-center w-48"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* GRATIS DAGSPLANLEGGER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-20 bg-white border border-blue-100 rounded-xl shadow-md p-6 mx-auto w-full max-w-xl text-center"
      >
        <h2 className="text-xl font-semibold text-blue-700 mb-2">
          Få vår gratis dagsplanlegger 🧩
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          Et enkelt verktøy som gir deg bedre struktur i hverdagen.
        </p>
        <a
          href="/adhdplussplanlegger.png"
          download
          className="inline-block bg-blue-600 text-white text-sm py-2 px-5 rounded-full hover:bg-blue-700 transition"
        >
          Last ned gratis dagsplanlegger
        </a>
      </motion.div>

      {/* GRID-MENY (fallback visning) */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 w-full max-w-5xl mx-auto lg:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {[
          { title: 'Kurs', href: '/kurs' },
          { title: 'Podcast', href: '/podcast' },
          { title: 'Forum', href: '/forum' },
          { title: 'Min Side', href: '/min-side' },
        ].map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition transform hover:-translate-y-1 text-center"
          >
            <p className="text-lg font-semibold text-blue-700">{item.title}</p>
          </Link>
        ))}
      </motion.div>

      {/* TESTIMONIAL */}
      <motion.div
        className="mt-24 max-w-3xl text-center mx-auto px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Hva sier brukerne?
        </h2>
        <p className="text-gray-600 italic">
          “Dette kurset hjalp meg å forstå meg selv bedre. Endelig en plass hvor jeg føler meg sett og forstått.”
        </p>
        <p className="text-gray-500 mt-2">– Anonym deltaker</p>
      </motion.div>

      {/* GRATIS RESSURSER */}
      <section className="mt-20 w-full max-w-6xl mx-auto px-6 ">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">Gratis ressurser fra ADHD+</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-4 rounded-xl shadow text-center">
            <img src="/dopamine-menu.png" alt="Dopamine Menu" className="w-full rounded mb-4" />
            <h3 className="font-semibold text-gray-800">Dopamine Menu</h3>
            <a
              href="/DMS.pdf"
              download
              className="mt-3 inline-block bg-blue-600 text-white text-sm py-2 px-4 rounded-full hover:bg-blue-700 transition"
            >
              Last ned
            </a>
          </div>

          <div className="bg-white p-4 rounded-xl shadow text-center">
            <img src="/emotional-toolkit.png" alt="Toolkit" className="w-full rounded mb-4" />
            <h3 className="font-semibold text-gray-800">The Emotional Regulation Toolkit</h3>
            <a
              href="https://www.adhdpluss.no/the-emotional-regulation-toolkit"
              className="mt-3 inline-block bg-yellow-400 text-black text-sm py-2 px-4 rounded-full hover:bg-yellow-500 transition"
            >
              Download your toolkit here
            </a>
          </div>

          <div className="bg-white p-4 rounded-xl shadow text-center">
            <img src="/dopamine-vault.png" alt="Dopamine Vault" className="w-full rounded mb-4" />
            <h3 className="font-semibold text-gray-800">The ADHD+ Dopamine Vault</h3>
            <a
              href="#"
              className="mt-3 inline-block bg-yellow-400 text-black text-sm py-2 px-4 rounded-full hover:bg-yellow-500 transition"
            >
              Get your free dopamine vault!
            </a>
          </div>
        </div>
      </section>


      
    </main>
  )
}
