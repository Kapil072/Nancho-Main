import DemocracyPageTemplate from "./DemocracyPageTemplate";

const Amendment = () => {
  const content = (
    <>
      <h2 className="text-2xl font-bold text-center mb-6">The Democracy Amendment</h2>
      <p className="text-lg font-bold text-center mb-8 italic">Text of the Proposed Constitutional Amendment</p>

      <div className="bg-white/10 p-8 rounded border-2 border-[#000055]/20 space-y-6 font-serif">
        <p className="font-bold text-center uppercase">
          Proposed Thirteenth Amendment to the Constitution of the United States
        </p>

        <div className="space-y-4 italic">
          <p>
            <strong>Section 1.</strong> We the People assert our sovereign authority and legislative power to create and
            alter governments, constitutions and laws, independent of existing governments. This amendment protects our
            right to do so directly through national initiatives.
          </p>

          <p>
            <strong>Section 2.</strong> Congress shall establish by law an independent agency to be known as the
            Electoral Trust. The Electoral Trust shall administer the direct initiative process through which We the
            People may propose and enact federal legislation.
          </p>

          <p>
            <strong>Section 3.</strong> The Electoral Trust shall ensure that initiative procedures are accessible to
            all citizens, transparent, and administered fairly. The trust shall prevent any non-human entity or
            organization from participating in the direct democracy process.
          </p>

          <p>
            <strong>Section 4.</strong> Laws enacted by the People through direct initiative shall have the same force
            and effect as laws enacted by Congress, provided they do not violate other provisions of this Constitution.
          </p>

          <p>
            <strong>Section 5.</strong> Congress shall have power to enforce this article by appropriate legislation.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-4">About This Amendment:</h3>

      <p>
        This amendment serves as the constitutional foundation for direct democratic participation at the national
        level. It asserts the people's inherent sovereign power while providing the legal framework for exercising that
        power through the initiative process.
      </p>

      <p className="mt-4">Specifically, it:</p>

      <ul className="list-disc pl-8 space-y-3 mt-4">
        <li>Reaffirms the principle of popular sovereignty</li>
        <li>Establishes the constitutional right to direct democracy</li>
        <li>Creates the Electoral Trust as an independent agency</li>
        <li>Protects the integrity of the process from corporate interference</li>
        <li>Ensures laws created through initiatives have constitutional status</li>
      </ul>

      <p className="mt-8 p-6 bg-blue-100/20 border-l-4 border-blue-900 italic">
        <strong>Note:</strong> This is a working text that has been refined through extensive democratic debate and
        input. The actual language would be finalized through the democratic process of ratification by the states.
      </p>
    </>
  );

  return (
    <DemocracyPageTemplate
      title="The Democracy Amendment"
      subtitle="Text of the Proposed Constitutional Amendment"
      content={content}
    />
  );
};

export default Amendment;
