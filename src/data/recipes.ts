export type Version = {
  time: string;
  yield: string;
  ingredients: string[];
  steps: string[];
};

export type RecipePair = {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  tags: string[];
  images: { traditional: string; modern: string };
  versions: { traditional: Version; modern: Version };
};

export const recipes: RecipePair[] = [
  {
    id: "souvlaki",
    slug: "chicken-souvlaki",
    title: "Chicken Souvlaki",
    subtitle: "Charcoal classic vs. air-fryer express",
    tags: ["traditional","modern","poultry","greek","30–90m"],
    images: {
      traditional: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1200",
      modern: "https://images.unsplash.com/photo-1561047029-3000e62f0e9d?q=80&w=1200",
    },
    versions: {
      traditional: {
        time: "Hands-on 25m + 2h marinate",
        yield: "2 servings",
        ingredients: [
          "600 g chicken thighs",
          "150 g Greek yoghurt",
          "1 lemon",
          "4 garlic cloves",
          "2 tsp dried oregano",
          "Salt & pepper",
        ],
        steps: [
          "Whisk yoghurt, lemon, garlic, oregano, salt, pepper.",
          "Marinate chicken 2–12 h. Thread onto skewers.",
          "Grill over medium-high coals, 8–10 min, turning.",
          "Rest 3 min. Serve with pita and salad.",
        ],
      },
      modern: {
        time: "Hands-on 15m",
        yield: "2 servings",
        ingredients: [
          "600 g chicken thigh fillets",
          "100 g Greek yoghurt",
          "1 lemon",
          "3 garlic cloves",
          "1½ tsp dried oregano",
          "Salt & pepper",
        ],
        steps: [
          "Blitz marinade 20s. Toss chicken; rest 15–20 min.",
          "Air-fry 200 °C / 392 °F, 8–10 min, shake halfway.",
          "Optional: finish on hot pan 1 min per side for char.",
          "Serve in wraps with tzatziki and salad.",
        ],
      },
    },
  },
  {
    id: "pesto-pasta",
    slug: "pesto-pasta",
    title: "Pesto Pasta",
    subtitle: "Mortar & pestle vs. blender blitz",
    tags: ["traditional","modern","veg","15m","italian"],
    images: {
      traditional: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200",
      modern: "https://images.unsplash.com/photo-1481931098730-318b6f776db0?q=80&w=1200",
    },
    versions: {
      traditional: {
        time: "15–20m",
        yield: "2 servings",
        ingredients: [
          "50 g basil leaves",
          "30 g pine nuts, toasted",
          "1 small garlic clove",
          "40 g Parmigiano Reggiano, grated",
          "60 ml extra virgin olive oil",
          "Salt",
          "200 g pasta",
        ],
        steps: [
          "Pound garlic + salt, then basil to paste in mortar.",
          "Work in nuts, cheese, then olive oil.",
          "Boil pasta until al dente. Reserve some water.",
          "Toss with pesto, loosen with pasta water if needed.",
        ],
      },
      modern: {
        time: "10–12m",
        yield: "2 servings",
        ingredients: [
          "50 g basil leaves",
          "30 g pine nuts",
          "1 small garlic clove",
          "40 g Parmesan",
          "60 ml olive oil",
          "Squeeze lemon (optional)",
          "200 g pasta",
        ],
        steps: [
          "Blend basil, nuts, garlic, cheese, oil (30–45s).",
          "Boil pasta to al dente.",
          "Toss with pesto, adjust texture with pasta water.",
        ],
      },
    },
  },
];

export function getRecipe(slug: string) {
  return recipes.find((r) => r.slug === slug);
}
