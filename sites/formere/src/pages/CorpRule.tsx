import { Link } from "react-router-dom";
import { useEffect } from "react";
import { HeaderBlock } from "./Index";

const CorpRule = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#FAF0D6";
    document.body.style.backgroundImage = "url('/barks/slate3.gif')";
    document.body.style.color = "#620000";
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.backgroundImage = "";
      document.body.style.color = "";
    }
  }, []);

  return (
    <div className="fdl-page min-h-screen p-4 md:p-8">
      <div className="fdl-container">
        <style>{`
          a { color: #FF4444; text-decoration: underline; font-weight: bold; }
          a:hover { color: #FF0000; }
          h2 { font-size: 1.5em; font-weight: bold; margin-bottom: 0.5em; text-align: center; color: #003E1F; }
          b { font-weight: bold; }
          i, em { font-style: italic; }
          p { margin-bottom: 1em; text-align: left; }
        `}</style>
        
        {/* The exact photo and header placed on both home and link page as requested */}
        <HeaderBlock />

        <div className="mt-8 px-4 text-left text-base md:text-lg">
        <h2>Eleven Inherent Rules of Corporate Behavior<br/> <i>by Jerry Mander</i></h2>
        From <em>Earth Island Journal</em>.<br/><br/> <hr className="border-t-2 border-current my-8"/><br/>

        <i>The following list is an attempt to articulate the obligatory
        rules by which corporations operate. Some of the rules overlap,
        but taken together they help reveal why corporations behave as
        they do and how they have come to dominate their environment and
        the human beings within it.</i> <p></p>

        <p>1. <b>The Profit Imperative</b>: Profit is the ultimate measure of all
        corporate decisions. It takes precedence over community well-
        being, worker health, public health, peace, environmental preservation
        or national security. Corporations will even find ways of trading
        with national "enemies" -- Libya, Iran, the former Soviet
        Union, Cuba -- when public policy abhors it. The profit imperative
        and the growth imperative are the most fundamental corporate drives;
        together they represent the corporation's instinct to "live."</p>

        <p>2. <b>The Growth Imperative</b>: Corporations live or die by whether
        they can sustain growth. On this depends relationships to investors,
        to the stock market, to banks and to public perception. The growth
        imperative also fuels the corporate desire to find and develop
        scarce resources in obscure parts of the world.</p>

        <p>This effect is now clearly visible, as the world's few remaining
        pristine places are sacrificed to corporate production. The peoples
        who inhabit these resource-rich regions are similarly pressured
        to give up their traditional ways and climb on the wheel of productionconsumption.
        Corporate planners consciously attempt to bring "less developed
        societies into the modern world" to create infrastructures
        for development, as well as new workers and new consumers. Corporations
        claim that they do this for altruistic reasons -- to raise the
        living standard -- but corporations have no altruism.</p>

        <p>Theoretically, privately held corporations -- those owned by individuals
        or families -- do not have the imperative to expand. In practice,
        however, the behavior is the same. Such privately held giants
        as Bechtel Corporation have shown no propensity to moderate growth.</p>

        <p>3. <b>Competition and Aggression</b>: Corporations place every person
        in management in fierce competition with each other. Anyone interested
        in a corporate career must hone his or her ability to seize the
        moment. This applies to gaining an edge over another company or
        over a colleague within the company. As an employee, you are expected
        to be part of the "team," but you also must be ready
        to climb over your own colleagues.</p>

        <p>Corporate ideology holds that competition improves worker incentive
        and corporate performances and therefore benefits society. Our
        society has accepted this premise utterly. Unfortunately, however,
        it also surfaces in personal relationships. Living by standards
        of competition and aggression on the job, human beings have few
        avenues to express softer, more personal feelings. (In politics,
        non-aggressive behavior is interpreted as weakness.)</p>

        <p>4. <b>Amorality</b>: Not being human, corporations do not have morals
        or altruistic goals. So decisions that may be antithetical to
        community goals or environmental health are made without suffering
        misgivings. In fact, corporate executives praise "non emotionality"
        as a basis for "objective" decision-making.</p>

        <p>Corporations, however, seek to hide their amorality, and attempt
        to act as if they were altruistic. Lately, there has been a concerted
        effort by American industry to seem concerned with environmental
        cleanups, community arts, or drug programs. Corporate efforts
        that seem altruistic are really public relations ploys or directly
        self-serving projects.</p>

        <p>There has recently been a spurt of corporate advertising about
        how corporations work to clean the environment. A company that
        installs offshore oil rigs will run ads about how fish are thriving
        under the rigs. Logging companies known for their clearcutting
        practices will run millions of dollars' worth of ads about their
        "tree farms."</p>

        <p>It is a fair rule of thumb that corporations tend to advertise
        the very qualities they do not have in order to allay negative
        public perceptions. When corporations say "we care,"
        it is almost always in response to the widespread perception that
        they do not have feelings or morals.</p>

        <p>If the benefits do not accrue, the altruistic pose is dropped.
        When Exxon realized that its cleanup of the Alaskan shores was
        not easing the public rage about the oil spill, it simply dropped
        all pretense of altruism and ceased working.</p>

        <p>5. <b>Hierarchy</b>: Corporate laws require that corporations be structured
        into classes of superiors and subordinated within a centralized
        pyramidal structure: chairman, directors, Chief Executive officer,
        vice presidents, division managers, and so on. The efficiency
        of this hierarchical form (which also characterizes the military,
        the government and most institutions in our society) is rarely
        questioned.</p>

        <p>The effect on society from all organizations adopting hierarchical
        form is to make it seem natural that we have all been placed within
        a national pecking order. Some jobs are better than others, some
        lifestyles are better than others, some neighborhoods, some races,
        some kinds of knowledge. Men over women. Westerners over non Westerners.
        Humans over nature.</p>

        <p>That effective, non-hierarchical modes of organization exist on
        the planet, and have been successful for millennia, is barely
        known by most Americans.</p>

        <p>6. <b>Quantification, Linearity and Segmentation</b>: Corporations require
        that subjective information be translated into objective form,
        i.e., numbers. The subjective or spiritual aspects of forests,
        for example, cannot be translated, and so do not enter corporate
        equations. Forests are evaluated only as "board feet."</p>

        <p>When corporations are asked to clean up their smokestack emissions,
        they lobby to relax the new standards in order to contain costs.
        The result is that a predictable number of people are expected
        to become sick and die.</p>

        <p>The operative corporate standard is not "as safe as humanly
        possible," but rather, "as safe as possible commensurate
        with maintaining acceptable profit."</p>

        <p>7. <b>Dehumanization</b>: In the great majority of corporations, employees
        are viewed as ciphers, as cogs in the wheel, replaceable by others
        or by machines.</p>

        <p>As for management employees, not subject to quite the same indignities,
        they nonetheless must practice a style of decision making that
        "does not let feelings get in the way." This applies
        as much to firing employees as it does to dealing with the consequences
        of corporate behavior in the environment or the community.</p>

        <p>8. <b>Exploitation</b>: All corporate profit is obtained by a simple
        formula: Profit equals the difference between the amount paid
        to an employee and the economic value of the employee's output,
        and/or the difference between the amount paid for raw materials
        used in production (including costs of processing), and the ultimate
        sales price of the processed raw materials. Karl Marx was right:
        a worker is not compensated for full value of his or her labor;
        neither is the raw-material supplier. The owners of capital skim
        off part of the value as profit. Profit is based on underpayment.</p>

        <p>Capitalists argue that this is a fair deal, since both workers
        and the people who mine or farm the resources (usually in Third
        World environments) get paid. But this arrangement is inherently
        imbalanced. The owner of the capital -- the corporation or the
        bank -- always obtains additional benefit. While the worker makes
        a wage, the owner of capital gets the benefit of the worker's
        labor, plus the surplus profit the worker produces, which is then
        reinvested to produce yet more surplus.</p>

        <p>9. <b>Ephemerality</b>: Corporations exist beyond time and space: they
        are legal creations that only exist on paper. They do not die
        a natural death; they outlive their own creators. They have no
        commitment to locale, employees or neighbors. Having no morality,
        no commitment to place and no physical nature (a factory, while
        being a physical entity, is not the corporation), a corporation
        can relocate all of its operations at the first sign of inconvenience
        -- demanding employees, high taxes and restrictive environmental
        laws. The traditional ideal of community engagement is antithetical
        to corporate behavior.</p>

        <p>10. <b>Opposition to Nature</b>: Though individuals who work for corporations
        may personally love nature, corporations themselves, and corporate
        societies, are intrinsically committed to intervening in, altering
        and transforming nature. For corporations engaged in commodity
        manufacturing, profit comes from transmogrifying raw materials
        into saleable forms. Metals from the ground are converted into
        cars. Trees are converted into boards, houses, furniture and paper
        products. Oil is converted into energy. In all such energy, a
        piece of nature is taken from where it belongs and processed into
        a new form. All manufacturing depends upon intervention and reorganization
        of nature. After natural resources are used up in one part of
        the globe, the corporation moves on to another part.</p>

        <p>This transformation of nature occurs in all societies where manufacturing
        takes place. But in capitalist, corporate societies, the process
        is accelerated because capitalist societies and corporations must
        grow by extracting resources from nature and reprocessing them
        at an ever-quickening pace. Meanwhile, the consumption end of
        the cycle is also accelerated by corporations that have an interest
        in convincing people that commodities bring material satisfaction.
        Inner satisfaction, self-sufficiency, contentment in nature or
        a lack of a desire to acquire wealth are subversive to corporate
        goals.</p>

        <p>Banks finance the conversion of nature; insurance companies help
        reduce the financial risks involved. Of course, on a finite planet,
        the process cannot continue indefinitely.</p>

        <p>11. <b>Homogenization</b>: American rhetoric claims that commodity society
        delivers greater choice and diversity than other societies. "Choice"
        in this context means product choice in the marketplace: many
        brands to choose from and diverse features on otherwise identical
        products. Actually, corporations have a stake in all of us living
        our lives in a similar manner, achieving our pleasures from things
        that we buy in a world where each family lives isolated in a single
        family home and has the same machines as every other family on
        the block. Recently, the "singles" phenomenon has proved
        even more productive than the nuclear family, since each person
        duplicates the consumption patterns of every other person.</p>

        <p>Lifestyles and economic systems that emphasize sharing commodities
        and work, that do not encourage commodity accumulation or that
        celebrate non-material values, are not good for business. People
        living collectively, sharing such hard goods as washing machines,
        cars and appliances (or worse, getting along without them) are
        outrageous to corporate commodity society.</p>

        <p>Native societies -- which celebrate an utterly non-material relationship
        to life, the planet and the spirit -- are regarded as backward,
        inferior and unenlightened. We are told that they envy the choices
        we have. To the degree these societies continue to exist, they
        represent a threat to the homogenization of worldwide markets
        and culture. Corporate society works hard to retrain such people
        in attitudes and values appropriate to corporate goals.</p>

        <p>In the undeveloped parts of the world, where corporations are
        just arriving, the ideological retraining process is just getting
        under way. Satellite communications technology, which brings Western
        television and advertising, is combined with a technical infrastructure
        to speed up the pace of development. Most of this activity is
        funded by the World Bank and the International Monetary Fund,
        as well as agencies such as US Agency for International Development,
        the Inter-American Bank and the Asian-American Bank, all of which
        serve multinational corporate enterprise.</p>

        <p>The ultimate goal of corporate multinationals was expressed in
        a revealing quote by the president of Nabisco Corporation "One
        world of homogeneous consumption... [I am] looking forward to
        the day when Arabs and Americans, Latinos and Scandinavians, will
        be munching Ritz crackers as enthusiastically as they already
        drink Coke or brush their teeth with Colgate."</p>

        <p>In the book, Trilateralism, editor Holly Sklar wrote: "Corporations
        not only advertise products, they promote lifestyles rooted in
        consumption, patterned largely after the United States.... [They]
        look forward to a post-national age in which [Western] social,
        economic and political values are transformed into universal values...
        a world economy in which all national economies beat to the rhythm
        or transnational corporate capitalism.... The Western way is the
        good way; national culture is inferior."</p>

        <h2>Form Is Content</h2>

        <p>Corporations are inherently bold, aggressive and competitive.
        Though they exist in a society that claims to operate by moral
        principles, they are structurally amoral. It is inevitable that
        they will dehumanize people who work for them and dehumanize the
        overall society as well. They are disloyal to workers, including
        their own managers. Corporations can be disloyal to the communities
        they may have been part of for many years. Corporations do not
        care about nations; they live beyond boundaries. They are intrinsically
        committed to destroying nature. And they have an inexorable, unabatable,
        voracious need to grow and to expand. In dominating other cultures,
        in digging up the Earth, corporations blindly follow the codes
        that have been built into them as if they were genes.</p>

        <p>We must abandon the idea that corporations can reform themselves.
        To ask corporate executives to behave in a morally defensible
        manner is absurd. Corporations, and the people within them, are
        following a system of logic that leads inexorably toward dominant
        behaviors. To ask corporations to behave otherwise is like asking
        an army to adopt pacifism.</p>

        <hr style={{ width: '95%', borderTopWidth: '3px' }} className="border-current mx-auto my-8"/>
        <i>Excerpted from </i><u>In The Absence of the Sacred: The Failure of Technology and the Survival of the Indian Nations</u>.<i> (Sierra Club Books, 730 Polk St, San Francisco, CA 94109)</i>

        <p></p><center>{"{ { "}Order online from <a href="http://www.amazon.com/">Amazon.com</a>{" } }"}</center><p></p>

        <em>HTML page courtesy of </em><a href="http://www.igc.apc.org/">Earth Island Journal </a>,  <i>Winter 94, Vol. 10 Issue 1, p30+ <hr className="my-4"/>
        <center>Copyright 1995, Earth Island Journal. <br/>Articles may be freely reprinted with prior permission. <br/>Please credit </center></i><b>Earth Island Journal</b><i> and send samples.</i>
        <hr style={{ width: '95%', borderTopWidth: '3px' }} className="border-current mx-auto my-8"/>
        <p></p>
        <hr style={{ width: '100px', borderTopWidth: '3px' }} className="border-current mx-auto my-4"/>
        <center>
        <Link to="/#bbpathology">Back to<br/><strong>Big Bodies</strong></Link></center>
        <hr style={{ width: '100px', borderTopWidth: '3px' }} className="border-current mx-auto my-4"/>
      </div>
      </div>
    </div>
  );
};

export default CorpRule;
