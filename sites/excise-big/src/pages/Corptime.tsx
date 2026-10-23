import { useEffect } from "react";

const Corptime = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#FFFFEE";
    document.body.style.backgroundImage = `url('${import.meta.env.BASE_URL}barks/frenchp2.gif')`;
    document.body.style.color = "#000000";
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.backgroundImage = "";
      document.body.style.color = "";
    };
  }, []);

  const htmlContent = `<a href="${import.meta.env.BASE_URL}"><img src="${import.meta.env.BASE_URL}graph/BIGBODBM.jpg" width="117" height="300" hspace="12"  border="0" align="left" alt="Return to Personhood Index"></a>

<div align="center"><IMG SRC="${import.meta.env.BASE_URL}bulls/advline2.gif" WIDTH=75% HEIGHT=5 vspace=9><BR>
<STRONG> <FONT  SIZE=4 COLOR=#000055>TIMELINE OF PERSONHOOD RIGHTS<br>
</font>
by Rick Beach and Jan Edwards</STRONG>
<br>


<div align="center"><IMG SRC="${import.meta.env.BASE_URL}bulls/advline2.gif" WIDTH=75% HEIGHT=5  vspace=9><P>

<font color="#FF0000"></font>

<DIV ALIGN="LEFT"><TABLE >
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="RIGHT"><FONT SIZE=2 color="#FF0000"><I>PEOPLE GAIN OR LOSE
RIGHTS</I></FONT><BR></DIV>
</TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2 color="#FF0000"><I>YEAR</I></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="LEFT"><FONT SIZE=2 color="#FF0000"><I>CORPORATIONS GAIN <br>
&nbsp;&nbsp;&nbsp;OR LOSE
RIGHTS</I></FONT><BR></DIV>
</TD>
<TD WIDTH=79 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="LEFT"><FONT SIZE=2 color="#FF0000"><I>NOTE/GENERAL</I></FONT><BR></DIV>
</TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1776</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
<TD WIDTH=79 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="LEFT"><FONT SIZE=2>Revolutionary War begins</FONT><BR></DIV>
</TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="RIGHT"><FONT SIZE=2>Bill of Rights - White males of property over 21
(literacy, poll taxes)</FONT><BR></DIV>
</TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1791</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="LEFT"><FONT SIZE=2>Constitution </FONT><BR></DIV>
</TD>
<TD WIDTH=79 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1803</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="LEFT"><FONT SIZE=2><I>Marbury v. Madison - Supreme Court becomes
Supreme</I></FONT><BR></DIV>
</TD>
<TD WIDTH=79 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1819</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="LEFT"><FONT SIZE=2><I>Dartmouth College v. Woodward</I> - A
corporate charter is a contract and can't be altered by
government</FONT><BR></DIV>
</TD>
<TD WIDTH=79 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="RIGHT"><FONT SIZE=2>Dred Scott - Slaves are Property and Congress
cannot deprive citizens of their property. Slaves are not citizens of any
State.</FONT><BR></DIV>
</TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1857</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
<TD WIDTH=79 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1861</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
<TD WIDTH=79 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="LEFT"><FONT SIZE=2>Civil War begins</FONT><BR></DIV>
</TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="RIGHT"><FONT SIZE=2>13th Amendment - Slavery
abolished</FONT><BR></DIV>
</TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1865</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
<TD WIDTH=79 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="RIGHT"><FONT SIZE=2>14th Amendment - Black males get equal
protection</FONT><BR></DIV>
</TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1868</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="LEFT"><FONT SIZE=2><I>Paul v. Virginia</I> - Corporations NOT
persons under Article IV, Section 2</FONT><BR></DIV>
</TD>
<TD WIDTH=79 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="RIGHT"><FONT SIZE=2>15th Amendment - Black males
vote</FONT><BR></DIV>
</TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1870</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
<TD WIDTH=79 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="RIGHT"><FONT SIZE=2><I>Minor v. Happersett</I> - Women seek 14th
Amendment but NO - only for black males</FONT><BR></DIV>
</TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1874</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
<TD WIDTH=79 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1877</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="LEFT"><FONT SIZE=2><I>Munn V. Illinois</I> - 14th Amendment CANNOT
be used to protect corporations from state law, but didn't actually rule on
personhood </FONT><BR></DIV>
</TD>
<TD WIDTH=79 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1886</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="LEFT"><FONT SIZE=2><I>Santa Clara County v. Southern Pacific
Railroad</I> - Corporations get personhood under the 14th
Amendment</FONT><BR></DIV>
</TD>
<TD WIDTH=79 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1890</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="LEFT"><FONT SIZE=2>Sherman Anti-Trust Act - Sections 7&amp;8 define
corporations as persons</FONT><BR></DIV>
</TD>
<TD WIDTH=79 COLSPAN=1 ROWSPAN=5 VALIGN="MIDDLE">
<DIV ALIGN="LEFT"><FONT SIZE=2>Of the 14th Amendment cases brought before
Supreme Court between 1890 and 1910, 19 dealt with Negroes, 288 dealt with
corporations</FONT><BR></DIV>
</TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1893</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="LEFT"><FONT SIZE=2><I>Noble v. Union River Logging</I> - 5th
Amendment (due process) - first Bill of Rights</FONT><BR></DIV>
</TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="RIGHT"><FONT SIZE=2><I>Plessy v. Ferguson</I> &#8211;
&#8220;Separate but equal&#8221; - black males lose 14<SUP>th</SUP> amendment
rights</FONT><BR></DIV>
</TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1896</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1906</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="LEFT"><FONT SIZE=2><I>Hale v. Henkle</I> - Corporations get 4th
Amendment "search and seizure" protection</FONT><BR></DIV>
</TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1910</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="RIGHT"><FONT SIZE=2>19th Amendment - Women get the
vote</FONT><BR></DIV>
</TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1920</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
<TD WIDTH=79 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1925</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="LEFT"><FONT SIZE=2>Gitlow rules constitutional protections for
corporations include 14th Amendment, press, speech, and 5th
Amendment</FONT><BR></DIV>
</TD>
<TD WIDTH=79 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="RIGHT"><FONT SIZE=2>Supreme Court Justice Hugo Black challenges
corporate personhood - dissent Connecticut General Life <I>Insurance v.
Johnson</I></FONT><BR></DIV>
</TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1938</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="LEFT"><FONT SIZE=2>The Corporation won this case</FONT><BR></DIV>
</TD>
<TD WIDTH=79 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="RIGHT"><FONT SIZE=2>Supreme Court Justice William O. Douglas
dissents <I>Wheeling Steel Corporation v. Glander</I></FONT><BR></DIV>
</TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1949</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="LEFT"><FONT SIZE=2>The Corporation won this case</FONT><BR></DIV>
</TD>
<TD WIDTH=79 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="RIGHT"><FONT SIZE=2><I>Brown v. Board of Education</I> - "Separate
is not equal"</FONT><BR></DIV>
</TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1954</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
<TD WIDTH=79 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="RIGHT"><FONT SIZE=2>24<SUP>th</SUP> Amendment - No poll
taxes</FONT><BR></DIV>
</TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1964</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
<TD WIDTH=79 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="RIGHT"><FONT SIZE=2>26th Amendment - 18-year-olds vote.
</FONT><BR></DIV>
<DIV ALIGN="RIGHT"><FONT SIZE=2>Women included in 14th
Amendment</FONT><BR></DIV>
</TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1971</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
<TD WIDTH=79 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1976</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="LEFT"><FONT SIZE=2><I>Buckley v. Valeo</I> - money equals
speech</FONT><BR></DIV>
</TD>
<TD WIDTH=79 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1976</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="LEFT"><FONT SIZE=2><I>US v. Martin Linen Supply</I> - corporation
uses 5th Amendment to protect against double jeopardy to avoid retrial in
anti-trust case</FONT><BR></DIV>
</TD>
<TD WIDTH=79 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="LEFT"><FONT SIZE=2>Slavery is the legal fiction</FONT><BR></DIV>
<DIV ALIGN="LEFT"><FONT SIZE=2>that a person is property.</FONT><BR></DIV>
<DIV ALIGN="LEFT"><BR></DIV>
<DIV ALIGN="LEFT"><FONT SIZE=2>Corporate Personhood is the
legal</FONT><BR></DIV>
<DIV ALIGN="LEFT"><FONT SIZE=2>fiction that property is a
person.</FONT><BR></DIV>
</TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1976</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="LEFT"><FONT SIZE=2><I>Virginia Board of Pharmacy v. Virginia
Consumer Council</I> - Advertising is free speech. [Commercial
Speech]</FONT><BR></DIV>
</TD>
<TD WIDTH=79 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1977</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="LEFT"><FONT SIZE=2><I>Marshall v. Barlow</I> - 4th Amendment used to
thwart federal occupational health and safety inspections</FONT><BR></DIV>
</TD>
<TD WIDTH=79 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
</TR>
<TR VALIGN="TOP">
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
<TD WIDTH=34 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="CENTER"><FONT SIZE=2><B>1977</B></FONT><BR></DIV>
</TD>
<TD WIDTH=194 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<DIV ALIGN="LEFT"><FONT SIZE=2><I>First National Bank of Boston v. Bellotti</I>
- 1st Amendment used to overturn state restrictions on corporate spending on
political referenda</FONT><BR></DIV>
</TD>
<TD WIDTH=79 COLSPAN=1 ROWSPAN=1 VALIGN="TOP">
<BR></TD>
</TR>
</TABLE></DIV>
<DIV ALIGN="LEFT"><BR></DIV>

<br><div align="center"><a href="/Nancho-Main/newchau/newchau/" target="_top"><img src="${import.meta.env.BASE_URL}graph/revolt.gif" width="430" height="53" border="0" alt=""><br>
<font size="-1">The Way  Home</font></a></div><p>
<div align="center"><font SIZE="-1" face="Verdana,Arial,Helvetica"><a href="/Nancho-Main/newchau/newchau/ccgoals.html">Goals</a> | <a href="/Nancho-Main/newchau/newchau/ccplay.html">Play</a> |  <a href="/Nancho-Main/newchau/newchau/gospels.html">Study</a> | <a href="/Nancho-Main/newchau/newchau/ccnews.html">News</a> | <a href="/Nancho-Main/newchau/newchau/faq.html">FAQ</a> | <a href="/Nancho-Main/newchau/newchau/contact.html">Contact</a> | <a href="/Nancho-Main/newchau/newchau/cchelp.html">Help</a> | <a href="/Nancho-Main/newchau/newchau/nchistry.html">Archives</a></font></div>
`;

  return (
    <div
      className="min-h-screen text-base md:text-lg leading-relaxed p-4 md:p-8 w-full max-w-none"
      style={{ fontFamily: "Times New Roman, serif", color: "#000055" }}
    >
      <style>{`
        a { color: #B32D41; text-decoration: underline; font-weight: bold; }
        a:hover { color: #FF4444; }
        h1, h2, h3, h4, h5, h6 { font-weight: bold; margin-bottom: 1em; }
        strong, b { font-weight: 900; }
        ul { list-style-type: disc; padding-left: 2em; margin-bottom: 1em; }
        li { margin-bottom: 0.5em; }
        img { max-width: 100%; height: auto; display: inline-block; }
        center { text-align: center; display: block; }
        hr { border: 0; border-top: 2px solid currentColor; margin: 1em auto; }
      `}</style>

      <div dangerouslySetInnerHTML={{ __html: htmlContent }} className="w-full legacy-content" />
    </div>
  );
};

export default Corptime;
