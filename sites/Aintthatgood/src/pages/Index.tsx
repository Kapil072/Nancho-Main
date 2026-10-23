const Index = () => {
  return (
    <div className="min-h-screen bg-[#f5f5dc] text-[#000055] font-serif px-4 py-10">
      <div className="max-w-3xl mx-auto space-y-10">
        <header className="text-center space-y-4">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Ain't that Good News!
          </h1>
          <p className="text-lg md:text-2xl font-bold italic text-red-900">
            Corporate Personhood Radio Show Archive
          </p>
          <p className="text-base md:text-lg">
            WBAI 99.5 FM (Pacifica, New York)
          </p>
          <div className="flex justify-center">
            <img
              src={`${import.meta.env.BASE_URL}SAPmiclogo.png`}
              alt="WBAI Microphone"
              className="w-24 h-auto"
              loading="lazy"
            />
          </div>
        </header>

        <section className="bg-white/40 border-4 border-double border-[#000055]/20 p-6 md:p-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 uppercase tracking-tight">
            Tracks
          </h2>
          <ol className="list-decimal pl-6 space-y-4 text-base md:text-lg font-bold">
            <li>
              <a href="/Nancho-Main/excise-big/tracks/CP1intro.mp3" target="_blank" rel="noopener noreferrer" className="underline text-red-900 hover:text-red-700">
                Introduction to Corporate Personhood (CP) Issue
              </a>
            </li>
            <li>
              <a href="/Nancho-Main/excise-big/tracks/CP2danaher.mp3" target="_blank" rel="noopener noreferrer" className="underline text-red-900 hover:text-red-700">
                Kevin Danaher on Insanity of CP
              </a>
            </li>
            <li>
              <a href="/Nancho-Main/excise-big/tracks/CP3hartmannkorten.mp3" target="_blank" rel="noopener noreferrer" className="underline text-red-900 hover:text-red-700">
                Thom Hartmann and David Korten on History of CP
              </a>
            </li>
            <li>
              <a href="/Nancho-Main/excise-big/tracks/CP4SFmimetroop.mp3" target="_blank" rel="noopener noreferrer" className="underline text-red-900 hover:text-red-700">
                San Francisco Mime Troop Song on History of CP
              </a>
            </li>
            <li>
              <a href="/Nancho-Main/excise-big/tracks/CP5edwards.mp3" target="_blank" rel="noopener noreferrer" className="underline text-red-900 hover:text-red-700">
                Jan Edwards on Fight against CP in Arcata, CA
              </a>
            </li>
            <li>
              <a href="/Nancho-Main/excise-big/tracks/CP6AZgreensLane.mp3" target="_blank" rel="noopener noreferrer" className="underline text-red-900 hover:text-red-700">
                Bryan Lane on Arizona Green's plebiscite movement against CP
              </a>
            </li>
            <li>
              <a href="/Nancho-Main/excise-big/tracks/CP7finale.mp3" target="_blank" rel="noopener noreferrer" className="underline text-red-900 hover:text-red-700">
                Finale with Danaher and San Francisco Mime Troop
              </a>
            </li>
          </ol>
        </section>

        <footer className="text-center space-y-3">
          <a href="/Nancho-Main/excise-big/corperson/" target="_blank" rel="noopener noreferrer" className="underline text-red-900 font-bold">
            Back to Corporate Personhood
          </a>
          <div>
            <a href="/Nancho-Main/" target="_blank" rel="noopener noreferrer" className="underline">
              The Way Home
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
