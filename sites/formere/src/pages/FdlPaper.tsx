import { useEffect } from "react";
import { Link } from "react-router-dom";
import { HeaderBlock } from "./Index.tsx";

const FdlPaper = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#C9FFC8";
    document.body.style.backgroundImage = "url('/graph/fdbk7.gif')";
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
        {styleBlock}

        <HeaderBlock />

        {/* Archives Sub-Navigation */}
        <center className="w-full mb-8">
          <h2 className="text-2xl font-bold tracking-widest text-[#007339] uppercase my-2">
            Archives &amp; Literature
          </h2>
          <hr className="w-48 border-t border-[#007339] mx-auto my-3" />
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base font-bold text-[#007339] uppercase">
            <a href="#newsletter" className="hover:underline">Journal</a>
            <span>|</span>
            <a href="#declarations" className="hover:underline">Declarations</a>
            <span>|</span>
            <a href="#reading" className="hover:underline">Readings</a>
            <span>|</span>
            <a href="#interview" className="hover:underline">Interviews</a>
          </div>
          <img src="/graph/fdline5.gif" className="w-full h-2 my-6" alt="divider" />
        </center>

        {/* 1. FDL-AP Quarterly Journal Section */}
        <section id="newsletter" className="my-12 scroll-mt-6">
          <center className="w-full mb-6">
            <hr className="w-72 border-t-2 border-[#003E1F]/20 mx-auto my-2" />
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#FF0000] uppercase tracking-wide">
              FDL-AP QUARTERLY
            </h2>
            <h3 className="text-base md:text-lg font-bold text-gray-800 uppercase mt-1 text-center">
              Official Journal of the Forum of Democratic Leaders in the Asia-Pacific
            </h3>
            <hr className="w-72 border-t-2 border-[#003E1F]/20 mx-auto my-2" />
          </center>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-8">
            <div className="bg-[#FAF0D6] border-4 border-[#003E1F] p-4 md:p-6 rounded-sm space-y-3 shadow-sm">
              <h4 className="text-lg md:text-xl font-bold text-[#007339]">
                <Link to="/fdljrnl.html" className="underline hover:text-[#1866C5]">
                  Summer '97 Issue
                </Link>
              </h4>
              <p className="text-sm font-semibold text-gray-700">Includes full text of:</p>
              <ul className="list-disc pl-5 text-sm space-y-1 text-gray-800 text-left">
                <li><strong>Democracy in Asia</strong> by Dr. Kim Dae-jung</li>
                <li><strong>The Role of NGOs: An East Timorese Example</strong> by Dr. Jose Ramos Horta</li>
                <li><strong>NGOs in Singapore</strong> by Dr. Chee Soon Juan</li>
              </ul>
            </div>

            <div className="bg-[#FAF0D6] border-4 border-[#003E1F] p-4 md:p-6 rounded-sm flex flex-col justify-center space-y-4 shadow-sm">
              <h4 className="text-lg font-bold text-[#007339]">
                <Link to="/fdljrnl2.html" className="underline hover:text-[#1866C5]">
                  Introduction to Autumn '97 Issue
                </Link>
              </h4>
              <h4 className="text-lg font-bold text-[#007339]">
                <Link to="/fdljrnl4.html" className="underline hover:text-[#1866C5]">
                  Introduction to Spring '98 Issue
                </Link>
              </h4>
              <h4 className="text-lg font-bold text-[#007339]">
                <Link to="/fdljrnl6.html" className="underline hover:text-[#1866C5]">
                  Introduction to Spring '99 Issue
                </Link>
              </h4>
            </div>
          </div>
        </section>

        <img src="/graph/fdline5.gif" className="w-full h-2 my-8" alt="divider" />

        {/* 2. Declarations Section */}
        <section id="declarations" className="my-12 scroll-mt-6">
          <center className="w-full mb-6">
            <hr className="w-72 border-t-2 border-[#003E1F]/20 mx-auto my-2" />
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#FF0000] uppercase tracking-wide">
              FDL-AP Declarations
            </h2>
            <h3 className="text-base md:text-lg font-bold text-gray-800 uppercase mt-1">
              &amp; Position Papers
            </h3>
            <hr className="w-72 border-t-2 border-[#003E1F]/20 mx-auto my-2" />
          </center>

          <div className="max-w-3xl mx-auto bg-white/60 p-6 md:p-8 rounded-sm shadow-sm border border-gray-200 mt-8 text-center">
            <h4 className="text-lg md:text-xl font-bold text-[#007339] mb-2">
              <Link to="/fdlburm2.html" className="underline hover:text-[#1866C5]">
                Declaration on Transition from Dictatorship to Democracy
              </Link>
            </h4>
            <p className="text-sm font-semibold text-gray-700 leading-normal">
              by the Conference of the Forum of Democratic Leaders in the Asia-Pacific (FDL-AP)
            </p>
            <p className="text-xs text-[#800000] font-bold mt-1">
              Manila, Philippines, November 2-4, 1996
            </p>
          </div>
        </section>

        <img src="/graph/fdline5.gif" className="w-full h-2 my-8" alt="divider" />

        {/* 3. Recommended Readings Section */}
        <section id="reading" className="my-12 scroll-mt-6">
          <center className="w-full mb-6">
            <hr className="w-72 border-t-2 border-[#003E1F]/20 mx-auto my-2" />
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#FF0000] uppercase tracking-wide">
              Recommended Reading
            </h2>
            <hr className="w-72 border-t-2 border-[#003E1F]/20 mx-auto my-2" />
          </center>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-8 text-left">
            <div className="bg-white/40 p-4 md:p-6 border border-gray-200 rounded-sm">
              <h4 className="font-bold text-base md:text-lg text-[#007339]">
                <Link to="/fdessay1.html" className="underline hover:text-[#1866C5]">
                  "Asia and Human Rights"
                </Link>
              </h4>
              <p className="text-xs md:text-sm text-gray-700 font-semibold mt-1">by Angela Lee, Amnesty International</p>
            </div>

            <div className="bg-white/40 p-4 md:p-6 border border-gray-200 rounded-sm">
              <h4 className="font-bold text-base md:text-lg text-[#007339]">
                <Link to="/fdessay2.html" className="underline hover:text-[#1866C5]">
                  "Asian Values vs. Human Rights"
                </Link>
              </h4>
              <p className="text-xs md:text-sm text-gray-700 font-semibold mt-1">by Aryeh Neier, Open Society Institute</p>
            </div>

            <div className="bg-white/40 p-4 md:p-6 border border-gray-200 rounded-sm">
              <h4 className="font-bold text-base md:text-lg text-[#007339]">
                <Link to="/fdessay3.html" className="underline hover:text-[#1866C5]">
                  "Social Justice and Rule of Law in Burma"
                </Link>
              </h4>
              <p className="text-xs md:text-sm text-gray-700 font-semibold mt-1">by Aung Htoo, National Council for the Union of Burma</p>
            </div>

            <div className="bg-white/40 p-4 md:p-6 border border-gray-200 rounded-sm">
              <h4 className="font-bold text-base md:text-lg text-[#007339]">
                <Link to="/fdessay4.html" className="underline hover:text-[#1866C5]">
                  "Economic and Political Freedom are Inseparable"
                </Link>
              </h4>
              <p className="text-xs md:text-sm text-gray-700 font-semibold mt-1">by Dr. Meinardus, Friedrich Naumann Foundation</p>
            </div>

            <div className="bg-white/40 p-4 md:p-6 border border-gray-200 rounded-sm">
              <h4 className="font-bold text-base md:text-lg text-[#007339]">
                <Link to="/newmedia.html" className="underline hover:text-[#1866C5]">
                  "The New Media and Human Rights"
                </Link>
              </h4>
              <p className="text-xs md:text-sm text-gray-700 font-semibold mt-1">by Michael M.J. Fischer, MIT</p>
            </div>

            <div className="bg-[#FAF0D6] p-4 md:p-6 border-4 border-[#003E1F] rounded-sm md:col-span-2">
              <h4 className="font-bold text-base md:text-lg text-[#007339]">
                <Link to="/kashmir/hapkash.html" className="underline hover:text-[#1866C5]">
                  FROM CANTONMENTS TO CANTONS -- A Modest Proposal for Kashmir and the Asian Neighborhood
                </Link>
              </h4>
              <p className="text-xs md:text-sm text-gray-700 mt-1">
                A 1999 UN Hague Appeal for Peace proposal that advocates adoption of Switzerland's radically direct democratic system in Kashmir and beyond.
              </p>
            </div>
          </div>
        </section>

        <img src="/graph/fdline5.gif" className="w-full h-2 my-8" alt="divider" />

        {/* 4. Featured Interviews Section */}
        <section id="interview" className="my-12 scroll-mt-6">
          <center className="w-full mb-6">
            <hr className="w-72 border-t-2 border-[#003E1F]/20 mx-auto my-2" />
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#FF0000] uppercase tracking-wide">
              Featured Interviews
            </h2>
            <hr className="w-72 border-t-2 border-[#003E1F]/20 mx-auto my-2" />
          </center>

          <div className="space-y-8 max-w-4xl mx-auto mt-8 text-left">
            {/* On East Timor */}
            <div className="space-y-4">
              <h3 className="text-lg md:text-xl font-black text-[#800000] border-b border-[#003E1F]/10 pb-1">
                ON EAST TIMOR
              </h3>
              <div className="pl-4 space-y-4">
                <div className="bg-white/40 p-4 border border-gray-200 rounded-sm">
                  <h4 className="font-bold text-base md:text-lg text-[#007339]">
                    <Link to="/jrhorta.html" className="underline hover:text-[#1866C5]">
                      ILLUMINATING ATROCITIES -- Disturbing a Purchased Peace with Nobel Prize Winner, Jose Ramos Horta
                    </Link>
                  </h4>
                  <p className="text-sm text-gray-700 mt-1 pl-1">
                    A wide-ranging interview with the outspoken laureate on media apathy, ASEAN authoritarianism, Japanese war crimes and the uses of Nobel attention
                  </p>
                </div>
                <div className="bg-white/40 p-4 border border-gray-200 rounded-sm">
                  <h4 className="font-bold text-base md:text-lg text-[#007339]">
                    <Link to="/maxstahl.html" className="underline hover:text-[#1866C5]">
                      TWENTY YEARS OF TERROR -- Indonesia in East Timor
                    </Link>
                  </h4>
                  <p className="text-sm text-gray-700 mt-1 pl-1">
                    An angry education with Max Stahl, the award-winning British photo-journalist who filmed the infamous 1991 Santa Cruz massacre
                  </p>
                </div>
              </div>
            </div>

            {/* On India */}
            <div className="space-y-4 pt-4">
              <h3 className="text-lg md:text-xl font-black text-[#800000] border-b border-[#003E1F]/10 pb-1">
                ON INDIA
              </h3>
              <div className="pl-4">
                <div className="bg-white/40 p-4 border border-gray-200 rounded-sm">
                  <h4 className="font-bold text-base md:text-lg text-[#007339]">
                    <Link to="/khosla.html" className="underline hover:text-[#1866C5]">
                      TURN THE SYSTEMS OF GOVERNANCE UPSIDE DOWN -- Toward a Sustainable Democracy
                    </Link>
                  </h4>
                  <p className="text-sm text-gray-700 mt-1 pl-1">
                    A ground-breaking interview with People First co-founder, Dr. Ashok Khosla on the necessity and possibility of direct democracy in India
                  </p>
                </div>
              </div>
            </div>

            {/* On Pakistan */}
            <div className="space-y-4 pt-4">
              <h3 className="text-lg md:text-xl font-black text-[#800000] border-b border-[#003E1F]/10 pb-1">
                ON PAKISTAN
              </h3>
              <div className="pl-4 space-y-4">
                <div className="bg-white/40 p-4 border border-gray-200 rounded-sm">
                  <h4 className="font-bold text-base md:text-lg text-[#007339]">
                    <Link to="/jehangir.html" className="underline hover:text-[#1866C5]">
                      DEMOCRACY IS SURVIVAL FOR WOMEN
                    </Link>
                  </h4>
                  <p className="text-sm text-gray-700 mt-1 pl-1">
                    An Interview with human rights crusader Asma Jehangir on the plight of women &amp; children, and the fundamentalist threat in Pakistan today
                  </p>
                </div>
                <div className="bg-white/40 p-4 border border-gray-200 rounded-sm">
                  <h4 className="font-bold text-base md:text-lg text-[#007339]">
                    <Link to="/imran.html" className="underline hover:text-[#1866C5]">
                      ISLAM MEANS JUSTICE, AND JUSTICE MEANS RIGHTS
                    </Link>
                  </h4>
                  <p className="text-sm text-gray-700 mt-1 pl-1">
                    An Interview with cricket legend turned fiery social/political activist, Imran Khan on the fight for democratic reform in Pakistan
                  </p>
                </div>
              </div>
            </div>

            {/* On Kashmir */}
            <div className="space-y-4 pt-4">
              <h3 className="text-lg md:text-xl font-black text-[#800000] border-b border-[#003E1F]/10 pb-1">
                ON KASHMIR
              </h3>
              <div className="pl-4">
                <div className="bg-[#FAF0D6] border-4 border-[#003E1F] p-4 rounded-sm">
                  <h4 className="font-bold text-base md:text-lg text-[#007339]">
                    <Link to="/kashmir/nahmad.html" className="underline hover:text-[#1866C5]">
                      SETTLING KASHMIR: Prospects for Peace, Justice, Independence...
                    </Link>
                  </h4>
                  <p className="text-sm text-gray-700 mt-1 pl-1">
                    Interview with Lt. Gen. (Retd) Nishat Ahmad, Director, Institute of Regional Studies, Islamabad, Pakistan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tiled Navigation Footer */}
        <center className="w-full mt-12 pt-6 border-t border-[#003E1F]/20">
          <img src={`${import.meta.env.BASE_URL}graph/fdline5.gif`} alt="divider" className="w-full h-2 my-4" />
          <div className="fdl-nav-gallery">
            <Link to="/"><img src={`${import.meta.env.BASE_URL}graph/btfdhome.jpg`} alt="Home" /></Link>
            <Link to="/fmission"><img src={`${import.meta.env.BASE_URL}graph/btfdmiss.jpg`} alt="Mission" /></Link>
            <Link to="/fdlorg"><img src={`${import.meta.env.BASE_URL}graph/btgfdorg.jpg`} alt="Organization" /></Link>
            <Link to="/fdlinits"><img src={`${import.meta.env.BASE_URL}graph/btfdinit.jpg`} alt="Initiatives" /></Link>
            <Link to="/fdllinks"><img src={`${import.meta.env.BASE_URL}graph/btfdlink.jpg`} alt="Links" /></Link>
          </div>
          <img src={`${import.meta.env.BASE_URL}graph/fdline5.gif`} alt="divider" className="w-full h-2 my-4" />

          {/* Contact and address */}
          <div className="mt-8 text-center text-xs md:text-sm text-[#007339]">
            <a href="mailto:fdlap@chollian.net" className="font-bold underline hover:text-[#1866C5]">
              Contact FDLAP...
            </a>
            <br />
            <Link to="/fdlorg#address" className="hover:text-[#1866C5] underline mt-1 block">
              Our Address...
            </Link>
            <hr className="w-24 border-t border-[#007339]/30 mx-auto my-3" />
            <span className="text-gray-500">Pagework by Nancho East</span>
          </div>
        </center>
      </div>
    </div>
  );
};

const styleBlock = (
  <style>{`
    a { color: #007339; text-decoration: underline; font-weight: bold; }
    a:hover { color: #1866C5; }
    h3:not(.text-center) { text-align: left; }
    h4 { text-align: left; }
  `}</style>
);

export default FdlPaper;
