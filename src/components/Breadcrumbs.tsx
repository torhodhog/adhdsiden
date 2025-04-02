'use client'

import Link from 'next/link'

interface BreadcrumbsProps {
  paths: { name: string; href?: string }[]
}

export default function Breadcrumbs({ paths }: BreadcrumbsProps) {
  return (
    <nav className="text-sm text-gray-600 mb-4" aria-label="Breadcrumb">
      <ol className="flex space-x-2">
        {paths.map((p, i) => (
          <li key={i} className="flex items-center">
            {p.href ? (
              <Link href={p.href} className="hover:underline text-blue-600">
                {p.name}
              </Link>
            ) : (
              <span className="font-medium text-gray-800">{p.name}</span>
            )}
            {i < paths.length - 1 && <span className="mx-2">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  )
}
