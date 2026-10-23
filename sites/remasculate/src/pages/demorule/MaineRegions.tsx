import DemocracyPageTemplate from "./DemocracyPageTemplate";
import { useParams } from "react-router-dom";

const regions = {
  limestone: {
    name: "Limestone, Maine",
    description: "Aroostook County Community Initiative"
  },
  waterville: {
    name: "Waterville/Mid-Maine Region",
    description: "Central Maine Democratic Organizing"
  },
  aroostook: {
    name: "Aroostook County, Maine",
    description: "Regional Community Development"
  },
  mikmaq: {
    name: "Aroostook Band of Mi'Gmaq/Micmac",
    description: "Indigenous Community Sovereignty and Democracy"
  }
};

const MaineRegions = () => {
  const { region } = useParams<{ region: string }>();
  const data = regions[region as keyof typeof regions];

  if (!data) {
    return (
      <DemocracyPageTemplate
        title="Maine Communities"
        subtitle="Consensual Communities in Maine"
        content={
          <>
            <p className="text-center text-lg">Community not found. Please return to main page.</p>
          </>
        }
      />
    );
  }

  const content = (
    <>
      <h2 className="text-2xl font-bold text-center mb-6">{data.name}</h2>
      <p className="text-lg font-bold text-center mb-8 italic">{data.description}</p>
      
      <p>
        This community has been working with Consensual Democracy principles to strengthen local decision-making 
        and build community engagement around shared values and goals.
      </p>

      <h3 className="text-xl font-bold mt-8 mb-4">Community Profile:</h3>

      <div className="bg-white/10 p-6 rounded border-l-4 border-red-900 mb-6">
        <p>
          {data.name} represents an example of how communities across Maine are applying direct democratic 
          principles at the local level to address community challenges, create economic opportunity, 
          and strengthen social bonds.
        </p>
      </div>

      <h3 className="text-xl font-bold mt-8 mb-4">Local Initiatives:</h3>

      <ul className="list-disc pl-8 space-y-3">
        <li>Community visioning and strategic planning processes</li>
        <li>Participatory budgeting and resource allocation</li>
        <li>Local economic development initiatives</li>
        <li>Environmental protection and sustainability projects</li>
        <li>Youth leadership and civic engagement programs</li>
        <li>Community education and dialogue forums</li>
      </ul>

      <p className="mt-8 p-6 bg-blue-100/20 border-l-4 border-blue-900">
        <strong>Lesson from Maine Communities:</strong> Direct democracy works best when built from the ground up, 
        rooted in specific communities with shared history and relationships.
      </p>

      <p className="mt-8 text-center text-lg font-bold italic">
        Building democracy community by community, from the ground up.
      </p>
    </>
  );

  return (
    <DemocracyPageTemplate
      title={data.name}
      subtitle={data.description}
      content={content}
    />
  );
};

export default MaineRegions;
