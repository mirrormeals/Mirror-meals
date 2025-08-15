import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mirror Meals — Two Takes on Taste",
  description:
    "Every dish, two delicious paths: traditional heritage vs modern time-saving twists.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-svh bg-black text-white antialiased">
        <header className="sticky top-0 z-10 border-b border-white/10 bg-black/70 backdrop-blur">
          <nav className="mx-auto flex max-w-5xl items-center gap-6 px-4 py-3">
            <Link href="/" className="flex items-center gap-2 font-bold">
              <img src="/logo.svg" alt="Mirror Meals" className="h-6" />
              <span>Mirror Meals</span>
            </Link>
            <Link href="/recipes" className="opacity-90 hover:opacity-100">Recipes</Link>
            <Link href="/tips" className="opacity-90 hover:opacity-100">Tips</Link>
            <Link href="/shop" className="opacity-90 hover:opacity-100">Shop</Link>
            <div className="ml-auto" />
            <Link
              href="/subscribe"
              className="rounded-full border border-white/20 px-4 py-2 hover:bg-white hover:text-black transition"
            >
              Subscribe
            </Link>
          </nav>
        </header>
        <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
        <footer className="mx-auto max-w-5xl px-4 py-10 text-sm opacity-80 border-t border-white/10">
          © Mirror Meals · <Link href="/privacy" className="underline">Privacy</Link>
        </footer>
      </body>
    </html>
  );
}
