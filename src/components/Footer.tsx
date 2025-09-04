import Link from "next/link";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL, SERVICE_AREA } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 grid gap-6 sm:grid-cols-3 text-sm">
        <div>
          <p className="font-display text-xl">Trash <span className="text-accent">Dashes</span></p>
          <p className="text-muted mt-2">From trash to gone in a dash.</p>
          <p className="text-muted mt-1">{SERVICE_AREA}</p>
        </div>
        <div className="space-y-2">
          <p className="font-semibold">Contact</p>
          <a className="hover:text-accent" href={PHONE_TEL}>{PHONE_DISPLAY}</a>
          <a className="hover:text-accent block" href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </div>
        <div className="space-y-2">
          <p className="font-semibold">Links</p>
          <Link className="hover:text-accent block" href="/">Home</Link>
          <Link className="hover:text-accent block" href="/contact">Contact</Link>
        </div>
      </div>
      <div className="text-center text-xs text-muted pb-8">© {new Date().getFullYear()} Trash Dashes. All rights reserved.</div>
    </footer>
  );
}


