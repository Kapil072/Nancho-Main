﻿﻿import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";

const audioResources = [
  {
    title: "Project Censored's Peter Phillips on the most critical unheard stories of our time",
    label: "Too Important to Report",
    link: "https://projectcensored.org",
  },
  {
    title: "Thom Hartmann interviews ex-Reagan asst AG Bruce Fein on urgent need for impeachment",
    label: "Suprapartisan Alarms",
    link: "https://web.archive.org/web/20080000000000*/thommedia.com",
  },
  {
    title: "Paul Craig Roberts on Democracy's End -- Ex-Reagan official/WSJ editor on how far the sky has fallen",
    label: "Paul Craig Roberts on Democracy's End",
    link: "https://www.paulcraigroberts.org",
  },
  {
    title: "A stirring 5-minute reminder of how much we've lost so fast",
    label: "JFK on Media and Secrecy",
    youtubeId: "zdMbmdFOvTs",
  },
  {
    title: "Michael Parenti's classic speech on a democratic people's need to confront \"conspiracies\" here",
    label: "JFK & Gangster Government",
    youtubeId: "AqexZnbcFGo",
  },
];

const Resources = () => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <PageLayout>
      <h1 className="text-2xl font-bold text-foreground mb-2 uppercase text-center">Resources</h1>
      <p className="text-base text-foreground mb-8 text-center">
        Recommended References -- Please review as many of these as possible before the conference.
      </p>

      {/* Reference image buttons */}
      <div className="flex flex-wrap gap-8 mb-10 justify-center">
        <Link to="/recommended-books/" className="block">
          <img
            src={`${baseUrl}images/truth_books.png`}
            alt="Recommended Books"
            className="w-32 h-auto"
          />
        </Link>
        <Link to="/recommended-films/" className="block">
          <img
            src={`${baseUrl}images/truth_films.png`}
            alt="Recommended Films"
            className="w-32 h-auto"
          />
        </Link>
        <Link to="/online-resources/" className="block">
          <img
            src={`${baseUrl}images/truth_online.png`}
            alt="Online Resources"
            className="w-32 h-auto"
          />
        </Link>
      </div>

      <div className="flex flex-wrap gap-4 mb-10 justify-center">
        <Link
          to="/recommended-books/"
          className="px-4 py-2 bg-blue-600 text-white rounded text-sm font-semibold hover:bg-blue-700 transition-colors"
        >
          Recommended Books →
        </Link>
        <Link
          to="/recommended-films/"
          className="px-4 py-2 bg-blue-600 text-white rounded text-sm font-semibold hover:bg-blue-700 transition-colors"
        >
          Recommended Films →
        </Link>
        <Link
          to="/online-resources/"
          className="px-4 py-2 bg-blue-600 text-white rounded text-sm font-semibold hover:bg-blue-700 transition-colors"
        >
          Online Resources →
        </Link>
      </div>

      <hr className="border-gray-300 my-8" />

      <section>
        <h2 className="font-bold text-lg text-foreground mb-8 uppercase text-center tracking-wide">
          Inspiring &amp; Explanatory Audio
        </h2>

        <div className="space-y-10 mt-6">
          {audioResources.map((item, idx) => (
            <div key={idx} className="pb-8 border-b border-gray-300 last:border-0">
              <h3 className="font-bold text-base text-foreground uppercase tracking-wider mb-3 text-center">
                {item.label}
              </h3>
              <p className="text-base text-foreground mb-4">{item.title}</p>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline font-semibold"
                >
                  Listen / Access →
                </a>
              )}
              {item.youtubeId && (
                <div className="aspect-video w-full max-w-2xl mt-4">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}`}
                    title={item.label}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default Resources;

