import PageLayout from "@/components/PageLayout";

const organizers = [
  { name: "Gabriel Day", location: "Santa Cruz, CA" },
  { name: "Bonnie Faulkner", location: "Glen Ellen, CA" },
  { name: "Mickey Huff", location: "Berkeley, CA" },
  { name: "David Kubiak", location: "Half Moon Bay, CA" },
  { name: "David Mathison", location: "San Francisco" },
  { name: "Janice Matthews", location: "Kansas City, MO" },
  { name: "Peter Phillips", location: "Sonoma, CA" },
  { name: "Ken Reiner", location: "Long Beach, CA" },
  { name: "Bryan Sacks", location: "Philadelphia, PA" },
];

const endorsingPartners = [
  { name: "Project Censored", url: "https://projectcensored.org" },
  { name: "911truth.org", url: "https://911truth.org" },
  { name: "Be The Media", url: "https://bethemedia.org" },
  { name: "This Can't Be Happening!", url: "https://thiscantbehappening.net" },
  { name: "Nancho Archive", url: "/new-nancho/" },
  { name: "Free Press / NCMR", url: "https://freepress.net" },
  { name: "Brave New Films", url: "https://bravenewfilms.org" },
  { name: "naomiklein.org", url: "https://naomiklein.org" },
];

const Links = () => {
  return (
    <PageLayout>
      <h1 className="text-2xl font-bold text-primary mb-6">Links</h1>

      <section className="mb-10">
        <h2 className="font-bold text-lg text-foreground border-b border-border pb-2 mb-5">Endorsing Partners</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {endorsingPartners.map((p, idx) => (
            <li key={idx}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base text-[hsl(var(--link-color))] hover:underline"
              >
                {p.name}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-bold text-lg text-foreground border-b border-border pb-2 mb-5">Organizing Committee</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {organizers.map((person, idx) => (
            <div key={idx} className="flex flex-col">
              <span className="font-semibold text-base text-foreground">{person.name}</span>
              <span className="text-sm text-muted-foreground">{person.location}</span>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Links;
