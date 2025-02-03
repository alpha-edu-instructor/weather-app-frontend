import { LuSearch } from "react-icons/lu";

export default function Search({}) {
  return (
    <form className="search">
      <input
        type="text"
        placeholder="Enter the city..."
        className="search-input"
      />
      <LuSearch className="search-icon" />
    </form>
  );
}
