import { useRouter } from "next/navigation";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Arahkan ke halaman pencarian lain dengan query keyword
    router.push(`/search-results?query=${keyword}`);
  };

  return (
    <form onSubmit={handleSearch} className="max-w-md mx-auto">
      <label className="relative block">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            style={{ fontSize: "1.5rem" }}
            className="text-primary"
          />
        </span>
        <input
          className="placeholder:italic placeholder:text-[#92c7cfd0] text-primary block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search..."
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </label>
    </form>
  );
};

export default Search;
