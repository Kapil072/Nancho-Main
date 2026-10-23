import DemocracyPageTemplate from "./DemocracyPageTemplate";

const ConsensualDemocracy = () => {
  const content = (
    <>
      <h2 className="text-2xl font-bold text-center mb-6">Center for Consensual Democracy</h2>
      <p className="text-lg font-bold text-center mb-8 italic">
        The Mother Lode — Building Community Through Direct Participation
      </p>

      <p>
        Consensual Democracy is a proven grassroots approach to reviving and sustaining local communities through direct
        citizen participation in governance and decision-making. It combines democratic principles with practical
        community organizing.
      </p>

      <h3 className="text-xl font-bold mt-8 mb-4">What is Consensual Democracy?</h3>

      <p>
        Consensual Democracy empowers local citizens to build their own virtual government and design the communities
        they truly desire. Rather than imposing solutions from above, it mobilizes the shared visions, values, and goals
        of the immediate community.
      </p>

      <h3 className="text-xl font-bold mt-8 mb-4">Core Principles:</h3>

      <ul className="list-disc pl-8 space-y-3">
        <li>
          <strong>Local Focus:</strong> Decisions made by and for the community affected
        </li>
        <li>
          <strong>Participatory:</strong> All community members can participate
        </li>
        <li>
          <strong>Visioning:</strong> Communities create shared vision of desired future
        </li>
        <li>
          <strong>Consensus-Building:</strong> Seeks common ground rather than winner-take-all
        </li>
        <li>
          <strong>Practical:</strong> Moves from vision to concrete community projects
        </li>
      </ul>

      <h3 className="text-xl font-bold mt-8 mb-4">How to Get Started:</h3>

      <p className="mt-6">All a town needs to begin is:</p>

      <div className="bg-white/10 p-6 rounded border-l-4 border-red-900 mt-4 mb-6">
        <p className="text-lg font-bold mb-3">A group of thirty people willing to dream and work together.</p>
        <p>That's it. With commitment, vision, and consensual decision-making, communities can address:</p>
        <ul className="list-disc pl-8 mt-4 space-y-2">
          <li>Economic revitalization and job creation</li>
          <li>Environmental protection and sustainability</li>
          <li>Education and youth development</li>
          <li>Housing and community development</li>
          <li>Health and social services</li>
          <li>Cultural preservation and celebration</li>
        </ul>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-4">50-Year Track Record:</h3>

      <p>
        Consensual Democracy has a proven history of success in mobilizing community resources and achieving lasting
        local change. Communities using these methods have:
      </p>

      <ul className="list-disc pl-8 space-y-3">
        <li>Reversed economic decline and revitalized local economies</li>
        <li>Protected environmental resources and ecosystems</li>
        <li>Strengthened social cohesion and community bonds</li>
        <li>Developed youth leadership and community pride</li>
        <li>Created sustainable, self-reliant communities</li>
      </ul>

      <p className="mt-8 text-center font-bold italic text-lg">
        "The most important political, economic, and social developments will take place not in Washington, but in local
        communities where people are organizing around their shared vision for a better future."
      </p>
    </>
  );

  return (
    <DemocracyPageTemplate
      title="Center for Consensual Democracy"
      subtitle="Building Community Through Direct Participation"
      content={content}
      externalLink={{
        text: "Learn About Community Organizing",
        url: "https://www.participatorybudgeting.org",
      }}
    />
  );
};

export default ConsensualDemocracy;
