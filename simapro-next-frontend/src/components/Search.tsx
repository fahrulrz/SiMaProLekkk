
// import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// interface SearchResult {
//   id: number;
//   name: string;
// }

const Search = () => {

    // menggunakan api
//   const [query, setQuery] = useState<string>("");
//   const [results, setResults] = useState<SearchResult[]>([]);
//   const [loading, setLoading] = useState<boolean>(false);

//   const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
//     const value = event.target.value;
//     setQuery(value);

//     if (value) {
//       setLoading(true);
//       try {
//         // Fetch data dari API Laravel berdasarkan query
//         const response = await fetch(
//           `http://localhost:8000/api/search?query=${value}`
//         );
//         const data = await response.json();
//         setResults(data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     } else {
//       setResults([]);
//     }
//   };

  return (
    // <form className="max-w-md mx-auto">
    //   <label className="relative block">
    //     <span className="sr-only">Search</span>
    //     <span className="absolute inset-y-0 left-0 flex items-center pl-2">
    //       <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
    //         <FontAwesomeIcon
    //           icon={faMagnifyingGlass}
    //           style={{ fontSize: "1.5rem" }}
    //           className="text-primary"
    //         />
    //       </svg>
    //     </span>
    //     <input
    //       className="placeholder:italic placeholder:text-[#92c7cfd0] block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
    //       placeholder="Search projects..."
    //       type="text"
    //       name="search"
    //       value={query}
    //       onChange={handleSearch}
    //     />
    //   </label>
    //   {loading && <p className="text-center mt-2">Loading...</p>}
    //   <ul className="mt-4 border border-slate-200 rounded-md p-4">
    //     {results.map((result, index) => (
    //       <li key={index} className="py-1 text-slate-700">
    //         {result.name}
    //       </li>
    //     ))}
    //   </ul>
    // </form>

    <form className="max-w-md mx-auto">
      <label className="relative block">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ fontSize: "1.5rem" }}
              className="text-primary"
            />
          </svg>
        </span>
        <input
          className="placeholder:italic placeholder:text-[#92c7cfd0] text-primary block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search projects..."
          type="text"
          name="search"
        />
      </label>
    </form>
  );
};

export default Search;
