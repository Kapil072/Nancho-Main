import { Link } from "react-router-dom";

const committeeMembers = [
  { name: "Gabriel Day", location: "Santa Cruz, CA" },
  { name: "Bonnie Faulkner", location: "Glen Ellen, CA" },
  { name: "Mickey Huff", location: "Berkeley, CA" },
  { name: "David Kubiak", location: "Half Moon Bay, CA" },
  { name: "David Mathison", location: "San Francisco" },
  { name: "Janice Matthews", location: "Kansas City, MO" },
  { name: "Peter Phillips", location: "Sonoma, CA" },
  { name: "Ken Reiner", location: "Long Beach, CA" },
  { name: "Bryan Sacks", location: "Philadelphia, PA" },
];

const LeftSidebar = () => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <aside className="w-full flex flex-col bg-white">
      {/* Sponsored By Section - with logos */}
      <div className="mb-8">
        <h3 className="text-xs font-bold text-white bg-blue-600 px-2 py-1.5 uppercase tracking-wider text-center">
          Sponsored By:
        </h3>
        <div className="mt-4 flex flex-col items-center gap-4 px-2">
          {/* Project Censored Logo */}
          <a href="https://projectcensored.org" target="_blank" rel="noopener noreferrer" className="block w-full text-center">
            <img
              src={`${baseUrl}imagesA/projectcensorednotext1.jpg`}
              alt="Project Censored"
              className="h-12 w-auto mx-auto"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
          </a>
          {/* 911 Truth Logo */}
          <a href="https://911truth.org" target="_blank" rel="noopener noreferrer" className="block w-full text-center">
            <img
              src={`${baseUrl}imagesA/911TruthCrop.jpg`}
              alt="911Truth.Org"
              className="h-12 w-auto mx-auto"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
          </a>
          {/* Be the Media Logo */}
          <a href="https://bethemedia.org" target="_blank" rel="noopener noreferrer" className="block w-full text-center">
            <img
              src={`${baseUrl}imagesA/BeTheMediaRotationWithText.gif`}
              alt="Be The Media"
              className="h-12 w-auto mx-auto"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
          </a>
        </div>
      </div>

      {/* Organizing Committee */}
      <div className="mb-6">
        <h3 className="text-xs font-bold text-white bg-blue-600 px-2 py-1.5 uppercase tracking-wider text-center">
          Organizing Committee
        </h3>
        <div className="mt-3 space-y-2 text-xs px-2">
          {committeeMembers.map((member, idx) => (
            <div key={idx} className="text-center">
              <p className="font-semibold text-sm">{member.name}</p>
              <p className="text-gray-600 text-[11px]">{member.location}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <a
            href="#"
            className="text-xs text-blue-600 hover:underline font-semibold"
          >
            Download conference flier
          </a>
        </div>
      </div>

      {/* Recommended References - with Images and Links */}
      <div className="mb-6">
        <h3 className="text-xs font-bold text-white bg-blue-600 px-2 py-1.5 uppercase tracking-wider text-center">
          Recommended References
        </h3>
        <div className="mt-4 flex flex-col items-center gap-6 px-2">
          {/* Books */}
          <Link to="/recommended-books/" className="block w-full text-center">
            <img
              src={`${baseUrl}images/truth_books.png`}
              alt="US Truth Emergency References – BOOKS"
              className="h-20 w-auto mx-auto mb-2"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
            <p className="text-xs text-blue-600 hover:underline font-semibold">
              US Truth Emergency References: Books
            </p>
          </Link>
          
          {/* Films */}
          <Link to="/recommended-films/" className="block w-full text-center">
            <img
              src={`${baseUrl}images/truth_films.png`}
              alt="US Truth Emergency References – FILMS"
              className="h-20 w-auto mx-auto mb-2"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
            <p className="text-xs text-blue-600 hover:underline font-semibold">
              US Truth Emergency References: Films
            </p>
          </Link>
          
          {/* Online */}
          <Link to="/online-resources/" className="block w-full text-center">
            <img
              src={`${baseUrl}images/truth_online.png`}
              alt="US Truth Emergency References – ONLINE"
              className="h-20 w-auto mx-auto mb-2"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
            <p className="text-xs text-blue-600 hover:underline font-semibold">
              US Truth Emergency References: Online
            </p>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default LeftSidebar;
