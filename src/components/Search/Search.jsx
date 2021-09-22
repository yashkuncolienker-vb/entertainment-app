import './Search.css';
const Search = ({ setSearchText }) => {
  return (
    <div className="width-100">
      <div className="search-container">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          className="search-bar"
          type="text"
        />
      </div>
    </div>
  );
};

export default Search;
