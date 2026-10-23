import SectionHeader from "@/components/SectionHeader";

const ColorBar = () => (
  <img
    src={`${import.meta.env.BASE_URL}bulls/advline2.gif`}
    alt=""
    className="w-full h-2 object-cover opacity-90 my-4"
  />
);

const HRule = ({ width = "60%" }: { width?: string }) => (
  <hr className="border-[#000055] my-8 mx-auto" style={{ width }} />
);

const Index = () => {
  return (
    <div className="min-h-screen bg-[url('/barks/frenchp2.gif')] bg-repeat bg-fixed bg-[#F5F5DC] text-[#000055] font-serif selection:bg-blue-200">
      <div className="flex flex-col md:flex-row w-full">
        {/* Sidebar */}
        <aside className="w-full md:w-[180px] shrink-0 p-6 md:sticky md:top-0 h-fit bg-transparent z-10">
          <a href="/new-nancho/newchau/">
            <img
              src={`${import.meta.env.BASE_URL}graph/BMREVDEM.jpg`}
              alt="Go to the New Chautauqua home page"
              className="mx-auto w-full max-w-[150px] border-2 border-[#000055]/30 shadow-lg"
            />
          </a>
        </aside>

        {/* Main Content */}
        <main className="flex-1 px-6 md:px-16 lg:px-24 py-12 border-l-2 border-[#000055]/5">
          {/* Main Title Section */}
          <div className="w-full max-w-[1200px] mx-auto text-center mb-16">
            <ColorBar />
            <div className="my-10">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight uppercase">
                THIS AIN'T A DEMOCRACY, <br /> IT'S AN EMERGENCY!
              </h1>
              <div className="my-6 h-[3px] bg-[#000055]/30 w-1/3 mx-auto" />
              <h2 className="text-2xl md:text-3xl font-bold italic text-blue-900 uppercase tracking-wide">
                BIG MED R<sub>x</sub> FOR DIRECTPRESENTATIVE DEMOCRACY
              </h2>
            </div>
            <ColorBar />
          </div>

          <div className="w-full max-w-[1200px] mx-auto">
            {/* Opening Quote */}
            <div className="mb-14 text-center italic font-bold text-xl md:text-2xl px-4 md:px-20">
              <HRule />
              <p className="py-4 leading-snug">
                "The U.S. Constitution may not be perfect, <br className="hidden md:block" />
                but it's a lot better than what we've got now."
              </p>
              <HRule />
            </div>

            {/* Intro Text */}
            <div className="site-prose text-justify leading-relaxed space-y-8 text-lg md:text-xl mb-16">
              <p>
                When a corporate coup occurs and We the People lose control of our government, two things have to happen
                at once. We must abruptly belittle corporations' power and radically enlarge our own. This section
                introduces the most promising means to the latter end. Most of the following ideas have not only been
                time-tested in such "radical" societies as Switzerland, Denmark or suburban Philadelphia, they all have
                active local movements pushing them forward today. If you are constitutionally more comfortable
                rebuilding sovereign power from the ground up (rather than yanking the usurping bastards on top down),
                choose a tool and lend a hand.
              </p>

              {/* Navigation Menu */}
              <nav className="bg-white/40 border-4 border-double border-[#000055]/40 p-8 md:p-12 space-y-3">
                <a href="#nation" className="block text-red-900 font-bold underline text-2xl hover:text-red-700">
                  Tools for Real National Democracy
                </a>
                <a href="#swiss" className="block text-red-900 font-bold underline text-2xl hover:text-red-700">
                  The Secret Swiss Proving Ground
                </a>
                <a href="#local" className="block text-red-900 font-bold underline text-2xl hover:text-red-700">
                  Tools for Reinventing Local Democracy
                </a>
                <a href="#workplace" className="block text-red-900 font-bold underline text-2xl hover:text-red-700">
                  Tools for True Workplace Democracy
                </a>
                <div className="pl-10 space-y-2 italic text-lg md:text-xl pt-2 border-l-2 border-red-900/20">
                  <a href="#kellman" className="block underline hover:text-blue-800">
                    Reclaiming Human Rights in the Workplace
                  </a>
                  <a href="#shann" className="block underline hover:text-blue-800">
                    Reclaiming the Workplace Itself
                  </a>
                </div>
                <a href="#linx" className="block text-red-900 font-bold underline text-2xl pt-4">
                  Resource Links to the Future
                </a>
              </nav>
            </div>

            {/* SECTION: NATIONAL INITIATIVE */}
            <section id="nation" className="pt-16 mb-24 border-t border-[#000055]/10">
              <SectionHeader lines={["RETURNING GOVERNMENT TO THE PEOPLE"]} />
              <p className="text-lg italic text-center mb-10 opacity-80">
                (excerpted from the Democracy Foundation web site.)
              </p>

              <div className="space-y-6 text-center font-bold mb-12">
                <p className="text-2xl">Reasserting First Principles, Reviving Sovereign Power:</p>
                <p className="text-3xl underline decoration-2 underline-offset-8">
                  The National Initiative For Democracy
                </p>
              </div>

              <div className="site-prose text-justify space-y-8 text-lg md:text-xl">
                <p>
                  The National Initiative For Democracy is a proposed amendment to the US Constitution and an
                  accompanying federal statute, which will bring the People into government as lawmakers at the national
                  level and in every state and local government jurisdiction in the United States. Beginning in 2002,
                  the People will have an opportunity to enact this Initiative in a national election conducted by the
                  nonprofit corporation, Philadelphia II.
                </p>
                <p>
                  Under the National Initiative, the People's lawmaking power will parallel, not replace, the powers of
                  our elected legislators. There will be two sources of law: the People and their elected
                  representatives.
                </p>

                <p className="font-bold text-2xl border-b-2 border-[#000055]/10 pb-2 inline-block uppercase">
                  The National Initiative includes:
                </p>
                <ul className="list-disc pl-12 space-y-6">
                  <li>
                    <strong className="text-blue-900 font-bold">The Democracy Amendment to the US Constitution</strong>:
                    which asserts the People's sovereign authority and legislative power to create and alter
                    governments, constitutions and laws, independent of existing governments.
                  </li>
                  <li>
                    <strong className="text-blue-900 font-bold">The Democracy Act</strong>: which establishes
                    legislative procedures by which the People can enact laws using ballot initiatives, and creates the
                    Electoral Trust, an independent government agency to administer those procedures on behalf of the
                    People. (It also explicitly bars any non-human "persons" -- i.e., PACs or corporate bodies -- from
                    participating in this process in ANY way.)
                  </li>
                </ul>
                <p>
                  The National Initiative has been developed and refined over the past decade by former Senator Mike
                  Gravel (D. Alaska, 1969 - 1981) and his colleagues. The Democracy Foundation and Philadelphia II, two
                  nonprofit corporations led by Senator Gravel, are now working to bring about the enactment of the
                  National Initiative. In 2002, The Democracy Foundation will launch a public information campaign to
                  educate people about democracy and their sovereign legislative authority derived from First
                  Principles. Philadelphia II will then conduct a nationwide election for the enactment of the National
                  Initiative.
                </p>
              </div>

              <div className="mt-12 bg-white/20 p-8 rounded border-2 border-[#000055]/10">
                <h4 className="font-bold text-xl mb-6 uppercase tracking-widest text-center border-b pb-2">
                  Explanatory Links
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-lg font-bold">
                  <li>
                    <a href={`${import.meta.env.BASE_URL}demorule/rationale`} className="underline">
                      Rationale
                    </a>
                    : Why we need the National Initiative For Democracy.
                  </li>
                  <li>
                    <a href={`${import.meta.env.BASE_URL}demorule/firstprinciples`} className="underline">
                      First Principles
                    </a>
                    : The philosophical foundation of the National Initiative.
                  </li>
                  <li>
                    <a href={`${import.meta.env.BASE_URL}demorule/partnership`} className="underline">
                      Partnership In Democracy
                    </a>
                    : How the People's Legislature corrects the flaws of representative democracy.
                  </li>
                  <li>
                    <a href={`${import.meta.env.BASE_URL}demorule/initiative`} className="underline">
                      The National Initiative For Democracy
                    </a>
                    : Additional information.
                  </li>
                  <li>
                    <a href={`${import.meta.env.BASE_URL}demorule/amendment`} className="underline">
                      The Democracy Amendment
                    </a>
                    : Text of the proposed Constitutional amendment.
                  </li>
                  <li>
                    <a href={`${import.meta.env.BASE_URL}demorule/act`} className="underline">
                      The Democracy Act
                    </a>
                    : Federal statute establishing the People's Legislature.
                  </li>
                  <li>
                    <a href={`${import.meta.env.BASE_URL}demorule/constitutionality`} className="underline">
                      Constitutionality
                    </a>
                    : The legal foundation of the National Initiative.
                  </li>
                  <li>
                    <a href={`${import.meta.env.BASE_URL}demorule/actionplan`} className="underline">
                      Action Plan
                    </a>
                    : Election &amp; educational program for the National Initiative.
                  </li>
                  <li className="md:col-span-2">
                    <a href={`${import.meta.env.BASE_URL}demorule/warpeace`} className="underline italic text-red-900">
                      War &amp; Peace and the Democracy Amendment
                    </a>{" "}
                    by Senator Mike Gravel
                  </li>
                </ul>
              </div>
            </section>

            {/* SECTION: SWITZERLAND */}
            <section id="swiss" className="pt-16 mb-24 border-t border-[#000055]/10">
              <SectionHeader
                lines={["Rediscovering Switzerland:", "The Strongest, Safest, Most", "Radical Democracy on Earth"]}
              />
              <div className="site-prose text-lg md:text-xl space-y-8 mt-10">
                <p className="font-bold uppercase text-center tracking-widest text-blue-900 text-xl border-b pb-2">
                  DIRECTPRESENTATIVE DEMOCRACY — Swiss-tested for over a century, now ready for international release.
                </p>
                <p>
                  No one bothers to assassinate Swiss politicians, they simply don't have any power. Switzerland has
                  been running her revolutionary little experiment in Direct Democracy since 1860, and has arguably
                  crafted the most secure, prosperous, and eco-friendly society on the planet. Let us meditate on her
                  lore...
                </p>
                <div className="flex flex-col space-y-3 font-bold text-red-900 underline text-xl">
                  <a href={`${import.meta.env.BASE_URL}demorule/switzerland`}>
                    Direct Democracy in Switzerland by Gregory Fossedal
                  </a>
                  <a href={`${import.meta.env.BASE_URL}demorule/switzerland`}>
                    Full Democracy — Definitive Direct Dem advocacy from Brian Beedham
                  </a>
                  <a href={`${import.meta.env.BASE_URL}demorule/switzerland`}>
                    Realizing Full Democracy — More great Beedham
                  </a>
                </div>
                <blockquote className="text-center italic font-bold text-3xl py-12 leading-relaxed">
                  "Democracy in the 20th century has been a half-finished
                  <br className="hidden md:block" />
                  thing. In the 21st, it can grow to its full height."
                </blockquote>
                <div className="flex flex-col space-y-3 font-bold text-red-900 underline text-lg">
                  <a href={`${import.meta.env.BASE_URL}demorule/consensualdemo`}>
                    DDEMOCRACY MEETINGPLACE — Links to Direct Dem movements in many countries and coverage of new
                    international developments.
                  </a>
                  <a href={`${import.meta.env.BASE_URL}demorule/consensualdemo`}>
                    Direct Democracy Now! — Another good personal page of arguments for Direct Democratic reform
                  </a>
                  <a href={`${import.meta.env.BASE_URL}demorule/innovations`}>
                    VOTE.ORG: Government by the People — A new web/tech-assisted paradigm for Democratic Renewal
                  </a>
                  <a href={`${import.meta.env.BASE_URL}demorule/innovations`}>
                    "Let the People Decide.............." — Well argued Direct Democracy campaign for the UK
                  </a>
                  <a href={`${import.meta.env.BASE_URL}demorule/innovations`}>
                    Earth Charter: Democracy for Sustainability — Powerful Earth Charter Amendment draft showing why
                    Direct Democracy is vital to just and sustainable 3rd World development.
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION: LOCAL COMMUNITIES */}
            <section id="local" className="pt-16 mb-24 border-t border-[#000055]/10">
              <SectionHeader
                lines={[
                  "Reimagining Local Communities,",
                  "Reinventing Consensual Rule:",
                  "Center for Consensual Democracy",
                ]}
              />
              <div className="site-prose text-lg md:text-xl space-y-8 mt-10">
                <p>
                  Consensual Democracy is a proven way to revive, renew and sustain your local community — a grassroots
                  approach that empowers local citizens to build their own virtual government and the communities they
                  truly desire. Consensual Democracy is a practical approach with a 50-year track record that mobilizes
                  the shared visions, values and goals of the immediate community. All a town needs to get started is a
                  group of thirty people willing to dream and work together...
                </p>
                <div className="flex flex-col space-y-2 font-bold text-red-900 underline text-xl">
                  <a href={`${import.meta.env.BASE_URL}demorule/consensualdemo`}>
                    Center for Consensual Democracy — The Mother Lode
                  </a>
                  <a href={`${import.meta.env.BASE_URL}demorule/consensualdemo`}>
                    Recreating Democracy by Wells &amp; Lemmel — The Good Book
                  </a>
                  <a href={`${import.meta.env.BASE_URL}demorule/consensualdemo`}>
                    Tools for Building Community — A Report on the State of the Art
                  </a>
                </div>
                <div className="mt-10 border-t pt-8">
                  <p className="font-bold uppercase text-2xl mb-6 text-center">Consensual Communities in Maine</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 font-bold underline text-blue-900 text-center">
                    <li>
                      <a href={`${import.meta.env.BASE_URL}demorule/maine/limestone`}>Limestone, Maine</a>
                    </li>
                    <li>
                      <a href={`${import.meta.env.BASE_URL}demorule/maine/waterville`}>Waterville/Mid-Maine Region</a>
                    </li>
                    <li>
                      <a href={`${import.meta.env.BASE_URL}demorule/maine/aroostook`}>Aroostook County, Maine</a>
                    </li>
                    <li>
                      <a href={`${import.meta.env.BASE_URL}demorule/maine/mikmaq`}>Aroostook Band of Mi'Gmaq/Micmac</a>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* SECTION: WORKPLACE DEMOCRACY — top-level anchor matching nav */}
            <section id="workplace" className="pt-16 mb-0 border-t border-[#000055]/10">
              <SectionHeader lines={["Tools for True Workplace Democracy"]} />
            </section>

            {/* SECTION: LABOR LAW (Kellman) */}
            <section id="kellman" className="pt-12 mb-24">
              <SectionHeader
                lines={[
                  "Reclaiming Human Rights in the Workplace,",
                  "Renouncing Servitude to Corporate Rule:",
                  "Peter Kellman's liberating New Labor Law",
                ]}
              />
              <div className="site-prose text-lg md:text-xl space-y-12 mt-12">
                <p>
                  Not only do corporations illicitly claim the Constitutional rights of human persons, they aggressively
                  refuse those same rights to their own employees. Today US workers enjoy about the same freedoms in
                  their workplace as indentured serfs in a fascist land. Peter Kellman and the Labor Party have a rather
                  more American idea. They demand a law that would finally eliminate slavery in all its forms. In
                  effect, their law would restore three vital freedoms:
                </p>

                {/* Freedom of Speech */}
                <div className="bg-white/10 p-8 border-l-8 border-red-900">
                  <h4 className="font-bold text-3xl text-red-900 uppercase mb-6 underline tracking-tight">
                    FREEDOM OF SPEECH
                  </h4>
                  <p className="mb-4">
                    Up to now, courts have privileged employer property rights over the workers' free speech rights. If
                    workers are to enjoy effective freedom of speech and expression, this must change in at least three
                    ways:
                  </p>
                  <div className="space-y-6 pl-6 border-l-2 border-red-900/20">
                    <p>
                      Workers must enjoy freedom of speech on as well as off the employer's property… When an employer
                      has the power to effectively determine who will — and who will not — speak to "its" workers, the
                      employer is acting as a master and it is putting the workers in the position of dependent slaves.
                    </p>
                    <p>
                      Workers must be free from employer as well as government censorship except where job performance
                      is at stake… When an employer censors a worker's speech for reasons unrelated to job performance,
                      it is acting as a master and putting the worker in the position of a slave.
                    </p>
                    <p>
                      The people — including workers — must be free to express themselves by withholding patronage and
                      requesting others to withhold patronage… When workers are prohibited from effectively
                      communicating truthful information about employers, then they are treated more like slaves than
                      like citizens.
                    </p>
                  </div>
                </div>

                {/* Freedom of Association */}
                <div className="bg-white/10 p-8 border-l-8 border-red-900">
                  <h4 className="font-bold text-3xl text-red-900 uppercase mb-6 underline tracking-tight">
                    FREEDOM OF ASSOCIATION
                  </h4>
                  <p className="mb-4">
                    Under the NLRA, the government decides what groups of workers may assemble together for collective
                    action and bargaining. If workers are to enjoy effective freedom of association, this must change in
                    at least two ways:
                  </p>
                  <div className="space-y-6 pl-6 border-l-2 border-red-900/20">
                    <p>
                      Any size group of workers can form an association, including a union, and present and resolve
                      grievances and make agreements with the employer… When an individual worker is forced to face the
                      collective power of a corporate employer without the support of his or her union, she is placed in
                      the position of a helpless slave dealing with a powerful master.
                    </p>
                    <p>
                      Workers, not the government or the employer, must determine the scope of their own associations
                      for purposes of collective action and bargaining… When workers cannot determine who they will
                      associate with for mutual aid and protection, they are denied a basic right of citizenship.
                    </p>
                  </div>
                </div>

                {/* Freedom of Labor */}
                <div className="bg-white/10 p-8 border-l-8 border-red-900">
                  <h4 className="font-bold text-3xl text-red-900 uppercase mb-6 underline tracking-tight">
                    FREEDOM OF LABOR
                  </h4>
                  <p className="mb-6">
                    Under current law, the workers' freedom of labor is subordinated to employer property rights. For
                    workers to enjoy effective freedom of labor, this must change in at least four ways:
                  </p>
                  <div className="space-y-8">
                    <div className="pl-6 border-l-2 border-red-900/20 italic">
                      <p className="font-bold mb-2 not-italic underline tracking-tight uppercase">
                        The right to strike must include the right not to lose one's job permanently to a
                        strikebreaker...
                      </p>
                      <p>
                        When an employer has the power to punish workers for exercising their fundamental rights, the
                        employer is acting as a master and the employee is a slave whose rights mean nothing.
                      </p>
                    </div>

                    <div className="pl-6 border-l-2 border-red-900/20 italic">
                      <p className="font-bold mb-2 not-italic underline tracking-tight uppercase">
                        The freedom of labor must include the right to refuse to contribute personal labor to
                        enterprises that assist unfair employers...
                      </p>
                      <p>
                        …by, for example, supplying them with parts, distributing their products, or financing their
                        operations. When a "neutral" employer can compel a worker to contribute his or her personal
                        labor to assist another employer in violating the human rights of its employees, the employer is
                        placed in the position of a master and the worker in that of a slave with no control over his or
                        her personal labor.
                      </p>
                    </div>

                    <div className="pl-6 border-l-2 border-red-900/20 italic">
                      <p className="font-bold mb-2 not-italic underline tracking-tight uppercase">
                        The freedom of labor must include the right to bargain with and to strike and boycott against
                        the company that actually controls terms and conditions of employment...
                      </p>
                      <p>
                        When employers can use corporate formalities to render workers' rights meaningless, the employer
                        is acting like a master and the employee is reduced to slavery.
                      </p>
                    </div>

                    <div className="pl-6 border-l-2 border-red-900/20 italic">
                      <p className="font-bold mb-2 not-italic underline tracking-tight uppercase">
                        The freedom of labor must include the right to withhold personal labor in solidarity with
                        workers in other countries...
                      </p>
                      <p>
                        When corporations are permitted to organize multinationally, while workers are limited to local
                        protests because of artificial corporate boundaries, then corporations become arrogant masters
                        while workers are reduced to dependent slavery.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center pt-8 font-bold text-2xl text-red-900 underline">
                  <a href={`${import.meta.env.BASE_URL}demorule/laborlaw`}>
                    Toward a New Labor Law — The Fiery Full Monty
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION: OWNERSHIP (Turnbull) */}
            <section id="shann" className="pt-16 mb-24 border-t border-[#000055]/10">
              <SectionHeader
                lines={[
                  "Reclaiming the Workplace itself,",
                  "Transferring Ownership to Stakeholders:",
                  "Turnbull's Ownership-Transfer-Corporation",
                ]}
              />
              <div className="site-prose text-lg md:text-xl space-y-8 mt-10">
                <p>
                  Visionary author of <em>Democratising The Wealth of Nations</em>, Shann Turnbull has pioneered a
                  practical, painless, even profitable way to transfer ownership of all our modern corporations into
                  employee and stakeholder hands. His 20-year plan is the ultimate prescription for a truly prosperous
                  and democratic society, and deserves immediate debate in every forum in the land.
                </p>
                <div className="flex flex-col space-y-3 font-bold text-red-900 underline text-xl">
                  <a href={`${import.meta.env.BASE_URL}demorule/ownership`}>
                    Building a Sustainable, Fulfilling Stakeholder Democracy — Overview
                  </a>
                  <a href={`${import.meta.env.BASE_URL}demorule/ownership`}>
                    Humanising Corporations to Enrich Citizens &amp; Democracy — How to Create an
                    Ownership-Transfer-Corporation
                  </a>
                </div>
              </div>
            </section>

            {/* SECTION: RESOURCES */}
            <section id="linx" className="pt-16 mb-24 border-t border-[#000055]/10">
              <SectionHeader
                lines={["Resources for a Countercoup Revolution,", "Links for Rebuilding a Convivial World"]}
              />
              <div className="site-prose text-lg md:text-xl space-y-8 mt-10">
                <ul className="list-disc pl-12 space-y-8">
                  <li>
                    <strong className="text-blue-900">
                      <a
                        href="https://hurricanedisplay.co.uk/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        Innovations in Democracy
                      </a>
                    </strong>{" "}
                    — "Toward wiser democracies that work for all." A truly inspiring compilation of all the best ideas
                    around...
                  </li>
                  <li>
                    <strong className="text-blue-900 font-bold">
                      <a href={`${import.meta.env.BASE_URL}demorule/chaordic`} className="underline">
                        The Chaordic Alliance
                      </a>
                    </strong>{" "}
                    — Founded by Visa co-founder Dee Hock, who combined elements of uncontrolled creative chaos and
                    orderly common purposes and principles to help communities and organizations self-organize.
                    <span className="block mt-2 font-normal">
                      Among their projects is an ambitious worldwide network to help a new civilization self-organize,
                      called <strong>Terra Civitas</strong>.
                    </span>
                  </li>
                </ul>
              </div>
            </section>

            {/* FOOTER */}
            <footer className="mt-32 pt-16 border-t-8 border-double border-[#000055]/30 text-center pb-20">
              <div className="mb-12 font-bold italic text-xl md:text-2xl">
                <p>Have more seminal suggestions?</p>
                <p>
                  Email them to us at:{" "}
                  <a href="mailto:bigmed@nancho.net" className="underline text-blue-900 hover:text-red-800">
                    bigmed@nancho.net
                  </a>
                </p>
              </div>

              <a href="/new-nancho/newchau/" className="group inline-block">
                <img
                  src={`${import.meta.env.BASE_URL}graph/revolt.gif`}
                  alt="Revolt"
                  className="mx-auto mb-6 w-full max-w-[600px] hover:scale-105 transition-transform duration-300"
                />
                <p className="font-bold tracking-[0.3em] text-lg md:text-xl group-hover:text-red-700 transition-colors uppercase">
                  The Way Home
                </p>
              </a>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
