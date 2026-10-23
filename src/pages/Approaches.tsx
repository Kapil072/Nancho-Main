import React, { useState } from "react";

interface ApproachesProps {
  onNavigate: (page: string) => void;
}

const Approaches = ({ onNavigate }: ApproachesProps) => {
  const [activeStep, setActiveStep] = useState(1);
  const [activePath, setActivePath] = useState("teacher");

  const steps = [
    { id: 1, name: "Step I: The Premises" },
    { id: 2, name: "Step II: The Homework" },
    { id: 3, name: "Step III: The Paths" },
  ];

  const paths = {
    teacher: {
      title: "The Teacher / Theorist Path",
      quote: '"In politics, experiments mean revolutions." — Benjamin Disraeli',
      desc: "For those who investigate corporate history, constitutional charters, and corporate personhood. This path explores how corporations obtained human rights and the legal maneuvers required to dismantle them.",
      topics: ["History of Incorporation", "Corporate Charters as Privileges", "Re-engineering Corporate DNA"],
      entry: "Theorist Entry",
    },
    warrior: {
      title: "The Warrior / Activist Path",
      quote: '"Every man has a right to abolish an old government and establish a new one..." — James Madison',
      desc: "Preparing for the direct campaign. Harnessing citizen ordinances at the municipal level (e.g. Town Meetings) and pushing referendum campaigns to revoke corporate charters locally.",
      topics: ["Ballot Access & Referendums", "Anti-Corporate Town Ordinances", "Direct Action & Lobbying"],
      entry: "Warrior Entry",
    },
    metamed: {
      title: "The Adept / Metamedical Path",
      quote:
        '"The task is not to see what no one has seen, but to think what nobody has thought..." — Erwin Schrödinger',
      desc: "Corporations are living systems feeding like rogue tumors on the Earth and human energy. Activists are the body politic's immune forces — waking up to our power will set us free.",
      topics: ["Big Body Pathology", "Somatic & Ki Consciousness", "Bioregional Self-Defense"],
      entry: "Adept Entry",
    },
    jammer: {
      title: "The Jammer / Artist Path",
      quote: '"We live in media as fish live in water." — Ted Nelson',
      desc: "Subverting corporate advertising and propaganda. Reclaiming public space and cultural signs using culture jamming, parody, and creative media hacking to diminish corporate respect.",
      topics: ["Culture Jamming", "Media Hacking & Guerilla Art", "Memetic Cascades"],
      entry: "Jammer Entry",
    },
  };

  return (
    <div className="px-4 py-8 text-foreground">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl text-primary font-bold mb-2 uppercase tracking-wide">
          Overwhelming Corporate Power
        </h1>
        <h2 className="text-lg text-retro-amber italic">Gospels, Tracts &amp; Improbable Truths</h2>
        <p className="text-xs text-muted-foreground mt-1">
          Source:{" "}
          <a
            href="https://nancho.net/newchau/gospels.html"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-retro-green"
          >
            nancho.net/newchau/gospels.html
          </a>
        </p>
        <blockquote className="max-w-xl mx-auto border-l-4 border-primary pl-4 my-6 text-sm italic text-left">
          "LET US LIFT OUR VISION HIGH ENOUGH TO DOMINATE THE PROBLEM." <br />
          <span className="font-bold">— Pierre Teilhard de Chardin</span>
        </blockquote>
        <p className="text-sm text-foreground max-w-2xl mx-auto leading-relaxed">
          New Chautauqua will sound the starter's gun for the human vs. corporate body endgame. If you want to play,
          star or just understand what the hell you're watching, we recommend a little reading and the three steps
          below.
        </p>
      </div>

      {/* Disclaimer */}
      <div className="max-w-2xl mx-auto mb-6 p-4 border border-border bg-background/40 text-xs text-muted-foreground leading-relaxed">
        <span className="font-bold text-retro-amber uppercase">Disclaimer &amp; Referral: </span>
        Note that hardly any of these readings obsess on the crimes of particular corporations. Rather they
        strategically treat all large corporations as a common class of predators whose combined might and consumptive
        intent mortally threaten us all. We focus on the corporate species here, and what must now be done to reclaim
        our land and future from their kind. For specific brand-name dirt, dig in:{" "}
        <a
          href="http://www.multinationalmonitor.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-retro-green"
        >
          Multinational Monitor
        </a>
        ,{" "}
        <a
          href="http://www.corpwatch.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-retro-green"
        >
          Corporate Watch US
        </a>
        .
      </div>

      {/* Steps Navigation */}
      <div className="flex justify-center gap-2 mb-8 border-b border-border pb-4">
        {steps.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveStep(s.id)}
            className={`px-4 py-2 font-bold text-sm border transition-all ${
              activeStep === s.id
                ? "bg-primary text-white border-primary"
                : "bg-card text-retro-green border-border hover:border-retro-green"
            }`}
          >
            {s.name}
          </button>
        ))}
      </div>

      {/* Step Contents */}
      <div className="max-w-2xl mx-auto bg-card p-6 border border-border rounded shadow-lg mb-8">
        {activeStep === 1 && (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-retro-amber border-b border-border pb-2">
              Step I: Behold the Premises
            </h2>
            <div className="space-y-4">
              <div className="p-4 border-l-4 border-retro-red bg-background/50">
                <p className="font-bold text-sm text-retro-red mb-1">Premise 1: Biological vs. Legal</p>
                <p className="text-sm">
                  Big Corporate Bodies, unlike you and I, have no way to sense or value truth, beauty, Nature, the
                  Spirit, liberty or love. They are clearly too blind and primitive to deserve any political role in
                  human society, let alone predominant power.
                </p>
              </div>
              <div className="p-4 border-l-4 border-retro-red bg-background/50">
                <p className="font-bold text-sm text-retro-red mb-1">Premise 2: Monopolization</p>
                <p className="text-sm">
                  Big corporate bodies now control most of our media, economies and governments, and their grip on the
                  rest is closing fast.
                </p>
              </div>
              <div className="p-4 border-l-4 border-retro-red bg-background/50">
                <p className="font-bold text-sm text-retro-red mb-1">Premise 3: Sovereign Fightback</p>
                <p className="text-sm">
                  It's not over til it's over. We haven't evolved 5 million years to give the planet up without a fight.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeStep === 2 && (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-retro-amber border-b border-border pb-2">
              Step II: Do Some Homework
            </h2>
            <p className="text-sm leading-relaxed">
              Homeland defense in an age of corporate misrule does not require rocket science. A few hours squinting
              through these pages, followed by similar stretches of thought and reflection, should clearly expose the
              fight and foe we face.
            </p>
            <div className="space-y-4 pt-2">
              <div className="p-4 border border-border">
                <h3 className="font-bold text-sm text-white mb-2">Quick Study</h3>
                <p className="text-sm mb-2">Our Chautauquans' Home-Squeezed short guides and primers.</p>
                <a
                  href="https://nancho.net/newchau/players.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-retro-green underline hover:text-primary text-sm font-bold"
                >
                  Chautauquans' Guides &rarr;
                </a>
              </div>
              <div className="p-4 border border-border">
                <h3 className="font-bold text-sm text-white mb-2">Short Lists</h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>
                    <a
                      href="https://nancho.net/bigmed2001/bigonnet.html#usa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-retro-green hover:text-primary underline text-sm font-bold"
                    >
                      Top 10 Symptoms of the Corporate Plague
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://www.ips-dc.org/reports/top200.htm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-retro-green hover:text-primary underline text-sm font-bold"
                    >
                      Top 200 Corporate Predators
                    </a>
                  </li>
                </ul>
              </div>
              <div className="p-4 border border-border">
                <h3 className="font-bold text-sm text-white mb-2">Great Course</h3>
                <p className="text-sm mb-2">
                  Women's International League for Peace &amp; Freedom's "Challenging Corporate Power" tutorial — spark
                  local conversations and run study group sessions.
                </p>
                <a
                  href="http://www.wilpf.org/corp/cintro.htm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-retro-green hover:text-primary underline text-sm font-bold"
                >
                  Start the Course &rarr;
                </a>
              </div>
              <div className="p-4 border border-border">
                <h3 className="font-bold text-sm text-white mb-2">Deep Stacks</h3>
                <p className="text-sm mb-2">
                  Big Body References grouped by kind — databases, archives, and directories for corporate research.
                </p>
                <a
                  href="https://nancho.net/bigmed2001/bigonnet.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-retro-green hover:text-primary underline text-sm font-bold"
                >
                  Open Big Online References &rarr;
                </a>
              </div>
            </div>
          </div>
        )}

        {activeStep === 3 && (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-retro-amber border-b border-border pb-2">Step III: Pick a Path</h2>
            <p className="text-sm text-muted-foreground">
              If random mayhem doesn't do it for you, choose a sympathetic avenue of attack.
            </p>
            <div className="flex gap-2 mb-6 flex-wrap">
              {Object.keys(paths).map((pathKey) => (
                <button
                  key={pathKey}
                  onClick={() => setActivePath(pathKey)}
                  className={`px-3 py-1 font-bold text-xs border rounded ${
                    activePath === pathKey
                      ? "bg-retro-amber text-black border-retro-amber"
                      : "bg-background text-retro-green border-border hover:border-retro-green"
                  }`}
                >
                  {pathKey.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Path description */}
            <div className="p-5 border border-border bg-background/30 rounded">
              <p className="text-xs text-retro-amber font-bold uppercase tracking-wider mb-2">
                {paths[activePath as keyof typeof paths].entry}
              </p>
              <h3 className="text-base font-bold text-white mb-1">{paths[activePath as keyof typeof paths].title}</h3>
              <p className="text-xs text-retro-amber italic mb-4">{paths[activePath as keyof typeof paths].quote}</p>
              <p className="text-sm leading-relaxed mb-4">{paths[activePath as keyof typeof paths].desc}</p>
              <div>
                <h4 className="text-xs font-bold text-white mb-2 uppercase tracking-wide">Key Focus Areas:</h4>
                <ul className="list-disc list-inside text-xs space-y-1">
                  {paths[activePath as keyof typeof paths].topics.map((topic, i) => (
                    <li key={i}>{topic}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
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

export default Approaches;
