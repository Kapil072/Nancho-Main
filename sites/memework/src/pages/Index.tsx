const resources = [
  {
    title: "Memetic Lexicon",
    url: "/new-nancho/bigmed2000/memes/memlex.html",
    desc: "A basic (but still fluid and klunky) glossary of memespeak",
  },
  {
    title: "Principia Cybernetica's Meme Pages",
    url: "http://pespmc1.vub.ac.be/MEMES.html",
    desc: "Reasonable articles and discussions on memetic phenomena.",
  },
  {
    title: "Memetics",
    url: "http://www.aleph.se/Trans/Cultural/Memetics/",
    desc: "Simple primer page on memes and recent theories.",
  },
  {
    title: "Memecentral.com",
    url: "http://www.memecentral.com/",
    desc: 'Homebase for Richard "Virus of the Mind" Brodie and his rather disease-intensive interpretation of meme dynamics.',
  },
  {
    title: "Journal of Memetics",
    url: "http://jom-emit.cfpm.org/",
    desc: "Dead since 2005, the archives still offer some fascinating papers - as well as a major dose of the pretentious bafflegab that doomed the journal in the first place.",
  },
  {
    title: "Memetics Resource Index",
    url: "http://users.lycaeum.org/~sputnik/Memetics/",
    desc: "THE exhaustive listing of meme texts, links and controversies",
  },
  {
    title: "alt.memetics",
    url: "http://groups.google.com/group/alt.memetics/",
    desc: "Google Group rebirth of the original newsgroup. Often fascinating but always noisy with the harangues, hormones and aspiring heroics of a hot field being born.",
  },
  {
    title: "The Abhorrence of the Exotic",
    url: "/new-nancho/bigmed2000/memes/abexotic.html",
    desc: "Japan's Comparative Advantage in Memetic Immunity. A very colloquial interpretation of memes, marauding hierarchies and the democracy problem in Japan.",
  },
  {
    title: "Memetics — The Science of Information Viruses",
    url: "/new-nancho/bigmed2000/memes/infoviru.html",
    desc: "Keith Henson's early, influential (though rather pathology-intensive) essay on memetics",
  },
  {
    title: "smartMeme.org",
    url: "http://www.smartmeme.org/",
    desc: '"The smartMeme Strategy & Training Project is a nonprofit collective that works to apply meme theory and a narrative analysis of power to strengthen social change efforts." — Cool allies!',
  },
  {
    title: "Memetics Lab - UK",
    url: "http://www.susanblackmore.co.uk/memetics/",
    desc: 'Homebase for Susan "The Meme Machine" Blackmore',
  },
  { title: "Church of the Virus", url: "http://virus.lucifer.com/", desc: "Strange, provocative and beautiful" },
  {
    title: "Thought Contagion",
    url: "http://jasss.soc.surrey.ac.uk/2/2/review4.html",
    desc: "How Belief Spreads Through Society: The New Science of Memes. A review of Aaron Lynch's serious and influential look at memes and the psychic environment.",
  },
];

const Divider = () => (
  <div className="w-full flex justify-center my-4">
    <img src="/new-nancho/bigmed2000/bulls/brnblk.gif" alt="" className="w-full max-w-xl" />
  </div>
);

