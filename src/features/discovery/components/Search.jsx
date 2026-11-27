const Search = ({ value, onChange }) => {
  return (
    <div className="search ">
      <div>
        <img src="./search.svg" alt="search" />
        <input
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Search through thousand of movies"
        />
      </div>
    </div>
  );
};

export default Search;
