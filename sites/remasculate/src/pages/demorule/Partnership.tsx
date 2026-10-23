import DemocracyPageTemplate from "./DemocracyPageTemplate";

const Partnership = () => {
  const content = (
    <>
      <h2 className="text-2xl font-bold text-center mb-6">
        How the People's Legislature Corrects the Flaws of Representative Democracy
      </h2>

      <p>
        The National Initiative does not propose to eliminate representative government. Rather, it proposes to
        complement and strengthen representative democracy by restoring the people's capacity for direct democratic
        participation. This creates a partnership between two forms of democracy.
      </p>

      <h3 className="text-xl font-bold mt-8 mb-4">The Problem with Pure Representation:</h3>

      <ul className="list-disc pl-8 space-y-3 mb-8">
        <li>Representatives often lose touch with constituent interests</li>
        <li>Special interests and money gain disproportionate influence</li>
        <li>Citizens feel disconnected from decision-making</li>
        <li>Accountability mechanisms are weak</li>
        <li>Long-term interests are sacrificed for short-term political gain</li>
      </ul>

      <h3 className="text-xl font-bold mt-8 mb-4">How Direct Democracy Complements Representation:</h3>

      <div className="space-y-4 bg-white/10 p-8 rounded border-2 border-[#000055]/10 mt-6 mb-6">
        <p>
          <strong>Shared Lawmaking Authority:</strong> Under the National Initiative, both the people and their elected
          representatives share lawmaking power. Neither has exclusive control. This creates healthy checks and
          balances.
        </p>

        <p>
          <strong>Accountability Through Participation:</strong> When citizens know they can directly change laws they
          disagree with, representatives become more responsive to genuine constituent concerns.
        </p>

        <p>
          <strong>Protection of Fundamental Rights:</strong> Direct democracy enables the people to protect their rights
          when representatives fail to do so.
        </p>

        <p>
          <strong>Long-Term Perspective:</strong> Citizens voting on substantive issues often take longer-term views
          than politicians focused on next election cycles.
        </p>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-4">The Partnership Model:</h3>

      <p>
        Imagine representatives proposing and debating legislation, but citizens retaining the power to propose
        alternative laws and to veto or approve legislative proposals. This creates productive tension where both forms
        of democracy strengthen each other:
      </p>

      <ul className="list-disc pl-8 space-y-3 mt-4">
        <li>Representatives become more responsive knowing citizens can override their decisions</li>
        <li>Citizens have greater voice but can still benefit from legislative expertise</li>
        <li>Both elected officials and ordinary citizens share responsibility for governance</li>
        <li>The system balances efficiency with democratic control</li>
      </ul>

      <p className="mt-8 font-bold italic text-center text-lg">
        Direct democracy and representative democracy are not competitors. They are partners that strengthen each other
        when combined.
      </p>
    </>
  );

  return (
    <DemocracyPageTemplate
      title="Partnership In Democracy"
      subtitle="How the People's Legislature Corrects Representative Democracy Flaws"
      content={content}
    />
  );
};

export default Partnership;
