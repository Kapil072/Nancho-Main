import { Link } from "react-router-dom";
import { useEffect } from "react";

export const HeaderBlock = () => (
  <center className="w-full">
    <table
      border={6}
      cellPadding={10}
      style={{ backgroundColor: "#007D00", borderWidth: "6px", borderColor: "#007D00" }}
      className="mx-auto w-full max-w-5xl border-[6px]"
    >
      <tbody>
        <tr>
          <td style={{ backgroundColor: "#003E1F" }} className="p-2 md:p-4">
            <img
              src={`${import.meta.env.BASE_URL}bulls/flame2.gif`}
              width="30"
              height="60"
              className="w-8 h-16 md:w-12 md:h-24 object-contain"
              alt="flame"
            />
          </td>
          <td align="center" style={{ backgroundColor: "#000000" }} className="px-4 py-2">
            <span
              style={{ color: "#9999FF" }}
              className="text-base md:text-xl lg:text-2xl font-bold tracking-wider leading-tight"
            >
              <strong>THE FORUM OF DEMOCRATIC LEADERS IN THE ASIA-PACIFIC</strong>
            </span>
          </td>
          <td style={{ backgroundColor: "#003E1F" }} className="p-2 md:p-4">
            <img
              src={`${import.meta.env.BASE_URL}bulls/flame2.gif`}
              width="30"
              height="60"
              className="w-8 h-16 md:w-12 md:h-24 object-contain"
              alt="flame"
            />
          </td>
        </tr>
      </tbody>
    </table>

    <img src={`${import.meta.env.BASE_URL}graph/fdline5.gif`} className="w-full h-2 my-6" alt="divider" />
    <img src={`${import.meta.env.BASE_URL}graph/fdlogo15.gif`} alt="FDL-AP Logo" className="w-32 h-auto md:w-48 my-4" />
    <img src={`${import.meta.env.BASE_URL}graph/fdline5.gif`} className="w-full h-2 my-6" alt="divider" />
  </center>
);

