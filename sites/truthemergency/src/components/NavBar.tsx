import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "HOME", to: "/" },
  { label: "COUP NEWS", to: "/coup-news/" },
  { label: "RESOURCES", to: "/resources/" },
  { label: "VIDEO INSPIRATIONS", to: "/video-inspirations/" },
  { label: "CORPORATISM WIRE", to: "/corporatism-wire/" },
  { label: "PLOT TO SEIZE THE WHITE HOUSE", to: "/the-plot-to-seize-the-white-house/" },
  { label: "ONLINE RESOURCES", to: "/online-resources/" },
  { label: "LINKS", to: "/links/" },
];

const NavBar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="w-full bg-blue-400 border-y border-blue-300">
      <ul className="flex flex-wrap justify-center gap-0">
        {navItems.map((item, i) => {
          const isActive = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
          return (
            <li key={i}>
              <Link
                to={item.to}
                className={`block px-4 py-2 text-xs font-bold transition-colors ${
                  isActive ? "bg-blue-600 text-white" : "text-gray-800 hover:bg-blue-500 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
