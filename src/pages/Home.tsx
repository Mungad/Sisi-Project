
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  MapPin,
} from "lucide-react";

import CountyStats from "../components/homepage/CountyStats";
import FeaturedProjects from "../components/homepage/FeaturedProjects";
import ExploreWards from "../components/homepage/ExploreWards";
import ParticipationSection from "../components/homepage/ParticipationSection";
import ClosingCTA from "../components/homepage/ClosingCTA";

function Home() {
  return (
    <div className="bg-cream">

      {/* HERO SECTION */}
      <section className="relative min-h-[680px] overflow-hidden bg-forest lg:min-h-[760px]">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(9, 35, 25, 0.92) 0%, rgba(9, 35, 25, 0.65) 55%, rgba(9, 35, 25, 0.15) 100%), url('https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=2000&q=85')",
          }}
        />

        <div className="relative z-10 mx-auto flex min-h-[680px] max-w-[1400px] flex-col justify-center px-6 py-20 lg:min-h-[760px] lg:px-12">

          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-12 bg-sage" />
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-sage">
              Welcome to Kiambu County
            </span>
          </div>

          <h1 className="max-w-5xl text-6xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-7xl lg:text-8xl xl:text-9xl">
            OUR COUNTY.
            <br />
            <span className="text-sage">OUR VOICE.</span>
            <br />
            OUR FUTURE.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
            Kiambu belongs to all of us. Discover what is happening
            in your community, explore development projects and
            take part in shaping the future of our county.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/projects"
              className="inline-flex items-center gap-3 rounded-full bg-sage px-8 py-4 font-bold text-forest transition-all duration-300 hover:bg-white"
            >
              Explore Our County
              <ArrowUpRight size={20} />
            </a>

            <a
              href="/participate"
              className="inline-flex items-center gap-3 rounded-full border border-white/50 px-8 py-4 font-bold text-white transition-all duration-300 hover:bg-white hover:text-forest"
            >
              Have Your Say
              <ArrowRight size={20} />
            </a>
          </div>

          <div className="mt-20 flex items-center gap-3 text-sm text-white/60">
            <MapPin size={17} className="text-sage" />
            <span>Kiambu County, Kenya</span>
          </div>

        </div>

        <div className="absolute bottom-8 right-12 hidden items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/70 lg:flex">
          Scroll to explore
          <ArrowDown size={17} />
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto grid max-w-[1400px] gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center lg:px-12 lg:py-32">

        <div>
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-primary-green">
            About Sisi
          </span>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Kiambu is ours.
            <br />
            Its future is
            <span className="text-primary-green"> ours to shape.</span>
          </h2>

          <p className="mt-7 max-w-xl text-lg leading-8 text-forest/70">
            Sisi is a civic engagement platform created to bring
            the people of Kiambu County closer to the decisions
            and developments that affect their everyday lives.
          </p>

          <p className="mt-5 max-w-xl text-lg leading-8 text-forest/70">
            We believe that meaningful development starts when
            communities are informed, involved and empowered
            to make their voices heard.
          </p>

          <a
            href="/about"
            className="mt-9 inline-flex items-center gap-3 border-b-2 border-primary-green pb-2 text-base font-bold text-primary-green transition-all hover:gap-5"
          >
            Discover Our Story
            <ArrowRight size={19} />
          </a>
        </div>

        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1200&q=85"
            alt="Green landscape representing Kiambu County"
            className="h-[400px] w-full rounded-sm object-cover md:h-[520px]"
          />

          <div className="absolute -bottom-6 -left-3 bg-forest p-7 text-white md:-left-8 md:p-9">
            <p className="text-4xl font-extrabold text-sage">47</p>
            <p className="mt-2 text-sm font-medium uppercase tracking-wider">
              Counties. One Kenya.
            </p>
          </div>
        </div>

      </section>

      {/* COUNTY STATISTICS */}
      <CountyStats />

      {/* FEATURED DEVELOPMENT SECTORS */}
      <FeaturedProjects />

      {/* EXPLORE WARDS */}
      <ExploreWards />

      {/* PUBLIC PARTICIPATION */}
      <ParticipationSection />

      {/* CLOSING CTA */}
      <ClosingCTA />

    </div>
  );
}

export default Home;
