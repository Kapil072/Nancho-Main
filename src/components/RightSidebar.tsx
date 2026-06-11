import archivesSignImg from "@/assets/images/arcswing.gif";
import cop10Img from "@/assets/images/cop10.jpg";
import truthImg from "@/assets/images/satyasamT.jpg";
import wbaiImg from "@/assets/images/SAPmiclogo.png";
import chautauquaImg from "@/assets/images/NO$FLAGT.jpg";
import karmaImg from "@/assets/images/JITTOKU1.jpg";
import vprezImg from "@/assets/images/swinglib.gif";
import memeImg from "@/assets/images/ACHILLET.jpg";
import fdlapImg from "@/assets/images/FdlogoS.gif";

const archives = [
  // { image: cop10Img, label: "COP10 Conference", sublabel: "Archive", href: "#" },
  { image: truthImg, label: "Truth Emergency", sublabel: "Archive", href: "https://nikunjdz.github.io/truthemergency/" },
  { image: wbaiImg, label: "Ain't that Good News", sublabel: "WBAI Radio Show Archive", href: "https://nikunjdz.github.io/Aintthatgood/" },
  { image: chautauquaImg, label: "New Chautauqua", sublabel: "Archive", href: "https://nikunjdz.github.io/newchau-/newchau/arc/newindex.html" },
  { image: karmaImg, label: "Index for Original", sublabel: "Big Karma Site", href: "https://nikunjdz.github.io/indexfororg/" },
  { image: vprezImg, label: "Big Med 2000", sublabel: "V-Prez Campaign", href: "https://nikunjdz.github.io/bigmed2000/" },
  { image: memeImg, label: "Meme Works", sublabel: "", href: "https://nikunjdz.github.io/memework/" },
  { image: fdlapImg, label: "Forum of Democratic Leaders", sublabel: "of the Asia-Pacific", href: "https://nikunjdz.github.io/formere/" },
];

interface RightSidebarProps {
  onNavigate: (page: string) => void;
}

const RightSidebar = ({ onNavigate }: RightSidebarProps) => {
  return (
    <div className="w-full md:w-[180px] flex flex-col items-center gap-6 md:gap-10 p-4 text-center bg-transparent h-auto md:min-h-screen flex-shrink-0 border-t md:border-t-0 md:border-l border-gray-800">
      
      {/* Header Section */}
      <div 
        onClick={() => onNavigate("home")}
        className="flex flex-row md:flex-col items-center justify-center gap-3 md:gap-0 cursor-pointer hover:opacity-85 transition-opacity"
      >
        <img src={archivesSignImg} alt="Archives" className="w-12 md:w-20 h-auto mb-0 md:mb-3" />
        <p className="text-[12px] md:text-[13px] font-bold text-white uppercase tracking-widest leading-tight text-left md:text-center">
          OLD SITE<br />ARCHIVES
        </p>
      </div>

      {/* Navigation Section */}
      <nav className="flex flex-row md:flex-col items-center justify-center flex-wrap gap-4 md:space-y-10 md:gap-0">
        {archives.map((link, i) => (
          <a
            key={i}
            href={link.href}
            className="flex flex-col items-center group no-underline max-w-[80px] md:max-w-none text-center"
            {...(link.href !== "#" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            <img
              src={link.image}
              alt={link.label}
              className="w-12 md:w-28 h-auto mb-2 border border-gray-700 group-hover:border-white transition-all shadow-lg"
            />
            <span className="text-[9px] md:text-[12px] font-medium text-white leading-snug group-hover:text-yellow-200 px-1 line-clamp-2 md:line-clamp-none">
              {link.label}
              {link.sublabel && <><br /><span className="opacity-80 font-normal hidden md:inline">{link.sublabel}</span></>}
            </span>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default RightSidebar;