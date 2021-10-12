import React, { useState } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Issues from "./Issues";
import Branch from "./Branch";
import "./tabspanel.css";

const TabsPanel = () => {
  const [key, setKey] = useState("branches");

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
