import DemocracyPageTemplate from "./DemocracyPageTemplate";

const Innovations = () => {
  const content = (
    <>
      <h2 className="text-2xl font-bold text-center mb-6">Innovations in Democracy</h2>
      <p className="text-lg font-bold text-center mb-8 italic">"Toward wiser democracies that work for all"</p>
      
      <p>
        This resource compiles the most inspiring and practical ideas for democratic renewal from theorists, 
        practitioners, and communities worldwide. It is a truly inspiring compilation of the best thinking about 
        how democracies can evolve to serve all people.
      </p>

      <h3 className="text-xl font-bold mt-8 mb-4">Key Innovation Areas:</h3>

      <div className="space-y-6">
        <div className="bg-white/10 p-6 border-l-4 border-red-900">
          <h4 className="font-bold text-lg mb-3">Direct Democracy Mechanisms</h4>
          <p>
            Innovations in how citizens can propose and vote on major policy decisions, from ballot initiatives 
            to citizen assemblies to participatory budgeting.
          </p>
        </div>

        <div className="bg-white/10 p-6 border-l-4 border-red-900">
          <h4 className="font-bold text-lg mb-3">Deliberative Democracy</h4>
          <p>
            New methods for bringing citizens together in informed deliberation about major issues, 
            ensuring decisions are based on genuine public dialogue rather than sound bites.
          </p>
        </div>

        <div className="bg-white/10 p-6 border-l-4 border-red-900">
          <h4 className="font-bold text-lg mb-3">Local Democracy Innovation</h4>
          <p>
            Community-based approaches to decision-making that build participation from the ground up, 
            creating more responsive and accountable local governance.
          </p>
        </div>

        <div className="bg-white/10 p-6 border-l-4 border-red-900">
          <h4 className="font-bold text-lg mb-3">Economic Democracy</h4>
          <p>
            Models for democratizing economic decisions through worker ownership, cooperative enterprises, 
            and stakeholder governance.
          </p>
        </div>

        <div className="bg-white/10 p-6 border-l-4 border-red-900">
          <h4 className="font-bold text-lg mb-3">Constitutional Reform</h4>
          <p>
            Innovations in how constitutions can be reformed to expand democratic participation, 
            protect rights, and distribute power more equitably.
          </p>
        </div>

        <div className="bg-white/10 p-6 border-l-4 border-red-900">
          <h4 className="font-bold text-lg mb-3">Technology for Democracy</h4>
          <p>
            How information technology can enhance democratic participation without replacing human judgment, 
            making information accessible and governance more transparent.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-4">Core Principle:</h3>

      <p className="mt-6 p-6 bg-blue-100/20 border-l-4 border-blue-900 text-lg">
        Wiser democracies that work for all share common characteristics: 
        they expand participation, distribute power equitably, protect minority rights, 
        ensure genuine deliberation, and remain accountable to the people they serve.
      </p>

      <p className="mt-8">
        These innovations are not theoretical abstractions. Many have been tested and proven successful 
        in communities and countries worldwide. They offer practical pathways toward more democratic, 
        just, and sustainable societies.
      </p>

      <p className="mt-8 text-center font-bold italic text-lg">
        "Democracy is not a destination. It is a continuous process of innovation, learning, and improvement."
      </p>
    </>
  );

  return (
    <DemocracyPageTemplate
      title="Innovations in Democracy"
      subtitle="Toward wiser democracies that work for all"
      content={content}
    />
  );
};

export default Innovations;
