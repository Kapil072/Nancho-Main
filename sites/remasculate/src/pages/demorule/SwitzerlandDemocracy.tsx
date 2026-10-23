import DemocracyPageTemplate from "./DemocracyPageTemplate";

const SwitzerlandDemocracy = () => {
  const content = (
    <>
      <h2 className="text-2xl font-bold text-center mb-6">Direct Democracy in Switzerland</h2>
      <p className="text-lg font-bold text-center mb-8 italic">Swiss-tested for over a century, now ready for international release</p>
      
      <p>
        Switzerland provides the world's most extensive experience with direct democracy at all levels of government. 
        For over 150 years, Swiss citizens have been voting on major policy decisions through initiatives and referendums.
      </p>

      <h3 className="text-xl font-bold mt-8 mb-4">Swiss Democratic Structure:</h3>

      <div className="space-y-4 bg-white/10 p-6 rounded border-l-4 border-red-900">
        <p><strong>Federal Level:</strong> Citizens can propose constitutional amendments and major laws</p>
        <p><strong>Cantonal Level:</strong> Each canton (state) has direct democracy mechanisms</p>
        <p><strong>Municipal Level:</strong> Local communities practice direct democracy in town meetings and referendums</p>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-4">Why Switzerland Succeeds:</h3>

      <ul className="list-disc pl-8 space-y-3">
        <li><strong>Stability:</strong> Direct democracy has coexisted with political stability for 150+ years</li>
        <li><strong>Prosperity:</strong> Switzerland consistently ranks among the world's most prosperous nations</li>
        <li><strong>Peace:</strong> Permanent neutrality and absence of internal conflict</li>
        <li><strong>Environmental Protection:</strong> Citizens consistently vote for strong environmental measures</li>
        <li><strong>Social Cohesion:</strong> Despite linguistic and cultural diversity, Switzerland remains unified</li>
      </ul>

      <h3 className="text-xl font-bold mt-8 mb-4">Swiss Experience Demonstrates:</h3>

      <p className="mt-6">
        Citizens can be trusted with major decisions. When given good information and time for deliberation, 
        voters make thoughtful choices. Democracy doesn't require leaving all decisions to representatives—people can govern themselves.
      </p>

      <p className="mt-6 p-6 bg-yellow-100/20 border-l-4 border-yellow-800 italic">
        <strong>Key Lesson:</strong> Direct democracy works best when combined with quality education, free press, 
        accessible information, and sufficient time for public deliberation.
      </p>

      <h3 className="text-xl font-bold mt-8 mb-4">Lessons for America:</h3>

      <ul className="list-disc pl-8 space-y-3">
        <li>Direct democracy can operate at national level, not just state and local</li>
        <li>It complements rather than replaces representative government</li>
        <li>Citizens protect rights and the environment through direct participation</li>
        <li>Multiple languages and cultures can coexist within direct democracy</li>
      </ul>

      <p className="mt-8 text-center font-bold text-lg">
        If democracy works in Switzerland, why shouldn't it work in America?
      </p>
    </>
  );

  return (
    <DemocracyPageTemplate
      title="Direct Democracy in Switzerland"
      subtitle="Swiss-tested for over a century, now ready for international release"
      content={content}
    />
  );
};

export default SwitzerlandDemocracy;
