import React from "react";
import { useState, useEffect } from "react";

const ApiCalls = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);

      try {
        const response = await fetch(
          "https://jsonpaceholder.typicode.com/posts",
        );

        if (!response.ok) {
          throw new console.error("Failed to fetch API");
        }
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error:{error}</p>;
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.title}</li>
      ))}
    </ul>
  );
};

export default ApiCalls;
