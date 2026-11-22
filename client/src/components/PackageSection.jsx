
import { ArrowRight, Clock } from "lucide-react";

const packages = [
  {
    title: "Bali Island Escape",
    location: "Bali, Indonesia",
    duration: "6 Nights / 7 Days",
    price: "₹45,000",
    image: "photo-1537996194471-e657df975ab4",
    tag: "Popular",
  },
  {
    title: "Dubai Luxury Experience",
    location: "Dubai, UAE",
    duration: "4 Nights / 5 Days",
    price: "₹38,000",
    image: "photo-1512453979798-5ea266f8880c",
    tag: "Trending",
  },
  {
    title: "Maldives Paradise",
    location: "Maldives",
    duration: "5 Nights / 6 Days",
    price: "₹65,000",
    image: "photo-1514282401047-d79a71a590e8",
    tag: "Featured",
  },
];

export default function PackageSection() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-12 text-center">
          <p className="font-semibold uppercase tracking-widest text-orange-500">
            Handpicked experiences
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900 md:text-5xl">
            Explore Our Packages
          </h2>

          <p className="mt-4 text-gray-500">
            Carefully curated journeys for every traveller.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=900&q=85`}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 hover:scale-110"
                />

                <span className="absolute left-5 top-5 rounded-full bg-orange-500 px-4 py-2 text-xs font-bold text-white">
                  {item.tag}
                </span>
              </div>

              <div className="p-6">
                <p className="text-sm text-gray-500">
                  📍 {item.location}
                </p>

                <h3 className="mt-2 text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <div className="mt-5 flex items-center gap-2 text-sm text-gray-500">
                  <Clock size={17} />
                  {item.duration}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-5">
                  <div>
                    <p className="text-xs text-gray-400">
                      Starting from
                    </p>

                    <p className="text-xl font-bold text-gray-900">
                      {item.price}
                    </p>
                  </div>

                  <a
                    href="/enquiry"
                    className="flex items-center gap-2 font-semibold text-orange-500 hover:text-orange-600"
                  >
                    Explore <ArrowRight size={17} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="/packages"
            className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-8 py-4 font-semibold text-white transition hover:bg-orange-500"
          >
            View All Packages <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
