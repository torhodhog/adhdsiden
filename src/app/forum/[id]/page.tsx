'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

interface Thread {
  _id: string
  title: string
  replies: { text: string; createdAt: string }[]
}

export default function ThreadPage() {
  const { id } = useParams()
  const [thread, setThread] = useState<Thread | null>(null)
  const [reply, setReply] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchThread = async () => {
      const res = await fetch(`/api/forum/threads/${id}`)
      const data = await res.json()
      setThread(data)
      setLoading(false)
    }

    fetchThread()
  }, [id])

  const handleReply = async () => {
    if (!reply.trim()) return

    await fetch(`/api/forum/replies`, {
      method: 'POST',
      body: JSON.stringify({ threadId: id, text: reply }),
      headers: { 'Content-Type': 'application/json' },
    })

    setReply('')
    // refresh replies
    const res = await fetch(`/api/forum/threads/${id}`)
    const data = await res.json()
    setThread(data)
  }

  if (loading) return <p className="p-8 text-gray-500">Laster inn tråd...</p>
  if (!thread) return <p className="p-8 text-red-500">Fant ikke tråden.</p>

  return (
    <main className="min-h-screen p-8 max-w-3xl mx-auto bg-white">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">{thread.title}</h1>

      <div className="mb-10 space-y-4">
        <h2 className="font-semibold text-gray-700">Svar</h2>
        {thread.replies.length === 0 && (
          <p className="text-sm text-gray-500">Ingen har svart enda.</p>
        )}
        {thread.replies.map((r, i) => (
          <div key={i} className="border rounded p-3">
            <p className="text-gray-800">{r.text}</p>
            <p className="text-xs text-gray-400 mt-1">
              {new Date(r.createdAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <textarea
          value={reply}
          onChange={(e) => setReply(e.target.value)}
          placeholder="Skriv et svar..."
          className="w-full border p-2 rounded min-h-[100px]"
        />
        <button
          onClick={handleReply}
          className="mt-2 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Legg til svar
        </button>
      </div>
    </main>
  )
}
