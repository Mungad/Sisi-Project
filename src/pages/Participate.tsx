
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  FileText,
  Handshake,
  Lightbulb,
  MessageSquare,
  Users,
  Vote,
} from "lucide-react";

const participationWays = [
  {
    icon: MessageSquare,
    title: "Share your views",
    description:
      "Express your opinions, concerns and recommendations on county proposals and decisions.",
  },
  {
    icon: Users,
    title: "Attend public forums",
    description:
      "Take part in community meetings and public consultation forums organised by the county.",
  },
  {
    icon: FileText,
    title: "Submit written memoranda",
    description:
      "Prepare written recommendations on proposed bills, budgets, development plans and policies.",
  },
  {
    icon: Lightbulb,
    title: "Suggest development priorities",
    description:
      "Highlight challenges in your ward and suggest projects or improvements that your community needs.",
  },
];

const participationSteps = [
  {
    number: "01",
    title: "Stay informed",
    description:
      "Follow county announcements and look out for invitations to public participation exercises.",
  },
  {
    number: "02",
    title: "Understand the issue",
    description:
      "Read the relevant proposal, budget, bill or development plan before sharing your views.",
  },
  {
    number: "03",
    title: "Prepare your contribution",
    description:
      "Identify the issue, explain how it affects your community and suggest practical solutions.",
  },
  {
    number: "04",
    title: "Submit your views",
    description:
      "Attend the announced forum or submit your written memorandum through the official channel and before the stated deadline.",
  },
];

