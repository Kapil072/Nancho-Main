import PageLayout from "@/components/PageLayout";

const VitalBackground = () => {
  return (
    <PageLayout>
      <h1 className="text-2xl font-bold text-primary mb-6">Vital Background</h1>

      <blockquote className="bg-[hsl(var(--blockquote-bg))] border-l-4 border-[hsl(var(--blockquote-border))] p-4 mb-6 text-sm italic leading-relaxed">
        <p>
          "We hold these truths to be self-evident, that all men are created equal, that they are endowed by their
          Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness. --
          That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent
          of the governed, -- That whenever any Form of Government becomes destructive of these ends, it is the Right of
          the People to alter or to abolish it"...... When a long train of abuses and usurpations, pursuing invariably
          the same Object evinces a design to reduce them under absolute Despotism, it is their right, it is their duty,
          to throw off such Government, and to provide new Guards for their future security."
        </p>
        <footer className="mt-2 not-italic text-right text-xs">-- from the US Declaration of Independence</footer>
      </blockquote>

      <blockquote className="bg-[hsl(var(--blockquote-bg))] border-l-4 border-[hsl(var(--blockquote-border))] p-4 mb-8 text-sm italic leading-relaxed">
        <p>
          "We are ruled by Big Business and Big Government as its paid hireling, and we know it. Corporate money is
          wrecking popular government in the United States. The big corporations and the billionaires have taken daily
          control of our work, our pay, our housing, our health, our pension funds, our bank and savings deposits, our
          public lands, our airwaves, our elections and our very government. Will they continue to divide us and will we
          continue to divide ourselves, according to our wounds and alarms, until they have taken the country away from
          us for good?"
        </p>
        <footer className="mt-2 not-italic text-right text-xs">-- Ronnie Dugger</footer>
      </blockquote>

      <p className="text-base leading-relaxed mb-5">
        Since the current political situation in Washington seems to promise little more than a one step retreat from a
        three step advance into empire, newspeak and militant corporate rule, it is time for members of the independent
        media community to realistically assess our capacities to transmit enough vital truth to ignite a nonviolent
        countercoup and populist democratic revival.
      </p>

      <p className="text-base leading-relaxed mb-5">
        There are now sufficient bodies of evidence to support "probable cause" indictments of official treachery and
        criminality on many, many fronts. While most such topics are ignored, distorted or censored in the corporate
        media, we are interested in the stories that most directly expose the rise of totalitarian/corporate rule, its
        enabling "wars" and propaganda, and the accelerating erosion of historical truth and popular control in America.
        This conference will, therefore, preferentially consider the potential utility (and problems) of keystone issues
        like election fraud, 9/11 complicity, military-industrial deception/corruption/dominion, etc. given that they
        instructively intertwine and illuminate much deeper narratives.
      </p>

      <p className="text-base leading-relaxed mb-5">
        The increasing number of citizens now willing to contemplate these crimes bespeaks a healthy distrust of
        official authority and an openness to truly revolutionary reform. If the public were more fully informed of
        these offenses and their interrelationships, they could arguably change political consciousness and journalistic
        behavior more than any other revelations of our age.
      </p>

      <p className="text-base leading-relaxed">
        We therefore dedicate this gathering of media veterans to a frank strategic discussion of our individual and
        collective strengths, limits and needs, out of which can come a blueprint for a year of unprecedented
        truth-telling and collaboration.
      </p>
    </PageLayout>
  );
};

export default VitalBackground;
