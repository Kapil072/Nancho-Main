import { useEffect } from "react";

const Cpmonbio = () => {
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

  const htmlContent = `<a href="${import.meta.env.BASE_URL}"><img src="${import.meta.env.BASE_URL}graph/BIGBODBM.jpg" width="117" height="300" hspace="12"  border="0" align="left" alt="Return to Personhood Index"></a>

<div align="center"><IMG SRC="${import.meta.env.BASE_URL}bulls/advline2.gif" WIDTH=75% HEIGHT=5 vspace=9><BR>
<STRONG> <FONT  SIZE=4 COLOR=#000055> 
CORPORATIONS BEHAVE AS IF <br>
THEY 
ARE MORE HUMAN THAN WE ARE </font><br>
by George Monbiot</STRONG><br>
The <I>Guardian </I>of London, 10/5/00<br>


<div align="center"><IMG SRC="${import.meta.env.BASE_URL}bulls/advline2.gif" WIDTH=75% HEIGHT=5  vspace=9><P>
<table width="550" cellspacing="2" cellpadding="2" border="0">
<tr>
    <td>
<strong>


The location of the boundaries of our humanity is perhaps the key moral question of our age. Whether a test-tube baby 
should be selected so that his cells can be used to save the life of his sister, whether one conjoined twin should die so that 
another can live, whether partial human embryos should be cloned and reared for organ transplants confront us with problems 
we have never faced before. Medical advances, both wonderful and terrifying, are eroding the edges of our identity. 
<P>
The new Human Rights Act is intended to provide us with some of the guidelines we need to help sort this out. It insists 
that we have an inalienable right both to life itself and to the freedom without which that life would be wretched. But while 
the rights it guarantees have proved fairly easy to define, it is, curiously, the concept of humanity which turns out to be 
precarious. 
<P>
Human beings, you might have thought, are animate, bipedal creatures a bit like you and me. But the lawyers would have 
it otherwise. Big companies might not breath or speak or eat (though they certainly reproduce), but they are now using human 
rights laws to claim legal protections and fundamental liberties. As their humanity develops, so ours diminishes. 
<P>
Last month, a quarrying company called Lafarge Redland Aggregates took the Scottish environment minister to court on 
the grounds that its human rights had been breached. Article 6 of the European Convention determines that human beings 
should be allowed a fair hearing of cases in which they are involved "within a reasonable time." Lafarge is insisting that the 
results of the public inquiry into its plan to dig up a mountain in South Harris have been unreasonably delayed. The company, 
as the campaigning academic Alastair McIntosh has argued, may have good reason to complain, but to use human rights law 
to press its case sets a frightening precedent. 
<P>
It is a concept developed in the US. The 14th amendment to the constitution was introduced in 1868 with the aim of extending to blacks the legal protections enjoyed by whites: equality under the law, the right to life, liberty and the enjoyment 
of property. By 1896, a series of extraordinary rulings by a corrupt, white and corporate-dominated judiciary had succeeded in denying these rights to the black people they were supposed to protect, while granting them instead to corporations. 
<P>
Though black people eventually reclaimed their legal protections, corporate human rights were never rescinded. Indeed, 
while they have progressively extended the boundaries of their own humanity, the companies have ensured that ours is ever 
more restrained. 
<P>
Firms in the US have argued that regulating their advertisements or restricting their political donations infringes their "human right" to "free speech." They have insisted that their right to the "peaceful enjoyment of possessions" should oblige 
local authorities to grant them planning permission, and prevent peaceful protesters from gathering on their land. 
At the same time, however, they have helped to ensure that the "social, economic and cultural" rights, which might have allowed us to challenge their dominance, remain merely "aspirational." As the solicitor Daniel Bennett has pointed out, 
article 13 of the European Convention, by which we could have contested the corporations' absolute control of fundamental resources, has been deliberately excluded from our own Human Rights Act. 
<P>
The rise of corporate human rights has been accompanied by an erosion of responsibilities. Limited liability allows firms 
to shed their obligations towards their creditors. Establishing subsidiaries — regarded in law as separate entitles — allows 
them to shed their obligations towards the rest of us. And while they can use human rights laws against us, we can't use 
human rights laws against them, as they were developed to constrain only the activities of states. As far as the law goes, 
corporations are now more human than we are. 
<P>
The potential consequences are momentous. Governments could find themselves unable to prevent the advertising of 
tobacco, the dumping of toxic waste or the export of arms to dictatorships. Yet in Britain the public discussion of this issue 
has so far been confined to the pages of the Stornoway Gazette. 
<P>
The creatures we invented to serve us are taking over. While we have been fretting about the power of nanotechnology 
and artificial intelligence, our domination by bodies we created but have lost the means to control has already arrived. It is 
surely inconceivable that we should grant human rights to computers. Why then should they be enjoyed by corporations? 
<P>
© Guardian Newspapers Limited 2000 

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
        table { 
          clear: both;
          width: 100% !important; 
          max-width: 100% !important; 
          margin-top: 1.5rem;
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

export default Cpmonbio;
