import React, { useState, useEffect } from "react";

function Search() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  // Debounce logic
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [query]);

  // API call when debounced value changes
  useEffect(() => {
    if (debouncedQuery) {
      console.log("API Call with:", debouncedQuery);
      // fetchData(debouncedQuery);
    }
  }, [debouncedQuery]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

export default Search;