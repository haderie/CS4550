import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
  return (
    <div className="position-relative">
      <input
        id="wd-search-assignment"
        placeholder="Search for Assignments"
        className="form-control ps-5 pe-2 py-2 border rounded"
      />
      <CiSearch className="position-absolute top-50 start-0 translate-middle-y ms-3 fs-4" />
    </div>
  );
}
