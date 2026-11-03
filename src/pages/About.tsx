
import {
  Users,
  MessageSquare,
  Eye,
  Handshake,
  ArrowRight,
} from "lucide-react";

function About() {
  return (
    <div className="bg-cream text-forest">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-forest px-6 py-24 text-white lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1400px]">
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.25em] text-sage">
            About Sisi
          </p>

          <h1 className="max-w-4xl text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
            A county that listens.
            <span className="block text-sage">
              A community that leads.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
            Sisi is a civic participation platform created to bring
            communities closer to county decision-making and make it
            easier for residents to have their voices heard.
          </p>
        </div>

        <div className="pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full border border-white/10" />
      </section>

      {/* Introduction */}
      <section className="px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-primary-green">
              Who We Are
            </p>

            <h2 className="text-4xl font-extrabold leading-tight md:text-5xl">
              Sisi means <span className="text-primary-green">us.</span>
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-relaxed text-forest/75">
              <p>
                Sisi is built around a simple belief: the people who live
                in a community should have a meaningful role in shaping
                its future.
              </p>

              <p>
                From public projects and county budgets to local
                development priorities, residents deserve accessible
                information and opportunities to contribute to decisions
                that affect their everyday lives.
              </p>

              <p>
                We are starting in Kiambu County, creating a space where
                residents can discover, participate and stay informed
                about matters affecting their communities.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=85"
              alt="Community members gathered together"
              className="h-[420px] w-full rounded-2xl object-cover lg:h-[540px]"
            />

            <div className="absolute -bottom-8 -left-4 rounded-xl bg-primary-green p-7 text-white shadow-xl md:-left-8">
              <p className="text-3xl font-extrabold">47</p>
              <p className="mt-1 text-sm text-white/80">
                Counties. One shared voice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="bg-white px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-16 max-w-3xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-primary-green">
              Our Purpose
            </p>

            <h2 className="text-4xl font-extrabold leading-tight md:text-5xl">
              Building a stronger relationship between people and
              their county.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-forest p-10 text-white md:p-12">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-sage/15">
                <Eye size={28} className="text-sage" />
              </div>

              <h3 className="text-2xl font-bold">Our Vision</h3>

              <p className="mt-5 text-lg leading-relaxed text-white/75">
                A future where every resident has the opportunity,
                information and confidence to participate in shaping
                their community.
              </p>
            </div>

            <div className="rounded-2xl bg-cream p-10 md:p-12">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-primary-green/10">
                <Handshake size={28} className="text-primary-green" />
              </div>

              <h3 className="text-2xl font-bold">Our Mission</h3>

              <p className="mt-5 text-lg leading-relaxed text-forest/75">
                To make civic participation more accessible by
                connecting residents with information, opportunities
                and channels for engagement with county governance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Stand For */}
      <section className="px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-16 max-w-3xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-primary-green">
              Our Values
            </p>

            <h2 className="text-4xl font-extrabold md:text-5xl">
              What we stand for.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-forest/70">
              Meaningful participation starts with trust, access and
              a shared commitment to building better communities.
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <Users size={34} className="text-primary-green" />
              <h3 className="mt-6 text-xl font-bold">Inclusivity</h3>
              <p className="mt-4 leading-relaxed text-forest/70">
                Every resident should have an opportunity to contribute,
                regardless of their background or location.
              </p>
            </div>

            <div>
              <Eye size={34} className="text-primary-green" />
              <h3 className="mt-6 text-xl font-bold">Transparency</h3>
              <p className="mt-4 leading-relaxed text-forest/70">
                Access to clear and understandable information helps
                residents make informed contributions.
              </p>
            </div>

            <div>
              <MessageSquare size={34} className="text-primary-green" />
              <h3 className="mt-6 text-xl font-bold">Participation</h3>
              <p className="mt-4 leading-relaxed text-forest/70">
                Communities should be involved in conversations and
                decisions that shape their everyday lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-primary-green px-6 py-24 text-white lg:px-12 lg:py-32">
        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-10 md:flex-row md:items-center">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-sage">
              Be Part of the Change
            </p>

            <h2 className="text-4xl font-extrabold leading-tight md:text-5xl">
              Your community. Your voice. Your future.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-white/75">
              A better county begins when people take part.
            </p>
          </div>

          <a
            href="/participate"
            className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-sage px-8 py-4 font-bold text-forest transition hover:bg-white"
          >
            Get Involved
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

    </div>
  );
}

export default About;
