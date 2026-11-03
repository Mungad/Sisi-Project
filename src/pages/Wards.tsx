
import { useMemo, useState } from "react";
import { ArrowRight, MapPin, Search, Users } from "lucide-react";

type Constituency = {
  name: string;
  wards: string[];
};

const constituencies: Constituency[] = [
  {
    name: "Gatundu North",
    wards: ["Gituamba", "Githobokoni", "Chania", "Mang'u"],
  },
  {
    name: "Gatundu South",
    wards: ["Kiamwangi", "Kiganjo", "Ndarugo", "Ngenda"],
  },
  {
    name: "Githunguri",
    wards: ["Githunguri", "Githiga", "Ikinu", "Ngewa", "Komothai"],
  },
  {
    name: "Juja",
    wards: ["Murera", "Theta", "Juja", "Witeithie", "Kalimoni"],
  },
  {
    name: "Kabete",
    wards: ["Gitaru", "Muguga", "Nyathuna", "Kabete", "Uthiru"],
  },
  {
    name: "Kiambaa",
    wards: ["Cianda", "Karuri", "Ndenderu", "Muchatha", "Kihara"],
  },
  {
    name: "Kiambu",
    wards: ["Ting'ang'a", "Ndumberi", "Riabai", "Township"],
  },
  {
    name: "Kikuyu",
    wards: ["Karai", "Nachu", "Sigona", "Kikuyu", "Kinoo"],
  },
  {
    name: "Lari",
    wards: ["Kinale", "Kijabe", "Nyanduma", "Kamburu", "Lari/Kirenga"],
  },
  {
    name: "Limuru",
    wards: [
      "Bibirioni",
      "Limuru Central",
      "Ndeiya",
      "Limuru East",
      "Ngecha/Tigoni",
    ],
  },
  {
    name: "Ruiru",
    wards: [
      "Gitothua",
      "Biashara",
      "Gatongora",
      "Kahawa/Sukari",
      "Kahawa Wendani",
      "Kiuu",
      "Mwiki",
      "Mwihoko",
    ],
  },
  {
    name: "Thika Town",
    wards: ["Township", "Kamenu", "Hospital", "Gatuanyaga", "Ngoliba"],
  },
];

