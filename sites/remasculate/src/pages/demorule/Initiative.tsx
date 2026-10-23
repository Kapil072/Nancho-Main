import DemocracyPageTemplate from "./DemocracyPageTemplate";

const Initiative = () => {
  const content = (
    <>
      <h2 className="text-2xl font-bold text-center mb-6">The National Initiative For Democracy</h2>

      <p>
        The National Initiative for Democracy is a proposed amendment to the United States Constitution and an
        accompanying federal statute that would establish the People's Legislature—a new branch of government through
        which citizens can directly enact federal laws.
      </p>

      <h3 className="text-xl font-bold mt-8 mb-4">Overview:</h3>

      <p>
        Developed and refined over decades by former Senator Mike Gravel and colleagues at the Democracy Foundation, the
        National Initiative provides practical mechanisms for nationwide direct democratic participation while
        preserving representative institutions.
      </p>

      <h3 className="text-xl font-bold mt-8 mb-4">Key Components:</h3>

      <div className="space-y-4 bg-white/10 p-6 rounded border-l-4 border-red-900 mb-6">
        <p className="font-bold">The Democracy Amendment:</p>
        <p>
          A constitutional amendment asserting the people's sovereign authority and legislative power to create and
          alter governments, constitutions, and laws independent of elected representatives.
        </p>
      </div>

      <div className="space-y-4 bg-white/10 p-6 rounded border-l-4 border-red-900 mb-6">
        <p className="font-bold">The Democracy Act:</p>
        <p>
          A federal statute establishing legislative procedures by which the people can enact laws using ballot
          initiatives. Creates the Electoral Trust, an independent government agency to administer these procedures on
          behalf of the people.
        </p>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-4">How It Works:</h3>

      <ol className="list-decimal pl-8 space-y-4">
        <li>Citizens gather signatures to qualify an initiative for the ballot</li>
        <li>The measure appears on ballots nationwide during regular federal elections</li>
        <li>If approved by a majority of voters, it becomes federal law</li>
        <li>The Electoral Trust ensures procedures are fair, transparent, and accessible to all citizens</li>
      </ol>

      <h3 className="text-xl font-bold mt-8 mb-4">Protections Built In:</h3>

      <ul className="list-disc pl-8 space-y-3">
        <li>
          <strong>Prevents Corporate Control:</strong> Explicitly bars PACs, corporations, and non-human entities from
          participating in the direct democracy process
        </li>
        <li>
          <strong>Accessible to All:</strong> Procedures ensure that both wealthy and ordinary citizens can propose
          initiatives
        </li>
        <li>
          <strong>Full Information:</strong> Requires comprehensive public information about all measures
        </li>
        <li>
          <strong>Time for Deliberation:</strong> Allows sufficient time for public debate and consideration
        </li>
        <li>
          <strong>Constitutional Safeguards:</strong> Cannot be used to violate fundamental constitutional rights
        </li>
      </ul>

      <p className="mt-8">
        The National Initiative represents a comprehensive approach to democratic renewal—one that has been field-tested
        conceptually, proven workable in other democracies (particularly Switzerland), and refined through decades of
        democratic theory and practice.
      </p>

      <p className="mt-6 text-lg font-bold italic text-center">
        "When the people shall have nothing more to do in the legislature, they will want no more representatives." —
        Thomas Jefferson
      </p>
    </>
  );

  return (
    <DemocracyPageTemplate
      title="The National Initiative For Democracy"
      subtitle="Additional Information"
      content={content}
      externalLink={{
        text: "Visit the Democracy Foundation Website",
        url: "https://www.democracyfoundation.org",
      }}
    />
  );
};

export default Initiative;
