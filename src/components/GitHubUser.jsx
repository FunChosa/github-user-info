import React from "react";
import RepoInfo from "./RepoInfo";
import UserInfo from "./UserInfo";

function GitHubUser() {
  return (
    <div className="githubUser">
      <UserInfo />
      <RepoInfo />
    </div>
  );
}

export default GitHubUser;
