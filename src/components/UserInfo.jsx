import React from "react";
import useGithubStore from "../store/store";
import formatDate from "../helpers/formatDate";
import differenceInDays from "../helpers/differenceInDays";

const UserInfo = () => {
  const { user } = useGithubStore();

  return (
    <a
      className="userInfo"
      href={`https://github.com/${user.login}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        textDecoration: "none",
      }}
    >
      <img src={user.avatar_url} alt={user.login} className="animated-image" />
      <div>
        <h1>{user.name}</h1>
        <span>
          <h2>@{user.login}</h2>
        </span>
        <p>
          <span>{differenceInDays(new Date(user.created_at), new Date())}</span>{" "}
          days on GitHub!! Since: <span>{formatDate(user.created_at)}</span>
        </p>
        <p>
          <span>{user.followers}</span> followers
        </p>
        <p>
          <span>{user.following}</span> following
        </p>
        <p>
          <span>{user.public_repos}</span> public repos
        </p>
      </div>
    </a>
  );
};

export default UserInfo;
