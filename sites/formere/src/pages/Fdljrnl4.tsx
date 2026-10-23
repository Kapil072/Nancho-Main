import { SafeHtml } from "@/components/SafeHtml";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Fdljrnl4 = () => {
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
<IMG src="/graph/fdlapjr2.jpg" ALT="FDL-AP QUARTERLY Spring '98 Issue" WIDTH=174 HEIGHT=249 BORDER=3>
<P>


 <TABLE BORDER=3 CELLPADDING=5 CELLSPACING=2>
<CAPTION ALIGN=top><STRONG><U>SPRING '98 CONTENTS</U></STRONG></CAPTION>
<TR><TD>
<CENTER><STRONG><U>News</U></STRONG></CENTER>
<UL>
<LI>FDL-AP Granted United Nations DPI Status
<LI>FDL-AP Attends UN Sponsored Gender Program 
<LI>FDL-AP 1998 Proposed Initiatives
<LI>Press Statements on Burmese Political Development
</UL>
<CENTER><STRONG><U>Essays</U></STRONG></CENTER>
<UL>
<LI>Korea at a Cross Roads <BR>- The Role of Economic Liberalization in 
Democracy <BR>by United States Congressman Jim Kolbe 
<LI>Reengagement : Critical to Peace in Cambodia <BR>
by Professor Michael Doyle and Laura Thorton 
<LI>Participatory Democracy, Teledemocracy <BR>and the Future of Politics <BR>by 
Professer Ted Becker
</UL>

<CENTER><STRONG><U>Country Report</U></STRONG></CENTER>
<UL>
<LI>Burma : The Case for Democracy and Economic Reform 
<BR>by Zaw Oo
</UL>

<CENTER><STRONG><U>Special Announcement</U></STRONG></CENTER>
<UL>
<LI>The Asian Human Rights Charter <BR>by Lee Jai-Eui
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

export default Fdljrnl4;
