export default function Shop(){
  const items = [
    {
      title: "12-inch Cast Iron Skillet",
      brand: "Lodge (example)",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200",
      blurb: "Workhorse pan for searing, roasting, and serving.",
      price: "$40–60",
      href: "#cast-iron-affiliate-link"
    },
    {
      title: "Countertop Air Fryer",
      brand: "Ninja (example)",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476e?q=80&w=1200",
      blurb: "Fast, crispy results for modern versions.",
      price: "$80–150",
      href: "#airfryer-affiliate-link"
    },
    {
      title: "Kosher Salt",
      brand: "Diamond Crystal (example)",
      image: "https://images.unsplash.com/photo-1604908554027-962d8c3c8b6c?q=80&w=1200",
      blurb: "Consistent grain for easier seasoning.",
      price: "$6–10",
      href: "#salt-affiliate-link"
    },
    {
      title: "Instant-Read Thermometer",
      brand: "Thermapen (example)",
      image: "https://images.unsplash.com/photo-1604908177090-05f32c9dc625?q=80&w=1200",
      blurb: "Nail doneness with confidence.",
      price: "$30–90",
      href: "#thermometer-affiliate-link"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold">Recommended Gear & Pantry</h1>
        <p className="text-sm opacity-80">Disclosure: some links may be affiliate. We may earn a commission at no cost to you.</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p)=> (
          <article key={p.title} className="overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
            <img src={p.image} alt={p.title} className="aspect-[4/3] w-full object-cover" />
            <div className="space-y-2 p-4">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-sm opacity-80">{p.brand}</p>
              <p className="text-sm">{p.blurb}</p>
              <div className="flex items-center justify-between pt-1">
                <span className="text-sm opacity-80">{p.price}</span>
                <a
                  href={p.href}
                  target="_blank"
                  rel="nofollow sponsored noopener"
                  className="rounded-full bg-black text-white px-4 py-2 text-sm font-semibold"
                >
                  View
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
