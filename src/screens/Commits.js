import React, { useState, useEffect } from "react";
import Commit from "../components/Commit";
import Header from "../components/Header";
import "./Commits.css";

const Commits = ({ owner, name, branch }) => {
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.github.com/repos/${owner}/${name}/commits?sha=${branch}`
      );
      const _commits = await response.json();
      console.log(_commits);
      setCommits([..._commits]);
    }

    fetchData();
  }, [owner, name, branch]);

  return (
    <div>
      <Header title={`COMMITS: ${branch}`} />

      <div className="commits-container">
        {commits.length ? (
          commits.map((commit) => (
            <Commit commit={commit.commit} author={commit.author} />
          ))
        ) : (
          <p className="centre-div">No commits yet!!</p>
        )}
      </div>
    </div>
  );
};

export default Commits;
