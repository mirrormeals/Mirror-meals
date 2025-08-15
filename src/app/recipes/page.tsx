import Link from "next/link";
import { recipes } from "@/data/recipes";

export default function RecipesPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl md:text-4xl font-bold">Recipes</h1>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((r) => (
          <article key={r.id} className="overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
            <img src={r.images.traditional} alt={r.title} className="aspect-[4/3] w-full object-cover" />
            <div className="space-y-2 p-4">
              <h3 className="font-semibold">{r.title}</h3>
              <p className="text-sm opacity-80">{r.subtitle}</p>
              <div className="flex flex-wrap gap-2">
                {r.tags.slice(0, 3).map((t) => (
                  <span key={t} className="rounded-full border px-2 py-1 text-xs">{t}</span>
                ))}
              </div>
              <div className="pt-2">
                <Link href={`/recipes/${r.slug}`} className="rounded-full bg-black text-white px-4 py-2 text-sm font-semibold">View pair</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
