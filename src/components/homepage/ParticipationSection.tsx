import { ArrowUpRight, MessageCircle, Users, Megaphone } from "lucide-react";
import { Link } from "react-router-dom";

function ParticipationSection() {
  return (
    <section className="bg-forest px-6 py-24 text-white lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-2 lg:items-center">

        {/* Left Content */}
        <div>
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-sage">
            Your voice matters
          </span>

          <h2 className="mt-6 text-5xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Development
            <br />
            starts with
            <br />
            <span className="text-sage">YOU.</span>
          </h2>

          <p className="mt-7 max-w-xl text-lg leading-8 text-white/70">
            Good governance begins with people who care about
            their communities. Share your ideas, participate in
            public discussions and help shape the future of Kiambu.
          </p>

          <Link
            to="/participate"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-sage px-8 py-4 text-base font-bold text-forest transition-all duration-300 hover:bg-white"
          >
            Get Involved
            <ArrowUpRight size={20} />
          </Link>
        </div>

        {/* Right Content */}
        <div className="space-y-5">

          <div className="flex gap-6 border-b border-white/15 pb-7">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-white/10 text-sage">
              <MessageCircle size={27} />
            </div>

            <div>
              <h3 className="text-xl font-bold">
                Share Your Ideas
              </h3>
              <p className="mt-2 text-base leading-7 text-white/60">
                Tell us what matters most to you and your community.
              </p>
            </div>
          </div>

          <div className="flex gap-6 border-b border-white/15 pb-7">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-white/10 text-sage">
              <Users size={27} />
            </div>

            <div>
              <h3 className="text-xl font-bold">
                Join Public Participation
              </h3>
              <p className="mt-2 text-base leading-7 text-white/60">
                Engage in conversations about county priorities and development.
              </p>
            </div>
          </div>

          <div className="flex gap-6 pb-2">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center bg-white/10 text-sage">
              <Megaphone size={27} />
            </div>

            <div>
              <h3 className="text-xl font-bold">
                Stay Informed
              </h3>
              <p className="mt-2 text-base leading-7 text-white/60">
                Keep up with opportunities to participate in your county.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ParticipationSection;
