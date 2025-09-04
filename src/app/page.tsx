import Image from "next/image";
import Link from "next/link";
import { PHONE_TEL, SERVICE_AREA } from "@/lib/site";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <section className="pt-10 sm:pt-16 grid gap-8 sm:gap-10 items-center sm:grid-cols-2">
        <div>
          <h1 className="font-display text-5xl sm:text-6xl leading-[1.05] tracking-tight">
            From trash to gone <span className="text-accent">in a dash</span>
          </h1>
          <p className="mt-4 text-lg text-muted max-w-prose">
            Fast, friendly junk removal and home cleanouts. Up-front pricing,
            same-day service when available, and we handle the heavy lifting. {SERVICE_AREA}.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={PHONE_TEL} className="inline-flex items-center rounded-md bg-accent text-white px-5 py-3 font-semibold shadow hover:bg-accent-600">Call Now</a>
            <Link href="/contact" className="inline-flex items-center rounded-md border border-black/10 px-5 py-3 font-semibold hover:border-black/30">Get a Free Quote</Link>
          </div>
          <ul className="mt-6 grid grid-cols-2 gap-2 text-sm text-muted">
            <li>House & garage cleanouts</li>
            <li>Mattress & furniture removal</li>
            <li>Appliance haul away</li>
            <li>Yard waste & debris</li>
          </ul>
        </div>
        <div className="justify-self-center">
          <Image src="/logo.png" alt="Trash Dashes logo" width={360} height={360} className="drop-shadow" />
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <h2 className="font-display text-3xl">How it works</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="group rounded-lg border border-black/10 p-5 bg-white transition duration-200 hover:shadow-lg hover:-translate-y-0.5">
            <div className="flex items-start gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white font-semibold transition duration-200 group-hover:scale-110 group-hover:bg-accent-600">1</span>
              <div>
                <p className="font-bold text-xl sm:text-2xl text-black">Text or call</p>
                <p className="mt-1 text-black">Send a photo for a quick estimate or schedule an on-site quote.</p>
              </div>
            </div>
          </div>
          <div className="group rounded-lg border border-black/10 p-5 bg-white transition duration-200 hover:shadow-lg hover:-translate-y-0.5">
            <div className="flex items-start gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white font-semibold transition duration-200 group-hover:scale-110 group-hover:bg-accent-600">2</span>
              <div>
                <p className="font-bold text-xl sm:text-2xl text-black">We haul it</p>
                <p className="mt-1 text-black">Friendly pros load and sweep the area. You don’t lift a finger.</p>
              </div>
            </div>
          </div>
          <div className="group rounded-lg border border-black/10 p-5 bg-white transition duration-200 hover:shadow-lg hover:-translate-y-0.5">
            <div className="flex items-start gap-3">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white font-semibold transition duration-200 group-hover:scale-110 group-hover:bg-accent-600">3</span>
              <div>
                <p className="font-bold text-xl sm:text-2xl text-black">Done fast</p>
                <p className="mt-1 text-black">We dispose responsibly—recycling and donating when possible.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="rounded-xl bg-accent text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-2xl">Need it gone today?</p>
            <p className="opacity-90">Same-day pickup may be available in your area.</p>
          </div>
          <div className="flex gap-3">
            <a href="tel:+1-000-000-0000" className="inline-flex items-center rounded-md bg-white text-black px-5 py-3 font-semibold">Call</a>
            <Link href="/contact" className="inline-flex items-center rounded-md border border-white/30 px-5 py-3 font-semibold">Get Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
