import DemocracyPageTemplate from "./DemocracyPageTemplate";

const LaborLaw = () => {
  const content = (
    <>
      <h2 className="text-2xl font-bold text-center mb-6">Toward a New Labor Law</h2>
      <p className="text-lg font-bold text-center mb-8 italic">Peter Kellman's Liberating Labor Reform</p>
      
      <p>
        Current labor law in the United States fails to protect fundamental freedoms that workers deserve. 
        A new framework would restore three vital rights: freedom of speech, freedom of association, and freedom of labor.
      </p>

      <h3 className="text-xl font-bold mt-8 mb-4">The Problem:</h3>

      <p>
        US workers today enjoy fewer freedoms in the workplace than they should as citizens. Courts have privileged employer property rights 
        over workers' constitutional rights. Workers cannot speak freely about their employers without fear of retaliation, cannot associate 
        freely to protect their interests, and face severe restrictions on their right to withhold their labor.
      </p>

      <h3 className="text-xl font-bold mt-8 mb-4">Three Essential Freedoms:</h3>

      <div className="space-y-6">
        <div className="bg-white/10 p-6 border-l-4 border-red-900">
          <h4 className="font-bold text-lg mb-3">Freedom of Speech</h4>
          <p>
            Workers must enjoy freedom to speak about working conditions, wages, and employer practices 
            without fear of job loss or retaliation.
          </p>
        </div>

        <div className="bg-white/10 p-6 border-l-4 border-red-900">
          <h4 className="font-bold text-lg mb-3">Freedom of Association</h4>
          <p>
            Workers must be free to organize collectively, join unions, and present grievances to employers 
            without government or employer interference.
          </p>
        </div>

        <div className="bg-white/10 p-6 border-l-4 border-red-900">
          <h4 className="font-bold text-lg mb-3">Freedom of Labor</h4>
          <p>
            Workers must have the right to strike without permanent job loss, to refuse to support unfair employers, 
            and to bargain with the company that actually controls their working conditions.
          </p>
        </div>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-4">Key Reforms:</h3>

      <ul className="list-disc pl-8 space-y-3">
        <li>Protect workers' right to speak about employment conditions</li>
        <li>Allow workers to organize unions of any size they choose</li>
        <li>Prevent permanent replacement of striking workers</li>
        <li>Enable secondary boycotts and solidarity actions</li>
        <li>Extend bargaining rights to all workers, including supervisors</li>
        <li>Hold parent companies accountable for contractor working conditions</li>
      </ul>

      <p className="mt-8 p-6 bg-blue-100/20 border-l-4 border-blue-900">
        <strong>Vision:</strong> A labor law that treats workers as citizens with full constitutional rights, 
        not as subordinates of corporate masters.
      </p>

      <p className="mt-8 text-center font-bold italic text-lg">
        "An injury to one is an injury to all." — Labor Movement Motto
      </p>
    </>
  );

  return (
    <DemocracyPageTemplate
      title="Toward a New Labor Law"
      subtitle="Peter Kellman's Liberating Labor Reform"
      content={content}
    />
  );
};

export default LaborLaw;
