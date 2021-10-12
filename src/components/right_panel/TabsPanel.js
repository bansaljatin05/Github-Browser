import React, { useState, useEffect } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Issues from "./Issues";
import Branch from "./Branch";
import "./tabspanel.css";

const TabsPanel = ({ selectedRepo }) => {
  const [key, setKey] = useState("branches");
  // const [branches, setBranches] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.github.com/repos/${selectedRepo.owner}/${selectedRepo.name}/branches`,
      {
        headers: {
          accept: "application/vnd.github.v3+json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // let repo = {
        //   name: data.name,
        //   description: data.description,
        // };
        console.log(data);
        // setbranches([...data]);
      });
  }, [selectedRepo.owner, selectedRepo.name]);
  return (
    <div className="tabs">
      <Tabs id="tab-panel" activeKey={key} onSelect={(k) => setKey(k)}>
        <Tab eventKey="branches" title="Branches">
          <Branch />
          <Branch />
          <Branch />
          <Branch />
          <Branch />
          <Branch />
          <Branch />
        </Tab>
        <Tab eventKey="issues" title="Issues">
          <Issues />
          <Issues />
          <Issues />
          <Issues />
          <Issues />
          <Issues />
          <Issues />
          <Issues />
        </Tab>
      </Tabs>
    </div>
  );
};

export default TabsPanel;
