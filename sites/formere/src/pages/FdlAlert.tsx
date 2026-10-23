import { useEffect } from "react";
import { Link } from "react-router-dom";

const FdlAlert = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#E7FFDF";
    document.body.style.backgroundImage = "url('/barks/slate3.gif')";
    document.body.style.color = "#000000";
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.backgroundImage = "";
      document.body.style.color = "";
    };
  }, []);

  return (
    <div className="fdl-page min-h-screen p-4 md:p-8">
      <div className="fdl-container">
        {/* Header Section */}
        <center className="w-full">
          <img src={`${import.meta.env.BASE_URL}graph/fdline5.gif`} alt="divider" className="w-full h-2 my-4" />
          <h1 className="text-4xl md:text-5xl font-black italic tracking-wide text-[#FF0000] uppercase my-2">
            FDL-AP ALERTS
          </h1>
          <hr className="w-48 border-t-2 border-[#FF0000] mx-auto my-3" />
          <p className="text-base md:text-lg text-[#800000] font-semibold leading-relaxed max-w-2xl mx-auto">
            Highlighting problems of particular urgency in the Asia-Pacific with links to background literature and groups working to resolve them.
          </p>
          <img src={`${import.meta.env.BASE_URL}graph/fdline5.gif`} alt="divider" className="w-full h-2 my-4" />
        </center>

        {/* Background Intro blockquote */}
        <blockquote className="my-8 px-4 md:px-6 py-4 border-l-4 border-[#003E1F] bg-[#003E1F]/5 text-sm md:text-base italic text-[#003E1F] leading-relaxed">
          <strong>Background:</strong> Like all associations with boundless hopes and limited means, the FDL-AP is obliged to focus its resources on a few battles at a time. Although we are now working intensely on Burma, Cambodia, and youth education, we are of course also deeply concerned with the many other tragedies in the region. This section will therefore try to illuminate lesser known struggles in the Asian neighborhood, which are also committed to self-determination, human rights and social justice. Due to its length, body count and now nuclear aspects, we begin with the Kashmir conflict, but also invite your assistance to expose other movements which desperately require public attention and support.
        </blockquote>

        <center className="w-full my-6">
          <hr className="w-72 border-t-2 border-[#003E1F]/30 mx-auto my-2" />
          <p className="text-xs md:text-sm font-black tracking-widest text-[#800000] uppercase my-3 leading-normal">
            IN SUPPORT OF THE KASHMIRI PEOPLE'S<br />RIGHT TO TRUE SELF-DETERMINATION
          </p>
          <hr className="w-72 border-t-2 border-[#003E1F]/30 mx-auto my-2" />
          <h2 className="text-2xl md:text-3xl font-bold text-[#003E1F] uppercase leading-tight tracking-wide mt-4">
            KASHMIRI INDEPENDENCE<br />
            <span className="text-lg md:text-xl font-medium block mt-1 text-gray-800">
              Key to Defusing the Indo-Pakistani Nuclear Standoff
            </span>
          </h2>
          <h3 className="text-sm md:text-base font-semibold text-[#800000] uppercase mt-2">
            Links and references for action
          </h3>
          <hr className="w-72 border-t-2 border-[#003E1F]/30 mx-auto my-2" />
        </center>

        {/* Links List */}
        <div className="fdl-content max-w-4xl mx-auto my-8 text-left text-base md:text-lg">
          <ul className="space-y-6 list-disc pl-6 mb-8">
            <li className="pl-2">
              <Link to="/kashmir/outlookf.html">
                <strong>Till Freedom Come</strong>
              </Link>{" "}
              - 1995 OUTLOOK/MODE Kashmir Public Opinion Poll
            </li>
            <li className="pl-2">
              <Link to="/kashmir/jknyt1.html">
                <strong>The Kashmir Tinderbox</strong>
              </Link>{" "}
              - New York Times Editorial
            </li>
            <li className="pl-2">
              <Link to="/kashmir/jkstates.html">
                <strong>Talk, Don't Race</strong>
              </Link>{" "}
              - Editorial from India's Statesman Newspaper
            </li>
            <li className="pl-2">
              <Link to="/kashmir/jkplea.html">
                <strong>Plea for Kashmiri Self-Determination</strong>
              </Link>{" "}
              by East Timorese Nobel Peace Laureate Jose Ramos Horta
            </li>
            <li className="pl-2">
              <Link to="/kashmir/kashplus.html">
                <strong>Advantages of an Independent Jammu & Kashmir</strong>
              </Link>
            </li>
            <li className="pl-2">
              <Link to="/kashmir/pledges.html">
                <strong>Quotes on Kashmiri Self-Determination</strong>
              </Link>{" "}
              <br />by the founding fathers of India & Pakistan
            </li>

            {/* UN Proposal */}
            <li className="list-none pt-4 space-y-3">
              <strong className="text-xl text-[#800000] block border-b border-[#003E1F]/10 pb-1">
                1999 UN Hague Appeal for Peace Proposal
              </strong>
              <div className="pl-6 space-y-4">
                <div>
                  <h4 className="font-bold text-base md:text-lg text-[#007339] leading-tight">
                    <Link to="/kashmir/hapkash.html">
                      FROM CANTONMENTS TO CANTONS <br className="hidden md:inline" />-- A Modest Proposal for Kashmir
                    </Link>
                  </h4>
                  <p className="text-sm text-gray-700 mt-1 pl-1">
                    A sweeping new proposal to test Switzerland's proven direct democratic system to multi-ethnic Kashmir and beyond.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-base md:text-lg text-[#007339] leading-tight">
                    <Link to="/swissdd1.html">
                      HIGHLIGHTS OF THE SWISS SYSTEM <br className="hidden md:inline" />-- Excerpts from "Swiss Political Institutions" by Oswald Sigg
                    </Link>
                  </h4>
                </div>
              </div>
            </li>

            {/* Pakistan Views */}
            <li className="list-none pt-6 space-y-3">
              <strong className="text-xl text-[#800000] block border-b border-[#003E1F]/10 pb-1">
                Collateral Views from Pakistan
              </strong>
              <div className="pl-6 space-y-6">
                <div>
                  <h4 className="font-bold text-base md:text-lg text-[#007339] leading-tight">
                    <Link to="/kashmir/nahmad.html">
                      SETTLING KASHMIR: Prospects for Peace, Justice, Independence...
                    </Link>
                  </h4>
                  <p className="text-sm text-gray-700 mt-1 pl-1">
                    Interview with Lt. Gen. (Retd) Nishat Ahmad, Director, Institute of Regional Studies, Islamabad, Pakistan
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-base md:text-lg text-[#007339] leading-tight">
                    <Link to="/jehangir.html">
                      DEMOCRACY IS SURVIVAL FOR WOMEN
                    </Link>
                  </h4>
                  <p className="text-sm text-gray-700 mt-1 pl-1">
                    An Interview with human rights crusader Asma Jehangir on the plight of women & children, and the fundamentalist threat in Pakistan today
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-base md:text-lg text-[#007339] leading-tight">
                    <Link to="/imran.html">
                      ISLAM MEANS JUSTICE, AND JUSTICE MEANS RIGHTS
                    </Link>
                  </h4>
                  <p className="text-sm text-gray-700 mt-1 pl-1">
                    An Interview with cricket legend turned fiery social/political activist, Imran Khan on the fight for democratic reform in Pakistan
                  </p>
                </div>
              </div>
            </li>

            {/* India Views */}
            <li className="list-none pt-6 space-y-3">
              <strong className="text-xl text-[#800000] block border-b border-[#003E1F]/10 pb-1">
                A Collateral View from India
              </strong>
              <div className="pl-6 space-y-4">
                <div>
                  <h4 className="font-bold text-base md:text-lg text-[#007339] leading-tight">
                    <Link to="/khosla.html">
                      TURN THE SYSTEMS OF GOVERNANCE UPSIDE DOWN -- Toward a Sustainable Democracy
                    </Link>
                  </h4>
                  <p className="text-sm text-gray-700 mt-1 pl-1">
                    A ground-breaking interview with People First co-founder, Dr. Ashok Khosla on the necessity for direct democracy in India
                  </p>
                </div>
              </div>
            </li>

            {/* External links */}
            <li className="list-none pt-6 space-y-3">
              <strong className="text-xl text-[#800000] block border-b border-[#003E1F]/10 pb-1">
                Important Links
              </strong>
              <ul className="pl-6 space-y-6 list-disc">
                <li className="pl-2">
                  <a href="http://members.aol.com/kashmir290/home.html" target="_blank" rel="noopener noreferrer" className="font-bold text-[#007339]">
                    Kashmir Online
                  </a>
                  <p className="text-sm text-gray-700 mt-1 italic pl-1 text-justify">
                    Voice of the Jammu & Kashmir Democratic Freedom Front, the most non-violent, ecumenical Kashmiri independence movement. Led by Amnesty Prisoner of Conscience Shabir Shah, the JKDFF has formed the J&K Democratic Freedom Party, a pro-independence party that includes prominent leaders among Kashmiri Muslims, Ladakhi Buddhists and the Jammu Hindu community.
                  </p>
                </li>
                <li className="pl-2">
                  <a href="http://www.kashmiri-cc.ca" target="_blank" rel="noopener noreferrer" className="font-bold text-[#007339]">
                    Kashmir Canada
                  </a>
                  <p className="text-sm text-gray-700 mt-1 pl-1">
                    Excellent archives and documentation on the history of the conflict
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Tiled Navigation */}
        <center className="w-full">
          <img src={`${import.meta.env.BASE_URL}graph/fdline5.gif`} alt="divider" className="w-full h-2 my-4" />
          <div className="fdl-nav-gallery">
            <Link to="/"><img src={`${import.meta.env.BASE_URL}graph/btfdhome.jpg`} alt="Home" /></Link>
            <Link to="/fmission"><img src={`${import.meta.env.BASE_URL}graph/btfdmiss.jpg`} alt="Mission" /></Link>
            <Link to="/fdlorg"><img src={`${import.meta.env.BASE_URL}graph/btgfdorg.jpg`} alt="Organization" /></Link>
            <Link to="/fdlinits"><img src={`${import.meta.env.BASE_URL}graph/btfdinit.jpg`} alt="Initiatives" /></Link>
            <Link to="/fdlpaper"><img src={`${import.meta.env.BASE_URL}graph/btfdlit.jpg`} alt="Literature" /></Link>
            <Link to="/fdllinks"><img src={`${import.meta.env.BASE_URL}graph/btfdlink.jpg`} alt="Links" /></Link>
          </div>
          <img src={`${import.meta.env.BASE_URL}graph/fdline5.gif`} alt="divider" className="w-full h-2 my-4" />
        </center>

        {/* Footer info */}
        <div className="mt-8 text-center text-xs md:text-sm text-[#007339] max-w-lg mx-auto">
          <a href="mailto:Secretariat@fdlap.org" className="font-bold underline hover:text-[#1866C5]">
            Contact FDLAP...
          </a>
          <br />
          <Link to="/fdlorg#address" className="hover:text-[#1866C5] underline mt-1 block">
            Our Address...
          </Link>
          <hr className="w-24 border-t border-[#007339]/30 mx-auto my-3" />
          <span className="text-gray-500">Pagework by Nancho East</span>
        </div>
      </div>
    </div>
  );
};

export default FdlAlert;
