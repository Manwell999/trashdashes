import { EMAIL, PHONE_DISPLAY, PHONE_TEL, SERVICE_AREA, PHONE_E164 } from "@/lib/site";
import QuoteForm from "@/components/QuoteForm";

export const metadata = {
  title: "Contact | Trash Dashes",
  description: "Call or message Trash Dashes for junk removal and cleanouts.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-16">
      <h1 className="font-display text-4xl tracking-tight">Contact</h1>
      <p className="mt-3 text-muted">Get a fast, no-obligation quote. {SERVICE_AREA}.</p>

      <div className="mt-8 grid gap-6 sm:gap-8 sm:grid-cols-2">
        <a href={PHONE_TEL} className="group rounded-lg border border-black/10 p-6 sm:p-7 bg-white hover:border-black/30 transition duration-200 hover:shadow-lg hover:-translate-y-0.5">
          <div className="flex items-start gap-4">
            <svg aria-hidden="true" focusable="false" className="h-7 w-7 sm:h-8 sm:w-8 text-accent transition duration-200 group-hover:scale-110 group-hover:text-accent-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.25 6.75c0 8.284 6.716 15 15 15h1.5A2.25 2.25 0 0021 19.5v-2.59a1.5 1.5 0 00-1.232-1.47l-3.37-.674a1.5 1.5 0 00-1.488.495l-.97 1.16a11.25 11.25 0 01-5.511-5.511l1.16-.97a1.5 1.5 0 00.495-1.488l-.674-3.37A1.5 1.5 0 009.84 2.25H7.25A2.25 2.25 0 005 4.5v1.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div>
              <p className="font-bold text-xl sm:text-2xl text-black leading-snug">Call</p>
              <p className="mt-1 text-black font-semibold text-lg sm:text-xl leading-snug">{PHONE_DISPLAY}</p>
            </div>
          </div>
        </a>
        <a href={`mailto:${EMAIL}`} className="group rounded-lg border border-black/10 p-6 sm:p-7 bg-white hover:border-black/30 transition duration-200 hover:shadow-lg hover:-translate-y-0.5">
          <div className="flex items-start gap-4">
            <svg aria-hidden="true" focusable="false" className="h-7 w-7 sm:h-8 sm:w-8 text-accent transition duration-200 group-hover:scale-110 group-hover:text-accent-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <div>
              <p className="font-bold text-xl sm:text-2xl text-black leading-snug">Email</p>
              <p className="mt-1 text-black font-semibold text-lg sm:text-xl leading-snug">{EMAIL}</p>
            </div>
          </div>
        </a>
      </div>

      <div className="mt-8 rounded-xl border border-black/10 bg-white p-6 sm:p-7 transition duration-200 hover:shadow-lg hover:-translate-y-0.5 group">
        <div className="flex items-start gap-4">
          <svg aria-hidden="true" focusable="false" className="h-7 w-7 sm:h-8 sm:w-8 text-accent transition duration-200 group-hover:scale-110 group-hover:text-accent-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 8.25h10A2.75 2.75 0 0119.75 11v5.5A2.75 2.75 0 0117 19.25H9.5L6 21v-2.5A2.75 2.75 0 013.25 16V11A2.75 2.75 0 016 8.25z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 12h8M8 15h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <div>
            <p className="font-bold text-xl sm:text-2xl text-black leading-snug">Prefer texting?</p>
            <p className="mt-1 text-black">Text photos of your junk for a quick estimate.</p>
            <a href={`sms:${PHONE_E164}`} className="mt-4 inline-flex items-center rounded-md bg-accent text-white px-5 py-3 font-semibold hover:bg-accent-600 transition-colors duration-200">Text Us</a>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="font-display text-3xl">Request a Quote</h2>
        <p className="text-muted mb-4">Share a few details and optional photos.</p>
        <QuoteForm />
      </div>
    </div>
  );
}


