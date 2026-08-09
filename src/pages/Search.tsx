import React from "react";

interface SearchProps {
  onNavigate: (page: string) => void;
}

const Search = ({ onNavigate }: SearchProps) => {
  return (
    <div className="px-4 py-8 text-foreground">
      {/* Header - exact replica of nancho.net/wgindex.html */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl text-primary font-bold mb-4 uppercase tracking-widest">
          BIG MEDICINE
        </h1>
        <h2 className="text-2xl md:text-3xl text-retro-amber font-bold uppercase tracking-wide">
          SEARCH ENGINE
        </h2>
        <p className="text-xs text-muted-foreground mt-2">
          for nancho.net and related sites
        </p>
      </div>

      {/* Main Description */}
      <div className="max-w-2xl mx-auto bg-card p-8 border-2 border-border rounded shadow-lg mb-8">
        <p className="text-base text-foreground leading-relaxed text-center mb-6">
          Search here for explanations of new words like "anthroculture" or "immunogentile"
        </p>
        <p className="text-base text-foreground leading-relaxed text-center mb-6">
          or strange ideas like "environmental hormones" or "history in your pants"
        </p>
        <p className="text-base text-foreground leading-relaxed text-center">
          or simply fresh takes on corporate bodies' history, evolution and their recent coup d'état.
        </p>
      </div>

      {/* Search Box */}
      <div className="max-w-lg mx-auto bg-card p-6 border border-border rounded mb-10 shadow-lg">
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            const query = (document.querySelector('input[type="text"]') as HTMLInputElement)?.value;
            if (query) {
              window.open(`https://www.google.com/search?q=site:nancho.net+${encodeURIComponent(query)}`, "_blank");
            }
          }}
          className="flex gap-2"
        >
          <input
            type="text"
            placeholder="Enter search terms..."
            className="flex-1 bg-background text-foreground border border-border px-4 py-3 rounded focus:outline-none focus:border-primary text-base"
          />
          <button
            type="submit"
            className="bg-primary hover:bg-red-800 text-white font-bold px-6 py-3 rounded transition-colors text-base"
          >
            Search
          </button>
        </form>
        <p className="text-xs text-muted-foreground text-center mt-3">
          Searches nancho.net using Google
        </p>
      </div>

      {/* Link to Original */}
      <div className="text-center mt-12">
        <a
          href="https://nancho.net/wgindex.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border-2 border-retro-green text-retro-green hover:bg-retro-green hover:text-black font-bold px-6 py-3 rounded transition-colors text-base"
        >
          Visit Original nancho.net Search →
        </a>
      </div>

      <div className="text-center mt-12 pt-6 border-t border-border">
        <button
          onClick={() => onNavigate("home")}
          className="text-retro-green hover:text-primary font-bold text-base underline"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default Search;
