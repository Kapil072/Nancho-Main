import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#FFFFEE";
    document.body.style.backgroundImage = "url('${import.meta.env.BASE_URL}barks/frenchp2.gif')";
    document.body.style.color = "#000000";
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.backgroundImage = "";
      document.body.style.color = "";
    }
  }, []);

  const htmlContent = `<div class="header-container" style="display: flex; align-items: center; justify-content: space-between; gap: 20px; margin-bottom: 24px; flex-wrap: wrap; width: 100%;">
  <div class="header-left" style="flex: 0 0 auto;">
    <a href="${import.meta.env.BASE_URL}">
      <img src="${import.meta.env.BASE_URL}graph/BIGBODBM.jpg" width="117" height="300" border="0" alt="Return to Personhood Index">
    </a>
  </div>
  <div class="header-center" style="flex: 1; text-align: center; min-width: 250px;">
    <img src="${import.meta.env.BASE_URL}bulls/advline2.gif" style="width: 75%; height: 5px; margin: 9px auto; display: block;">
    <strong style="font-size: 1.45rem; color: #000055; display: block; line-height: 1.4;">
      <em>BIG MEDICINE</em><br>
      PRESCRIPTIONS FOR REVOKING<br>
      CORPORATE PERSONHOOD
    </strong>
    <img src="${import.meta.env.BASE_URL}bulls/advline2.gif" style="width: 75%; height: 5px; margin: 9px auto; display: block;">
  </div>
  <div class="header-right" style="flex: 0 0 auto; width: 246px; text-align: center;">
    <img src="${import.meta.env.BASE_URL}graph/face1.jpg" width="246" height="247" border="0" style="display: block; margin: 0 auto 8px;" alt="Some Citizens are More Equal than Others">
    <strong style="font-size: 0.85rem; display: block; line-height: 1.2; color: #000055;">
      1886: Birth of the Corporate <em>Person</em><br>Astounds the Sovereign People
    </strong>
  </div>
</div>
<div align="center"><table width="550" cellspacing="2" cellpadding="2" border="0">
<tr>
    <td>
<strong>
<a name="top"></a>

INTRODUCTION
<ul>
<li> <a href="#basics">Basic Issues</a>


</li><li> <a href="cptalk.html">Thinking about B<font size="-1">IG</font> Personhood</a><br>
A Talk by Molly Morgan
</li><li><a href="cpnader.html">Corporations are not Persons</a><br>
by Carl Mayer &amp; Ralph Nader
</li><li> <a href="cpmonbio.html">
Corporations behave as if they <br>
are more human than we are</a><br>
by George Monbiot
</li><li> <a href="predator.html">Corporate Predators</a><br>
Brilliant review by Charles Reid
</li><li><a href="adbcorpI.html">Birth of the Corporate "I"</a><br>
by Kalle Lasn &amp;  Tony Liacas
</li><li> <a href="econom3.html">The System as Conspiracy</a><br>
Ecofile Note by Kent Walton
</li><li> <a href="corptime.html">Timeline of Corporate Personhood</a><br>
by Jan Edwards  &amp; Rick Beach <br>
(also see updated .pdf version <a href="${import.meta.env.BASE_URL}corperson/timelin2.pdf" target="_blank">here</a>)
</li><li><a href="/Nancho-Main/newchau/newchau/corphist.html" target="_blank">Timeline of Modern Incorporation</a> <br>
by George Draffan
</li><li><a href="#wbai">CORPORATE PERSONHOOD IN SONG &AMP; HISTORY <br>
- an Audio Introduction to a Dangerous Absurdity</a>

</li></ul>

AREAS OF IMPACT
<ul>
<li> <a href="cpbother.html">Why Bother with Corporate Personhood?</a><br>
by Doug Hammerstrom
</li><li><a href="cpchange.html">What Could Change If We 
Revoked Corporate Personhood</a><br>
by William Meyers
</li><li>Corp Personhood vs. Labor<br>
<ul>
<li><a href="labor&cp.html">Comments on Corporations &amp; Labor</a><br>
by George Draffan
</li></ul>
</li><li>Corp Personhood vs. Environment<br>
<ul>
<li> <a href="15bigngo.html">Environmentalists should Focus on Corporations</a><br>
Open Letter to 15 Largest Environmental NGOs<br>
</li><li> <a href="CPattack.html">Attacking Corporate Personhood: <br>
The Future of Environmental Law</a><br>
by Richard Grossman
</li><li> <a href="cpepope.html">Some Nonhuman Entities 
are More Equal than Others</a><br>

by Carl Pope 
</li></ul>
</li><li>Corp Personhood vs. Agriculture<br>
<ul>
<li><a href="paulccp1.html">Reframing Organic Ag Law as Symptom of Corporate Rule</a><br>
by Paul Cienfuegos</li></ul>
</li><li>Corp Personhood vs. Democracy<br>
<ul>
<li><a href="cpnadrsa.html">Nader's CP Warning to South Africa</a>
</li></ul>
</li></ul>
STUDY RESOURCES<br>


<ul>
<font color="#FF0000">WILPF's "Challenging Corporate Power" Tutorial!!!</font>
<li> <a href="wilpfint.html">Tutorial Introduction</a> (Session I)
</li><li> <a href="wilpf1.html">Corporate Personhood</a> (Session III)
</li><li> <a href="wilguide.html">WILPF Study Group Guidelines</a> - Process &amp; Facilitation<br><br>


Kelsey's "Manual for Counter-Technopols"
</li><li> <a href="/Nancho-Main/newchau/newchau/couptips.html">Tips on How to Oppose Corporate Rule</a><br><br>


Democracy Unlimited of Humboldt County<br>

</li><li> <a href="/Nancho-Main/newchau/newchau/cptapes!.html" target="_blank">Extensive Print &amp; AV Resource List</a>
</li></ul>

LEGALP & HILOSOPHIC DEBATES
<ul>
<li><a href="14amend.html">Should not the 14th Amendment be Amended?</a><br>
by Edward T. Lee 
</li><li><a href="corpwant.html">Do Corporate Bodies have Desires?</a><br>
by Austen Clark 
</li><li><a href="cpmillon.html">The Ambiguous Significance of Corporate Personhood</a> <br>
by David Millon
</li></ul>
MODELS
<ul>
<li>   <a href="http://www.iiipublishing.com/afd/pa-resol.htm" target="_blank">Point Arena Resolution to End Corporate Personhood</a><br>
- Redwood Coast Alliance For Democracy 
</li><li><a href="http://www.celdf.org/scm/ord12.htm" target="_blank">Township Ordinance to Remove Corporate Personhood</a> <br>
- Community Environmental Legal Defense Fund
</li></ul>
ALLIES
<ul>
<li> <a href="http://www.poclad.org/" target="_blank">Program on Corporations, Law and Democracy</a> 
</li><li> <a href="http://www.thealliancefordemocracy.org/allies%20in%20action/paradigm-shift.html" target="_blank">Campaign to Transform the Corporation</a> - Alliance for Democracy
</li><li><a href="http://democracyinnovations.org" target="_blank">Innovations in Democracy</a> - Co-Intellignece Institute
</li><li> <a href="http://www.iiipublishing.com/alliance.htm" target="_blank">Redwood Coast Alliance For Democracy</a>
</li><li><a href="http://rtmark.com/shell/fundcorp.html" target="_blank">The Corporate Law Fund</a>

<blockquote>"Projects in this fund challenge the legal rights and powers that corporations have arrogated over the years. Many of these projects focus on corporations' status as full persons, obtained via an 1886 U.S. Supreme Court ruling based on the Fourteenth Amendment to the U.S. Constitution, which was ratified to protect the rights of freed slaves." </blockquote>
</li></ul>




<hr width="550" size="3">
<hr width="450" size="2">
<hr width="550" size="3">
<br>

<a name="basics"></a>
<div align="center"><h3>T<font size="-1">HE</font> S<font size="-1">COURGE OF</font> D<font size="-1">EMOCRACIDE</font>  <br>How Popular Rule is Suffocated by Corporate <em>Personhood</em></h3></div>
<p>
Perhaps the most stunning weapon corporations use to dominate our world is the offensive shield of <em>personhood</em> that they bought from a bankrupt Supreme Court a century ago. The Supremes of that dark day unexplainedly pronounced that corporations were <em>persons</em> and thus entitled to the same Constitutional rights and protections as living, breathing people. As "persons" corporations  no longer have to pretend they are the obedient subject entities of the sovereign people who created them. They suddenly become our  equals in law and - given their wealth, scale and aggressive legal hordes - our actual masters in political practice.  Ninety years later another B<font size="-1">IG</font>-friendly Court rules that since corporations can only express themselves by belching money, it would violate their free speech rights to curb their  campaign finance  spew.  They  have thus drowned out the People's voice in  politics today.<p>
<div align="center"><img src="${import.meta.env.BASE_URL}newchau/graphics/FREESPEE.gif" width="400" height="353" border="0" alt="Self-Expression BIG-Time..."></div><p>
Campaign finance reform is one tortuous path to regaining popular control, but revoking corporations' personhood and their First Amendment "rights" is a much surer way to evict these anti-democratic bodies from our politics and halls of governance for once and for all.<br>


<hr align="left" width="70" size="3">
<strong>Basics</strong>
<hr align="left" width="70" size="3">

When our founding fathers sat down to write our Constitution, they had just fought a revolution against the vast corporations that ruled  America for Britain's King George III (eg., the Hudson Bay Company, Massachusetts Bay Company, Virginia Company, etc.). They  were not about to grant corporations any political role whatever in their new republic, let alone the same rights and privileges as their fellow citizens. Our elected representatives likewise never authorized a political role for these bodies, much less equal citizenship or predominant power. It took millions of dollars, hundreds of lawyers and long decades in the courts for corporations to stealthily acquire these privileges and We the Sovereign People were never once consulted. In the face of their consolidating control over our society and all our political processes, we think it's time that we were finally asked - or finally ask ourselves - do we want them to rule us or not? <p>
We thus propose a two-front campaign to challenge to their illicit authority in our communities and in Maine as a whole. The first envisions a series of Town Meeting ordinance initiatives modeled on Pennsylvania townships' proposed "<a href="http://www.celdf.org/scm/ord12.htm" target="_blank">Corporate Privilege Elimination and Democracy Protection Ordinance</a>."<p>
The second is a broader referendum effort to revoke corporate personhood rights state-wide. The proposed language for this initiative will be presented here by mid-December for your comments and refinement. In the meantime, please familiarize yourself with the history and importance of this issue by studying the many references above. 
<p>
If you know of any other links, articles or resources that might illuminate or advance this issue, please email the content or contact info to <a href="mailto:bigmed@nancho.net">bigmed@nancho.net</a>.<br><br>






<hr width="550" size="3">
<hr width="450" size="2">
<hr width="550" size="3">

<a name="wbai"></a>
<br>
<br>
<hr align="left" width="170" size="3">
<strong>Corporate Personhood on the Air</strong>
<hr align="left" width="270" size="3"><br>
<br>

2003 "Ain't that Good News!" <br>
Corporate Personhood Radio Show from<br>
WBAI 99.5 FM, New York Pacifica Outlet
<ul>
<li> <a href="${import.meta.env.BASE_URL}tracks/CP1intro.mp3" target="_blank">Track 1: Introduction to Corporate Personhood (CP) Issue</a>
<li> <a href="${import.meta.env.BASE_URL}tracks/CP2danaher.mp3" target="_blank">Track 2: Kevin Danaher on Insanity of CP</a>
<li> <a href="${import.meta.env.BASE_URL}tracks/CP3hartmannkorten.mp3" target="_blank">Track 3: Thom Hartmann and David Korten on History of CP</a>
<li> <a href="${import.meta.env.BASE_URL}tracks/CP4SFmimetroop.mp3" target="_blank">Track 4: San Francisco Mime Troop Song on History of CP</a>
<li> <a href="${import.meta.env.BASE_URL}tracks/CP5edwards.mp3" target="_blank">Track 5: Jan Edwards on Fight against CP in Arcata, CA</a>
<li> <a href="${import.meta.env.BASE_URL}tracks/CP6AZgreensLane.mp3" target="_blank">Track 6: Bryan Lane on Arizona Green's plebiscite movement against CP</a>
<li> <a href="${import.meta.env.BASE_URL}tracks/CP7finale.mp3" target="_blank">Track 7: Finale with Danaher and San Francisco Mime Troop</a>
 </ul>

<hr width="150">
<div align="center"><a href="#top">Back to Top</a></div>
<hr width="150">

	</strong>
	</td>
</tr>
</table></div>
<br><div align="center"><a href="/Nancho-Main/newchau/newchau/" target="_top"><img src="${import.meta.env.BASE_URL}graph/revolt.gif" width="430" height="53" border="0" alt=""><br>
<font size="-1">The Way  Home</font></a></div><p>
<div align="center"><font SIZE="-1" face="Verdana,Arial,Helvetica"><a href="/Nancho-Main/newchau/newchau/ccgoals.html">Goals</a> | <a href="/Nancho-Main/newchau/newchau/ccplay.html">Play</a> |  <a href="/Nancho-Main/newchau/newchau/gospels.html">Study</a> | <a href="/Nancho-Main/newchau/newchau/ccnews.html">News</a> | <a href="/Nancho-Main/newchau/newchau/faq.html">FAQ</a> | <a href="/Nancho-Main/newchau/newchau/contact.html">Contact</a> | <a href="/Nancho-Main/newchau/newchau/cchelp.html">Help</a> | <a href="/Nancho-Main/newchau/newchau/nchistry.html">Archives</a></font></div>
`;

  return (
    <div className="min-h-screen text-base md:text-lg leading-relaxed p-4 md:p-8 w-full max-w-none" style={{ fontFamily: "Times New Roman, serif", color: "#000055" }}>
      <style>{`
        a { color: #B32D41; text-decoration: underline; font-weight: bold; }
        a:hover { color: #FF4444; }
        h1, h2, h3, h4, h5, h6 { font-weight: bold; margin-bottom: 1em; text-align: left; width: 100% !important; }
        strong, b { font-weight: 900; }
        ul { list-style-type: disc; padding-left: 2em; margin-bottom: 1em; width: 100% !important; }
        li { margin-bottom: 0.5em; }
        img { max-width: 100%; height: auto; display: inline-block; }
        center { text-align: center; display: block; width: 100% !important; }
        hr { border: 0; border-top: 2px solid currentColor; margin: 1em auto; width: 100% !important; }
        
        /* Force full horizontal width for paragraphs, blockquotes, and tables */
        blockquote { 
          margin-left: 0 !important; 
          margin-right: 0 !important; 
          padding-left: 0 !important; 
          padding-right: 0 !important; 
          width: 100% !important; 
          max-width: 100% !important; 
        }
        table:not([align]):not([style*="float"]) { 
          clear: both;
          width: 100% !important; 
          max-width: 100% !important; 
          margin-top: 1.5rem;
        }
        table[align="right"] {
          float: right !important;
          width: auto !important;
          margin: 0 0 1em 1em !important;
        }
        table[align="left"] {
          float: left !important;
          width: auto !important;
          margin: 0 1em 1em 0 !important;
        }
        p { 
          width: 100% !important; 
          max-width: 100% !important; 
        }
      `}</style>

      <div dangerouslySetInnerHTML={{ __html: htmlContent }} className="w-full" />
    </div>
  );
};

export default Index;
