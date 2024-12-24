import React, { useEffect, useState } from "react";
import GitHubUser from "./components/GitHubUser";
import useGithubStore from "./store/store";
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
      <form onSubmit={handleSubmit}>
        <div className="searchContainer">
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
