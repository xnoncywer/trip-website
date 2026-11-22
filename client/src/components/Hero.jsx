import { ArrowRight, Play } from "lucide-react";


export default function Hero() {
return (
<section
className="relative flex min-h-[720px] items-center bg-cover bg-center"
style={{
backgroundImage:
"linear-gradient(90deg, rgba(8,20,35,0.85), rgba(8,20,35,0.25)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85')"
}}
>
<div className="mx-auto w-full max-w-7xl px-5 pb-28 pt-36 lg:px-8">
<div className="max-w-3xl">

<span className="mb-6 inline-flex rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-md">
✦ Discover the world with us
</span>

<h1 className="text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
Explore the world.
<br />
<span className="text-orange-400">
Live your story.
</span>
</h1>

<p className="mt-7 max-w-xl text-base leading-8 text-white/80 md:text-lg">
Discover incredible destinations, unforgettable experiences
and journeys designed around you.
</p>

<div className="mt-9 flex flex-wrap gap-4">
<a
              href="/packages"
              className="flex items-center gap-2 rounded-full bg-orange-500 px-7 py-4 font-semibold text-white transition hover:bg-orange-600"
            >
Explore Packages
<ArrowRight size={19} />
</a>

<a
              href="#destinations"
              className="flex items-center gap-2 rounded-full border border-white/50 px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-gray-900"
            >
Discover More
<Play size={17} />
</a>
</div>

<div className="mt-14 flex flex-wrap gap-12 text-white">
<div>
<h3 className="text-3xl font-bold">50+</h3>
<p className="mt-1 text-sm text-white/70">Destinations</p>
</div>
<div>
<h3 className="text-3xl font-bold">100+</h3>
<p className="mt-1 text-sm text-white/70">Experiences</p>
</div>
<div>
<h3 className="text-3xl font-bold">24/7</h3>
<p className="mt-1 text-sm text-white/70">Travel Support</p>
</div>
</div>

</div>
</div>

<div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-white to-transparent" />
</section>
);
}