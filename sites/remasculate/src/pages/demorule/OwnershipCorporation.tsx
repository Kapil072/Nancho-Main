import DemocracyPageTemplate from "./DemocracyPageTemplate";

const OwnershipCorporation = () => {
  const content = (
    <>
      <h2 className="text-2xl font-bold text-center mb-6">Reclaiming the Workplace</h2>
      <p className="text-lg font-bold text-center mb-8 italic">Transferring Ownership to Stakeholders: Turnbull's Ownership-Transfer-Corporation</p>
      
      <p>
        Shann Turnbull, author of "Democratising The Wealth of Nations," has pioneered a practical, profitable way 
        to gradually transfer ownership of corporations from distant shareholders into the hands of employees and local stakeholders.
      </p>

      <h3 className="text-xl font-bold mt-8 mb-4">The Problem with Current Corporate Ownership:</h3>

      <p>
        Modern corporations concentrate ownership in distant shareholders who have no connection to the communities where 
        the corporation operates. This creates perverse incentives: maximize profits regardless of community impact, 
        worker welfare, or environmental consequences.
      </p>

      <h3 className="text-xl font-bold mt-8 mb-4">The Ownership-Transfer Corporation Model:</h3>

      <div className="bg-white/10 p-6 rounded border-l-4 border-red-900 mb-6">
        <p className="font-bold mb-4">A practical mechanism for transferring corporate ownership to employees and stakeholders over 20 years:</p>
        <ul className="list-disc pl-8 space-y-3">
          <li>Employees purchase shares through ESOPs (Employee Stock Ownership Plans)</li>
          <li>Retained earnings automatically fund employee share purchases</li>
          <li>Corporate governance gradually shifts toward employee/stakeholder control</li>
          <li>After 20 years, majority ownership resides with employees and community</li>
          <li>Profits benefit workers and communities, not distant shareholders</li>
        </ul>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-4">Benefits of Worker Ownership:</h3>

      <ul className="list-disc pl-8 space-y-3">
        <li><strong>Worker Prosperity:</strong> Employees share in corporate profits and long-term wealth building</li>
        <li><strong>Community Stability:</strong> Companies stay invested in communities; no plant closures for short-term gains</li>
        <li><strong>Innovation:</strong> Worker-owners invested in improving operations and products</li>
        <li><strong>Democratic Workplaces:</strong> Employees have voice in major decisions affecting their lives</li>
        <li><strong>Environmental Stewardship:</strong> Long-term stakeholders protect environmental assets</li>
        <li><strong>Economic Justice:</strong> Wealth creation benefits those who create it</li>
      </ul>

      <h3 className="text-xl font-bold mt-8 mb-4">Real-World Examples:</h3>

      <p>
        Worker ownership models have proven successful worldwide:
      </p>

      <ul className="list-disc pl-8 space-y-3">
        <li>Mondragon Cooperative (Spain) — 80,000 worker-owners, globally competitive</li>
        <li>John Lewis Partnership (UK) — Employee-owned since 1929, consistently profitable</li>
        <li>ESOP companies in USA — Studies show higher productivity, lower turnover, better products</li>
      </ul>

      <p className="mt-8 p-6 bg-yellow-100/20 border-l-4 border-yellow-800 italic">
        <strong>Vision:</strong> A democratic economy where workers, not distant shareholders, own and control the enterprises they build.
      </p>

      <p className="mt-8 text-center font-bold italic text-lg">
        "Those who do the work should own the workplace."
      </p>
    </>
  );

  return (
    <DemocracyPageTemplate
      title="Reclaiming the Workplace"
      subtitle="Transferring Ownership to Stakeholders"
      content={content}
    />
  );
};

export default OwnershipCorporation;
