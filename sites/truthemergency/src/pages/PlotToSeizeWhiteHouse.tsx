﻿﻿import PageLayout from "@/components/PageLayout";

const PlotToSeizeWhiteHouse = () => {
  return (
    <PageLayout>
      <h1 className="text-2xl font-bold text-primary mb-2">
        The Plot to Seize the White House
      </h1>
      <p className="text-base italic text-foreground/80 mb-6">
        Old-fashioned Coup Attempt from the Outside In,
        Before They Wised Up, Moved Inside, and Bought Us Out
      </p>

      <p className="text-base leading-relaxed mb-6">
        One of the greatest unknown stories in US political history,{" "}
        <em>The Plot to Seize the White House</em> reveals the nation's closest brush with
        dictatorship in the twentieth century. After languishing out of print for over 50 years,
        this long-buried bombshell was re-released in March 2007, partially in reaction to the
        coup now underway.
      </p>

      <p className="text-base leading-relaxed mb-6">
        In the Thirties the corporate elite teamed with the far right and white supremacists and
        plotted to install a fascist regime in Washington by force. The conspiracy was ultimately
        foiled by the courage and patriotism of a single man, Gen. Smedley Darlington Butler, the
        most decorated military man in US history, whom the plotters had approached to lead their
        coup. Butler blew the whistle to Congress which launched an inquiry that aborted the putsch,
        but refused to prosecute the powerful plotters many of whose business empires survive to
        this day. The mainstream press generally shunned the inquiry, conducted no investigations
        of its own, and helped induce the great forgetting as soon as the hearings closed.
      </p>

      <p className="text-base leading-relaxed mb-8">
        The lessons for our era are plentiful and clear: the anti-democratic threat of conjoined
        corporate wealth and fundamentalist street power, the pusillanimous response to elite
        treachery by Congress and the mainstream press, the rapidity of establishment amnesia
        regarding inconvenient truths, etc. All in all an excellent reference for our work in
        Santa Cruz.
      </p>

      <div className="bg-[hsl(var(--blockquote-bg))] border border-border rounded p-6 mb-8">
        <h2 className="font-bold text-base mb-3">Amazon Book Description</h2>
        <p className="text-sm leading-relaxed text-foreground/90">
          Most people will be shocked to learn that in 1933 a cabal of wealthy industrialists --
          in league with groups like the K.K.K. and the American Liberty League -- planned to
          overthrow the U.S. government in a fascist coup. Their plan was to turn discontented
          veterans into American "brown shirts," depose F.D.R., and stop the New Deal. They
          clandestinely asked Medal of Honor recipient and Marine Major General Smedley Darlington
          Butler to become the first American Caesar. He, though, was a true patriot and revealed
          the plot to journalists and to Congress. In a time when a sitting President has invoked
          national security to circumvent constitutional checks and balances, this episode puts the
          spotlight on attacks upon our democracy and the individual courage needed to repel them.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 mb-8">
        <a
          href="https://www.amazon.com/Plot-Seize-White-House/dp/1620876337"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-[hsl(var(--link-color))] hover:underline"
        >
          Buy the book here a†'
        </a>
        <a
          href="https://archive.org/details/TheplotToSeizeTheWhiteHouseByJulesArcher"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-[hsl(var(--link-color))] hover:underline"
        >
          Read it online here a†'
        </a>
      </div>

      <p className="text-sm text-muted-foreground mb-4">
        Best read in tandem with{" "}
        <em>War is a Racket</em>, Gen. Butler's classic exposÃ© of US military adventures in the
        service of corporate greed.
      </p>

      <div className="flex flex-wrap gap-4 mb-8">
        <a
          href="https://www.amazon.com/War-Racket-Antiwar-Classic-Americas/dp/0922915865"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-[hsl(var(--link-color))] hover:underline"
        >
          Buy War is a Racket a†'
        </a>
        <a
          href="https://archive.org/details/WarIsARacket_655"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-[hsl(var(--link-color))] hover:underline"
        >
          Read War is a Racket online a†'
        </a>
      </div>

      <div className="bg-[hsl(var(--blockquote-bg))] border border-border rounded p-6 text-sm leading-relaxed text-foreground/85">
        <h2 className="font-bold mb-3 uppercase text-xs tracking-wide">Cover Flap Text</h2>
        <p className="mb-2">$7.95</p>
        <p className="font-bold mb-2">THE PLOT TO SEIZE THE WHITE HOUSE -- BY JULES ARCHER</p>
        <p className="mb-3">
          Americans can no longer be shocked by the discovery that information directly affecting
          their personal freedom is withheld from news media to protect persons with governmental
          influence. But it still comes as a shocking revelation that in 1933 there was an actual
          attempt to make a fascist puppet of President Franklin Delano Roosevelt.
        </p>
        <p className="mb-3">
          The fact that the plot was a failure and our present government is still a democracy is
          directly attributable to Major General Smedley Darlington Butler; one of the most
          remarkable generals in American history. A veteran of 35 years in the Marine Corps and
          twice a recipient of the Congressional Medal of Honor, Butler finally decided that "war
          is a racket!" His reputation for patriotism, integrity, and dedication to democracy,
          coupled with his proclivity to speak the truth as he saw it irrespective of official
          policy, made him a seemingly perfect front for the men who hated Roosevelt.
        </p>
        <p>
          Jules Archer quotes testimony from the McCormack-Dickstein House Committee on
          un-American Activities hearings -- including testimony that was subsequently censored
          from public record -- that details how Butler was approached by representatives of the
          arch-conservative American Liberty League; how he quickly concluded that the
          controversy was being used as a subterfuge; and how this hero, patriot, and Republican
          democrat, upon uncovering the full dimensions of the conspiracy, determined to go to
          Washington and blow it wide open.
        </p>
      </div>
    </PageLayout>
  );
};

export default PlotToSeizeWhiteHouse;

