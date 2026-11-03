
import { useState } from "react";
import {
  ArrowUpRight,
  Building2,
  Droplets,
  HeartPulse,
  Lightbulb,
  Map,
  Route,
  Store,
  type LucideIcon,
} from "lucide-react";

type Project = {
  title: string;
  category: string;
  location: string;
  description: string;
  icon: LucideIcon;
};

const projects: Project[] = [
  {
    title: "Kalimoni Ward Drainage Works",
    category: "Roads & Transport",
    location: "Kalimoni Ward",
    description:
      "Proposed installation of culverts and drainage works to improve stormwater management in the area.",
    icon: Route,
  },
  {
    title: "Integrated Solar Street Lighting",
    category: "Energy",
    location: "Across 12 sub-counties",
    description:
      "A county tender notice for the supply and installation of 4,000 integrated solar street lights.",
    icon: Lightbulb,
  },
  {
    title: "Githiga Bridge",
    category: "Roads & Transport",
    location: "Githiga Ward, Githunguri",
    description:
      "Proposed construction of a bridge intended to improve local connectivity and movement.",
    icon: Map,
  },
  {
    title: "Kamuguga Water Project",
    category: "Water",
    location: "Kabete Sub-county",
    description:
      "Proposed borehole equipping and solarisation to support access to water.",
    icon: Droplets,
  },
  {
    title: "Mwiki Level III Hospital",
    category: "Health",
    location: "Mwiki Ward",
    description:
      "A proposed county health facility construction project listed in the county's tender notices.",
    icon: HeartPulse,
  },
  {
    title: "Kambaa Market Complex",
    category: "Markets",
    location: "Githiga Ward, Githunguri",
    description:
      "Proposed construction of a market complex to support local trade and business activity.",
    icon: Store,
  },
];

const categories = [
  "All",
  "Roads & Transport",
  "Water",
  "Health",
  "Markets",
  "Energy",
];

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <div className="bg-cream text-forest">

      {/* Hero Section */}
      <section className="bg-forest px-6 py-24 text-white lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1400px]">
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.25em] text-sage">
            County Development
          </p>

          <h1 className="max-w-4xl text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
            Development that
            <span className="block text-sage">shapes our future.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
            Explore selected development projects and procurement
            notices published by the County Government of Kiambu.
            Stay informed about the plans and priorities shaping
            our communities.
          </p>
        </div>
      </section>

      {/* Projects Introduction */}
      <section className="px-6 py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-primary-green">
              Explore Development
            </p>

            <h2 className="text-4xl font-extrabold leading-tight md:text-5xl">
              What's happening across Kiambu?
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-forest/70">
              From roads and water to healthcare and local markets,
              development affects every community differently.
              Explore some of the projects appearing in official
              county procurement notices.
            </p>
          </div>

          {/* Category Filters */}
          <div className="mt-12 flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-6 py-3 text-sm font-semibold transition ${
                  activeCategory === category
                    ? "border-forest bg-forest text-white"
                    : "border-forest/20 bg-white text-forest hover:border-forest hover:bg-sage/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Project Cards */}
          <div className="mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {filteredProjects.map((project) => {
              const Icon = project.icon;

              return (
                <article
                  key={project.title}
                  className="flex flex-col rounded-2xl border border-forest/10 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-sage/30 text-primary-green">
                      <Icon size={28} />
                    </div>

                    <span className="rounded-full bg-gold/15 px-4 py-2 text-xs font-bold text-forest">
                      Tender listing
                    </span>
                  </div>

                  <p className="mt-8 text-sm font-bold uppercase tracking-wider text-primary-green">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-extrabold leading-snug">
                    {project.title}
                  </h3>

                  <p className="mt-3 flex items-center gap-2 text-sm font-medium text-forest/55">
                    <Map size={16} />
                    {project.location}
                  </p>

                  <p className="mt-5 flex-1 text-base leading-relaxed text-forest/70">
                    {project.description}
                  </p>

                  <a
                    href="https://kiambu.go.ke/tenders/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2 border-t border-forest/10 pt-6 font-bold text-primary-green transition hover:text-gold"
                  >
                    View official notice
                    <ArrowUpRight size={18} />
                  </a>
                </article>
              );
            })}
          </div>

          {filteredProjects.length === 0 && (
            <p className="mt-12 text-lg text-forest/60">
              No projects found in this category.
            </p>
          )}
        </div>
      </section>

      {/* Important Information */}
      <section className="bg-white px-6 py-20 lg:px-12 lg:py-24">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-8 rounded-2xl bg-cream p-8 md:flex-row md:items-center md:p-12">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary-green/10 text-primary-green">
            <Building2 size={32} />
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-extrabold">
              Want the official project details?
            </h2>

            <p className="mt-3 max-w-3xl leading-relaxed text-forest/70">
              These entries are drawn from county tender listings.
              A tender notice does not confirm that a project has
              been awarded, started or completed. Visit the county
              website for the original notices and updates.
            </p>
          </div>

          <a
            href="https://kiambu.go.ke/tenders/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-forest px-7 py-4 font-bold text-white transition hover:bg-primary-green"
          >
            County Notices
            <ArrowUpRight size={19} />
          </a>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-primary-green px-6 py-24 text-white lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-sage">
            Your Voice Matters
          </p>

          <h2 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl">
            Development works better when communities take part.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            Share your thoughts on the priorities that matter
            to your ward and your community.
          </p>

          <a
            href="/participate"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-sage px-8 py-4 font-bold text-forest transition hover:bg-white"
          >
            Participate
            <ArrowUpRight size={20} />
          </a>
        </div>
      </section>

    </div>
  );
}

export default Projects;
