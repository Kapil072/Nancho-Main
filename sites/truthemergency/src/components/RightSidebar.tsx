import { Link } from "react-router-dom";

const summitLinks = [
  { label: "Vital Background", to: "/vital-background/" },
  { label: "Is this gathering for you?", to: "/is-this-gathering-for-you/" },
  { label: "Participants", to: "/participants/" },
  { label: "Why now?", to: "/why-now/" },
  { label: "Schedule/Structure Outline", to: "/" },
  { label: "Program Components", to: "/program-components/" },
  { label: "Maps & Logistics", to: "/maps-and-logistics/" },
  { label: "Link Banners", to: "/link-banners/" },
  { label: "Media Policy", to: "/media-policy/" },
  { label: "The Satya Sam Award", to: "/satya-sam/" },
  { label: "The Plot to Seize the White House", to: "/the-plot-to-seize-the-white-house/" },
  { label: "Treachery Without Consequence", to: "/treachery-without-consequence/" },
  { label: "Critical Mass & Red Pill Politics", to: "/" },
];

const articleLinks = [
  { label: "9/11 AND THE MAINSTREAM PRESS", href: "https://truthemergency.us/911-and-the-mainstream-press/" },
  { label: "American Tears", href: "https://truthemergency.us/american-tears/" },
  { label: "Anti-Iranian Agitprop", href: "https://truthemergency.us/anti-iranian-agitprop/" },
  { label: "Cheney's Law", href: "https://truthemergency.us/cheneys-law/" },
  { label: "Citizen Primer on Corporate Criminality", href: "https://truthemergency.us/citizen-primer-on-corporate-criminality/" },
  { label: "Coup Spoils: Big Pharma grabs med ed", href: "https://truthemergency.us/coup-spoils-big-pharma-grabs-med-ed/" },
  { label: "Gary Hart gently warns of staged war provocations", href: "https://truthemergency.us/gary-hart-gently-warns-of-staged-war-provocations/" },
  { label: "Hijacking the US Economy for generations to come", href: "https://truthemergency.us/hijacking-the-us-economy-for-generations-to-come/" },
  { label: "House passes HR 1955: Time to start watching what you think", href: "https://truthemergency.us/house-passes-hr-1955-time-to-start-watching-what-you-think/" },
  { label: "How to Destroy the Constitution", href: "https://truthemergency.us/how-to-destroy-the-constitution/" },
  { label: "Iraq and the Military-Industrial Complex", href: "https://truthemergency.us/iraq-and-the-military-industrial-complex/" },
  { label: "Is a Presidential Coup Under Way?", href: "https://truthemergency.us/is-a-presidential-coup-under-way/" },
  { label: "Moyers on Coup Politics", href: "https://truthemergency.us/moyers-on-coup-politics/" },
  { label: "Naomi Wolf on Coup Clues", href: "https://truthemergency.us/naomi-wolf-on-coup-clues/" },
  { label: "NLG Unanimously Calls for Impeachment", href: "https://truthemergency.us/nlg-unanimously-calls-for-impeachment/" },
  { label: "Nobel Economist on Coup Pillage & Aftermath", href: "https://truthemergency.us/nobel-economist-on-coup-pillage-aftermath/" },
  { label: "NSA Pushing warrantless wiretaps 6 months before 9/11", href: "https://truthemergency.us/nsa-pushing-warrantless-wiretaps-6-months-before-911/" },
  { label: "Of Chaos, Quagmires and Corporate Silver Linings", href: "https://truthemergency.us/of-chaos-quagmires-and-corporate-silver-linings/" },
  { label: "On Congressional Fear of Martial Law", href: "https://truthemergency.us/on-congressional-fear-of-martial-law/" },
  { label: "On Criminal Ascendence & Constitutional Decline", href: "https://truthemergency.us/on-criminal-ascendence-constitutional-decline/" },
  { label: "On Pak's Overt Coup and DC's Quiet One", href: "https://truthemergency.us/on-paks-overt-coup-and-dcs-quiet-one/" },
  { label: "Paul Craig Roberts views our crisis from the right", href: "https://truthemergency.us/paul-craig-roberts-views-our-crisis-from-the-right/" },
  { label: "Rule of Law Under Attack", href: "https://truthemergency.us/rule-of-law-under-attack/" },
  { label: "Shock Doctrine", href: "https://truthemergency.us/shock-doctrine/" },
  { label: "When pols fail: late inning aid from lawyers, spooks and brass", href: "https://truthemergency.us/when-pols-fail/" },
];

