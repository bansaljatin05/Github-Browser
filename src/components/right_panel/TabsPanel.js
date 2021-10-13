import React, { useState, useEffect } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Issue from "./Issues";
import Branch from "./Branch";
import "./tabspanel.css";

const TabsPanel = ({ selectedRepo }) => {
  const [key, setKey] = useState("branches");
  const [branches, setBranches] = useState([]);
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    if (selectedRepo.owner && selectedRepo.name) {
      async function fetchData() {
        const response = await fetch(
          `https://api.github.com/repos/${selectedRepo.owner}/${selectedRepo.name}/branches`
        );

        const _branches = await response.json();
        const response2 = await fetch(
          `https://api.github.com/repos/${selectedRepo.owner}/${selectedRepo.name}/issues`
        );
        const _issues = await response2.json();
        console.log(_branches);
        setBranches([..._branches]);
        setIssues([..._issues]);
      }

      fetchData();
    }
  }, [selectedRepo.owner, selectedRepo.name]);
  return (
    <div className="tabs">
      <Tabs id="tab-panel" activeKey={key} onSelect={(k) => setKey(k)}>
        <Tab eventKey="branches" title="Branches">
          {branches.length ? (
            branches.map((branch) => (
              <Branch key={branch.id} name={branch.name} />
            ))
          ) : (
            <div className="centre-div">
              Select a repository to see the branches!!
            </div>
          )}
        </Tab>
        <Tab eventKey="issues" title="Issues">
          {issues.length ? (
            issues.map((issue) => (
              <Issue key={issue.id} title={issue.title} user={issue.user} />
            ))
          ) : (
            <div className="centre-div">There are no issues!!</div>
          )}
        </Tab>
      </Tabs>
    </div>
  );
};

export default TabsPanel;
