import { LuSearch } from "react-icons/lu";

export default function Search({ city, setCity }) {
  return (
    <form className="search">
      <input
        type="text"
        placeholder="Enter the city..."
        className="search-input"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <LuSearch className="search-icon" />
    </form>
  );
}
