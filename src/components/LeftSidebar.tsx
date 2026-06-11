import rxIcon from "@/assets/images/Rx1.gif";
import sapLogoImg from "@/assets/images/SAPlogo.jpg";
import m10LogoImg from "@/assets/images/M10logo.jpg";
import face2Img from "@/assets/images/FACE2.jpg";
import achilletImg from "@/assets/images/ACHILLET.jpg";
import dragonImg from "@/assets/images/bmdragT3.gif";
import snake3Gif from "@/assets/images/SNAKE3.gif";
import bigBodthImg from "@/assets/images/BIGBODTH.jpg";
import mangetImg from "@/assets/images/mangets7.gif";

const links = [
  // { image: sapLogoImg, label: "Sacred Animals", sublabel: "Party Site", href: "#" },
  // { image: m10LogoImg, label: "Magic 10% Site", sublabel: "", href: "#" },
  { image: face2Img, label: "Excise BIG Personhood,", sublabel: "Neuter Corporate Rulers", href: "https://nikunjdz.github.io/excise-big/" },
  { image: achilletImg, label: "Reinscribe Corporate Codes,", sublabel: "Re-engineer Big DNA", href: "https://nikunjdz.github.io/reinscrive/" },
  { image: snake3Gif, label: "Remasculate Democracy,", sublabel: "The Big T and Sovereignty", href: "https://nikunjdz.github.io/remasculate/" },
  // { image: bigBodthImg, label: "Practice Big Med at Home!", sublabel: "The Big Medicine Mailing List", href: "#" },
];

interface LeftSidebarProps {
  onNavigate: (page: string) => void;
}

const LeftSidebar = ({ onNavigate }: LeftSidebarProps) => {
  return (
    <div className="w-full md:w-[180px] flex flex-col items-center gap-6 md:gap-10 p-4 text-center bg-transparent h-auto md:min-h-screen flex-shrink-0 border-b md:border-b-0 md:border-r border-gray-800">
      
      {/* Header Section */}
      <div 
        onClick={() => onNavigate("home")}
        className="flex flex-row md:flex-col items-center justify-center gap-3 md:gap-0 cursor-pointer hover:opacity-85 transition-opacity"
      >
        <img src={rxIcon} alt="Rx" className="w-12 md:w-20 h-auto mb-0 md:mb-3" />
        <p className="text-[12px] md:text-[13px] font-bold text-[#00FFCC] uppercase tracking-normal leading-tight text-left md:text-center">
          BIG MEDICINE<br />AT WORK
        </p>
      </div>

      <nav className="flex flex-row md:flex-col items-center justify-center flex-wrap gap-4 md:space-y-10 md:gap-0">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.href}
            className="flex flex-col items-center group no-underline max-w-[90px] md:max-w-none text-center"
            {...(link.href !== "#" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            <img
              src={link.image}
              alt={link.label}
              className="w-16 md:w-28 h-auto mb-2 border border-gray-700 group-hover:border-white transition-all shadow-lg"
            />
            <span className="text-[10px] md:text-[12px] font-medium text-[#00FFCC] leading-snug group-hover:text-yellow-200 px-1">
              {link.label}
              {link.sublabel && <><br /><span className="opacity-80 font-normal hidden md:inline">{link.sublabel}</span></>}
            </span>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default LeftSidebar;