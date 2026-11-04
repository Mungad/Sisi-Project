import { ArrowUpRight, Building2, Droplets, GraduationCap, HeartPulse } from "lucide-react";
import { Link } from "react-router-dom";

const sectors = [
  {
    title: "Infrastructure",
    description:
      "Roads, public facilities and infrastructure that connect our communities.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=85",
    icon: Building2,
    number: "01",
  },
  {
    title: "Water & Environment",
    description:
      "Water access, environmental conservation and sustainable communities.",
    image:
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=900&q=85",
    icon: Droplets,
    number: "02",
  },
  {
    title: "Education",
    description:
      "Learning opportunities and better facilities for future generations.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=85",
    icon: GraduationCap,
    number: "03",
  },
  {
    title: "Healthcare",
    description:
      "Accessible healthcare services and stronger community health facilities.",
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=85",
    icon: HeartPulse,
    number: "04",
  },
];

function FeaturedProjects() {
  return (
    <section className="bg-cream px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1400px]">

        {/* Heading */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-primary-green">
              Development & progress
            </span>

            <h2 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Building a better
              <span className="text-primary-green"> Kiambu.</span>
            </h2>

            <p className="mt-5 max-w-xl text-lg leading-8 text-forest/65">
              Explore the sectors that shape everyday life and
              contribute to the growth of our communities.
            </p>
          </div>

          <Link
            to="/projects"
            className="inline-flex shrink-0 items-center gap-3 border-b-2 border-primary-green pb-2 text-base font-bold text-primary-green transition-all hover:gap-5"
          >
            Explore Development
            <ArrowUpRight size={20} />
          </Link>
        </div>

        {/* Sector Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((sector) => {
            const Icon = sector.icon;

            return (
              <Link
                to="/projects"
                key={sector.number}
                className="group overflow-hidden bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={sector.image}
                    alt={sector.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-forest/75 to-transparent" />

                  <span className="absolute left-5 top-5 text-sm font-bold text-white">
                    {sector.number}
                  </span>

                  <div className="absolute bottom-5 left-5 flex items-center gap-3 text-white">
                    <Icon size={23} />
                    <span className="font-bold">{sector.title}</span>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-base leading-7 text-forest/65">
                    {sector.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm font-bold text-primary-green">
                    Explore sector
                    <ArrowUpRight size={17} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <p className="mt-6 text-xs text-forest/45">
          These are development sectors, not representations of
          specific verified county projects.
        </p>

      </div>
    </section>
  );
}

export default FeaturedProjects;
