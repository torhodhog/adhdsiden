'use client'

import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="flex justify-between items-center p-4 h-24">
      {/* Logo on the left */}
      <div>
        <Link href="/">
          <Image  
            src={"/adlogo.png"}
            alt="Logo"
            width={100}
            height={100}
          />
        </Link>
      </div>

      {/* Sign-in/up buttons on the right */}
      <div className="flex items-center gap-4">
        <SignedOut>
          <SignInButton>
            <button className=" text-black px-4 py-2 rounded-xl hover:bg-gray-200 hover:text-black transition">
              Logg inn
            </button>
          </SignInButton>
          <SignUpButton>
            <button className="bg-gray-200 text-black px-4 py-2 rounded-xl hover:bg-transparent transition">
              Lag konto
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  )
}