
import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Clock,
} from "lucide-react";

function Contact() {
  return (
    <div className="bg-cream text-forest">

      {/* Hero Section */}
      <section className="bg-forest px-6 py-24 text-white lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1400px]">
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.25em] text-sage">
            Get in Touch
          </p>

          <h1 className="max-w-4xl text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
            Let's start
            <span className="block text-sage">a conversation.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
            Have a question about Sisi, civic participation or
            finding information about your community? We'd love
            to help you find the right direction.
          </p>
        </div>
      </section>

      {/* Contact Introduction */}
      <section className="px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-primary-green">
              We're Here to Help
            </p>

            <h2 className="text-4xl font-extrabold leading-tight md:text-5xl">
              Your questions and ideas matter.
            </h2>

            <p className="mt-7 text-lg leading-relaxed text-forest/70">
              Sisi exists to make civic information and participation
              more accessible to residents of Kiambu County.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-forest/70">
              Whether you need help navigating the platform,
              want to share feedback or are looking for official
              county information, use the contacts provided here.
            </p>

            <div className="mt-10 flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sage/40 text-primary-green">
                <MessageCircle size={24} />
              </div>

              <div>
                <h3 className="text-lg font-bold">
                  Keep the conversation going
                </h3>
                <p className="mt-2 leading-relaxed text-forest/65">
                  Informed communities start with open conversations
                  and accessible information.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="rounded-2xl bg-white p-8 shadow-sm md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary-green">
              County Government of Kiambu
            </p>

            <h3 className="mt-4 text-2xl font-extrabold">
              Official contact details
            </h3>

            <p className="mt-4 leading-relaxed text-forest/65">
              For official county enquiries, contact the County
              Government directly using its published channels.
            </p>

            <div className="mt-9 space-y-8">
              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sage/30 text-primary-green">
                  <Phone size={23} />
                </div>

                <div>
                  <p className="font-bold">Telephone / Hotline</p>

                  <a
                    href="tel:+254742000888"
                    className="mt-2 block text-forest/70 hover:text-primary-green"
                  >
                    +254 742 000 888
                  </a>

                  <a
                    href="tel:+254103000888"
                    className="mt-1 block text-forest/70 hover:text-primary-green"
                  >
                    +254 103 000 888
                  </a>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sage/30 text-primary-green">
                  <Mail size={23} />
                </div>

                <div>
                  <p className="font-bold">Email Address</p>

                  <a
                    href="mailto:info@kiambu.go.ke"
                    className="mt-2 block break-all text-forest/70 hover:text-primary-green"
                  >
                    info@kiambu.go.ke
                  </a>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sage/30 text-primary-green">
                  <MapPin size={23} />
                </div>

                <div>
                  <p className="font-bold">Postal Address</p>
                  <p className="mt-2 text-forest/70">
                    P.O. Box 2344-00900
                    <br />
                    Kiambu, Kenya
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sage/30 text-primary-green">
                  <Clock size={23} />
                </div>

                <div>
                  <p className="font-bold">Official Website</p>

                  <a
                    href="https://kiambu.go.ke/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 text-primary-green hover:text-gold"
                  >
                    kiambu.go.ke
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </div>
            </div>

            <a
              href="mailto:info@kiambu.go.ke"
              className="mt-10 inline-flex w-full items-center justify-center gap-3 rounded-full bg-forest px-7 py-4 font-bold text-white transition hover:bg-primary-green"
            >
              Email the County Government
              <ArrowUpRight size={19} />
            </a>
          </div>
        </div>
      </section>

      {/* County Assembly Contact */}
      <section className="bg-white px-6 py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-primary-green">
              County Representation
            </p>

            <h2 className="text-4xl font-extrabold leading-tight md:text-5xl">
              Want to reach the County Assembly?
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-forest/70">
              The County Assembly represents residents through
              legislation, oversight and representation. For
              Assembly-related enquiries and memoranda, contact
              the Assembly directly.
            </p>
          </div>

          <div className="mt-12 grid gap-7 md:grid-cols-3">
            <div className="rounded-2xl bg-cream p-8">
              <Mail size={28} className="text-primary-green" />
              <h3 className="mt-6 text-lg font-bold">Email</h3>
              <a
                href="mailto:info@kiambuassembly.go.ke"
                className="mt-3 block break-all text-forest/70 hover:text-primary-green"
              >
                info@kiambuassembly.go.ke
              </a>
            </div>

            <div className="rounded-2xl bg-cream p-8">
              <Phone size={28} className="text-primary-green" />
              <h3 className="mt-6 text-lg font-bold">Telephone</h3>
              <a
                href="tel:+25467586000"
                className="mt-3 block text-forest/70 hover:text-primary-green"
              >
                +254 (067) 586-000
              </a>
            </div>

            <div className="rounded-2xl bg-cream p-8">
              <MapPin size={28} className="text-primary-green" />
              <h3 className="mt-6 text-lg font-bold">Postal Address</h3>
              <p className="mt-3 leading-relaxed text-forest/70">
                P.O. Box 1492-00900
                <br />
                Kiambu, Kenya
              </p>
            </div>
          </div>

          <a
            href="https://www.kiambuassembly.go.ke/contacts"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 font-bold text-primary-green hover:text-gold"
          >
            Visit County Assembly Contact Page
            <ArrowUpRight size={19} />
          </a>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-primary-green px-6 py-24 text-white lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-sage">
            Sisi ni Sisi
          </p>

          <h2 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
            Your voice deserves to be heard.
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/75">
            Stay informed about your county, discover your ward
            and take part in shaping the future of your community.
          </p>

          <a
            href="/participate"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-sage px-8 py-4 font-bold text-forest transition hover:bg-white"
          >
            Get Involved
            <Send size={19} />
          </a>
        </div>
      </section>

    </div>
  );
}

export default Contact;
