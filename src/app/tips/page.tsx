import Link from "next/link";

export default function Tips(){
  const tips = [
    {
      slug: "seasoning-cast-iron",
      title: "Seasoning a Cast-Iron Pan",
      desc: "Build a slick, durable nonstick surface in under an hour.",
      image: "https://images.unsplash.com/photo-1584275141666-514972b252fc?q=80&w=1200",
    },
    {
      slug: "salt-like-a-chef",
      title: "Salt Like a Chef",
      desc: "How and when to salt for balanced flavor.",
      image: "https://images.unsplash.com/photo-1505575972945-2804b0f1f3d0?q=80&w=1200",
    },
    {
      slug: "knife-sharpening-101",
      title: "Knife Sharpening 101",
      desc: "Simple steps to restore a razor edge at home.",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200",
    },
    {
      slug: "air-fryer-basics",
      title: "Air Fryer Basics",
      desc: "Settings that actually work for weeknight cooking.",
      image: "https://images.unsplash.com/photo-1615293782912-b6f519f66843?q=80&w=1200",
    }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl md:text-4xl font-bold">Tips & Techniques</h1>
      <p className="opacity-80">Quick reads that link to deeper blog posts.</p>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {tips.map((t) => (
          <Link key={t.slug} href={`/#blog/${t.slug}`} className="overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
            <img src={t.image} alt={t.title} className="aspect-[16/9] w-full object-cover" />
            <div className="space-y-1 p-4">
              <h3 className="font-semibold">{t.title}</h3>
              <p className="text-sm opacity-80">{t.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
