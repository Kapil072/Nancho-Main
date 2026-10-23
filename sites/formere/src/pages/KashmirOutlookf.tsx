import { useEffect } from "react";
import { Link } from "react-router-dom";

const KashmirOutlookf = () => {
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

  const pollQuestions = [
    {
      question: "What has been the level of human rights violations by Indian security forces?",
      options: [
        { label: "Very high", value: "90%" },
        { label: "Quite high", value: "6%" },
        { label: "Not so high", value: "2%" },
        { label: "Low", value: "1%" },
        { label: "Can't say", value: "1%" }
      ]
    },
    {
      question: "Which option is favored by the Kashmiris?",
      options: [
        { label: "Independence", value: "72%" },
        { label: "Merger with Pakistan", value: "19%" },
        { label: "Pre-1953 status", value: "4%" },
        { label: "Greater autonomy in India", value: "3%" },
        { label: "Can't say", value: "2%" }
      ]
    },
    {
      question: "Do you feel that a solution to the Kashmir problem exists within the framework of the Indian Constitution?",
      options: [
        { label: "Definitely not", value: "77%" },
        { label: "Probably not", value: "7%" },
        { label: "Probably", value: "12%" },
        { label: "Definitely", value: "2%" },
        { label: "Can't say", value: "2%" }
      ]
    },
    {
      question: "Will a free and fair election now help in solving the problem?",
      options: [
        { label: "Definitely not", value: "80%" },
        { label: "Probably not", value: "6%" },
        { label: "Probably", value: "7%" },
        { label: "Definitely", value: "3%" },
        { label: "Can't say", value: "4%" }
      ]
    },
    {
      question: "Which Kashmiri leader today do you feel will be able to bring about the quickest solution?",
      options: [
        { label: "Shabir Shah", value: "37%" },
        { label: "Yasin Malik", value: "13%" },
        { label: "S.S. Geelani", value: "10%" },
        { label: "None", value: "19%" },
        { label: "Jointly", value: "9%" },
        { label: "Salauddin", value: "4%" },
        { label: "Mirwaz Farooq", value: "4%" },
        { label: "Can't say", value: "4%" }
      ]
    },
    {
      question: "Do you approve of the gradual increase in Islamic fundamentalism in Kashmir ever since militancy started peaking?",
      options: [
        { label: "Disapprove totally", value: "65%" },
        { label: "Approve somewhat", value: "19%" },
        { label: "Can't say", value: "9%" },
        { label: "Disapprove somewhat", value: "4%" },
        { label: "Approve totally", value: "2%" }
      ]
    },
    {
      question: "Has Pakistan's involvement harmed the movement?",
      options: [
        { label: "Disagree totally", value: "61%" },
        { label: "Agree somewhat", value: "26%" },
        { label: "Agree totally", value: "5%" },
        { label: "Can't say", value: "5%" },
        { label: "Disagree somewhat", value: "3%" }
      ]
    },
    {
      question: "Has the Hurriyat been successful in coordinating the activities of various militant outfits?",
      options: [
        { label: "Yes", value: "46%" },
        { label: "No", value: "46%" },
        { label: "Can't say", value: "8%" }
      ]
    },
    {
      question: "Given that some consider kidnapping un-Islamic, do you feel that it is a legitimate weapon to the militants?",
      options: [
        { label: "No", value: "59%" },
        { label: "Yes", value: "35%" },
        { label: "Can't say", value: "6%" }
      ]
    },
    {
      question: "What, in your opinion, is the single most important reason for the rise in militancy in Kashmir?",
      options: [
        { label: "(Desire for) Independence", value: "30%" },
        { label: "Unemployment", value: "23%" },
        { label: "Corrupt administration", value: "19%" },
        { label: "Denial of self-determination", value: "15%" },
        { label: "Rigged elections", value: "8%" },
        { label: "Human rights violations", value: "5%" }
      ]
    }
  ];

  return (
    <div className="fdl-page min-h-screen p-4 md:p-8">
      <div className="fdl-container">
        {/* Style configurations scoped to this page */}
        <style>{`
          a { color: #007339; text-decoration: underline; font-weight: bold; }
          a:hover { color: #1866C5; }
          h2 { font-size: 1.8em; font-weight: bold; color: #007339; margin-bottom: 0.5em; text-align: center; }
          h3 { font-size: 1.3em; font-weight: bold; color: #800000; margin-bottom: 0.75em; text-align: left; }
          p { margin-bottom: 1rem; line-height: 1.6; text-align: left; }
          strong { font-weight: bold; }
          blockquote { 
            margin-left: 0; 
            margin-right: 0; 
            padding-left: 1rem; 
            border-left: 4px solid #003E1F; 
            font-style: italic; 
            background-color: rgba(0, 62, 31, 0.05); 
            padding-top: 0.75rem; 
            padding-bottom: 0.75rem; 
            margin-bottom: 1.5rem;
          }
        `}</style>

        {/* Header Block */}
        <center className="w-full">
          <p className="text-center italic font-bold text-gray-700 max-w-2xl leading-normal mx-auto mb-4">
            Conducted in the summer of 1995, this is the first and to date only polling of what the Kashmiri people themselves think of the "Kashmir Problem"
          </p>

          <img src="/graph/fdline5.gif" className="w-full h-2 my-4" alt="divider" />
          
          <h1 className="text-3xl md:text-5xl font-black italic tracking-wide text-[#007339] uppercase my-2 text-center">
            Till Freedom Come
          </h1>
          
          <hr className="w-48 border-t-2 border-[#007339] mx-auto my-3" />
          
          <p className="text-center text-sm md:text-base font-semibold text-[#800000] leading-relaxed max-w-lg mx-auto">
            Reprinted through the courtesy of OUTLOOK Magazine, New Delhi<br />
            from their October 8, 1995 issue
          </p>

          <img src="/graph/fdline5.gif" className="w-full h-2 my-4" alt="divider" />
        </center>

        {/* Background Intro Quote */}
        <blockquote className="my-8">
          It was to fill a vital gap in current public discourse on Kashmir - the absence of the Kashmiri's viewpoint -- that Outlook commissioned MODE to conduct an opinion poll in the Valley. Researchers from Delhi recruited local staff who worked at great risk to their lives. The poll was nearly called off after they were stalked by gunmen in Anantnag. But the motivation of being the first-ever organisation to hazard such an exercise carried the team through. Altogether 504 adults (337 men, 167 women) were interviewed in Srinagar, Sopore, Baramula, Bandpora, and Anantnag during the second half of September.
        </blockquote>

        {/* Main Side-by-Side Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start my-8">
          
          {/* Left / Top Section: Poll responses */}
          <div className="lg:col-span-5 space-y-6 bg-[#FAF0D6] p-4 md:p-6 border-[6px] border-[#003E1F] rounded-sm shadow-md">
            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-wider text-center text-[#003E1F] border-b border-[#003E1F]/20 pb-2 mb-4">
              POLL RESPONSES
            </h2>

            <div className="space-y-6">
              {pollQuestions.map((q, idx) => (
                <div key={idx} className="border-b border-[#003E1F]/10 pb-4 last:border-0 last:pb-0">
                  <p className="font-bold text-[#800000] text-sm md:text-base leading-snug mb-2">
                    Q: {q.question}
                  </p>
                  <table className="w-full text-xs md:text-sm">
                    <tbody>
                      {q.options.map((opt, oIdx) => (
                        <tr key={oIdx} className="hover:bg-black/5">
                          <td className="py-1 pr-2 text-left text-gray-800">{opt.label}</td>
                          <td className="py-1 pl-2 text-right font-black text-[#007339] w-16">{opt.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          </div>

          {/* Right / Bottom Section: Article Text */}
          <div className="lg:col-span-7 bg-white/70 p-6 md:p-8 rounded-sm shadow-sm border border-gray-200">
            <center className="mb-6">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#007339] leading-tight">
                Where Errors Reign, Kalashnikovs Bloom
              </h2>
              <p className="text-center font-bold text-gray-600 mt-2">
                by Padmanand Jha in Srinagar
              </p>
              <hr className="w-32 border-t-2 border-[#007339]/20 my-4" />
            </center>

            <div className="text-base leading-relaxed text-left text-gray-950 space-y-4">
              <p>
                <strong>Seven years down the line</strong>, the battle defies an end. Since September 1988, when the security forces managed to lay their hands on the first Kalashnikov in the Valley, there has hardly been a day when Kashmir has not been in the news. Thousands of people—militants, security personnel and innocent civilians—have perished in the ongoing war of attrition between security forces and various secessionist elements. Yet, platitudes apart, there has been no attempt to make a scientific assessment of the feelings of those who matter the most—the Kashmiris themselves, the people who have carried on with the business of living in one of the worst trouble-spots on the global map.
              </p>

              <p>
                <strong>And what do they feel?</strong> After a protracted spell of severe economic deprivation brought about by the militancy, the OUTLOOK-MODE poll found that the quest for freedom remains undiminished. Contrary to popular notions, the average Kashmiri does not seem worn down by the years of hardship. An overwhelming majority of the people polled put it down on paper that they are determined to dig their heels in for a long haul.
              </p>

              <blockquote className="my-4">
                "We are willing to die for azadi, let alone live for it," said a respondent in Bandipora.
              </blockquote>

              <p>
                To be sure, 1995 has not witnessed the massive demonstrations that marked 1988, 1989 and 1990 when people shouted themselves hoarse with azadi slogans. But the poll established beyond doubt that the yearning remains as intense. A whopping 77 per cent are firm in their belief that a solution to the Kashmir problem does not lie within the framework of the Indian Constitution and a clear 72 per cent say categorically that it is independence alone which can bring peace in the violence-riven valley.
              </p>

              <p>
                Less than three dozen of the 504 adult Kashmiris who were interviewed for the poll feel a solution could be found within the Indian Union if Kashmir is granted greater autonomy. Moreover, the average Kashmiri is tired of the contrary pulls from New Delhi and Islamabad. He wants to be free from both.
              </p>

              <p>
                Nobody knows for certain whether New Delhi does have a Kashmir policy. But if holding elections in Jammu and Kashmir is an important component of the 'package', the policy-makers should know that Kashmiris are hardly enthused at the idea. As many as 80 per cent of those interviewed were categorical that even a free and fair election now will not help solve the problem. Only 10 per cent see the possibilities of the planned elections as a step towards finding a solution.
              </p>

              <p>
                And in any case, it appears almost certain that the people of Kashmir have totally given up on Farooq Abdullah. Respondents were asked to pick out the leader who would be able to bring about the quickest solution. The response was unequivocal: not a single person voted in favour of Farooq. In fact, some respondents could not contain their hostility towards the former chief minister. Said an incensed housewife in the Hazzratbal area of Srinagar; "Everyone, even Bal Thackeray, can help in finding a solution, but certainly not Farooq Abdullah."
              </p>

              <p>
                The man who emerges as the tallest Kashmiri leader today is undoubtedly Shabir Shah, favoured by as many as 37 per cent of the respondents. Yasin Malik, now the chairman of the splintered JKLF, is a weak second with only 13 per cent favouring him. Syed Shah Geelani is marginally behind with 10 per cent support.
              </p>

              <p>
                What comes as the real eye-opener, however, is that the basically progressive character of Kashmiri society has so far remained unscathed by the efforts of some militant organisations to inject a fundamentalist hue to the movement. As many as two thirds of the men and women polled say they are "totally against" the gradual increase in Islamic fundamentalism in the Valley.
              </p>

              <p>
                A specific example discussed in the survey pertained to the burqa—whether or not it should be imposed on Kashmiri women. Only 2 per cent of the people approve of the move totally, while 19 per cent coaxed themselves into giving a grudging nod.
              </p>

              <p>
                It is also obvious that Kashmiris are not blind in their support of the militants. The majority of the respondents, 59 per cent, feel kidnapping cannot be considered a legitimate weapon in the ongoing battle in the Valley. Most people who debunk the spate of abductions which have marked the movement feel such terrorist acts are un-Islamic.
              </p>

              <p>
                What is also interesting is that the All Party Hurriyat Conference, the umbrella body formed a little over two years ago to coordinate the various political and militant groups in Kashmir, has still not managed to convince the people of its efficacy. Only 46 per cent of those polled feel the Hurriyat has been successful in its self-professed task. An equal number are categorical in their assertion that the Hurriyat has failed on this front. The remaining 8 per cent were non-committed.
              </p>

              <p>
                Quite clearly, these figures cannot remain static. The developments in Kashmir are fast-paced and attitudes can yet change for better or for worse. Eight years back, not even the most diligent of Kashmir watchers could have imagined that the people of the Valley could become so alienated from New Delhi or pro-India political leaders like Farooq and his father Sheikh Abdullah.
              </p>

              <p>
                In fact, in one way or the other, most Kashmiris blame the successive regimes since the state's accession to India for the current rot in Kashmir. As many as 23 per cent recognise that the rise in unemployment was the single most important contributory factor in the rise of militancy. Another 19 per cent point an accusing finger at corrupt administration for failing to gratify basic wants and for breeding discontent. And 8 per cent put the blame on rigging in successive elections. In other words, a total of 50 per cent of the respondents feel bad governance is the culprit.
              </p>

              <p>
                Who knows what lies in store for the bleeding Valley? Perhaps even now a more humane administration can arrest the growing sense of alienation. Or is it too late for that? For now, as the next Kalashnikov rattles in the incessant war between weary troops and detached violence peddlers who have hijacked the movement, the circle is always hurtling towards completion but never seems complete.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Footer */}
        <center className="w-full mt-12 pt-6 border-t border-[#003E1F]/20">
          <img src={`${import.meta.env.BASE_URL}graph/fdline5.gif`} className="w-full h-2 my-4" alt="divider" />
          <div className="fdl-nav-gallery">
            <Link to="/"><img src={`${import.meta.env.BASE_URL}graph/btfdhome.jpg`} alt="Home" /></Link>
            <Link to="/fmission"><img src={`${import.meta.env.BASE_URL}graph/btfdmiss.jpg`} alt="Mission" /></Link>
            <Link to="/fdlorg"><img src={`${import.meta.env.BASE_URL}graph/btgfdorg.jpg`} alt="Organization" /></Link>
            <Link to="/fdlinits"><img src={`${import.meta.env.BASE_URL}graph/btfdinit.jpg`} alt="Initiatives" /></Link>
            <Link to="/fdlpaper"><img src={`${import.meta.env.BASE_URL}graph/btfdlit.jpg`} alt="Literature" /></Link>
            <Link to="/fdllinks"><img src={`${import.meta.env.BASE_URL}graph/btfdlink.jpg`} alt="Links" /></Link>
          </div>
          <img src={`${import.meta.env.BASE_URL}graph/fdline5.gif`} className="w-full h-2 my-4" alt="divider" />
          
          <div className="mt-8 text-center text-xs md:text-sm text-[#007339]">
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
        </center>
      </div>
    </div>
  );
};

export default KashmirOutlookf;
