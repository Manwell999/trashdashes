"use client";

import Link from "next/link";
import Image from "next/image";
import { PHONE_TEL } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Trash Dashes logo"
            width={48}
            height={48}
            className="rounded-sm shadow-sm"
            priority
          />
          <span className="text-2xl tracking-tight font-display leading-none">
            Trash <span className="text-accent">Dashes</span>
          </span>
        </Link>
        <nav className="hidden sm:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-accent transition-colors">
            Home
          </Link>
          <Link href="/contact" className="hover:text-accent transition-colors">
            Contact
          </Link>
          <a
            href={PHONE_TEL}
            className="inline-flex items-center rounded-md bg-accent text-white px-4 py-2 shadow hover:bg-accent-600 transition-colors"
          >
            Call Now
          </a>
        </nav>
      </div>
    </header>
  );
}


