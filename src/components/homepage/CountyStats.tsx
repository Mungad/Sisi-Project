import { Map, Users, MapPin } from "lucide-react";

const statistics = [
  {
    number: "12",
    label: "Sub-counties",
    description: "Communities across Kiambu",
    icon: Map,
  },
  {
    number: "60",
    label: "Electoral Wards",
    description: "Every community matters",
    icon: MapPin,
  },
  {
    number: "2.4M+",
    label: "Residents",
    description: "2019 census population",
    icon: Users,
  },
];

function CountyStats() {
  return (
    <section className="bg-forest px-6 py-20 text-white lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1400px]">

        <div className="mb-14 max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-[0.25em] text-sage">
            Kiambu at a glance
          </span>

          <h2 className="mt-5 text-4xl font-extrabold leading-tight md:text-5xl">
            One county.
            <span className="text-sage"> Many communities.</span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/65">
            From our towns to our rural communities, every part
            of Kiambu contributes to the county we call home.
          </p>
        </div>

        <div className="grid gap-8 border-t border-white/20 pt-10 md:grid-cols-3">
          {statistics.map((stat) => {
            const Icon = stat.icon;

            return (
              <div key={stat.label} className="group">
                <Icon
                  size={30}
                  strokeWidth={1.5}
                  className="mb-7 text-sage"
                />

                <h3 className="text-6xl font-extrabold tracking-tight md:text-7xl">
                  {stat.number}
                </h3>

                <p className="mt-3 text-xl font-bold">
                  {stat.label}
                </p>

                <p className="mt-2 text-base text-white/55">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-xs text-white/40">
          Source: Kiambu County development documents and
          2019 Kenya Population and Housing Census.
        </p>

      </div>
    </section>
  );
}

export default CountyStats;
