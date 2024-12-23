import React, { useEffect, useState } from "react";
import GitHubUser from "./components/GitHubUser";
import useGithubStore from "./store";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const { fetchUser, fetchLanguageColor, clearUserData, user, loading, error } =
    useGithubStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === "") {
      clearUserData();
      return;
    }
    fetchUser(username);
  };

  useEffect(() => {
    fetchLanguageColor();
  }, []);

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          padding: "1rem",
          gap: "1rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexDirection: "row",
          }}
        >
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="/ Enter GitHub user name"
          />
          <button type="submit">Search</button>
        </div>
        {user && !loading && !error && <GitHubUser />}
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default App;
