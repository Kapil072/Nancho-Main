import React from "react";

interface StudyProps {
  onNavigate: (page: string) => void;
}

const Study = ({ onNavigate }: StudyProps) => {
  const resourceLinks = [
    {
      title: "Gospels & Canons",
      desc: "Foundational essays on corporate structure and pathology",
      href: "https://nancho.net/newchau/gospels.html",
      external: true
    },
    {
      title: "Big Books / Texts",
      desc: "Seminal publications detailing corporate behavior and history",
      href: "#",
      external: false
    },
    {
      title: "Big Links & Groups",
      desc: "Active citizen organizations and coalitions targeting corporate power",
      href: "#",
      external: false
    },
    {
      title: "Big Movies & Videos",
      desc: "Documentaries and films illustrating the corporate usurpation of sovereignty",
      href: "#",
      external: false
    },
    {
      title: "Big Online References",
      desc: "Databases, archives, and directories for corporate research",
      href: "#",
      external: false
    },
    {
      title: "Big Terms & Definitions",
      desc: "Etymological glossary of corporate anthroculture definitions",
      href: "#",
      external: false
    },
    {
      title: "Nancho Consultations",
      desc: "Interviews with leading thinkers and meme meisters",
      href: "#",
      external: false
    },
    {
      title: "Anthroculture Research Hints",
      desc: "Investigations into systemic childhood stress and docility conditioning",
      href: "#",
      external: false
    },
  ];

  return (
    <div className="px-4 py-8 text-foreground">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl text-primary font-bold mb-2 uppercase tracking-wide">
          Big Body Study Hall
        </h1>
        <h2 className="text-base text-retro-amber italic">
          Where Big Knowledge Finally Promises a Little Power
        </h2>
        <p className="text-xs text-muted-foreground mt-2">
          Source:{" "}
          <a
            href="https://nancho.net/bigmed2001/bigstudy.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-retro-green"
          >
            nancho.net/bigmed2001/bigstudy.html
          </a>
        </p>
        <blockquote className="max-w-xl mx-auto my-6 text-sm italic text-muted-foreground leading-relaxed">
          "To advance this campaign or lead one of your own, you will need a few basic facts, 
          a couple days of study, and a single gut-wrenching moment of insight that our strange 
          diagnosis is true — Big Corporate Bodies are indeed alive, in charge and out of control."
        </blockquote>
      </div>

      <div className="max-w-2xl mx-auto bg-card p-6 border border-border rounded shadow-lg">
        <h2 className="text-lg font-bold text-white mb-6 border-b border-border pb-2">
          Study Hall Directory
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {resourceLinks.map((item) => (
            <div
              key={item.title}
              className="p-4 border border-border bg-background/30 hover:border-retro-green transition-colors"
            >
              <h3 className="font-bold text-retro-green text-base mb-1">{item.title}</h3>
              <p className="text-xs text-foreground mb-3">{item.desc}</p>
              {item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-retro-amber hover:underline font-bold"
                >
                  Access Section &rarr;
                </a>
              ) : (
                <button
                  onClick={() => alert(`This section is in the local archives.`)}
                  className="text-xs text-retro-amber hover:underline font-bold"
                >
                  Access Section &rarr;
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Original Site Link */}
      <div className="max-w-2xl mx-auto mt-6 p-4 border border-border bg-card rounded text-center">
        <p className="text-sm text-muted-foreground mb-2">
          View the full original Study Hall on nancho.net:
        </p>
        <a
          href="https://nancho.net/bigmed2001/bigstudy.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-retro-green text-retro-green hover:bg-retro-green hover:text-black font-bold px-4 py-2 rounded transition-colors text-sm"
        >
          Open Original Study Hall &rarr;
        </a>
      </div>

      <div className="text-center mt-12 pt-6 border-t border-border">
        <button
          onClick={() => onNavigate("home")}
          className="text-retro-green hover:text-primary font-bold text-base underline"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Study;
