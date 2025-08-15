export default function Subscribe(){return(
  <div className="space-y-4">
    <h1 className="text-3xl md:text-4xl font-bold">Subscribe</h1>
    <p>Get five paired recipes each week — one traditional, one fast modern twist.</p>
    <form className="flex max-w-md gap-2">
      <input type="email" required placeholder="you@example.com"
        className="w-full rounded-md border border-white/20 bg-transparent px-3 py-2" />
      <button className="rounded-full bg-white px-4 py-2 font-semibold text-black">Subscribe</button>
    </form>
    <p className="text-sm opacity-80">We’ll replace this with your email provider’s embed + double opt-in.</p>
  </div>
);}
