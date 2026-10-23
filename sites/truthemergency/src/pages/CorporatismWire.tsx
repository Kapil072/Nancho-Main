﻿import PageLayout from "@/components/PageLayout";

const feeds = [
  {
    source: "Yahoo News",
    url: "https://news.yahoo.com/search?p=corporatism",
    label: "Yahoo News -- Corporatism",
  },
  {
    source: "Google News",
    url: "https://news.google.com/search?q=corporatism",
    label: "Google News -- Corporatism",
  },
  {
    source: "thiscantbehappening.net",
    url: "https://thiscantbehappening.substack.com/",
    label: "This Can't Be Happening! (now on Substack)",
  },
];

const recentItems = [
  {
    title: "Booker Vs. Sessions: A Wall Street-backed Corporatist Vs a Populist",
    source: "American Enterprise Institute",
  },
  {
    title: "Ron Paul: Congressional ratification of President Trump's corporatism",
    source: "Orange County Register",
  },
  {
    title: "Corporatism and Academic Freedom",
    source: "iconnectblog.com",
  },
  {
    title: "Trump the Corporatist",
    source: "Commentary Magazine",
  },
  {
    title: "The Conspicuous Fist of Trump's State Corporatism",
    source: "Cato Institute",
  },
  {
    title: 'Tracking the Unseen Costs of "State Corporatism"',
    source: "Cato Institute",
  },
  {
    title: "Argentine union boss pitches corporatist alliance to US executives and fascistic President Milei",
    source: "World Socialist Web Site",
  },
  {
    title: "Build rank-and-file power at National Steel Car in opposition to the nationalist, corporatist USW apparatus!",
    source: "World Socialist Web Site",
  },
];

const tcbhPosts = [
  {
    title: "Please take a moment to go to our new Substack site and subscribe (It's free!)",
    link: "https://thiscantbehappening.substack.com/",
    excerpt:
      "We are transitioning away from this site we've had for 14 years because it was too hard to get our readers to contribute to our effort to provide the news and commentary that is not available in the rest of the media.",
  },
  {
    title: "In Solidarity with our brother Aaron Bushnell",
    link: "https://thiscantbehappening.substack.com/",
    excerpt:
      '"I will no longer be complicit in genocide. I am about to engage in an extreme act of protest, but compared to what people in Palestine experience, this is not extreme at all."',
  },
  {
    title: "John Pilger: A Giant Muckraker Dies at 84",
    link: "https://thiscantbehappening.substack.com/",
    excerpt:
      'One of my three journalist mentors, John Pilger, died December 30, 2023, of pulmonary fibrosis. As Jeremy Corbyn wrote about him, "John gave a voice to the voiceless."',
  },
  {
    title: "Is There a 10th Circle of Hades Available for Heinz?",
    link: "https://thiscantbehappening.substack.com/",
    excerpt:
      "Henry (Heinz) Alfred Kissinger, national security director and secretary of state to Richard Nixon and Gerald Ford and advisor to eight other presidents, died at 100 years of age on November 30.",
  },
];

const CorporatismWire = () => {
  return (
    <PageLayout>
      <h1 className="text-2xl font-bold text-primary mb-2">Corporatism Wire</h1>
      <p className="text-base text-muted-foreground mb-8">
        A curated feed of news and analysis on the intersection of corporate power and democratic governance.
      </p>

      {/* Live feed links */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-1">Live News Feeds</h2>
        <ul className="space-y-3">
          {feeds.map((feed, idx) => (
            <li key={idx}>
              <span className="text-sm font-semibold text-foreground">From {feed.source}: </span>
              <a
                href={feed.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[hsl(var(--link-color))] hover:underline"
              >
                {feed.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Recent Google/Yahoo headlines */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-1">
          Recent Headlines
        </h2>
        <ul className="space-y-3">
          {recentItems.map((item, idx) => (
            <li key={idx} className="flex flex-col sm:flex-row sm:gap-2">
              <span className="text-sm text-foreground leading-snug">{item.title}</span>
              <span className="text-xs text-muted-foreground italic shrink-0">-- {item.source}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* This Can't Be Happening */}
      <section>
        <h2 className="text-lg font-bold text-foreground mb-4 border-b border-border pb-1">
          From thiscantbehappening.net
        </h2>
        <div className="space-y-6">
          {tcbhPosts.map((post, idx) => (
            <article key={idx} className="border-b border-border pb-6 last:border-0">
              <h3 className="font-bold text-base text-foreground mb-1">
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[hsl(var(--link-color))] hover:underline"
                >
                  {post.title}
                </a>
              </h3>
              <p className="text-sm text-foreground/90 leading-relaxed">{post.excerpt}</p>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-xs font-semibold text-[hsl(var(--link-color))] hover:underline"
              >
                Continue reading a†'
              </a>
            </article>
          ))}
        </div>
      </section>
    </PageLayout>
  );
};

export default CorporatismWire;

