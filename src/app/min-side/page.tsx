'use client'

import { SignedIn, SignedOut, SignInButton,  useUser } from '@clerk/nextjs'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { CalendarDays, BookOpenCheck, Mail } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'

export default function MinSide() {
  const { user } = useUser()

  const kurs = [
    { title: 'Forstå din ADHD', progress: 80 },
    { title: 'Struktur i hverdagen', progress: 45 },
  ]

  const meldinger = [
    { from: 'Terapeut', tekst: 'Husk å gjøre øvelse 2 før fredag 😊' },
    { from: 'System', tekst: 'Nytt kurs tilgjengelig: ADHD og søvn' },
  ]

  const [valgtDato, setValgtDato] = useState('')

  return (
    <main className="min-h-screen p-6 bg-gradient-to-b from-blue-50 to-white">
      <SignedOut>
        <div className="text-center">
          <p>Du er ikke logget inn.</p>
          <SignInButton />
        </div>
      </SignedOut>

      <SignedIn>
      <Breadcrumbs paths={[{ name: 'Hjem', href: '/' }, { name: 'Min Side' }]} />

        <div className="max-w-3xl mx-auto space-y-8">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 rounded-2xl shadow-xl text-center"
          >
            <div className="text-4xl mb-2">👋</div>
            <h1 className="text-2xl font-bold text-gray-800">
              Hei {user?.firstName}! Her er din personlige side
            </h1>
            <p className="text-sm text-gray-500">
              Alt samlet på ett sted – meldinger, kurs og avtaler
            </p>
          </motion.div>

          {/* Kurs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-2xl shadow-md"
          >
            <div className="flex items-center gap-2 mb-4 text-blue-700">
              <BookOpenCheck size={20} />
              <h2 className="text-lg font-semibold">Mine kurs</h2>
            </div>
            <ul className="space-y-4">
              {kurs.map((k, i) => (
                <li key={i}>
                  <div className="flex justify-between mb-1 text-sm text-gray-700">
                    <span>{k.title}</span>
                    <span>{k.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-blue-500 h-2.5 rounded-full transition-all"
                      style={{ width: `${k.progress}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Meldinger */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-6 rounded-2xl shadow-md"
          >
            <div className="flex items-center gap-2 mb-4 text-blue-700">
              <Mail size={20} />
              <h2 className="text-lg font-semibold">Meldinger</h2>
            </div>
            <ul className="space-y-3 text-sm text-gray-700">
              {meldinger.map((m, i) => (
                <li key={i}>
                  <strong>{m.from}:</strong> {m.tekst}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Booking */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white p-6 rounded-2xl shadow-md"
          >
            <div className="flex items-center gap-2 mb-4 text-blue-700">
              <CalendarDays size={20} />
              <h2 className="text-lg font-semibold">Book en samtale</h2>
            </div>
            <label className="block mb-2 text-sm text-gray-600">Velg dato:</label>
            <input
              type="date"
              className="border px-3 py-2 rounded w-full text-sm"
              value={valgtDato}
              onChange={(e) => setValgtDato(e.target.value)}
            />
            {valgtDato && (
              <p className="mt-3 text-green-600 text-sm">Forespørsel sendt for {valgtDato}</p>
            )}
          </motion.div>
        </div>
        {/* Kursutforsking */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.8 }}
  className="bg-white p-6 rounded-2xl shadow-md"
>
  <h2 className="text-lg font-semibold mb-4 text-blue-700">Oppdag flere kurs</h2>
  <div className="grid md:grid-cols-2 gap-4">
    {[
      {
        title: 'ADHD og Søvn',
        desc: 'Hvordan søvnmangel påvirker deg og hva du kan gjøre med det.',
      },
      {
        title: 'Følelsesregulering',
        desc: 'Et kurs om emosjonell forståelse og mestring i hverdagen.',
      },
    ].map((k, i) => (
      <div key={i} className="border p-4 rounded-xl bg-gray-50 hover:bg-blue-50 transition">
        <h3 className="font-semibold text-gray-800">{k.title}</h3>
        <p className="text-sm text-gray-600 mt-1 mb-3">{k.desc}</p>
        <button
          className="text-sm bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
          onClick={() => alert(`Du er nå påmeldt: ${k.title}`)}
        >
          Meld meg på
        </button>
      </div>
    ))}
  </div>
</motion.div>

      </SignedIn>
    </main>
  )
}
