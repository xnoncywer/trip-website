
import { ArrowUpRight } from "lucide-react";

const destinations = [
  {
    name: "Bali",
    country: "Indonesia",
    image: "photo-1537996194471-e657df975ab4",
  },
  {
    name: "Dubai",
    country: "United Arab Emirates",
    image: "photo-1512453979798-5ea266f8880c",
  },
  {
    name: "Maldives",
    country: "Indian Ocean",
    image: "photo-1514282401047-d79a71a590e8",
  },
  {
    name: "Switzerland",
    country: "Europe",
    image: "photo-1531366936337-7c912a4589a7",
  },
];

export default function DestinationSection() {
  return (
    <section
      id="destinations"
      className="mx-auto max-w-7xl px-5 py-24 lg:px-8"
    >
      <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
        <div>
          <p className="mb-3 font-semibold uppercase tracking-widest text-orange-500">
            Explore the world
          </p>

          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Popular Destinations
          </h2>

          <p className="mt-4 text-gray-500">
            Find your next favourite destination.
          </p>
        </div>

        <a
          href="/destinations"
          className="font-semibold text-orange-500 hover:text-orange-600"
        >
          View All Destinations →
        </a>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {destinations.map((place) => (
          <a
            key={place.name}
            href={`/destinations/${place.name.toLowerCase()}`}
            className="group relative h-[360px] overflow-hidden rounded-3xl"
          >
            <img
              src={`https://images.unsplash.com/${place.image}?auto=format&fit=crop&w=800&q=85`}
              alt={place.name}
              loading="lazy"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm text-white/80">{place.country}</p>
              <h3 className="mt-1 text-3xl font-bold">{place.name}</h3>
            </div>

            <div className="absolute right-5 top-5 rounded-full bg-white p-3 text-gray-900 transition group-hover:bg-orange-500 group-hover:text-white">
              <ArrowUpRight size={20} />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
