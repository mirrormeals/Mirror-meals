import Link from "next/link";

export default function Home() {
  return (
    <section className="grid min-h-[70svh] place-items-center text-center p-6">
      <div className="space-y-6">
        <div className="flex justify-center">
          <img src="/hero-plate.svg" alt="Mirror Meals split plate" className="mx-auto w-full max-w-[820px] h-auto" />
        </div>

        <h1 className="text-4xl md:text-6xl font-bold">Mirror Meals</h1>
        <p className="mx-auto max-w-2xl text-lg md:text-xl">
          Two Takes on Taste. Every palate deserves variety and every schedule flexibility.
          Our recipes come in pairs—one traditional, rich in heritage; the other, a modern, time-saving twist.
        </p>

        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Link href="/recipes" className="rounded-full bg-black text-white px-5 py-3 font-semibold">Explore Recipes</Link>
          <Link href="/tips" className="rounded-full border px-5 py-3 font-semibold">Tips & Techniques</Link>
        </div>
      </div>
    </section>
  );
}
