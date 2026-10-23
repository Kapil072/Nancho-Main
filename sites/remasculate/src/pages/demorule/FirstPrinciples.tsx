import DemocracyPageTemplate from "./DemocracyPageTemplate";

const FirstPrinciples = () => {
  const content = (
    <>
      <h2 className="text-2xl font-bold text-center mb-6">The Philosophical Foundation of the National Initiative</h2>

      <p>
        The National Initiative for Democracy is grounded in First Principles—fundamental truths about human governance
        and the nature of sovereignty.
      </p>

      <h3 className="text-xl font-bold mt-8 mb-4">Core Principles:</h3>

      <div className="space-y-6">
        <div className="bg-white/10 p-6 border-l-4 border-red-900">
          <h4 className="font-bold text-lg mb-2">Popular Sovereignty</h4>
          <p>
            All legitimate political power derives from the consent of the governed. The people are the ultimate source
            of all governmental authority.
          </p>
        </div>

        <div className="bg-white/10 p-6 border-l-4 border-red-900">
          <h4 className="font-bold text-lg mb-2">Self-Governance</h4>
          <p>
            Free people have the fundamental right to govern themselves directly, not merely to choose representatives
            who govern for them.
          </p>
        </div>

        <div className="bg-white/10 p-6 border-l-4 border-red-900">
          <h4 className="font-bold text-lg mb-2">Equality of Citizens</h4>
          <p>
            No citizen has greater claim to political power than any other. All citizens should have equal voice in
            decisions that affect their lives.
          </p>
        </div>

        <div className="bg-white/10 p-6 border-l-4 border-red-900">
          <h4 className="font-bold text-lg mb-2">Right to Alter Government</h4>
          <p>
            When government becomes destructive to the rights and well-being of the people, they retain the right to
            alter or abolish it and to institute new government.
          </p>
        </div>

        <div className="bg-white/10 p-6 border-l-4 border-red-900">
          <h4 className="font-bold text-lg mb-2">Accountability</h4>
          <p>
            Those who exercise governmental power are accountable to the people and must remain subject to the people's
            will.
          </p>
        </div>
      </div>

      <p className="mt-8 text-lg font-bold italic text-center">
        "Governments are instituted among Men, deriving their just Powers from the Consent of the Governed"
        <br />— Declaration of Independence
      </p>

      <p className="mt-8">
        These First Principles are not innovations but foundational truths articulated by philosophers and democratic
        theorists for centuries. The National Initiative simply provides the practical mechanisms to restore these
        principles to living reality in our time.
      </p>
    </>
  );

  return (
    <DemocracyPageTemplate
      title="First Principles"
      subtitle="The Philosophical Foundation of the National Initiative"
      content={content}
    />
  );
};

export default FirstPrinciples;