function Participate() {
  return (
    <div className="bg-cream text-forest">

      {/* Hero Section */}
      <section className="bg-forest px-6 py-24 text-white lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1400px]">
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.25em] text-sage">
            Civic Engagement
          </p>

          <h1 className="max-w-4xl text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
            Your voice is
            <span className="block text-sage">part of the change.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
            County decisions affect your everyday life. From roads
            and healthcare to budgets and development projects,
            you have a role to play in shaping your community.
          </p>

          <a
            href="#how-to-participate"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-sage px-8 py-4 font-bold text-forest transition hover:bg-white"
          >
            Learn how to participate
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-primary-green">
              Why Participate?
            </p>

            <h2 className="text-4xl font-extrabold leading-tight md:text-5xl">
              County development should include the people it serves.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-relaxed text-forest/75">
              <p>
                Public participation gives residents an opportunity
                to contribute to decisions made by their county
                government.
              </p>

              <p>
                It allows communities to raise concerns, suggest
                solutions, question proposals and communicate the
                priorities that matter most to them.
              </p>

              <p>
                Participation is not just about attending a meeting.
                It is about being informed, speaking up and helping
                shape decisions that affect your future.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-primary-green p-10 text-white md:p-14">
            <Vote size={42} className="text-sage" />

            <h3 className="mt-8 text-3xl font-extrabold">
              Your contribution matters.
            </h3>

            <p className="mt-6 text-lg leading-relaxed text-white/75">
              The Constitution of Kenya recognises public participation
              as an important principle of governance. Residents have
              opportunities to contribute to county planning,
              legislation and public finance processes.
            </p>

            <p className="mt-8 border-t border-white/15 pt-6 text-sm font-semibold text-sage">
              Article 10 · Article 201 · Constitution of Kenya, 2010
            </p>
          </div>
        </div>
      </section>

      {/* Ways to Participate */}
      <section className="bg-white px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-primary-green">
              Get Involved
            </p>

            <h2 className="text-4xl font-extrabold leading-tight md:text-5xl">
              There is more than one way to make your voice heard.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-forest/70">
              You don't have to be an expert in governance to
              participate. Start by understanding what is happening
              in your community.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {participationWays.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-forest/10 bg-cream p-8 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-sage/40 text-primary-green">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-8 text-xl font-extrabold">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-forest/70">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* How to Participate */}
      <section
        id="how-to-participate"
        className="px-6 py-24 lg:px-12 lg:py-32"
      >
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-primary-green">
              Your Participation Journey
            </p>

            <h2 className="text-4xl font-extrabold leading-tight md:text-5xl">
              Four steps to getting involved.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-forest/70">
              Make your contribution count by following the
              participation process announced for each consultation.
            </p>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-2">
            {participationSteps.map((step) => (
              <div
                key={step.number}
                className="flex gap-6 border-t border-forest/15 pt-8"
              >
                <span className="text-4xl font-extrabold text-primary-green/35">
                  {step.number}
                </span>

                <div>
                  <h3 className="text-2xl font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-4 max-w-lg leading-relaxed text-forest/70">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Can You Contribute */}
      <section className="bg-forest px-6 py-24 text-white lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-sage">
              Bring Your Ideas
            </p>

            <h2 className="text-4xl font-extrabold leading-tight md:text-5xl">
              What would you like to see change in your community?
            </h2>

            <p className="mt-7 text-lg leading-relaxed text-white/70">
              Every community has different needs. Your experience
              and ideas can help identify priorities and practical
              solutions.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              "Better roads and transport",
              "Access to clean water",
              "Improved healthcare",
              "Education and youth opportunities",
              "Markets and business support",
              "Environmental protection",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-xl border border-white/15 bg-white/5 p-5"
              >
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-sage" />
                <p className="font-semibold text-white/90">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Official Opportunities */}
      <section className="bg-white px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-primary-green">
              Stay Informed
            </p>

            <h2 className="text-4xl font-extrabold leading-tight md:text-5xl">
              Find official participation opportunities.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-forest/70">
              Public participation opportunities are announced at
              different times throughout the year. Check official
              county channels for current notices, documents,
              venues and submission deadlines.
            </p>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-2">
            <article className="rounded-2xl bg-cream p-8 md:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-sage/40 text-primary-green">
                <CalendarDays size={28} />
              </div>

              <h3 className="mt-7 text-2xl font-extrabold">
                County Government Notices
              </h3>

              <p className="mt-4 leading-relaxed text-forest/70">
                Find county announcements, public participation
                invitations, development plans and other official
                notices.
              </p>

              <a
                href="https://kiambu.go.ke/category/notices/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 font-bold text-primary-green hover:text-gold"
              >
                Explore county notices
                <ArrowUpRight size={19} />
              </a>
            </article>

            <article className="rounded-2xl bg-cream p-8 md:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-sage/40 text-primary-green">
                <BookOpen size={28} />
              </div>

              <h3 className="mt-7 text-2xl font-extrabold">
                County Assembly
              </h3>

              <p className="mt-4 leading-relaxed text-forest/70">
                Access information about county legislation,
                Assembly business and opportunities to submit
                memoranda on matters before the Assembly.
              </p>

              <a
                href="https://www.kiambuassembly.go.ke/contacts"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 font-bold text-primary-green hover:text-gold"
              >
                Visit County Assembly
                <ArrowUpRight size={19} />
              </a>
            </article>
          </div>

          <div className="mt-8 rounded-xl border border-forest/10 p-6">
            <p className="text-sm leading-relaxed text-forest/65">
              <strong>Remember:</strong> Always confirm the deadline,
              submission address, email and required format in the
              specific official notice. A previously advertised
              consultation may already be closed.
            </p>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-primary-green px-6 py-24 text-white lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-3xl">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sage/20 text-sage">
              <Handshake size={34} />
            </div>

            <p className="mb-5 mt-8 text-sm font-bold uppercase tracking-[0.2em] text-sage">
              Sisi ni Sisi
            </p>

            <h2 className="text-4xl font-extrabold leading-tight md:text-6xl">
              A better Kiambu starts with all of us.
            </h2>

            <p className="mt-7 text-lg leading-relaxed text-white/75">
              Stay informed, speak up and take part in shaping
              the future of your community.
            </p>

            <a
              href="/wards"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-sage px-8 py-4 font-bold text-forest transition hover:bg-white"
            >
              Explore Your Ward
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Participate;
