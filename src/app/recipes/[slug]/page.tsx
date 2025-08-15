import { notFound } from "next/navigation";
import { getRecipe, recipes } from "@/data/recipes";
import RecipePair from "@/components/RecipePair";

export function generateStaticParams() {
  return recipes.map(r => ({ slug: r.slug }));
}

export default function RecipeDetail({ params }: { params: { slug: string } }) {
  const recipe = getRecipe(params.slug);
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
