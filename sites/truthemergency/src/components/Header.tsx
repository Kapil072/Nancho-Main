const Header = () => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <header className="w-full bg-gray-300 py-3 px-4 flex justify-center items-center">
      <img
        src={`${baseUrl}images/logos/scmediaconbanner300.gif`}
        alt="Truth Emergency - Publicizing Truths with Consequence"
        className="h-auto w-full max-w-lg object-contain"
      />
    </header>
  );
};

export default Header;
