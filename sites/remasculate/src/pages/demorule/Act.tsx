import DemocracyPageTemplate from "./DemocracyPageTemplate";

const Act = () => {
  const content = (
    <>
      <h2 className="text-2xl font-bold text-center mb-6">The Democracy Act</h2>
      <p className="text-lg font-bold text-center mb-8 italic">Federal Statute Establishing the People's Legislature</p>
      
      <p>
        The Democracy Act is the statutory framework that operationalizes the Democracy Amendment, establishing the procedures, 
        institutions, and safeguards necessary for direct democratic participation at the federal level.
      </p>

      <h3 className="text-xl font-bold mt-8 mb-4">Key Provisions:</h3>

      <div className="space-y-6">
        <div className="bg-white/10 p-6 border-l-4 border-red-900">
          <h4 className="font-bold text-lg mb-3">The Electoral Trust</h4>
          <p>
            Establishes an independent federal agency to administer the national initiative process. 
            The Electoral Trust ensures fair, transparent, and accessible procedures for all citizens.
          </p>
        </div>

        <div className="bg-white/10 p-6 border-l-4 border-red-900">
          <h4 className="font-bold text-lg mb-3">Initiative Process</h4>
          <p>
            Defines procedures for citizens to propose federal legislation, including signature requirements, 
            validation processes, and ballot access criteria.
          </p>
        </div>

        <div className="bg-white/10 p-6 border-l-4 border-red-900">
          <h4 className="font-bold text-lg mb-3">Public Information</h4>
          <p>
            Requires comprehensive, unbiased information about all measures to be provided to voters. 
            Includes pro and con arguments, fiscal analysis, and expert commentary.
          </p>
        </div>

        <div className="bg-white/10 p-6 border-l-4 border-red-900">
          <h4 className="font-bold text-lg mb-3">Corporate Exclusion</h4>
          <p>
            Explicitly prohibits PACs, corporations, and other non-human entities from participating in the direct democracy process. 
            Ensures that initiatives represent people, not money.
          </p>
        </div>

        <div className="bg-white/10 p-6 border-l-4 border-red-900">
          <h4 className="font-bold text-lg mb-3">Accessibility</h4>
          <p>
            Ensures that ordinary citizens can afford to propose initiatives without requiring vast wealth or special influence.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-4">Implementation:</h3>

      <p>
        The Democracy Act would be enacted by Congress following ratification of the Democracy Amendment. 
        It would establish the specific rules and procedures for nationwide direct democracy while maintaining 
        the constitutionally-required protections and safeguards.
      </p>

      <p className="mt-6 p-6 bg-yellow-100/20 border-l-4 border-yellow-800 italic">
        <strong>Educational Note:</strong> The detailed statutory language has been developed over many years by constitutional scholars and democratic theorists. 
        The Democracy Foundation maintains current versions of this proposed legislation.
      </p>
    </>
  );

  return (
    <DemocracyPageTemplate
      title="The Democracy Act"
      subtitle="Federal Statute Establishing the People's Legislature"
      content={content}
      externalLink={{
        text: "View Current Democracy Act Language",
        url: "https://www.democracyfoundation.org"
      }}
    />
  );
};

export default Act;
