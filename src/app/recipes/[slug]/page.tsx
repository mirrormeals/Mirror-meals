import { notFound } from "next/navigation";
import { getRecipe, recipes } from "@/data/recipes";
import RecipePair from "@/components/RecipePair";

export function generateStaticParams() {
  return recipes.map((r) => ({ slug: r.slug }));
}

// Next.js 15: params is a Promise — await it
export default async function RecipeDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const recipe = getRecipe(slug);
  if (!recipe) return notFound();
  return (
    <div className="space-y-6">
      <div>
        <p className="uppercase tracking-wide text-xs opacity-70">Pair</p>
        <h1 className="text-3xl md:text-4xl font-bold">{recipe.title}</h1>
        {recipe.subtitle && <p className="opacity-80">{recipe.subtitle}</p>}
      </div>
      <RecipePair recipe={recipe} />
    </div>
  );
}
