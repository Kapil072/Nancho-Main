import { SafeHtml } from "@/components/SafeHtml";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Fdljrnl2 = () => {
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
<FONT  SIZE=+2 COLOR=#007339><STRONG><EM>FDL - AP QUARTERLY</FONT><BR><FONT  SIZE=+1>Fall '97</EM>  </STRONG></FONT><BR>
<IMG src="/graph/fdline5.gif" WIDTH=350 HEIGHT=4>
<P>
<IMG src="/graph/fdljrn2.jpg" ALT="FDL-AP QUARTERLY Autumn '97 Issue" HSPACE=12 WIDTH=167 HEIGHT=235>
<P>



 <TABLE BORDER=3 CELLPADDING=5 CELLSPACING=2>
<CAPTION ALIGN=top><STRONG><U>AUTUMN '97 CONTENTS</U></STRONG></CAPTION>
<TR><TD>
<STRONG><U>News</U></STRONG>
<UL>
<LI>FDL-AP holds Young Leaders Workshop
<LI>FDL-AP opens Australia Chapter Office
<LI>Asia-Pacific Young Leaders Declaration on Democracy
<LI>Foreigners Perspectives on Democracy and the Press in Korea
</UL>
<STRONG><U>Workshop Special</U></STRONG>
<UL>
<LI> Dr. Kim Dae-jung's Welcoming Speech
<LI> <A HREF="qf97minn.html">Burma's Strategic Importance</A><A HREF="qf97minn.htm"></A> by Minn Aung Myint
<LI><A HREF="qf97ra.html">Democracy in Asia</A> by Prof. Ra Jong-il, Korea
<LI> <A HREF="qf97muka.html">Globalization and the Role of the State</A> by Dr. Ahmed Mukarram, India
<LI> Enriching the Democratic Debate by Dr. J.R. Nereus O. Acosta, Philippines
<LI> NGOs Should Build Greater Alliances by Hendrajit, Indonesia

</UL>

<STRONG><U>Essay</U></STRONG>
<UL>
<LI>Cosmopolitan Democracy by Prof. Craig Murphy
</UL>

<STRONG><U>Speech</U></STRONG>
<UL>
<LI><A HREF="qf97stei.html">The Press as Censorate</A> by David Steinberg
</UL>

<STRONG><U>Country Reports</U></STRONG>
<UL>
<LI>Hun Sen Crushed Cambodian Democracy by Son Soubert
</UL>
</TD></TR>
</TABLE><P>


<IMG src="/graph/fdline5.gif" WIDTH=250 HEIGHT=4 VSPACE=9><BR>
<A HREF="fdlpaper.html#essayarc"><STRONG>Back to Main Archives</A></STRONG><BR>
<IMG src="/graph/fdline5.gif" WIDTH=250 HEIGHT=4 VSPACE=9><BR>
<P>
</CENTER>
<FONT  SIZE=2><A HREF="mailto:FDLAP@chollian.net"><STRONG><U>Contact FDLAP...</U></STRONG></A><BR>
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

export default Fdljrnl2;
