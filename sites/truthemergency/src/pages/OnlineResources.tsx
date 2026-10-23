﻿import { useState } from "react";
import PageLayout from "@/components/PageLayout";

const onlineResources = [
  {
    title: "Taming the Giant Corporation",
    description:
      "State-of-the-Art Memes & Tactics for Corporate Subordination. Offers full video and audio lecture archives concerning the restriction of corporate power.",
    link: "https://web.archive.org/web/20150223102818/http://tamethecorporation.org/agenda.html",
    archiveLabel: "Full A/V Archives here!",
    imageUrl:
      "/images/tamingcorpsheader400.jpg",
  },
  {
    title: "National Conference for Media Reform (NCMR 2007)",
    description:
      "Perspectives on America's Populist Nervous System Today. Highlights full media and reform lectures and sessions advocating for democratizing communication networks.",
    link: "https://web.archive.org/web/20150223102818/http://www.freepress.net/ncmr07/=video07",
    archiveLabel: "Full A/V Archives here!",
    imageUrl:
      "/images/mediareformheader400.jpg",
  },
  {
    title: "George Carlin on Education vs. Corporate Interest",
    description:
      "Black Comedic Relief -- classic segment exposing the corporate interest in keeping the public under-informed.",
    youtubeId: "AMqJvhmD5Yg",
  },
  {
    title: "The New American Century",
    description:
      "The Project for the New American Century (PNAC) -- Documentary. Connecting the dots of neo-imperialism. The original PNAC playlist below.",
    youtubeId: "pa1AYlP47cI",
  },
  {
    title: "A John Pilger Collection",
    description:
      "Four hard-hitting documentaries by investigative journalist John Pilger exploring imperialism and corporate power around the globe.",
    youtubePlaylists: [
      { name: "New Rulers of the World", id: "1uW1qJoWYPg" },
      { name: "War by Other Means", id: "AeYiFu6y3a4" },
      { name: "Flying the Flag (Arming the World)", id: "rqbPS1nNcEU" },
      { name: "Stealing a Nation", id: "0zhGvId4fcc" },
    ],
    vimeoNote:
      "Stealing a Nation is also available on Vimeo.",
  },
  {
    title: "Secret Wars of the CIA -- The War against the Third World",
    description:
      "The basic message is that the CIA, the Pentagon, multinational corporations, the media and the Government of the United States are responsible for the deaths of millions of people in the third world. The video's ten segments include: Martin Luther King's anti-war career, John Stockwell (former CIA Station Chief in Angola), Bill Moyer's The Secret Government, Coverup: Behind the Iran-Contra Affair by Barbara Trent, School of Assassins, Genocide by Sanctions by Gloria La Riva, Amy Goodman on East Timor, The Panama Deception by Barbara Trent, Ramsey Clark on sanction-starved Iraq, and Vietnam veteran/anti-war activist S. Brian Willson.",
    youtubeId: "bmYZ_kWHk3Q",
  },
  {
    title: "The Century of the Self",
    description:
      '"This series is about how those in power have used Freud\'s theories to try and control the dangerous crowd in an age of mass democracy." -- Adam Curtis',
    youtubeId: "gZw8NRCPmSc",
    parts: [
      "Part I -- Happiness Machines (Freud, Bernays and the transformation of propaganda to PR)",
      "Part II -- The Engineering of Consent",
      "Part III -- There is a Policeman inside your Head",
      "Part IV -- Eight People Sipping Wine in Kettering (Blair, Clinton and the reversion of PR to propaganda)",
    ],
  },
];

const OnlineResources = () => {
  const [pilgerVideoId, setPilgerVideoId] = useState("1uW1qJoWYPg");

  return (
    <PageLayout>
      <div className="space-y-12">
        {onlineResources.map((item, idx) => (
          <div key={idx} className="pb-8 border-b border-gray-300 last:border-0">
            {/* Section Title - Large, centered, uppercase */}
            <h2 className="text-lg font-bold text-foreground mb-6 uppercase tracking-wide text-center">
              {item.title}
            </h2>

            {/* Description */}
            {item.description && (
              <p className="text-base text-foreground mb-6 leading-relaxed">
                {item.description}
              </p>
            )}

            {/* Static linked website with image */}
            {item.link && (
              <div className="mb-8">
                {item.imageUrl && (
                  <div className="mb-4">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="max-h-32 w-auto"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                )}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-blue-600 hover:underline"
                >
                  {item.archiveLabel ?? "Access full archive here"}
                </a>
              </div>
            )}

            {/* John Pilger playlist switcher */}
            {item.youtubePlaylists && (
              <div className="space-y-6">
                {/* Playlist buttons */}
                <div className="flex flex-col gap-4">
                  {item.youtubePlaylists.map((pl, pIdx) => (
                    <div key={pIdx}>
                      <button
                        onClick={() => setPilgerVideoId(pl.id)}
                        className={`text-sm font-semibold transition-colors ${
                          pilgerVideoId === pl.id
                            ? "text-blue-700 underline"
                            : "text-blue-600 hover:underline"
                        }`}
                      >
                        {pl.name}
                      </button>
                    </div>
                  ))}
                </div>
                {/* Video embed */}
                <div className="aspect-video w-full max-w-2xl">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube-nocookie.com/embed/${pilgerVideoId}`}
                    title="John Pilger Documentary"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                {item.vimeoNote && (
                  <p className="text-sm text-foreground italic">{item.vimeoNote}</p>
                )}
              </div>
            )}

            {/* Single YouTube embed */}
            {item.youtubeId && (
              <div className="space-y-6">
                <div className="aspect-video w-full max-w-2xl">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}`}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                {item.parts && (
                  <ul className="text-sm text-foreground space-y-2 list-none pl-0">
                    {item.parts.map((part, pIdx) => (
                      <li key={pIdx}>{part}</li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default OnlineResources;


