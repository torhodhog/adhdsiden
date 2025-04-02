import { Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'

export default function Footer() {
  return (
    <footer className="bg-white text-black py-8 mt-16">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Link href="/">
            <Image  
              src={"/adlogo.png"}
              alt="Logo"
              width={80}
              height={80}
            />
          </Link>
        </div>

        {/* Kontaktinfo */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>kontakt@adhdpluss.no</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span>+47 123 45 678</span>
          </div>
        </div>

        {/* Login/Logout */}
        <div className="flex justify-center mt-4">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-400 transition">
                Logg inn
              </button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © ADHD-portalen {new Date().getFullYear()} — Laget med ❤️
        </p>
      </div>
    </footer>
  )
}