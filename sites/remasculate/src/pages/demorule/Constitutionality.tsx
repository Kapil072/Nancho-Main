import DemocracyPageTemplate from "./DemocracyPageTemplate";

const Constitutionality = () => {
  const content = (
    <>
      <h2 className="text-2xl font-bold text-center mb-6">Constitutionality</h2>
      <p className="text-lg font-bold text-center mb-8 italic">The Legal Foundation of the National Initiative</p>
      
      <p>
        The National Initiative is firmly grounded in constitutional law and democratic theory. 
        Constitutional scholars have extensively analyzed and affirmed its legality.
      </p>

      <h3 className="text-xl font-bold mt-8 mb-4">Constitutional Basis:</h3>

      <div className="space-y-6">
        <div className="bg-white/10 p-6 border-l-4 border-red-900">
          <h4 className="font-bold text-lg mb-3">Popular Sovereignty</h4>
          <p>
            The Preamble to the Constitution declares "We the People" as the source of all governmental power. 
            Direct democracy is the logical expression of this founding principle.
          </p>
        </div>

        <div className="bg-white/10 p-6 border-l-4 border-red-900">
          <h4 className="font-bold text-lg mb-3">Amendment Authority</h4>
          <p>
            Article V provides clear procedures for amending the Constitution. 
            The Democracy Amendment follows these established procedures.
          </p>
        </div>

        <div className="bg-white/10 p-6 border-l-4 border-red-900">
          <h4 className="font-bold text-lg mb-3">Federal Authority</h4>
          <p>
            While the Constitution grants specific powers to the federal government, 
            nothing prevents the people from exercising direct legislative authority through a constitutional amendment.
          </p>
        </div>

        <div className="bg-white/10 p-6 border-l-4 border-red-900">
          <h4 className="font-bold text-lg mb-3">State Precedent</h4>
          <p>
            Twenty-four states have constitutional provisions for direct democracy. 
            These mechanisms have been tested in courts and found constitutional.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-4">Legal Challenges Addressed:</h3>

      <p className="mt-6">
        Constitutional scholars have thoroughly analyzed potential objections:
      </p>

      <ul className="list-disc pl-8 space-y-3 mt-4">
        <li><strong>Separation of Powers:</strong> The initiative process supplements rather than undermines checks and balances</li>
        <li><strong>Federalism:</strong> States retain their authority while citizens gain federal initiative rights</li>
        <li><strong>Representation:</strong> Direct democracy complements rather than eliminates representative government</li>
        <li><strong>Rights Protection:</strong> Constitutional safeguards prevent initiatives from violating individual rights</li>
        <li><strong>Democratic Theory:</strong> The system is grounded in accepted democratic principles and historical precedent</li>
      </ul>

      <p className="mt-8 p-6 bg-blue-100/20 border-l-4 border-blue-900">
        <strong>Judicial Review:</strong> Like all legislation, laws enacted through the initiative process remain subject to judicial review 
        to ensure they do not violate constitutional rights or limitations.
      </p>

      <p className="mt-8">
        The National Initiative is not a radical departure from American constitutional tradition. 
        Rather, it is a fulfilment of the Framers' intent that ultimate authority rests with the people themselves.
      </p>
    </>
  );

  return (
    <DemocracyPageTemplate
      title="Constitutionality"
      subtitle="The Legal Foundation of the National Initiative"
      content={content}
    />
  );
};

export default Constitutionality;
