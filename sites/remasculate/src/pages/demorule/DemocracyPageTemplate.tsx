import { useNavigate } from "react-router-dom";
import SectionHeader from "@/components/SectionHeader";

interface DemocracyPageProps {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  externalLink?: {
    text: string;
    url: string;
  };
}

const DemocracyPageTemplate = ({ title, subtitle, content, externalLink }: DemocracyPageProps) => {
  const navigate = useNavigate();

  const ColorBar = () => <img src="/bulls/advline2.gif" alt="" className="w-full h-2 object-cover opacity-90 my-4" />;

  return (
    <div className="min-h-screen bg-[url('/barks/frenchp2.gif')] bg-repeat bg-fixed bg-[#F5F5DC] text-[#000055] font-serif selection:bg-blue-200">
      <div className="flex flex-col md:flex-row w-full">
        {/* Sidebar */}
        <aside className="w-full md:w-[180px] shrink-0 p-6 md:sticky md:top-0 h-fit bg-transparent z-10">
          <button onClick={() => navigate("/")} className="w-full hover:opacity-80 transition-opacity">
            <img
              src="/graph/BMREVDEM.jpg"
              alt="Return to Democracy Index"
              className="mx-auto w-full max-w-[150px] border-2 border-[#000055]/30 shadow-lg cursor-pointer"
            />
          </button>
        </aside>

        {/* Main Content */}
        <main className="flex-1 px-6 md:px-16 lg:px-24 py-12 border-l-2 border-[#000055]/5">
          {/* Header Section */}
          <div className="w-full max-w-[1200px] mx-auto text-center mb-16">
            <ColorBar />
            <div className="my-10">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight uppercase">{title}</h1>
              {subtitle && (
                <h2 className="text-2xl md:text-3xl font-bold italic text-blue-900 uppercase tracking-wide mt-4">
                  {subtitle}
                </h2>
              )}
            </div>
            <ColorBar />
          </div>

          <div className="w-full max-w-[1200px] mx-auto">
            {/* Content */}
            <div className="site-prose text-lg md:text-xl space-y-8 leading-relaxed">{content}</div>

            {/* External Link if provided */}
            {externalLink && (
              <div className="mt-12 p-8 bg-white/20 border-2 border-[#000055]/10 rounded text-center">
                <p className="text-lg font-bold mb-4">For more information:</p>
                <a
                  href={externalLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-900 font-bold underline text-xl hover:text-red-700"
                >
                  {externalLink.text} ↗
                </a>
              </div>
            )}

            {/* Navigation */}
            <div className="mt-16 text-center">
              <button
                onClick={() => navigate("/")}
                className="inline-block px-6 py-3 bg-red-900 text-white font-bold rounded hover:bg-red-800 transition-colors"
              >
                Back to Main
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DemocracyPageTemplate;
