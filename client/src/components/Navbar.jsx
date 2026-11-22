
import { useState } from "react";
import { Menu, X, Plane } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ["Home", "/"],
    ["Flights", "/flights"],
    ["Hotels", "/hotels"],
    ["Holidays", "/packages"],
    ["Destinations", "/destinations"],
    ["About", "/about"],
  ];

  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">

        <a href="/" className="flex items-center gap-2 text-2xl font-bold text-white">
          <Plane className="h-7 w-7" />
          <span>
            Voyage<span className="text-orange-400">.</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map(([name, path]) => (
            <a
              key={name}
              href={path}
              className="text-sm font-medium text-white/90 transition hover:text-orange-400"
            >
              {name}
            </a>
          ))}
        </div>

        <a
          href="/contact"
          className="hidden rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600 md:block"
        >
          Contact Us
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={27} /> : <Menu size={27} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="mx-4 rounded-2xl bg-white p-5 shadow-xl md:hidden">
          {links.map(([name, path]) => (
            <a
              key={name}
              href={path}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-gray-100 py-3 text-gray-800"
            >
              {name}
            </a>
          ))}

          <a
            href="/contact"
            className="mt-4 block rounded-xl bg-orange-500 p-3 text-center font-semibold text-white"
          >
            Contact Us
          </a>
        </div>
      )}
    </header>
  );
}