const Index = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#C9FFC8";
    document.body.style.backgroundImage = `url('${import.meta.env.BASE_URL}graph/fdbk7.gif')`;
    document.body.style.color = "#000000";
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.backgroundImage = "";
      document.body.style.color = "";
    };
  }, []);

  return (
    <div className="fdl-page min-h-screen pt-2 md:pt-4 px-4 pb-4 md:px-8 md:pb-8">
      <div className="fdl-container !mt-0 !pt-2 md:!pt-4">
        <style>{`
          a { color: #007339; text-decoration: underline; font-weight: bold; }
          a:hover { color: #1866C5; }
          h3 { font-size: 1.3em; font-weight: bold; margin-bottom: 0.75em; text-align: left; width: 100% !important; }
          strong { font-weight: 900; }
          ul { list-style-type: disc; padding-left: 1.5em; margin-bottom: 1rem; width: 100% !important; }
          li { margin-bottom: 0.4em; }
          
          blockquote { 
            margin-left: 0 !important; 
            margin-right: 0 !important; 
            padding-left: 1rem !important; 
            padding-right: 1rem !important; 
            width: 100% !important; 
            max-width: 100% !important; 
          }
          table:not(.w-auto) { width: 100% !important; max-width: 100% !important; }
          p { width: 100% !important; max-width: 100% !important; }
          center { width: 100% !important; }
        `}</style>

        <HeaderBlock />

        <center className="w-full">
          <div style={{ color: "#003E1F" }} className="w-full">
            <blockquote className="my-6 px-4 md:px-8 text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed border-l-4 border-[#003E1F] bg-[#003E1F]/5 py-4">
              The Forum of Democratic Leaders in the Asia-Pacific (FDL-AP) is a non-profit organization established in
              December of 1994 with the mission to promote democracy, including all its necessary prerequisite
              conditions and institutions, within the Asia-Pacific region and beyond.
            </blockquote>

            <img src={`${import.meta.env.BASE_URL}graph/fdline5.gif`} className="w-full h-2 my-4" alt="divider" />
          </div>
        </center>

        <center className="w-full mt-8">
          {/* Desktop View: 4-column table (hidden on mobile) */}
          <table
            border={7}
            cellPadding={7}
            cellSpacing={5}
            className="hidden md:table mx-auto border-[6px] border-[#003E1F] w-auto text-xs md:text-sm"
          >
            <caption className="mb-4 font-bold text-sm md:text-base lg:text-lg tracking-widest text-[#003E1F] uppercase">
              <strong>CO-PRESIDENTS</strong>
            </caption>
            <tbody>
              <tr>
                <td style={{ backgroundColor: "#FAF0D6" }} className="p-2 align-bottom">
                  <img
                    src={`${import.meta.env.BASE_URL}graph/cory.jpg`}
                    alt="Corazon Aquino"
                    className="mx-auto h-28 w-auto border-2 border-black object-contain"
                  />
                </td>
                <td style={{ backgroundColor: "#FAF0D6" }} className="p-2">
                  <img
                    src={`${import.meta.env.BASE_URL}graph/sonia.jpg`}
                    alt="Sonia Gandhi"
                    className="mx-auto h-28 w-auto border-2 border-black object-contain"
                  />
                </td>
                <td style={{ backgroundColor: "#FAF0D6" }} className="p-2">
                  <img
                    src={`${import.meta.env.BASE_URL}graph/kim.jpg`}
                    alt="Kim Dae-jung"
                    className="mx-auto h-28 w-auto border-2 border-black object-contain"
                  />
                </td>
                <td style={{ backgroundColor: "#FAF0D6" }} className="p-2">
                  <img
                    src={`${import.meta.env.BASE_URL}graph/oscar.jpg`}
                    alt="Oscar Arias Sanchez"
                    className="mx-auto h-28 w-auto border-2 border-black object-contain"
                  />
                </td>
              </tr>
              <tr>
                <td align="center" style={{ backgroundColor: "#FAF0D6" }} className="p-2 text-xs md:text-sm">
                  <strong>
                    Corazon
                    <br />
                    Aquino
                  </strong>
                </td>
                <td align="center" style={{ backgroundColor: "#FAF0D6" }} className="p-2 text-xs md:text-sm">
                  <strong>Sonia Gandhi</strong>
                </td>
                <td align="center" style={{ backgroundColor: "#FAF0D6" }} className="p-2 text-xs md:text-sm">
                  <strong>Kim Dae-Jung</strong>
                </td>
                <td align="center" style={{ backgroundColor: "#FAF0D6" }} className="p-2 text-xs md:text-sm">
                  <strong>
                    Oscar Arias
                    <br /> Sanchez
                  </strong>
                </td>
              </tr>
            </tbody>
          </table>

          {/* Mobile View: 2x2 grid (hidden on desktop) */}
          <div className="block md:hidden mx-auto border-[6px] border-[#003E1F] w-full max-w-xs bg-[#FAF0D6] p-3 text-left">
            <p className="mb-4 font-bold text-base tracking-widest text-[#003E1F] uppercase text-center mt-1">
              <strong>CO-PRESIDENTS</strong>
            </p>
            <div className="grid grid-cols-2 gap-3">
              {/* Corazon Aquino */}
              <div className="flex flex-col border-2 border-gray-300 p-2 bg-[#FAF0D6] items-center justify-between w-fit mx-auto">
                <img
                  src={`${import.meta.env.BASE_URL}graph/cory.jpg`}
                  alt="Corazon Aquino"
                  className="mx-auto h-20 w-auto border-2 border-black object-contain"
                />
                <p className="text-center font-bold text-[10px] mt-1 leading-tight text-black">
                  Corazon
                  <br />
                  Aquino
                </p>
              </div>
              {/* Sonia Gandhi */}
              <div className="flex flex-col border-2 border-gray-300 p-2 bg-[#FAF0D6] items-center justify-between w-fit mx-auto">
                <img
                  src={`${import.meta.env.BASE_URL}graph/sonia.jpg`}
                  alt="Sonia Gandhi"
                  className="mx-auto h-20 w-auto border-2 border-black object-contain"
                />
                <p className="text-center font-bold text-[10px] mt-1 leading-tight text-black">Sonia Gandhi</p>
              </div>
              {/* Kim Dae-Jung */}
              <div className="flex flex-col border-2 border-gray-300 p-2 bg-[#FAF0D6] items-center justify-between w-fit mx-auto">
                <img
                  src={`${import.meta.env.BASE_URL}graph/kim.jpg`}
                  alt="Kim Dae-Jung"
                  className="mx-auto h-20 w-auto border-2 border-black object-contain"
                />
                <p className="text-center font-bold text-[10px] mt-1 leading-tight text-black">Kim Dae-Jung</p>
              </div>
              {/* Oscar Arias Sanchez */}
              <div className="flex flex-col border-2 border-gray-300 p-2 bg-[#FAF0D6] items-center justify-between w-fit mx-auto">
                <img
                  src={`${import.meta.env.BASE_URL}graph/oscar.jpg`}
                  alt="Oscar Arias Sanchez"
                  className="mx-auto h-20 w-auto border-2 border-black object-contain"
                />
                <p className="text-center font-bold text-[10px] mt-1 leading-tight text-black">
                  Oscar Arias
                  <br />
                  Sanchez
                </p>
              </div>
            </div>
          </div>

          <div className="w-full mt-8 text-left text-sm md:text-base leading-relaxed">
            <ul className="mb-6">
              <li>
                <strong>Corazon C. Aquino</strong> <span>Former President, Republic of the Philippines</span>
              </li>
              <li>
                <strong>Sonia Gandhi</strong> <span>Chairperson, Rajiv Gandhi Foundation</span>
              </li>
              <li>
                <strong>Kim Dae-Jung</strong> <span>President, National Congress for New Politics</span>
              </li>
              <li>
                <strong>Oscar Arias Sanchez</strong> <span>Former President, Costa Rica</span>
              </li>
            </ul>

            <h3 className="uppercase text-base md:text-lg text-center underline font-bold text-[#003E1F] my-6">
              HONORARY SENIOR ADVISORS
            </h3>

            <ul className="mb-8">
              <li>
                <strong>Aung San Suu Kyi</strong> : Leader, National League for Democracy, Burma
              </li>
              <li>
                <strong>Desmond Tutu</strong> : Anglican Archbishop of South Africa
              </li>
              <li>
                <strong>Mikhail Gorbachev</strong> : Former President of the Soviet Union
              </li>
              <li>
                <strong>Richard von Weizsaecker</strong> : Former President of Germany
              </li>
            </ul>
          </div>

          <hr className="w-48 border-t-4 border-[#003E1F]/30 my-4 mx-auto" />
          <div className="text-base md:text-lg font-bold tracking-wide my-4 py-2 border-y border-[#003E1F]/10 w-full">
            <span className="text-[#FF0000] animate-pulse">!</span> -{" "}
            <Link to="/fdlalert" className="hover:text-red-600 underline">
              FDLAP ALERTS
            </Link>{" "}
            - <span className="text-[#FF0000] animate-pulse">!</span>
            <br />
            <span className="text-xs md:text-sm font-normal text-gray-700 block mt-1">The Crisis in Kashmir</span>
          </div>
          <hr className="w-48 border-t-4 border-[#003E1F]/30 my-4 mx-auto" />

          <img src={`${import.meta.env.BASE_URL}graph/fdline5.gif`} className="w-full h-2 my-8" alt="divider" />

          <div className="fdl-nav-gallery">
            <Link to="/fmission">
              <img src={`${import.meta.env.BASE_URL}graph/btfdmiss.jpg`} alt="Mission" />
            </Link>
            <Link to="/fdlorg">
              <img src={`${import.meta.env.BASE_URL}graph/btgfdorg.jpg`} alt="Organization" />
            </Link>
            <Link to="/fdlinits">
              <img src={`${import.meta.env.BASE_URL}graph/btfdinit.jpg`} alt="Initiatives" />
            </Link>
            <Link to="/fdlpaper">
              <img src={`${import.meta.env.BASE_URL}graph/btfdlit.jpg`} alt="Literature" />
            </Link>
            <Link to="/fdllinks">
              <img src={`${import.meta.env.BASE_URL}graph/btfdlink.jpg`} alt="Links" />
            </Link>
          </div>

          <img src={`${import.meta.env.BASE_URL}graph/fdline5.gif`} className="w-full h-2 my-8" alt="divider" />

          <p className="mt-8 text-sm text-gray-600">
            <small>Visitors since 14 July 98:</small>
            <br />
            <img
              src="/new-nancho/bigmed2000/counter/org/bigkarma/fdlap/fdlap.cnt?ft=0&dd=C"
              alt="counter"
              className="w-24 h-6 mt-1 mx-auto"
            />
          </p>
        </center>
      </div>
    </div>
  );
};

export default Index;