const Index = () => {
  return (
    <div className="site-prose min-h-screen bg-background text-foreground font-serif px-4 sm:px-8 md:px-14 lg:px-20">
      {/* Header Table */}
      <div className="border border-border my-4">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 p-4 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-border">
            <img
              src="/new-nancho/bigmed2000/graph/birdmem2.gif"
              alt="Buddhist Meme Winging West"
              className="max-w-[250px] w-full"
            />
            <p className="text-center text-sm mt-2 text-muted-foreground">Buddhist Meme in Migration</p>
          </div>
          <div className="md:w-2/3 p-6 flex flex-col items-center justify-center text-center">
            <Divider />
            <h1 className="text-2xl md:text-3xl font-bold text-primary mb-3">Memes to Come &amp; Memes to Go</h1>
            <p className="font-bold text-foreground leading-relaxed">
              Memetics is the study of the spread of ideas
              <br />
              and its mastery is the key to changing minds,
              <br />
              behavior and thus social reality.
            </p>
            <Divider />
          </div>
        </div>
      </div>

      {/* Main Content — full width, proper paragraph flow */}
      <div className="w-full py-4 leading-relaxed text-base">
        <p className="mb-5">
          Academically, the field of memetics used to be a high-testosterone thunderdome where a host of theorists,
          researchers and journalists all competed for seminal influence on how the "meme" meme would evolve and who
          would finally be called "Daddy". The incessant warfare between the hip-shooting virus/disease-metaphor mongers
          and the reductionist mathematical geneticist wannabes eventually exhausted everyone, it seems, and the whole
          discipline is currently in the doldrums. Even the basic definition of the term is still in dispute, but an
          entry level explanation in wide circulation is:
        </p>

        <div className="bg-card border-l-4 border-primary px-6 py-5 my-5 mx-2 md:mx-8">
          <p className="font-bold mb-2 text-lg">MEME</p>
          <p className="mb-3">
            (rhymes with 'dream') A contagious information pattern that replicates by infecting human minds and altering
            their behavior, causing them to propagate the pattern. (Term coined by Richard Dawkins, by analogy with
            "gene".)
          </p>
          <p className="mb-3">
            Individual concepts, slogans, melodies, inventions, and fashions are typical memes. An idea or information
            pattern is not a meme until it is replicated or repeated to someone else. All education and transmitted
            knowledge is memetic.
          </p>
          <p className="mb-3">
            The key thing to remember is that memes instruct recipients on "how to" do something — how to evaluate
            something, how to play something, how to build something, sing something, incite something, worship
            something, etc. How we will marry, bury our dead, educate our children, conceive of our own worth and
            rights, and regard other communities are all largely determined by the dominant memes in our consciousness
            (both those already in mind &amp; memory and those reverberating in the immediate social surround). The
            outcome of meme wars thus define us as a people and set our evolutionary course, so it is vital that we at
            least learn enough to prevail over the mind-numbing/soul-crushing corporate meme storm at hand.
          </p>
          <p>
            (See the{" "}
            <a
              href="/new-nancho/bigmed2000/memes/memlex.html"
              className="text-link underline font-bold hover:opacity-80"
            >
              Meme Lexicon
            </a>
            )
          </p>
        </div>

        <p className="mb-5">
          The Academic Theory Wars are great fun (witness the ancient chaos at the{" "}
          <a href="http://groups.google.com/group/alt.memetics/" className="text-link underline hover:opacity-80">
            alt.memetics
          </a>{" "}
          newsgroup), but while they rage in the abstract altitudes, thousands of white-collar meme mechanics put in
          their daily 9-to-5 churning out pernicious or simply pointless memetic contagions for the likes of Madison
          Ave, mega-corporate legal persons, Hollywood, and the world's enduring Ministries of Truth. These mercenary
          professionals are much like modern acupuncturists who have to blithely ignore the theoretical mess their field
          is in to get on with what they feel/see/know will work. Decrying the ominous or inane content of this crowd's
          memetic output does not detract from their often elegant craftsmanship or distributive genius. So, for better
          or worse, professional flacks, hacks and marketing whores are perhaps our guides of choice if we seek to
          quickly excel in the craft ourselves.
        </p>

        <div className="px-2 md:px-8 my-5">
          <p className="mb-4">
            Yes, this is a bit sordid, but recall our basic challenge. The trinity of memes we propose to spread are
            both virtually unknown and officially unpopular. Consider:
          </p>
          <ul className="list-disc pl-6 space-y-3 mb-5">
            <li className="leading-relaxed">
              <a
                href="/new-nancho/bigmed2000/arcmain.html#kipapers"
                className="text-link underline font-bold hover:opacity-80"
              >
                The Ki Meme
              </a>{" "}
              — which would awaken public awareness of the extraordinary qualities, powers and industrial theft of human
              attention (as well as its vital role in sex, healing and corporate bodybuilding).
            </li>
            <li className="leading-relaxed">
              <a
                href="/new-nancho/bigmed2000/bigbody/apforum1.html"
                className="text-link underline font-bold hover:opacity-80"
              >
                The Big Body Meme
              </a>{" "}
              — which would expose mega-corporate bodies as truly alive, in charge and out of control.
            </li>
            <li className="leading-relaxed">
              <a
                href="http://www.magic10percent.net/content/view/26/46/"
                className="text-link underline font-bold hover:opacity-80"
              >
                The Earth Hour Meme
              </a>{" "}
              — which would arouse recurrent revolutionary experience of our specie's essential unity and erotic
              identity with Gaia.
            </li>
          </ul>
          <p className="leading-relaxed">
            Since all are controversial and each abets the others to either transcend, transform or subvert current
            corporate reality, we face a Goliath of a challenge. We thus need — besides the more conventional virtues —
            all the practical guile, cunning and underhanded artistry we can muster. (Check out the overall strategy for{" "}
            <a href="/new-nancho/bigmed2000/memes/sitstrat.html" className="text-link underline hover:opacity-80">
              Meme Cascades
            </a>
            .)
          </p>
        </div>

        <p className="mb-6">
          That all being said, a little knowledge is still a dangerous thing and thus of potential utility. Pick up a
          bit of your own below:
        </p>

        {/* Resource List */}
        <ul className="list-disc pl-6 space-y-5 mb-8">
          {resources.map((r) => (
            <li key={r.title} className="leading-relaxed">
              <a
                href={r.url}
                className="text-link underline hover:opacity-80 font-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                {r.title}
              </a>
              <p className="mt-1 text-sm text-foreground leading-relaxed">{r.desc}</p>
            </li>
          ))}
        </ul>

        <hr className="border-border my-6" />

        <p className="mb-3 leading-relaxed">
          Once you catch the drift of memes, flow on to more strategic applications:
        </p>

        <ul className="list-disc pl-6 mb-8">
          <li className="leading-relaxed">
            <a
              href="/new-nancho/bigmed2000/memes/orthodoc.html"
              className="text-link underline hover:opacity-80 font-bold"
            >
              So You Want to be an Orthodoctor?
            </a>{" "}
            — 3 Big Body Revelations &amp; a Little Heresy to Go.
            <p className="mt-1 text-sm text-foreground leading-relaxed">
              Battle Big Body orthodoxy with rogue memes, meta-medical craft and placebo power.
            </p>
          </li>
        </ul>

        <Divider />

        <div className="text-center font-bold my-6 space-y-1">
          <p>One Simple Way to Spread Benevolent Contagions:</p>
          <p>Distribute the Buttons Below with Our URL,</p>
          <p>or Better Yet, Design Some Sexier Ones Yourself!</p>
        </div>

        <hr className="border-border my-4" />

        <div className="flex justify-center gap-3 my-6 flex-wrap">
          <img src="/new-nancho/bigmed2000/butts/ehsalt2.gif" alt="Saltation Logos I" />
          <img src="/new-nancho/bigmed2000/butts/ehsaltsn.gif" alt="Saltation Logos II" />
          <img src="/new-nancho/bigmed2000/butts/ehsaltyr.gif" alt="Saltation Logos III" />
        </div>

        <hr className="border-border my-4" />
        <Divider />
        <hr className="border-border my-4" />

        <div className="text-center my-6">
          <a
            href="/new-nancho/bigmed2000/arcmain.html#memetics"
            className="text-link underline hover:opacity-80 font-bold"
          >
            Main Archive
          </a>
        </div>

        <hr className="border-border my-4" />
      </div>
    </div>
  );
};

export default Index;
