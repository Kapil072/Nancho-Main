﻿import PageLayout from "@/components/PageLayout";

const articles = [
  {
    title: "LAWYERS STEPPING UP",
    subtitle: "When pols fail: late inning aid from lawyers, spooks and brass",
    source: "The Nation",
    author: "Katrina vanden Heuvel",
    date: "12/21/2007",
    excerpt:
      "We are lawyers in the United States of America. As such, we have all taken an oath obligating us to defend the Constitution and the rule of law…. We believe the Bush administration has committed numerous offenses against the Constitution and may have violated federal laws…. Moreover, the administration has blatantly defied congressional subpoenas, obstructing constitutional oversight …. Thus, we call on House Judiciary Chairman John Conyers and Senate Judiciary Chairman Patrick Leahy to launch hearings into the possibility that crimes have been committed by this administration in violation of the Constitution…. We call for the investigations to go where they must, including into the offices of the President and the Vice President. -- American Lawyers Defending the Constitution\n\nOver one thousand lawyers – including former Governor Mario Cuomo and former Reagan administration official Bruce Fein – have signed onto the above statement demanding wide-ranging investigative hearings into unconstitutional and potentially criminal activity by the Bush administration.",
    link: "https://truthemergency.us/when-pols-fail/",
  },
  {
    title: "On Congressional Fear of Martial Law",
    subtitle: "A Black Agenda Radio commentary",
    source: "Black Agenda Radio",
    author: "Glen Ford",
    date: "Dec. 19-25, 2007",
    excerpt:
      "When the CIA and elements of the Pentagon do more - much more - than the Democrats to restrain the Bush gang from plunging the planet into an even wider spasm of war, it is time to recognize the absolute irrelevance of the Democratic Party. Jaws dropped in capitals all around the globe when the combined intelligence agencies yanked the rationale for war with Iran, like a rug, from under George Bush's feet.",
    link: "https://truthemergency.us/on-congressional-fear-of-martial-law/",
  },
  {
    title: "On Pak's Overt Coup and DC's Quiet One",
    subtitle: "The Coup at Home",
    source: "The New York Times",
    author: "Frank Rich",
    date: "November 11, 2007",
    excerpt:
      "AS Gen. Pervez Musharraf arrested judges, lawyers and human-rights activists in Pakistan last week, our Senate was busy demonstrating its own civic mettle. Chuck Schumer and Dianne Feinstein, liberal Democrats from America's two most highly populated blue states, gave the thumbs up to Michael B. Mukasey. In the six years of compromising our principles since 9/11, our democracy has so steadily been defined down that it now can resemble the supposedly aspiring democracies we've propped up in places like Islamabad.",
    link: "https://truthemergency.us/on-paks-overt-coup-and-dcs-quiet-one/",
  },
  {
    title: "Nobel Economist on Coup Pillage & Aftermath",
    subtitle: "The Economic Consequences of Mr. Bush",
    source: "Vanity Fair",
    author: "Joseph E. Stiglitz",
    date: "December 2007",
    excerpt:
      "When we look back someday at the catastrophe that was the Bush administration, we will think of many things: the tragedy of the Iraq war, the shame of Guantánamo and Abu Ghraib, the erosion of civil liberties. The damage done to the American economy does not make front-page headlines every day, but the repercussions will be felt beyond the lifetime of anyone reading this page.",
    link: "https://truthemergency.us/nobel-economist-on-coup-pillage-aftermath/",
  },
  {
    title: "Naomi Wolf on Coup Clues",
    subtitle: 'A "Paper Coup," and Blackwater Eyes Midtown Manhattan',
    source: "huffingtonpost.com",
    author: "Naomi Wolf",
    date: "November 4, 2007",
    excerpt:
      'I have argued that in the closing stages of a "fascist shift", events cascade. Let us think like business consultants analyzing the decisions of a business that claims it is going to close its door in just a year. What kinds of decisions is it making? Here is a quiz, if you still doubt that we need to shift our thinking and recognize what appears to be "a paper coup".',
    link: "https://truthemergency.us/naomi-wolf-on-coup-clues/",
  },
  {
    title: "NLG Unanimously Calls for Impeachment",
    subtitle: "National Lawyers Guild Unanimously Passes Impeachment Resolution against Bush and Cheney",
    source: "National Lawyers Guild",
    date: "Saturday, November 3 2007",
    excerpt:
      "At the National Lawyers Guild 70th Anniversary Law for the People Convention, in Washington DC, the membership unanimously and enthusiastically passed a resolution supporting the impeachment of Bush and Cheney.",
    link: "https://truthemergency.us/nlg-unanimously-calls-for-impeachment/",
  },
  {
    title: "Rule of Law Under Attack",
    source: "CommonDreams.org",
    author: "Ralph Nader",
    date: "October 27, 2007",
    excerpt:
      "Every law student promptly learns the national ideal that our country is governed by the rule of law, not the rule of men. Today, the rule of law is under attack. Such activities have become a big business and, not surprisingly, they have involved big business.",
    link: "https://truthemergency.us/rule-of-law-under-attack/",
  },
  {
    title: "Moyers on Coup Politics",
    subtitle: "The Path to Power",
    source: "Bill Moyers Journal",
    date: "October 26, 2007",
    excerpt:
      "Critics claim the President has used the war on terror to put himself above the law and that he has created a secret presidency of classified decisions and orders that approve extraordinary renditions, torture, illegal detentions, and wiretapping without warrants. Writing in his newsletter the Hightower Lowdown, Jim Hightower asks the question: Is a presidential coup under way?",
    link: "https://truthemergency.us/moyers-on-coup-politics/",
  },
  {
    title: "How to Destroy the Constitution",
    subtitle: "Effective little image blast on the politics of fear",
    excerpt:
      "This video effectively illustrates deft media technique and some aspect of our core concerns.",
    youtubeId: "viVAAy_qkx0",
  },
  {
    title: "Is a Presidential Coup Under Way?",
    source: "The Hightower Lowdown",
    author: "Jim Hightower",
    date: "October 26, 2007",
    excerpt:
      "Where is Congress? It's way past time for members to stand up. Historic matters are at stake. The Constitution is being trampled, the very form of our government is being perverted, and nothing less than American democracy itself is endangered -- a presidential coup is taking place.",
    link: "https://truthemergency.us/is-a-presidential-coup-under-way/",
  },
];

