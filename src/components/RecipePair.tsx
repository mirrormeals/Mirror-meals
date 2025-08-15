"use client";
import { useState } from "react";
import type { RecipePair } from "@/data/recipes";

export default function RecipePair({ recipe }: { recipe: RecipePair }) {
  const [view, setView] = useState<"traditional"|"modern">("traditional");
  const [mirror, setMirror] = useState(false);
  const panes = mirror ? (["traditional","modern"] as const) : ([view] as const);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <div className="inline-flex rounded-full border p-1">
          {(["traditional","modern"] as const).map(v => (
            <button key={v}
              onClick={()=>setView(v)}
              aria-pressed={view===v}
              className={`rounded-full px-3 py-1.5 text-sm ${view===v ? "bg-black text-white" : ""}`}>
              {v[0].toUpperCase()+v.slice(1)}
            </button>
          ))}
        </div>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={mirror} onChange={e=>setMirror(e.target.checked)} />
          Mirror view
        </label>
      </div>

      <div className={`grid gap-4 ${mirror ? "md:grid-cols-2" : ""}`}>
        {panes.map((kind) => {
          const v = recipe.versions[kind];
          const img = recipe.images[kind];
          return (
            <article key={kind} className="overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
              <img src={img} alt={`${recipe.title} — ${kind}`} className="aspect-[4/3] w-full object-cover" />
              <div className="space-y-3 p-4">
                <h2 className="text-2xl font-bold">{kind[0].toUpperCase()+kind.slice(1)}</h2>
                <p className="text-sm opacity-80">{kind === "traditional" ? "Classic method." : "Faster path."}</p>
                <div className="flex gap-2">
                  <span className="rounded-full border px-2 py-1 text-xs">{v.time}</span>
                  <span className="rounded-full border px-2 py-1 text-xs">{v.yield}</span>
                </div>
                <hr className="border-neutral-200 dark:border-neutral-800" />
                <h3 className="font-semibold">Ingredients</h3>
                <ul className="space-y-1 text-sm">{v.ingredients.map((i,idx)=>(<li key={idx}>• {i}</li>))}</ul>
                <hr className="border-neutral-200 dark:border-neutral-800" />
                <h3 className="font-semibold">Steps</h3>
                <ol className="list-decimal space-y-1 pl-5 text-sm">{v.steps.map((s,idx)=>(<li key={idx}>{s}</li>))}</ol>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
