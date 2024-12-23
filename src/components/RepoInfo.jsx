import React from "react";
import useGithubStore from "../store";
import RepoCard from "./RepoCard";

const RepoInfo = () => {
  const { repos } = useGithubStore();

  return (
    <div className="repoInfo">
      <div className="repoHeader">
        <h2>Repositories:</h2>
      </div>
      {repos && repos.length > 0 ? (
        <div className="repoList">
          {repos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      ) : (
        <p>No repositories found for this user :/ </p>
      )}
    </div>
  );
};

export default RepoInfo;
