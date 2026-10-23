import PageLayout from "@/components/PageLayout";

const sections = [
  {
    heading: "Following the Money to and from War",
    books: [
      {
        title: "Blackwater: The Rise of the World's Most Powerful Mercenary Army",
        author: "Jeremy Scahill",
        description:
          "The history of the private military contractor Blackwater and how it rose to power, exposing its corporate and military connections.",
        referenceLink:
          "https://web.archive.org/web/20181104061539/http://www.dailykos.com/storyonly/2007/3/25/112857/665",
        buyLink: "https://www.amazon.com/Blackwater-Worlds-Powerful-Mercenary-Army/dp/1568584164",
        imageUrl: `${import.meta.env.BASE_URL}images/films/iraqforsaledvd150.jpg`,
        gradient: "from-zinc-800 to-zinc-950",
      },
      {
        title: "Takeover: The Return of the Imperial Presidency and the Subversion of American Democracy",
        author: "Charlie Savage",
        description:
          "Charlie Savage's Pulitzer Prize-winning investigation into the expansion of presidential power under the Bush administration.",
        referenceLink:
          "https://web.archive.org/web/20181104061539/http://www.amazon.com/Takeover-Imperial-Presidency-Subversion-Democracy/dp/0316118044",
        gradient: "from-red-950 to-neutral-900",
      },
      {
        title: "The Sorrows of Empire -- Militarism, Secrecy, and the End of the Republic",
        author: "Chalmers Johnson",
        description:
          "An analysis of the growth of American militarism and its threat to the US Constitution and democratic values.",
        referenceLink:
          "https://web.archive.org/web/20181104061539/http://www.americanempireproject.com/bookpage.asp?ISBN=0805077979",
        gradient: "from-emerald-950 to-neutral-900",
      },
      {
        title: "Nemesis: The Last Days of the American Republic",
        author: "Chalmers Johnson",
        description:
          "The final volume of Chalmers Johnson's Blowback Trilogy, detailing the imperial presidency and the subversion of the republic.",
        referenceLink: "https://web.archive.org/web/20181104061539/http://www.buzzflash.com/store/reviews/523",
        gradient: "from-cyan-950 to-slate-900",
      },
    ],
  },
  {
    heading: "Media Malfunction",
    books: [
      {
        title: "Project Censored 2007",
        author: "Peter Phillips and Project Censored",
        description: "The top 25 censored news stories of the year, highlighting media malfunction and corporatism.",
        referenceLink: "https://projectcensored.org/",
        gradient: "from-amber-950 to-stone-900",
      },
      {
        title: "Into the Buzzsaw: Leading Journalists Expose the Myth of a Free Press",
        author: "Kristina Borjesson (Editor)",
        description:
          "Leading journalists expose corporate censorship, government interference, and personal struggles to publish truths with consequence.",
        referenceLink:
          "https://web.archive.org/web/20181104061539/http://www.amazon.com/Into-Buzzsaw-Leading-Journalists-Expose/dp/1573929727",
        gradient: "from-violet-950 to-neutral-900",
      },
    ],
  },
  {
    heading: "Famously Unreported History We've Yet to Face",
    books: [
      {
        title: "Day of Deceit: The Truth about FDR and Pearl Harbor",
        author: "Robert B. Stinnett",
        description:
          "Produces the government documents and intercepts proving FDR and White House associates not only knew Japan's attack was coming -- they had systematically provoked it to ignite patriotic fervor and draw America into the war.",
        referenceLink: "https://web.archive.org/web/20181104061539/http://www.lewrockwell.com/orig/trask1.html",
        gradient: "from-yellow-950 to-stone-950",
      },
      {
        title: "The Final Report on the Bombing of the Alfred P. Murrah Building",
        author: "Charles Key",
        description:
          "The famously unreported OK City Citizens Commission Report that deconstructed the official narrative of the Oklahoma City bombing.",
        referenceLink:
          "https://web.archive.org/web/20181104061539/http://www.amazon.ca/Final-Report-Bombing-Charles-Key/dp/0971051305",
        gradient: "from-blue-950 to-zinc-900",
      },
      {
        title: "Overthrow: America's Century of Regime Change from Hawaii to Iraq",
        author: "Stephen Kinzer",
        description:
          "A historical account of the century of regime changes initiated and conducted by the United States government. The history we have not learned repeating and repeating and",
        referenceLink:
          "https://web.archive.org/web/20181104061539/http://www.amazon.com/Overthrow-Americas-Century-Regime-Change/dp/0805082409",
        gradient: "from-orange-950 to-stone-900",
      },
      {
        title: "An Act of State: The Execution of Martin Luther King",
        author: "William Pepper",
        description:
          "Story of the historic 1989 Memphis jury trial brought by Martin Luther King's family that found James Earl Ray was a demented patsy set up and assisted by state and federal officials. Not one network or major paper reported on the jury's findings.",
        referenceLink:
          "https://web.archive.org/web/20181104061539/http://www.amazon.com/Act-State-Execution-Martin-Luther/dp/1859846955",
        gradient: "from-rose-950 to-zinc-900",
      },
    ],
  },
];

const RecommendedBooks = () => {
  return (
    <PageLayout>
      <h1 className="text-2xl font-bold text-foreground mb-8 uppercase text-center">Recommended Books</h1>

      {sections.map((section, sIdx) => (
        <section key={sIdx} className="mb-12">
          <h2 className="font-bold text-lg uppercase tracking-wider text-foreground text-center border-b border-gray-300 pb-3 mb-8">
            {section.heading}
          </h2>
          <div className="space-y-8">
            {section.books.map((book, bIdx) => (
              <div key={bIdx} className="pb-8 border-b border-gray-300 last:border-0">
                <h3 className="font-bold text-base text-foreground mb-2">{book.title}</h3>
                <p className="text-sm italic text-foreground/80 mb-3">by {book.author}</p>
                <p className="text-base text-foreground/90 leading-relaxed mb-4">{book.description}</p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={book.referenceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-blue-600 hover:underline"
                  >
                    Click here to reference →
                  </a>
                  {book.buyLink && (
                    <a
                      href={book.buyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-blue-600 hover:underline"
                    >
                      Buy here →
                    </a>
                  )}
                </div>
                {book.imageUrl && (
                  <img
                    src={book.imageUrl}
                    alt={book.title}
                    className="mt-4 max-h-48 w-auto"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </section>
      ))}
    </PageLayout>
  );
};

export default RecommendedBooks;
