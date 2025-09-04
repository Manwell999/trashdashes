"use client";

import { useState } from "react";

type UploadPreview = {
  file: File;
  url: string;
};

export default function QuoteForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState<UploadPreview[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState<null | { id: string }>(null);
  const [error, setError] = useState<string | null>(null);

  function onSelectFiles(event: React.ChangeEvent<HTMLInputElement>) {
    const list = event.target.files;
    if (!list) return;
    const previews: UploadPreview[] = [];
    for (const file of Array.from(list)) {
      previews.push({ file, url: URL.createObjectURL(file) });
    }
    setFiles(prev => [...prev, ...previews]);
  }

  function removeFile(index: number) {
    setFiles(prev => prev.filter((_, i) => i !== index));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const form = new FormData();
      form.append("name", name);
      form.append("email", email);
      form.append("phone", phone);
      form.append("message", message);
      for (const { file } of files) form.append("images", file);

      const res = await fetch("/api/quote", { method: "POST", body: form });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      const data = (await res.json()) as { id: string };
      setSubmitted(data);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setFiles([]);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {submitted ? (
        <div className="rounded-md border border-black/10 bg-white p-4">
          <p className="font-semibold">Thanks! Your request was submitted.</p>
          <p className="text-black">Confirmation ID: {submitted.id}</p>
        </div>
      ) : null}
      {error ? (
        <div className="rounded-md border border-red-200 bg-red-50 p-3 text-red-800 text-sm">
          {error}
        </div>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            required
            value={name}
            onChange={e => setName(e.target.value)}
            className="mt-1 w-full rounded-md border border-black/10 bg-white px-3 py-2 outline-none focus:border-black/30"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Phone</label>
          <input
            required
            value={phone}
            onChange={e => setPhone(e.target.value)}
            className="mt-1 w-full rounded-md border border-black/10 bg-white px-3 py-2 outline-none focus:border-black/30"
            placeholder="319-961-2291"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="mt-1 w-full rounded-md border border-black/10 bg-white px-3 py-2 outline-none focus:border-black/30"
            placeholder="kaliemaestro@icloud.com"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium">Describe what you need removed</label>
          <textarea
            required
            value={message}
            onChange={e => setMessage(e.target.value)}
            rows={4}
            className="mt-1 w-full rounded-md border border-black/10 bg-white px-3 py-2 outline-none focus:border-black/30"
            placeholder="Tell us about the items and access (stairs, curbside, etc.)"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium">Upload photos (optional)</label>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={onSelectFiles}
          className="mt-1 block"
        />
        {files.length > 0 ? (
          <div className="mt-3 grid grid-cols-3 sm:grid-cols-6 gap-2">
            {files.map((p, i) => (
              <div key={i} className="relative group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.url} alt="preview" className="h-20 w-full object-cover rounded" />
                <button type="button" onClick={() => removeFile(i)} className="absolute -top-2 -right-2 rounded-full bg-black/70 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100">×</button>
              </div>
            ))}
          </div>
        ) : null}
      </div>

      <button
        disabled={submitting}
        className="inline-flex items-center rounded-md bg-accent text-white px-5 py-3 font-semibold disabled:opacity-70"
      >
        {submitting ? "Submitting..." : "Request Quote"}
      </button>
    </form>
  );
}


