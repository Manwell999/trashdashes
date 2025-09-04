import type { Metadata } from "next";
import { Bebas_Neue, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const displayFont = Bebas_Neue({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

const bodyFont = Poppins({
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trash Dashes | Junk Removal & Home Cleanouts",
  description:
    "Trash Dashes hauls junk fast: home cleanouts, curbside pickup, appliances, and more. From trash to gone in a dash.",
  metadataBase: new URL("https://trash-dashes.example"),
  keywords: [
    "trash dashes",
    "junk removal",
    "house cleanout",
    "appliance haul away",
    "curbside pickup",
  ],
  openGraph: {
    title: "Trash Dashes",
    description:
      "From trash to gone in a dash. Fast, friendly junk removal and cleanouts.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${bodyFont.variable} antialiased bg-background text-foreground`}>
        <Header />
        <main className="min-h-[calc(100dvh-160px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
