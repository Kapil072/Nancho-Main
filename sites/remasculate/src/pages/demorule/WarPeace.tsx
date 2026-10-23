import DemocracyPageTemplate from "./DemocracyPageTemplate";

const WarPeace = () => {
  const content = (
    <>
      <h2 className="text-2xl font-bold text-center mb-6">War & Peace and the Democracy Amendment</h2>
      <p className="text-lg font-bold text-center mb-8 italic">by Senator Mike Gravel</p>

      <p>
        The connection between direct democratic participation and peace is profound and often overlooked. When ordinary
        citizens have genuine power over decisions of war and peace, they are far more cautious about military
        adventures.
      </p>

      <h3 className="text-xl font-bold mt-8 mb-4">Historical Perspective:</h3>

      <p>
        Throughout history, wars have been initiated by elites whose own children rarely fight. When leadership is
        separated from consequences, the decision to wage war becomes easier. Switzerland's direct democracy has
        coexisted with permanent neutrality and peace for centuries—not coincidence.
      </p>

      <h3 className="text-xl font-bold mt-8 mb-4">How Direct Democracy Promotes Peace:</h3>

      <ul className="list-disc pl-8 space-y-3">
        <li>
          <strong>Accountability:</strong> Leaders know citizens will vote on military decisions
        </li>
        <li>
          <strong>Deliberation:</strong> Direct democracy requires public debate about consequences
        </li>
        <li>
          <strong>Shared Risk:</strong> When all citizens must approve war, those costs are considered carefully
        </li>
        <li>
          <strong>Prevents Aggression:</strong> Citizens rarely vote for wars of aggression, only defense
        </li>
        <li>
          <strong>Resource Allocation:</strong> Democratic societies often choose social investment over military
          spending
        </li>
      </ul>

      <h3 className="text-xl font-bold mt-8 mb-4">The Democracy Amendment and War Powers:</h3>

      <p className="mt-6">
        The National Initiative does not propose that citizens should make daily military decisions. Rather, it enables
        the people to have final authority on the major question: whether the nation goes to war. This simple check
        would fundamentally change how leadership approaches military questions.
      </p>

      <p className="mt-6 p-6 bg-blue-100/20 border-l-4 border-blue-900">
        <strong>Key Principle:</strong> Those who would bear the costs of war should have final say in whether war
        occurs. Direct democracy aligns decision-making authority with the consequences of those decisions.
      </p>

      <p className="mt-8 text-lg font-bold italic text-center">
        "In the councils of government, we must guard against the acquisition of unwarranted influence... Only an alert
        and knowledgeable citizenry can compel the proper meshing of the huge industrial and military machinery of
        defense with our peaceful methods and goals." — President Eisenhower
      </p>
    </>
  );

  return (
    <DemocracyPageTemplate
      title="War & Peace and the Democracy Amendment"
      subtitle="by Senator Mike Gravel"
      content={content}
    />
  );
};

export default WarPeace;
