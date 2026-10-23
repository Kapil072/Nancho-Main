import DemocracyPageTemplate from "./DemocracyPageTemplate";

const ActionPlan = () => {
  const content = (
    <>
      <h2 className="text-2xl font-bold text-center mb-6">Action Plan</h2>
      <p className="text-lg font-bold text-center mb-8 italic">Election & Educational Program for the National Initiative</p>
      
      <p>
        The path to establishing the National Initiative involves comprehensive public education and democratic participation.
      </p>

      <h3 className="text-xl font-bold mt-8 mb-4">Phases of Implementation:</h3>

      <div className="space-y-6">
        <div className="bg-white/10 p-6 border-l-4 border-red-900">
          <h4 className="font-bold text-lg mb-3">Public Education</h4>
          <p>
            Widespread information campaigns to educate Americans about direct democracy, 
            the history of the National Initiative, and its potential benefits.
          </p>
        </div>

        <div className="bg-white/10 p-6 border-l-4 border-red-900">
          <h4 className="font-bold text-lg mb-3">Coalition Building</h4>
          <p>
            Engaging diverse constituencies—from labor to environmental organizations to good-government groups—
            to build broad support for democratic reform.
          </p>
        </div>

        <div className="bg-white/10 p-6 border-l-4 border-red-900">
          <h4 className="font-bold text-lg mb-3">Political Organizing</h4>
          <p>
            Building grassroots movements in states and communities to create pressure for constitutional amendment.
          </p>
        </div>

        <div className="bg-white/10 p-6 border-l-4 border-red-900">
          <h4 className="font-bold text-lg mb-3">Constitutional Amendment</h4>
          <p>
            Working through the Article V amendment process to secure ratification of the Democracy Amendment 
            by the requisite number of states.
          </p>
        </div>

        <div className="bg-white/10 p-6 border-l-4 border-red-900">
          <h4 className="font-bold text-lg mb-3">Implementation</h4>
          <p>
            Establishing the Electoral Trust and implementing the direct democracy procedures through the Democracy Act.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-4">Getting Involved:</h3>

      <p>
        Citizens can participate in the National Initiative movement through:
      </p>

      <ul className="list-disc pl-8 space-y-3 mt-4">
        <li>Joining or donating to the Democracy Foundation and Philadelphia II</li>
        <li>Participating in local organizing efforts</li>
        <li>Educating friends, family, and community members</li>
        <li>Supporting electoral candidates who champion direct democracy</li>
        <li>Engaging in media outreach and public dialogue</li>
      </ul>

      <p className="mt-8 text-lg font-bold italic text-center">
        "Democracy is not something you inherit. It's something you have to fight for every generation."
      </p>
    </>
  );

  return (
    <DemocracyPageTemplate
      title="Action Plan"
      subtitle="Election & Educational Program for the National Initiative"
      content={content}
      externalLink={{
        text: "Join the Democracy Movement",
        url: "https://www.democracyfoundation.org"
      }}
    />
  );
};

export default ActionPlan;
