import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const subCounties = [
  "Gatundu North",
  "Gatundu South",
  "Githunguri",
  "Juja",
  "Kabete",
  "Kiambaa",
  "Kiambu",
  "Kikuyu",
  "Lari",
  "Limuru",
  "Ruiru",
  "Thika",
];

function ExploreWards() {
  return (
    <section className="overflow-hidden bg-[#E9EDE3] px-6 py-18 lg:px-12 lg:py-26">
      <div className="mx-auto max-w-[1400px]">

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Left Content */}
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-primary-green">
              Discover your community
            </span>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              60 wards.
              <br />
              <span className="text-primary-green">
                One Kiambu.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-8 text-forest/70">
              Every ward has its own identity, people and priorities.
              Find your area and discover the communities that make
              Kiambu what it is.
            </p>

            <Link
              to="/wards"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-forest px-7 py-4 text-base font-bold text-white transition-all hover:bg-primary-green"
            >
              Explore All 60 Wards
              <ArrowRight size={20} />
            </Link>
          </div>

          {/* Sub-county list */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {subCounties.map((name, index) => (
              <Link
                to="/wards"
                key={name}
                className="group flex items-center gap-3 border border-forest/10 bg-white/70 p-4 transition-all duration-300 hover:border-primary-green hover:bg-forest hover:text-white sm:p-5"
              >
                <MapPin
                  size={19}
                  className="shrink-0 text-primary-green transition-colors group-hover:text-sage"
                />

                <span className="text-sm font-bold sm:text-base">
                  {name}
                </span>

                <span className="ml-auto text-xs text-forest/35 group-hover:text-white/50">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default ExploreWards;
