import PageLayout from "@/components/PageLayout";

const sections = [
  {
    heading: "Following the Money to and from War",
    films: [
      {
        title: "Why We Fight",
        director: "Eugene Jarecki",
        description:
          "By filmmaker Eugene (The Trials of Henry Kissinger) Jarecki. Featuring John McCain, Gore Vidal, Richard Perle and others, Why We Fight explores a half-century of U.S. foreign policy from World War II to the Iraq War, revealing how, as Eisenhower warned, political and corporate interests have become alarmingly entangled in the business of war.",
        link: "https://web.archive.org/web/20150223065854/http://www.amazon.com/Why-We-Fight-John-McCain/dp/B000FBH3W2/",
        imageUrl: "/images/films/whywefight150.jpg",
        gradient: "from-slate-800 to-slate-950",
      },
      {
        title: "Iraq for Sale: The War Profiteers",
        director: "Robert Greenwald",
        description:
          "The story of what happens to everyday Americans when corporations go to war. Takes you inside the lives of soldiers, truck drivers, widows and children who have been changed forever as a result of war and reconstruction profiteering in Iraq. Iraq for Sale uncovers the connections between private corporations making a killing in Iraq (Blackwater, Halliburton/KBR, CACI and Titan) and the decision makers who allow them to do so.",
        link: "https://web.archive.org/web/20150223065854/http://iraqforsale.org/",
        imageUrl: "/images/films/iraqforsaledvd150.jpg",
        gradient: "from-red-900 to-red-950",
      },
      {
        title: "No End in Sight",
        director: "Charles Ferguson",
        description:
          'NY Times: "Offers an emphatic, well-supported answer to a question that has already begun to be mooted on television talk shows and in journals of opinion: Who lost Iraq? On Mr. Ferguson\'s short list are Donald Rumsfeld, Dick Cheney, Paul Wolfowitz and L. Paul Bremer III." LA Times: "As lucid as it is level-headed, the film has a clear thematic focus -- what went wrong in Iraq -- and it identifies the catastrophic turning points with steely precision and a wealth of context."',
        link: "https://web.archive.org/web/20150223065854/http://www.noendinsightmovie.com/",
        imageUrl: "/images/films/noendinsight150.jpg",
        gradient: "from-emerald-900 to-neutral-900",
      },
    ],
  },
  {
    heading: "Media Malfunction",
    films: [
      {
        title: "Orwell Rolls in his Grave",
        director: "Robert Kane Pappas",
        description:
          '"A marvel of passionate succinctness, this documentary critically examines the Fourth Estate, once the bastion of American democracy and asks, \'Could a media system, controlled by a few global corporations with the ability to overwhelm all competing voices, be able to turn lies into truth?"......\'"',
        link: "https://web.archive.org/web/20150223065854/http://www.orwellrollsinhisgrave.com/",
        imageUrl: "/images/films/orwell150.jpg",
        gradient: "from-indigo-900 to-neutral-900",
      },
      {
        title: "Outfoxed: Rupert Murdoch's War on Journalism",
        director: "Robert Greenwald",
        description:
          "Outfoxed examines how media empires, led by Rupert Murdoch's Fox News, have been running a 'race to the bottom' in television news. This film provides an in-depth look at Fox News and the dangers of ever-enlarging corporations taking control of the public's right to know.",
        link: "https://web.archive.org/web/20150223065854/http://www.outfoxed.org/",
        imageUrl: "/images/films/outfoxed150.jpg",
        gradient: "from-amber-900 to-stone-900",
      },
      {
        title: "9/11 Press for Truth",
        director: "Ray Nowosielski",
        description:
          'Out of the grieving thousands left behind on September 11th, a small group of activist families emerged to demand answers. Six of them (including three of the famous "Jersey Girls") tell for the first time the powerful story of how they took on the powers in Washington -- and won! -- compelling an investigation, only to subsequently watch the 9/11 Commission fail in answering most of their questions.',
        link: "https://web.archive.org/web/20150223065854/https://web.archive.org/web/20120504083042/http://www.911pressfortruth.com/",
        imageUrl: "/images/films/DVDpress4truth150.jpg",
        gradient: "from-cyan-900 to-slate-900",
      },
    ],
  },
  {
    heading: "The Iran-Contra Scandal",
    films: [
      {
        title: "Coverup: Behind the Iran Contra Affair",
        director: "Barbara Trent",
        description:
          "The shadow government of assassins, arms dealers, drug smugglers, former CIA operatives and top US military personnel who were running foreign policy unaccountable to the public, revealing the Reagan/Bush administration's plan to use FEMA to institute martial law and ultimately suspend the Constitution. Strikingly relevant to current events.",
        link: "https://web.archive.org/web/20150223065854/http://www.empowermentproject.org/pages/coverup.html",
        imageUrl: "/images/films/coverupbehindtheirancontraaffair150.jpg",
        gradient: "from-rose-900 to-zinc-900",
      },
    ],
  },
  {
    heading: "Electile Dysfunction",
    films: [
      {
        title: "Uncounted: The New Math of American Elections",
        director: "David Earnhardt",
        description:
          "One of the finest and most uplifting (yes, uplifting) Election Integrity documentaries to date by Nashville filmmaker David Earnhardt. The film features segments on and original interviews with citizen heroes of all sorts, including election whistleblowers, Election Reformer champions, Rep. John Conyers, and many more of the patriots taking action in the EI movement.",
        link: "https://web.archive.org/web/20150223065854/http://www.uncountedthemovie.com/",
        imageUrl: "/images/films/Uncounted150.jpg",
        gradient: "from-blue-900 to-slate-950",
      },
    ],
  },
  {
    heading: "Inspiring Precedents",
    films: [
      {
        title: "Bringing Down a Dictator",
        director: "Steve York",
        description:
          "Documents the spectacular defeat of Slobodan Milosevic in October 2000, not by force of arms, but by an ingenious nonviolent strategy of honest elections and massive civil disobedience. A student movement named Otpor! ('Resistance' in Serbian) launched a surprising offensive. Their weapons were rock concerts and ridicule, the internet and email, spray-painted slogans and a willingness to be arrested. Their slogan: \"He's Finished!\"",
        link: "https://web.archive.org/web/20150223065854/http://www.aforcemorepowerful.org/films/bdd/",
        imageUrl: "/images/films/bringingdown150.jpg",
        gradient: "from-stone-800 to-stone-900",
      },
    ],
  },
];

const RecommendedFilms = () => {
  return (
    <PageLayout>
      <h1 className="text-2xl font-bold text-foreground mb-8 uppercase text-center">Recommended Films</h1>

      {sections.map((section, sIdx) => (
        <section key={sIdx} className="mb-12">
          <h2 className="font-bold text-lg uppercase tracking-wider text-foreground text-center border-b border-gray-300 pb-3 mb-8">
            {section.heading}
          </h2>
          <div className="space-y-8">
            {section.films.map((film, fIdx) => (
              <div key={fIdx} className="pb-8 border-b border-gray-300 last:border-0">
                <h3 className="font-bold text-base text-foreground mb-2">{film.title}</h3>
                <p className="text-sm italic text-foreground/80 mb-3">Directed by {film.director}</p>
                <p className="text-base text-foreground/90 leading-relaxed mb-4">{film.description}</p>
                <a
                  href={film.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-blue-600 hover:underline"
                >
                  Click here to reference →
                </a>
                {film.imageUrl && (
                  <img
                    src={film.imageUrl}
                    alt={film.title}
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

export default RecommendedFilms;
