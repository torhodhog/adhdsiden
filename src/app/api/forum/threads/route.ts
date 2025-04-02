import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

// GET: Hent alle tråder
export async function GET() {
  const client = await clientPromise
  const db = client.db('adhdpluss')

  const threads = await db.collection('threads').find().sort({ createdAt: -1 }).toArray()
  return NextResponse.json(threads)
}

export async function POST(req: Request) {
   const body = await req.json()
   const { title, content } = body
 
   if (!title || !content) {
     return NextResponse.json({ error: 'Tittel og innhold må fylles ut' }, { status: 400 })
   }
 
   const client = await clientPromise
   const db = client.db('adhdpluss')
 
   const newThread = {
     title: title.trim(),
     createdAt: new Date(),
     replies: [
       {
         text: content.trim(),
         createdAt: new Date(),
       },
     ],
   }
 
   const result = await db.collection('threads').insertOne(newThread)
 
   return NextResponse.json({ message: 'Tråd opprettet', id: result.insertedId })
 }
 
