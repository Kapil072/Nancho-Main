import PageLayout from "@/components/PageLayout";

const sections = [
  {
    heading: "Summit Prerequisite Viewings",
    items: [
      {
        title:
          "Frank Dorrel's Obligatory Overview -- What I've Learned About U.S. Foreign Policy: The War Against the Third World",
        description:
          "A powerful compilation exposing the body count behind U.S. foreign policy. NOTE: The powerful Panama Deception clip included in this compilation is only a brief taste of this extraordinary documentary.",
        youtubeId: "OR-6ANIjKDk",
      },
    ],
  },
  {
    heading: "Brilliant, Seditious and Hilariously Disarming Romp Through Modern Militant Petrophilia",
    items: [
      {
        title: "The Oil Factor -- Behind the War on Terror",
        youtubeId: "Kd4hCaEzU9c",
      },
    ],
  },
  {
    heading: "Bad Cop / Good Cop Approaches to Truth-Telling",
    items: [
      {
        title: "Shock Doctrine -- Tough Love Truths (naomiklein.com)",
        description: "Naomi Klein on disaster capitalism and the exploitation of crisis.",
        youtubeId: "hA736oK9FPg",
        link: "https://naomiklein.org/shock-doctrine/",
        linkLabel: "naomiklein.com",
      },
      {
        title: "Iraq For Sale Excerpts Banned in Congress",
        description: "bravenewfilms.org",
        youtubeId: "8Cjxn4XK7aw",
        link: "https://bravenewfilms.org/",
        linkLabel: "bravenewfilms.org",
      },
      {
        title: 'The Yes Men News-jam Dow on BBC -- "We take full responsibility for the Bhopal disaster."',
        description: "Subversive Truthiness -- How the Pros Do It",
        youtubeId: "LiWlRoJGDEo",
      },
      {
        title: "Country Music Stars vs. Al-Qaeda",
        description: "Onion News Network",
        youtubeId: "xP6ZnNmEPK8",
      },
      {
        title: "Uncle Jay Explains New Journalism to Kids",
        description: "unclejayexplains.com",
        youtubeId: "9a7QVlL1Kf8",
        link: "http://www.unclejayexplains.com/",
        linkLabel: "unclejayexplains.com",
      },
      {
        title: "Gap Unveils New 'For Kids By Kids' Clothing Line",
        description: "The Onion",
        youtubeId: "X8bV4Mns5cM",
      },
    ],
  },
];

const VideoInspirations = () => {
  return (
    <PageLayout>
      <h1 className="text-2xl font-bold text-center text-foreground mb-2 uppercase">Video Inspirations</h1>
      <p className="text-base text-center text-foreground mb-10">Creative Media from the Heartland and Beyond</p>

      {sections.map((section, sIdx) => (
        <section key={sIdx} className="mb-14">
          <h2 className="text-lg font-bold text-foreground uppercase text-center border-b border-gray-300 pb-3 mb-10">
            {section.heading}
          </h2>
          <div className="space-y-10">
            {section.items.map((item, iIdx) => (
              <div key={iIdx} className="pb-8 border-b border-gray-300 last:border-0">
                <h3 className="font-bold text-base text-foreground mb-3">{item.title}</h3>
                {item.description && (
                  <p className="text-base text-foreground/80 mb-4 leading-relaxed">{item.description}</p>
                )}
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:underline block mb-4 font-semibold"
                  >
                    {item.linkLabel}
                  </a>
                )}
                <div className="aspect-video w-full max-w-2xl mx-auto">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}`}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </PageLayout>
  );
};

export default VideoInspirations;
