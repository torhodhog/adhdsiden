import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'
import { ObjectId } from 'mongodb'

export async function POST(req: Request) {
  const { threadId, text } = await req.json()

  if (!threadId || !text) {
    return NextResponse.json({ error: 'Mangler data' }, { status: 400 })
  }

  const client = await clientPromise
  const db = client.db('adhdpluss')

  await db.collection('threads').updateOne(
    { _id: new ObjectId(threadId) },
    {
      $push: {
         replies: {
           text: text as string,
           createdAt: new Date(),
         } as never, // 👈 viktig hack for å blidgjøre TypeScript her
       },
       
      },
    
  )

  return NextResponse.json({ message: 'Svar lagt til' })
}
