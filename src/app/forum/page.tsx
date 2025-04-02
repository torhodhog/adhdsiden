'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

interface Thread {
  _id: string
  title: string
  replies: string[]
}

export default function ForumPage() {
  const [threads, setThreads] = useState<Thread[]>([])
  const [newTitle, setNewTitle] = useState('')
  const [newContent, setNewContent] = useState('')


  const fetchThreads = async () => {
    const res = await fetch('/api/forum/threads')
    const data = await res.json()
    setThreads(data)
  }

  useEffect(() => {
    fetchThreads()
  }, [])

  const handleCreateThread = async () => {
   if (!newTitle.trim() || !newContent.trim()) return
 
   await fetch('/api/forum/threads', {
     method: 'POST',
     body: JSON.stringify({ title: newTitle, content: newContent }),
     headers: { 'Content-Type': 'application/json' },
   })
 
   setNewTitle('')
   setNewContent('')
   fetchThreads()
 }
 

  return (
    <main className="min-h-screen bg-white p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Forum</h1>

      <div className="mb-10">
      <input
  type="text"
  value={newTitle}
  onChange={(e) => setNewTitle(e.target.value)}
  placeholder="Tittel på tråden"
  className="border p-2 rounded w-full max-w-md"
/>

<textarea
  value={newContent}
  onChange={(e) => setNewContent(e.target.value)}
  placeholder="Hva vil du skrive om?"
  className="border p-2 rounded w-full max-w-md mt-2 min-h-[100px]"
/>

        <button
          onClick={handleCreateThread}
          className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Opprett tråd
        </button>
      </div>

      <div className="space-y-4">
        {threads.map((thread) => (
          <Link
            key={thread._id}
            href={`/forum/${thread._id}`}
            className="block border p-4 rounded-lg hover:shadow transition bg-white"
          >
            <h2 className="text-lg font-semibold text-blue-700">{thread.title}</h2>
            <p className="text-sm text-gray-500">{thread.replies.length} svar</p>
          </Link>
        ))}
      </div>
    </main>
  )
}
