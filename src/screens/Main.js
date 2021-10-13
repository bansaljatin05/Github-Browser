import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/left_panel/Sidebar";
import CircularButton from "../components/CircularButton";
import TabsPanel from "../components/right_panel/TabsPanel";
import Modal from "react-bootstrap/Modal";
import AddRepositoryForm from "../components/AddRepositoryForm";

const Main = () => {
  const [modalShow, setModalShow] = useState(false);
  const [repos, setRepo] = useState([]);
  const [selectedRepo, setSelectedRepo] = useState({});

  const addRepo = (repo) => {
    if (
      !repos.find(
        (rep) => rep.name === repo.name && rep.description === repo.description
      )
    )
      setRepo([...repos, repo]);
    else {
      alert("Repository already added!!");
    }
  };

  const selectRepo = (name, owner) => {
    console.log("selectRepo called");
    setSelectedRepo({ name: name, owner: owner });
  };

  return (
    <div>
      <Header title="GITHUB BROWSER" />
      <Sidebar repos={repos} selectRepo={selectRepo} />
      <TabsPanel selectedRepo={selectedRepo} />
      <CircularButton onPress={setModalShow} />
      <AddRepositoryModal
        show={modalShow}
        onHide={setModalShow}
        addRepo={addRepo}
      />
    </div>
  );
};

function AddRepositoryModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add a New Repository
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddRepositoryForm addRepo={props.addRepo} onHide={props.onHide} />
      </Modal.Body>
    </Modal>
  );
}

export default Main;
