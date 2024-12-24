import React from "react";
import useGithubStore from "../store/store";
import formatDate from "../helpers/formatDate";

const RepoCard = ({ repo }) => {
  const { colors } = useGithubStore();
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="repoCard"
    >
      <div className="repoCardTop">
        <h2>{repo.name}</h2>
        <span>{formatDate(repo.created_at)}</span>
      </div>
      <div className="repoCardBottom">
        <span style={{ color: colors[repo.language]?.color || "black" }}>
          {repo.language}
        </span>
        <p>✩ {repo.stargazers_count}</p>
      </div>
    </a>
  );
};

export default RepoCard;
