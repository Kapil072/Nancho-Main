import DemocracyPageTemplate from "./DemocracyPageTemplate";

const Rationale = () => {
  const content = (
    <>
      <h2 className="text-2xl font-bold text-center mb-6">Why We Need the National Initiative For Democracy</h2>
      
      <p>
        The National Initiative for Democracy represents a fundamental reassertion of the people's sovereign power to govern themselves. 
        Rather than entrusting all governmental authority to representatives who often become disconnected from their constituents' interests, 
        the National Initiative proposes to restore direct democratic participation at the national level.
      </p>

      <p>
        Our current representative system, while established with noble intentions, has become increasingly vulnerable to special interests, 
        corporate influence, and the concentration of power. The people have lost meaningful control over their government, and this 
        democratic deficit has led to policies that serve narrow interests rather than the common good.
      </p>

      <p className="font-bold text-lg">
        The core rationale rests on several key principles:
      </p>

      <ul className="list-disc pl-8 space-y-3">
        <li><strong>Sovereignty Belongs to the People:</strong> The ultimate source of governmental authority should remain with the people themselves, not delegated permanently to representatives.</li>
        <li><strong>Direct Democracy Works:</strong> Switzerland's experience over more than 150 years demonstrates that direct democratic participation can create stable, prosperous, and equitable societies.</li>
        <li><strong>Representation Alone Is Insufficient:</strong> While representation plays a role in modern democracies, it must be supplemented by mechanisms for direct popular lawmaking.</li>
        <li><strong>People Can Be Trusted:</strong> Research consistently shows that citizens, when given access to information and time for deliberation, make thoughtful and responsible decisions.</li>
      </ul>

      <p className="mt-8">
        By restoring the people's capacity to enact laws directly, we can address the democratic deficit, reduce the influence of special interests, 
        and ensure that government serves the common good rather than narrow corporate interests. This is not a radical departure from American 
        democratic traditions—it's a return to the original democratic vision of self-governance.
      </p>
    </>
  );

  return (
    <DemocracyPageTemplate
      title="Rationale"
      subtitle="Why We Need the National Initiative For Democracy"
      content={content}
      externalLink={{
        text: "Learn More About the Democracy Foundation",
        url: "https://www.democracyfoundation.org"
      }}
    />
  );
};

export default Rationale;