function Wards() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedConstituency, setSelectedConstituency] = useState("All");

  const totalWards = constituencies.reduce(
    (total, constituency) => total + constituency.wards.length,
    0
  );

  const filteredConstituencies = useMemo(() => {
    return constituencies
      .filter((constituency) => {
        return (
          selectedConstituency === "All" ||
          constituency.name === selectedConstituency
        );
      })
      .map((constituency) => ({
        ...constituency,
        wards: constituency.wards.filter((ward) =>
          `${ward} ${constituency.name}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        ),
      }))
      .filter((constituency) => constituency.wards.length > 0);
  }, [searchTerm, selectedConstituency]);

  return (
    <div className="bg-cream text-forest">

      {/* Hero Section */}
      <section className="bg-forest px-6 py-24 text-white lg:px-12 lg:py-36">
        <div className="mx-auto max-w-[1400px]">
          <p className="mb-6 text-sm font-bold uppercase tracking-[0.25em] text-sage">
            Explore Your Community
          </p>

          <h1 className="max-w-4xl text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
            60 wards.
            <span className="block text-sage">
              One Kiambu County.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
            Every community has its own needs, priorities and
            aspirations. Find your constituency and explore the
            wards that make up Kiambu County.
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="px-6 py-20 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-[1400px] gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-8">
            <MapPin size={30} className="text-primary-green" />
            <p className="mt-6 text-4xl font-extrabold">12</p>
            <p className="mt-2 text-forest/65">Constituencies</p>
          </div>

          <div className="rounded-2xl bg-white p-8">
            <Users size={30} className="text-primary-green" />
            <p className="mt-6 text-4xl font-extrabold">{totalWards}</p>
            <p className="mt-2 text-forest/65">Electoral wards</p>
          </div>

          <div className="rounded-2xl bg-white p-8">
            <MapPin size={30} className="text-primary-green" />
            <p className="mt-6 text-4xl font-extrabold">1</p>
            <p className="mt-2 text-forest/65">Shared county</p>
          </div>
        </div>
      </section>

      {/* Ward Directory */}
      <section className="bg-white px-6 py-24 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-primary-green">
              Ward Directory
            </p>

            <h2 className="text-4xl font-extrabold leading-tight md:text-5xl">
              Find your ward.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-forest/70">
              Search by ward name or constituency to find your
              area within Kiambu County.
            </p>
          </div>

          {/* Search */}
          <div className="mt-12 flex max-w-2xl items-center gap-4 rounded-xl border border-forest/15 bg-cream px-5 py-4">
            <Search size={22} className="shrink-0 text-forest/50" />
            <input
              type="text"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search for your ward or constituency..."
              className="w-full bg-transparent text-base text-forest outline-none placeholder:text-forest/45"
            />
          </div>

          {/* Constituency Filter */}
          <div className="mt-7">
            <label
              htmlFor="constituency"
              className="mb-3 block text-sm font-bold"
            >
              Filter by constituency
            </label>

            <select
              id="constituency"
              value={selectedConstituency}
              onChange={(event) =>
                setSelectedConstituency(event.target.value)
              }
              className="w-full max-w-sm rounded-xl border border-forest/20 bg-cream px-5 py-4 text-base outline-none focus:border-primary-green"
            >
              <option value="All">All constituencies</option>
              {constituencies.map((constituency) => (
                <option key={constituency.name} value={constituency.name}>
                  {constituency.name}
                </option>
              ))}
            </select>
          </div>

          {/* Results */}
          <div className="mt-14">
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
              <h3 className="text-2xl font-extrabold">
                Constituencies and wards
              </h3>

              <p className="text-sm text-forest/55">
                {filteredConstituencies.reduce(
                  (total, item) => total + item.wards.length,
                  0
                )}{" "}
                wards found
              </p>
            </div>

            <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
              {filteredConstituencies.map((constituency) => (
                <article
                  key={constituency.name}
                  className="rounded-2xl border border-forest/10 bg-cream p-8"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wider text-primary-green">
                        Constituency
                      </p>

                      <h4 className="mt-2 text-2xl font-extrabold">
                        {constituency.name}
                      </h4>
                    </div>

                    <span className="rounded-full bg-sage/50 px-3 py-2 text-sm font-bold">
                      {constituency.wards.length} wards
                    </span>
                  </div>

                  <div className="mt-7 border-t border-forest/10 pt-6">
                    <p className="mb-4 text-sm font-bold text-forest/60">
                      Electoral wards
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {constituency.wards.map((ward) => (
                        <span
                          key={ward}
                          className="rounded-full border border-forest/10 bg-white px-4 py-2 text-sm font-medium"
                        >
                          {ward}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {filteredConstituencies.length === 0 && (
              <div className="rounded-2xl bg-cream px-6 py-16 text-center">
                <Search
                  size={36}
                  className="mx-auto text-forest/40"
                />
                <h3 className="mt-5 text-xl font-bold">
                  No matching wards found
                </h3>
                <p className="mt-3 text-forest/60">
                  Try another ward name or select a different constituency.
                </p>

                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedConstituency("All");
                  }}
                  className="mt-6 inline-flex items-center gap-2 font-bold text-primary-green hover:text-gold"
                >
                  Clear filters
                  <ArrowRight size={18} />
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Participation CTA */}
      <section className="bg-primary-green px-6 py-24 text-white lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.2em] text-sage">
            Your Ward, Your Voice
          </p>

          <h2 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-5xl">
            Know your community. Take part in its future.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">
            The decisions made today shape the communities we live
            in tomorrow. Make your voice part of the conversation.
          </p>

          <a
            href="/participate"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-sage px-8 py-4 font-bold text-forest transition hover:bg-white"
          >
            Have Your Say
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

    </div>
  );
}

export default Wards;
