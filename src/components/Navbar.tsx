
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Wards", path: "/wards" },
  { name: "Participate", path: "/participate" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-forest text-white shadow-md">
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-12">

        {/* Logo */}
        <a href="/" className="flex flex-col leading-none">
          <span className="text-4xl font-black tracking-tighter">
            SISI<span className="text-sage">.</span>
          </span>
          <span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-sage">
            Kiambu County
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-9 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-base font-medium text-white/85 transition-colors duration-200 hover:text-sage"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="/participate"
          className="hidden items-center gap-2 rounded-full bg-sage px-6 py-3.5 text-base font-bold text-forest transition-all duration-300 hover:bg-white lg:flex"
        >
          Have Your Say
          <ArrowUpRight size={19} />
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-forest px-6 pb-6 lg:hidden">
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/10 py-5 text-lg font-medium text-white/90 transition-colors hover:text-sage"
              >
                {link.name}
              </a>
            ))}

            <a
              href="/participate"
              onClick={() => setMenuOpen(false)}
              className="mt-5 flex items-center justify-center gap-2 rounded-full bg-sage px-5 py-4 text-base font-bold text-forest transition-colors hover:bg-white"
            >
              Have Your Say
              <ArrowUpRight size={19} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
