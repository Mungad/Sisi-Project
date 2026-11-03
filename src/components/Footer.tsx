import { ArrowUpRight, MapPin } from "lucide-react";

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Our Projects", path: "/projects" },
  { name: "Wards", path: "/wards" },
  { name: "Participate", path: "/participate" },
  { name: "Contact", path: "/contact" },
];

function Footer() {
  return (
    <footer className="bg-forest text-white">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-20 md:grid-cols-2 lg:grid-cols-4 lg:px-12">

        {/* Brand */}
        <div className="lg:col-span-2">
          <a href="/" className="inline-block">
            <h2 className="text-5xl font-black tracking-tighter">
              SISI<span className="text-sage">.</span>
            </h2>
          </a>

          <p className="mt-6 max-w-lg text-base leading-8 text-white/70">
            Our County. Our Voice. Our Future.

            Sisi is a platform for the people of Kiambu County
            to connect with development, access information
            and participate in shaping their communities.
          </p>

          <div className="mt-7 flex items-center gap-3 text-base text-sage">
            <MapPin size={20} />
            <span>Kiambu County, Kenya</span>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-7 text-base font-bold uppercase tracking-[0.2em] text-sage">
            Explore
          </h3>

          <ul className="space-y-5">
            {footerLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.path}
                  className="text-base text-white/75 transition-colors hover:text-sage"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Get Involved */}
        <div>
          <h3 className="mb-7 text-base font-bold uppercase tracking-[0.2em] text-sage">
            Get Involved
          </h3>

          <p className="text-base leading-8 text-white/70">
            Your voice matters. Take part in conversations
            and initiatives shaping the future of Kiambu.
          </p>

          <a
            href="/participate"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-sage px-6 py-4 text-base font-bold text-forest transition-all hover:bg-white"
          >
            Participate Now
            <ArrowUpRight size={19} />
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 px-6 py-7 text-center md:flex-row md:px-12 md:text-left">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Sisi. All rights reserved.
          </p>

          <p className="text-sm font-medium tracking-wide text-white/60">
            MADE FOR THE PEOPLE OF KIAMBU COUNTY.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
