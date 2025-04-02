'use client'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcrumbs'

const kursData = [
  {
    id: 1,
    title: 'Forstå din ADHD',
    description: 'Et introduksjonskurs for å forstå hvordan ADHD påvirker hverdagen og hva du kan gjøre.',
    image: '/kurs1.jpg',
  },
  {
    id: 2,
    title: 'ADHD & Struktur',
    description: 'Strategier og verktøy for å skape mer struktur i livet med ADHD.',
    image: '/kurs2.jpg',
  },
  {
    id: 3,
    title: 'Barn og ADHD',
    description: 'For deg som er forelder eller jobber med barn – forstå, støtt og kommuniser bedre.',
    image: '/kurs3.jpg',
  },
]

export default function KursPage() {
  return (
    <main className="min-h-screen p-8 bg-white">
      <Breadcrumbs paths={[{ name: 'Hjem', href: '/' }, { name: 'Kurs' }]} />
      <h1 className="text-3xl font-bold text-center mb-12 text-gray-800">Våre kurs</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {kursData.map((kurs) => (
          <div
            key={kurs.id}
            className="bg-gray-50 rounded-xl shadow hover:shadow-md transition overflow-hidden"
          >
            <div className="relative w-full h-48">
              <Image
                src={kurs.image}
                alt={kurs.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-blue-700">{kurs.title}</h2>
              <p className="text-gray-600 mt-2 text-sm">{kurs.description}</p>
              <Link
                href={`/kurs/${kurs.id}`}
                className="inline-block mt-4 text-blue-600 hover:underline font-medium"
              >
                Les mer →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
