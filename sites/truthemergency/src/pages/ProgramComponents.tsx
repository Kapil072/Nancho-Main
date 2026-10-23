import PageLayout from "@/components/PageLayout";

const sections = [
  {
    heading: "Playing Field Discussions",
    items: [
      "Assessing the strength/types of opposition to elite-destabilizing truths",
      "Assessing extent/implications of public fear, resignation and/or cynicism",
      "Assessing latent strength and potential of independent media",
      "Identifying vulnerabilities in the corporate media matrix",
      "Classifying potential organizational allies and constituencies",
    ],
  },
  {
    heading: "Mission / Goal Discussions",
    items: [
      "Proposing fundamental breakthroughs in the public conversation that could realistically be achieved with effective collaboration among unauthorized media and opinion leaders during the subsequent year",
      "Identifying the most important/motivating educational/informational goals",
    ],
  },
  {
    heading: "Strategy Discussions",
    items: [
      "Exploring what new distribution networks can/should be created to bypass MSM filters and still reach critical numbers of the public and decision-makers",
      "Prioritizing the strongest, most persuasive messages/memes to catalyze a populist awakening, educate the misinformed, and mobilize resistance",
      "Developing consensual benchmarks to assess and improve our individual and collective progress over the course of the subsequent year",
      "Offering ways to harmonize and coordinate the myriad single-issue citizen reform movements in order to minimize competition and maximize synergy",
    ],
  },
  {
    heading: "Tactical Discussions",
    items: [
      "Learning from the breakthroughs, blowbacks and unintended consequences of recent writings, films and media initiatives",
      "Fund-raising and apportioning resources among different media arenas",
      'Developing organizational formats and truth "marketing" plans that effectively coordinate populist messaging and inspire tactical diversity',
    ],
  },
  {
    heading: "Follow-through",
    items: [
      "Encourage commitments from participants to submit analyses, plans, and proposed collaborative actions to advance the agreed-upon goals",
      "Creating supportive infrastructure for an online clearinghouse to report upon, coordinate and multiply after-actions from this effort",
    ],
  },
  {
    heading: "Satya Sam (Satyagraha Samurai*) Awards",
    items: [
      "Recognition for courageous journalistic figures (casualties and survivors) nominated by conference organizers, advisors and early registrants",
    ],
    note: '* Gandhi: "Satyagraha\'s root meaning is holding on to truth, hence truth-force..." thus Satyagraha Samurai are heroic non-violent warriors whose only weapon is the truth.',
  },
];

const ProgramComponents = () => {
  return (
    <PageLayout>
      <h1 className="text-2xl font-bold text-primary mb-6">Program Components</h1>

      <div className="space-y-8">
        {sections.map((section, idx) => (
          <section key={idx}>
            <h2 className="font-bold text-base text-foreground border-b border-border pb-1 mb-3">{section.heading}</h2>
            <ul className="list-disc pl-5 space-y-2">
              {section.items.map((item, iIdx) => (
                <li key={iIdx} className="text-base leading-relaxed text-foreground/90">
                  {item}
                </li>
              ))}
            </ul>
            {section.note && <p className="mt-3 text-sm italic text-muted-foreground">{section.note}</p>}
          </section>
        ))}
      </div>
    </PageLayout>
  );
};

export default ProgramComponents;
