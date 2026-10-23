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

const advisors = [
  "Peter Dale Scott",
  "Dave Lindorff",
  "Linn Washington",
  "Gary Null",
  "Daniel Sheehan",
  "Cynthia McKinney",
  "Kevin Zeese",
  "Sibel Edmonds",
  "Ray McGovern",
  "Col. Ann Wright",
  "Coleen Rowley",
  "John Perkins",
  "Dennis Loo",
  "Elizabeth de la Vega",
  "Medea Benjamin",
  "Frank Dorrel",
];

const Participants = () => {
  return (
    <PageLayout>
      <h1 className="text-2xl font-bold text-primary mb-6">Participants</h1>

      <section className="mb-10">
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

      <section>
        <h2 className="font-bold text-lg text-foreground border-b border-border pb-2 mb-5">
          Advisors &amp; Featured Participants
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {advisors.map((name, idx) => (
            <li key={idx} className="text-base text-foreground">
              {name}
            </li>
          ))}
        </ul>
      </section>
    </PageLayout>
  );
};

export default Participants;
