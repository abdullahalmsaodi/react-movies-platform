import Search from "./Search.jsx";

const Hero = ({ searchTerm, onSearchTermChange }) => {
  return (
    <>
      <img src="./hero.png" alt="Hero Banner" />
      <h1>
        Find <span className="text-gradient">Movies</span> You'll Love Without
        the Hassle
        <Search value={searchTerm} onChange={onSearchTermChange} />
      </h1>
    </>
  );
};

export default Hero;
