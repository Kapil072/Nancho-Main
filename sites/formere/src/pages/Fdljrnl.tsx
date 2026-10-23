import { SafeHtml } from "@/components/SafeHtml";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Fdljrnl = () => {
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
<IMG src="/graph/fdlapjr2.jpg" ALT="FDL-AP QUARTERLY Summer '97 Issue" WIDTH=174 HEIGHT=249 BORDER=3>
<P>


 <TABLE BORDER=3 CELLPADDING=5 CELLSPACING=2>
<CAPTION ALIGN=top><STRONG><U>SUMMER '97 CONTENTS</U></STRONG></CAPTION>
<TR><TD>
<STRONG><U>News</U></STRONG>
<UL>
<LI>The FDL-AP Delegation to the U.S.
<LI>Letter Campaign to ASEAN
<LI>Women and Democracy in Korea
<LI>The FNS and FDL-AP Get Together
</UL>
<STRONG><U>Speeches</U></STRONG>
<UL>
<LI>"<A HREF="kdjtalk.html">Democracy in Asia</A>" by Dr. Kim Dae-jung
<LI>"Importance of Political Change for Democracy" <BR>by Dr. Otto Lamsdorff
</UL>

<STRONG><U>Opinion Essay</U></STRONG>
<UL>
<LI>"<A HREF="jrhessay.html">The Role of NGOs: An East Timorese Example</A>" <BR>by Dr. Jose Ramos Horta
</UL>

<STRONG><U>Country Reports</U></STRONG>
<UL>
<LI>"<A HREF="singngos.html">NGOs in Singapore</A>" by Dr. Chee Soon Juan
<LI>"Efforts in Mongolia" by B. Delgermaa
<LI>"Covers Nepal" by Baby Acharya
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

export default Fdljrnl;
