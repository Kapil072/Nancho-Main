import { SafeHtml } from "@/components/SafeHtml";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Fdljrnl6 = () => {
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

  const htmlContent = `

<CENTER>
<EM>Subscribe now to receive the latest reports <BR>on human rights and democracy movements in the Asia-Pacific</EM><P>
<IMG src="/graph/fdline5.gif" WIDTH=350 HEIGHT=4 VSPACE=6><BR>
<FONT  SIZE=+2 COLOR=#007339><STRONG><EM>FDL - AP QUARTERLY</EM></STRONG></FONT><BR>
<IMG src="/graph/fdline5.gif" WIDTH=350 HEIGHT=4>
<P>
<IMG src="/graph/fdljrnl6.jpg" ALT="FDL-AP QUARTERLY Spring, '99 Issue" WIDTH=176 HEIGHT=250 BORDER=3>
<P>


 <TABLE BORDER=3 CELLPADDING=5 CELLSPACING=2>
<CAPTION ALIGN=top><STRONG><U>SPRING '99 CONTENTS</U></STRONG></CAPTION>
<TR><TD>
<CENTER><H3><FONT COLOR=#007339>THEME:<BR>
DEMOCRACY IN ASIA <BR>- T<FONT SIZE=-1>HE ROAD TO PEACE, LIBERTY AND PROSPERITY</FONT></FONT></H3></CENTER>
<STRONG>Letter from Dr. Han Sung-Joo, <BR><FONT  SIZE=2>Acting Resident Co-president, FDL-AP</FONT></STRONG><P>


<STRONG><U>Support Messages from the <BR>FDL-AP International Leadership</U></STRONG>
<UL>
<LI>Madam Corazon Aquino
<LI>Dr. Oscar Arias
<LI>Sen. Aitzaz Ahsan
<LI>Dr. Kamal Hossain
<LI>Dr. Ronald Meinardus
<LI>Mr. H. K. Kuloy
</UL>

<STRONG><U>FDL-AP News</U></STRONG>
<UL>
<LI>FDL-AP Initiatives for 1999
<LI>Korean Membership Meeting
<LI>NED's Visit to the FDL-AP
<LI>Liberal International and Friedrich <BR>Naumann Foundation meet the FDL-AP
<LI>FDL-AP Press Statement on the Tragic Death <BR>of Dr. Michael Aris
</UL>

<STRONG><U>National Chapters and Liaison Offices</U></STRONG>
<UL>
<LI>Austrian Leadership in Promoting Democracy of Asia <BR>by Janelle Saffin MLC
<LI>Singapore's "Untold" Story <BR>by Chee Soon Juan
</UL>

<STRONG><U>Youth Forum</U></STRONG>
<UL>
<LI>Since My Time with the FDL-AP in September, 1996 <BR>by  Sonali Pathirana
</UL>

<STRONG><U>Country Reports</U></STRONG>
<UL>
<LI>New Zealand's Electoral Experiment <BR>by Geoff  Thompson
<LI>Democratic Pilgrimage in Nepal <BR>by Devendra Raj Panday
<LI>Hong Kong Report <BR>by  Emily Lau
<LI>Party-List System in the Philippines <BR>- Political Power Must be Shared, Not Controlled <BR>by Jed Dayang
</UL>

<STRONG><U>Essays</U></STRONG>
<UL>
<LI>Thai Policy Towards Burma <BR>by  Gothom Arya
<LI>People's Forum on Burma <BR>- A Tokyo Based NGO to Promote Democracy in
Burma <BR>by  Kei Nemoto
</UL>

</TD></TR>
</TABLE><P>


<IMG src="/graph/fdline5.gif" WIDTH=250 HEIGHT=4 VSPACE=9><BR>
<A HREF="fdlpaper.html#essayarc"><STRONG>Back to Main Archives</A></STRONG><BR>
<IMG src="/graph/fdline5.gif" WIDTH=250 HEIGHT=4 VSPACE=9><BR>
<P>
</CENTER>
<FONT  SIZE=2><A HREF="mailto:fdlap@chollian.dacom.co.kr"><STRONG><U>Contact FDLAP...</U></STRONG></A><BR>
<A HREF="fdlorg.html#address">Our Address...</A></FONT>
<HR WIDTH=105 ALIGN=LEFT SIZE=2>
<FONT  SIZE=-2 COLOR=#007339>Pagework by Nancho East</FONT>


`;

  return (
    <div className="fdl-page min-h-screen p-4 md:p-8">
      <div className="fdl-container">
        <SafeHtml html={htmlContent} className="fdl-content w-full" />
        
        {/* Simple back navigation footer */}
        <center className="w-full mt-12 pt-6 border-t border-[#003E1F]/10">
          <Link to="/" className="text-[#007339] underline font-bold hover:text-[#1866C5] text-sm md:text-base">
            Back to Home
          </Link>
        </center>
      </div>
    </div>
  );
};

export default Fdljrnl6;
