import DemocracyPageTemplate from "./DemocracyPageTemplate";

const Chaordic = () => {
  const content = (
    <>
      <h2 className="text-2xl font-bold text-center mb-6">The Chaordic Alliance</h2>
      <p className="text-lg font-bold text-center mb-8 italic">Organizing for Self-Organization and Sustainable Civilization</p>
      
      <p>
        Founded by Visa co-founder Dee Hock, the Chaordic Alliance combines elements of chaos and order 
        to help communities and organizations self-organize effectively. "Chaordic" balances creative freedom 
        with purposeful structure—neither rigid control nor pure chaos.
      </p>

      <h3 className="text-xl font-bold mt-8 mb-4">What is Chaordic Organization?</h3>

      <p>
        Chaordic systems are neither top-down hierarchies nor formless mobs. They blend:
      </p>

      <div className="bg-white/10 p-6 rounded border-l-4 border-red-900 mt-4 mb-6">
        <ul className="space-y-3">
          <li><strong>Shared Purpose:</strong> Clear values and goals that unite the organization</li>
          <li><strong>Distributed Authority:</strong> Decision-making power distributed throughout the system</li>
          <li><strong>Creative Freedom:</strong> Members have autonomy to innovate and act</li>
          <li><strong>Common Principles:</strong> Agreed-upon guidelines ensure coherence without control</li>
          <li><strong>Evolutionary Adaptation:</strong> System evolves based on learning and changing conditions</li>
        </ul>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-4">The Chaordic Approach to Organization:</h3>

      <p>
        Rather than imposing rigid hierarchical structures, chaordic organizations define clear purpose and principles, 
        then enable members to organize themselves around shared goals. This approach has proven far more effective than 
        traditional bureaucratic models for complex, adaptive systems.
      </p>

      <h3 className="text-xl font-bold mt-8 mb-4">Terra Civitas:</h3>

      <p className="mt-6">
        Among the Chaordic Alliance's projects is Terra Civitas—an ambitious worldwide network helping a new civilization 
        self-organize. Terra Civitas brings together citizens, organizations, and communities committed to:
      </p>

      <ul className="list-disc pl-8 space-y-3 mt-4">
        <li>Sustainable development and environmental stewardship</li>
        <li>Democratic governance and citizen participation</li>
        <li>Economic justice and equitable opportunity</li>
        <li>Cultural diversity and mutual respect</li>
        <li>Community resilience and local self-reliance</li>
      </ul>

      <h3 className="text-xl font-bold mt-8 mb-4">Applications to Democracy:</h3>

      <p className="mt-6">
        Chaordic principles offer powerful lessons for democratic organization:
      </p>

      <ul className="list-disc pl-8 space-y-3">
        <li><strong>Self-Organization:</strong> Citizens organizing democratically don't need top-down control</li>
        <li><strong>Emergence:</strong> Complex solutions emerge from distributed decision-making</li>
        <li><strong>Resilience:</strong> Decentralized systems adapt better to challenges</li>
        <li><strong>Participation:</strong> People engage more fully when they have genuine authority</li>
        <li><strong>Sustainability:</strong> Systems designed for long-term flourishing, not short-term extraction</li>
      </ul>

      <p className="mt-8 p-6 bg-yellow-100/20 border-l-4 border-yellow-800 italic">
        <strong>Key Insight:</strong> The future belongs not to rigid hierarchies but to adaptive organizations 
        where people organize themselves around shared purpose and principles.
      </p>

      <p className="mt-8 text-center font-bold italic text-lg">
        "The universe is not a hierarchy. It is a network." — Dee Hock
      </p>
    </>
  );

  return (
    <DemocracyPageTemplate
      title="The Chaordic Alliance"
      subtitle="Organizing for Self-Organization and Sustainable Civilization"
      content={content}
      externalLink={{
        text: "Visit the Chaordic Commons",
        url: "https://www.chaordic.org"
      }}
    />
  );
};

export default Chaordic;
