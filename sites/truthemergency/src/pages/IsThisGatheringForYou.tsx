import PageLayout from "@/components/PageLayout";

const IsThisGatheringForYou = () => {
  return (
    <PageLayout>
      <h1 className="text-2xl font-bold text-primary mb-6">Is this gathering for you?</h1>

      <h2 className="font-bold text-lg text-foreground mb-4">DESIRED PARTICIPANTS</h2>

      <p className="text-base leading-relaxed mb-4">
        <strong>Investigative reporters and whistleblowers</strong> illuminating federal
        corruption, war policy, unconstitutional surveillance, "national security" abuse,
        election fraud and other coup related fields.
      </p>

      <p className="text-base leading-relaxed mb-4">
        <strong>Media scholars, professionals and activists</strong> with substantial experience,
        influence and/or ambition in any communication field who tend to believe most or all of
        the following premises:
      </p>

      <ol className="list-decimal pl-6 space-y-3 mb-8 text-base leading-relaxed">
        <li>
          The authoritarian influence and avarice of big corporations has infected all branches
          of our governance, and their coin-operated candidates, lobbyists, regulators and other
          more secretive agents now threaten our freedoms, our democracy, and the biosphere as a
          whole.
        </li>
        <li>
          Unbridled corporate interest is the prime force now driving our society into insolvency,
          ill health, ecological demise, totalitarian peril, and endless war.
        </li>
        <li>
          Corporate consciousness married with state military might births terrible violence,
          corruption, secrecy and a never-ending hunger for increased power and control.
        </li>
        <li>
          Another internal "terror attack" (before or after military action in Iran) could trigger
          a long list of existing Executive Orders and national security legislation legitimizing
          police state powers tantamount to martial law.
        </li>
        <li>
          Public awareness of our corporatist usurpers' darkest deeds and the patterns they reveal
          may awaken enough people to the nature of the threat in time to reclaim democratic power.
        </li>
        <li>
          The alt media universe has developed enough power to reach hundreds of millions with truly
          transformative messages if we only knew what they were.
        </li>
      </ol>

      <p className="text-base leading-relaxed mb-6">
        <strong>Angel funders and fundraisers</strong> with similar concerns who would support a
        credible countercoup strategy if one were to emerge.
      </p>

      <p className="text-base leading-relaxed">
        We are looking for creative individuals somehow involved in journalism or media activities
        and prepared to help create a new nervous system for our body politic and reshape the
        content of national debate. If you haven't received an invitation and you feel qualified,
        please feel free to invite yourself. Join us and meet the daring dangerous ilk we're
        hoping to attract.
      </p>
    </PageLayout>
  );
};

export default IsThisGatheringForYou;
