import { NextRequest, NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'
import { ObjectId } from 'mongodb'

export async function GET(req: NextRequest) {
  const id = req.nextUrl.pathname.split('/').pop()

  if (!id) {
    return NextResponse.json({ error: 'Mangler ID' }, { status: 400 })
  }

  const client = await clientPromise
  const db = client.db('adhdpluss')

  const thread = await db.collection('threads').findOne({ _id: new ObjectId(id) })

  if (!thread) {
    return NextResponse.json({ error: 'Ikke funnet' }, { status: 404 })
  }

  return NextResponse.json(thread)
}
