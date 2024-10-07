import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
  return (
    <div className="position-relative">
      <input
        id="wd-search-assignment"
        placeholder="Search for Assignments"
        style={{
          padding: '10px 40px',
          border: '.5px solid #ccc',
          borderRadius: '5px',

        }}
      />
      <CiSearch
        style={{
          position: 'absolute',
          top: '25%',
          left: '15px', 
          fontSize: '1.5rem',
        }}
      />
    </div>
  );
}