const SidebarSection = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="mb-4">
    <h3 className="bg-blue-600 text-white px-2 py-1.5 font-bold text-center text-xs uppercase tracking-wider">
      {title}
    </h3>
    <ul className="mt-1 space-y-0.5 px-1">{children}</ul>
  </div>
);

const RightSidebar = () => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <aside className="w-full flex flex-col items-stretch">
      {/* Search bar */}
      <div className="mb-4 w-full">
        <input
          type="text"
          placeholder="Search..."
          className="w-full border border-gray-300 px-2 py-1.5 text-xs bg-white focus:outline-none focus:ring-1 focus:ring-blue-300"
        />
      </div>

      {/* Recommended References */}
      <div className="mb-4 w-full">
        <h3 className="text-xs font-bold text-gray-700 uppercase border-b border-gray-300 w-full text-center pb-1 mb-2">
          Recommended References
        </h3>
        <div className="flex flex-col gap-2 items-center w-full">
          <Link to="/recommended-books/" className="block w-full text-center">
            <img
              src={`${baseUrl}images/site/SCsitebutbooks.gif`}
              alt="US Truth Emergency References – BOOKS"
              className="w-20 h-auto mx-auto"
            />
          </Link>
          <Link to="/recommended-films/" className="block w-full text-center">
            <img
              src={`${baseUrl}images/site/SCsitebutfilms.gif`}
              alt="US Truth Emergency References – FILMS"
              className="w-20 h-auto mx-auto"
            />
          </Link>
          <Link to="/online-resources/" className="block w-full text-center">
            <img
              src={`${baseUrl}images/site/SCsitebutonline.gif`}
              alt="US Truth Emergency References – ONLINE"
              className="w-20 h-auto mx-auto"
            />
          </Link>
        </div>
      </div>

      {/* Partner logos */}
      <div className="mb-4 w-full flex flex-col items-center gap-1">
        <a href="https://911truth.org" target="_blank" rel="noopener noreferrer" className="block">
          <img
            src={`${baseUrl}imagesA/911TruthCrop.jpg`}
            alt="911truth.org"
            className="w-16 h-auto"
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
        </a>
        <a href="https://projectcensored.org" target="_blank" rel="noopener noreferrer" className="block">
          <img
            src={`${baseUrl}imagesA/projectcensorednotext1.jpg`}
            alt="Project Censored"
            className="w-16 h-auto"
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
        </a>
        <a href="https://bethemedia.org" target="_blank" rel="noopener noreferrer" className="block">
          <img
            src={`${baseUrl}imagesA/BeTheMediaRotationWithText.gif`}
            alt="Be The Media"
            className="w-16 h-auto"
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
        </a>
      </div>

      {/* Summit Details nav section */}
      <div className="w-full">
        <SidebarSection title="Summit Details">
          {summitLinks.map((link, i) => (
            <li key={i} className="text-[11px]">
              <Link
                to={link.to}
                className="text-blue-700 hover:underline block px-1 py-0.5"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </SidebarSection>

        {/* Articles section */}
        <SidebarSection title="Articles">
          {articleLinks.map((link, i) => (
            <li key={i} className="text-[11px]">
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline block px-1 py-0.5"
              >
                {link.label}
              </a>
            </li>
          ))}
        </SidebarSection>
      </div>
    </aside>
  );
};

export default RightSidebar;
