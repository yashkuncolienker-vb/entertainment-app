import './Search.css';
const Search = ({ setSearchText }) => {
  return (
    <div className="width-100 search-container">
      <input
        onChange={(e) => setSearchText(e.target.value)}
        className="search-bar"
        type="text"
      />
    </div>
  );
};

export default Search;
