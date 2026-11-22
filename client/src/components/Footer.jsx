export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-8">

        <div>
          <a href="/" className="text-2xl font-bold">
            Voyage<span className="text-orange-400">.</span>
          </a>

          <p className="mt-5 max-w-xs text-sm leading-7 text-gray-400">
            Discover beautiful destinations and create unforgettable travel
            experiences with Voyage.
          </p>
        </div>

        <div>
          <h3 className="mb-5 font-semibold">Quick Links</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><a href="/" className="hover:text-orange-400">Home</a></li>
            <li><a href="/flights" className="hover:text-orange-400">Flights</a></li>
            <li><a href="/hotels" className="hover:text-orange-400">Hotels</a></li>
            <li><a href="/packages" className="hover:text-orange-400">Packages</a></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-semibold">Support</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li><a href="/about" className="hover:text-orange-400">About Us</a></li>
            <li><a href="/contact" className="hover:text-orange-400">Contact</a></li>
            <li><a href="/privacy" className="hover:text-orange-400">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-orange-400">Terms & Conditions</a></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 font-semibold">Connect With Us</h3>
          <p className="text-sm text-gray-400">
            Follow Voyage for travel inspiration and updates.
          </p>
          <p className="mt-4 text-sm text-orange-400">
            Instagram | LinkedIn | Facebook
          </p>
        </div>

      </div>

      <div className="border-t border-gray-800 px-5 py-6 text-center text-sm text-gray-500">
        © 2026 Voyage. All rights reserved.
      </div>
    </footer>
  );
}