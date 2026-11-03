import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

function ClosingCTA() {
  return (
    <section className="bg-[#E9EDE3] px-6 py-24 text-center lg:px-12 lg:py-32">
      <div className="mx-auto max-w-4xl">

        <span className="text-sm font-bold uppercase tracking-[0.25em] text-primary-green">
          This is our home
        </span>

        <h2 className="mt-7 text-5xl font-extrabold leading-tight tracking-tight md:text-7xl lg:text-8xl">
          KIAMBU IS
          <br />
          <span className="text-primary-green">OURS.</span>
        </h2>

        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-forest/65">
          A better county begins with informed citizens,
          stronger communities and people who are willing
          to make their voices heard.
        </p>

        <Link
          to="/participate"
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-forest px-9 py-5 text-base font-bold text-white transition-all duration-300 hover:bg-primary-green"
        >
          Be Part of the Change
          <ArrowUpRight size={21} />
        </Link>

      </div>
    </section>
  );
}

export default ClosingCTA;
