import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'
import { ObjectId } from 'mongodb'

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const client = await clientPromise
  const db = client.db('adhdpluss')

  const thread = await db
    .collection('threads')
    .findOne({ _id: new ObjectId(params.id) })

  if (!thread) {
    return NextResponse.json({ error: 'Ikke funnet' }, { status: 404 })
  }

  return NextResponse.json(thread)
}
