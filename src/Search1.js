import { useState, useEffect } from "react";

function Search1() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (query) {
        fetch(`/api/search?q=${query}`)
          .then(res => res.json())
          .then(data => setResults(data));
      }
    }, 500); // 500ms delay

    return () => clearTimeout(delayDebounce);
  }, [query]);

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <pre>{JSON.stringify(results, null, 2)}</pre>
    </>
  );
}
export default Search1