const CoupNews = () => {
  return (
    <PageLayout>
      <h1 className="text-2xl font-bold text-center text-foreground mb-8 uppercase">Coup News</h1>

      <div className="space-y-12">
        {articles.map((article, idx) => (
          <div key={idx} className="pb-10 border-b border-gray-300 last:border-0">
            {/* Main Title */}
            <h2 className="text-lg font-bold text-center text-foreground mb-3 uppercase tracking-wide">
              {article.title}
            </h2>

            {/* Subtitle if present */}
            {article.subtitle && (
              <h3 className="text-base text-center font-semibold text-foreground mb-4">
                {article.subtitle}
              </h3>
            )}

            {/* Article Meta */}
            <div className="text-center text-xs text-gray-600 mb-6 space-y-1">
              {article.author && <p className="font-semibold">{article.author}</p>}
              {article.source && <p>{article.source}</p>}
              {article.date && <p>{article.date}</p>}
            </div>

            {/* Article Text/Excerpt */}
            <p className="text-base text-foreground leading-relaxed mb-6 whitespace-pre-wrap">
              {article.excerpt}
            </p>

            {/* YouTube Video if present */}
            {article.youtubeId && (
              <div className="mb-6 aspect-video w-full max-w-2xl mx-auto">
                <iframe
                  loading="lazy"
                  width="100%"
                  height="100%"
                  src={`https://www.youtube-nocookie.com/embed/${article.youtubeId}`}
                  title={article.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}

            {/* Continue Reading Link */}
            {article.link && (
              <div className="text-center">
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-semibold text-sm"
                >
                  Continue reading →
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default CoupNews;
