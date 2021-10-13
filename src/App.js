import "./App.css";
import "./screens/Commits";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./screens/Main";
import Commits from "./screens/Commits";
import React, { useState } from "react";

function App() {
  const [repos, setRepo] = useState([]);
  const [selectedRepo, setSelectedRepo] = useState({});

  const addRepo = (repo) => {
    if (!repos.find((rep) => rep.name === repo.name)) setRepo([...repos, repo]);
    else {
      alert("Repository already added!!");
    }
    console.log(repos);
  };

  const deleteRepo = (repo) => {
    const newRepos = repos.filter((rep) => rep.name !== repo.name);
    setRepo([...newRepos]);
    setSelectedRepo({});
  };

  const selectRepo = (name, owner) => {
    console.log("selectRepo called");
    setSelectedRepo({ name: name, owner: owner });
  };
  const CommitsComponent = ({ match }) => {
    return (
      <Commits
        owner={selectedRepo.owner}
        name={selectedRepo.name}
        branch={match.params.branch}
      />
    );
  };

  const MainComponent = () => {
    return (
      <Main
        selectedRepo={selectedRepo}
        repos={repos}
        addRepo={addRepo}
        selectRepo={selectRepo}
        deleteRepo={deleteRepo}
      />
    );
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainComponent} />
        <Route path="/commits/:branch" component={CommitsComponent} />
      </Switch>
    </Router>
  );
}

export default App;
