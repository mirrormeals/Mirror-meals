"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { recipes } from "@/data/recipes";

type DifficultyFilter = "all" | "easy" | "medium" | "hard";
type ProteinFilter = "all" | "beef" | "chicken" | "pork" | "veggie" | "seafood" | "other";
type TimeFilter = "all" | "10-30" | "30-60" | "60+";

export default function RecipesPage() {
  const [query, setQuery] = useState("");
  const [difficulty, setDifficulty] = useState<DifficultyFilter>("all");
  const [protein, setProtein] = useState<ProteinFilter>("all");
  const [time, setTime] = useState<TimeFilter>("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return recipes.filter((r) => {
      const matchesQuery = !q ||
        r.title.toLowerCase().includes(q) ||
        (r.subtitle?.toLowerCase().includes(q) ?? false) ||
        r.tags.some((t) => t.toLowerCase().includes(q));

      const matchesDifficulty =
        difficulty === "all" || (r.difficulty ?? "medium") === difficulty;

      const matchesProtein =
        protein === "all" || (r.protein ?? "other") === protein;

      const mins = r.totalMinutes ?? 30;
      const matchesTime =
        time === "all" ||
        (time === "10-30" && mins >= 10 && mins <= 30) ||
        (time === "30-60" && mins > 30 && mins <= 60) ||
        (time === "60+" && mins > 60);

      return matchesQuery && matchesDifficulty && matchesProtein && matchesTime;
    });
  }, [query, difficulty, protein, time]);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl md:text-4xl font-bold">Recipes</h1>

      <div className="mx-auto flex w-full max-w-3xl items-center gap-3">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by title, tag, or description"
          className="w-full rounded-full border border-white/20 bg-transparent px-5 py-3 outline-none placeholder:opacity-60 focus:border-white"
          aria-label="Search recipes"
        />
        <div className="flex items-center gap-2">
          <select
            aria-label="Filter by difficulty"
            value={difficulty}
            onChange={(e)=>setDifficulty(e.target.value as DifficultyFilter)}
            className="rounded-full border border-white/20 bg-black/30 px-3 py-2 text-sm"
          >
            <option value="all">Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <select
            aria-label="Filter by protein"
            value={protein}
            onChange={(e)=>setProtein(e.target.value as ProteinFilter)}
            className="rounded-full border border-white/20 bg-black/30 px-3 py-2 text-sm"
          >
            <option value="all">Protein</option>
            <option value="beef">Beef</option>
            <option value="chicken">Chicken</option>
            <option value="pork">Pork</option>
            <option value="veggie">Veggie</option>
            <option value="seafood">Seafood</option>
            <option value="other">Other</option>
          </select>
          <select
            aria-label="Filter by total time"
            value={time}
            onChange={(e)=>setTime(e.target.value as TimeFilter)}
            className="rounded-full border border-white/20 bg-black/30 px-3 py-2 text-sm"
          >
            <option value="all">Time</option>
            <option value="10-30">10–30 min</option>
            <option value="30-60">30–60 min</option>
            <option value="60+">60+ min</option>
          </select>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((r) => (
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
