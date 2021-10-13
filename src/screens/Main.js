import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/left_panel/Sidebar";
import CircularButton from "../components/CircularButton";
import TabsPanel from "../components/right_panel/TabsPanel";
import Modal from "react-bootstrap/Modal";
import AddRepositoryForm from "../components/AddRepositoryForm";

const Main = ({ selectedRepo, repos, addRepo, selectRepo, deleteRepo }) => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
      <Header title="GITHUB BROWSER" />
      <Sidebar
        repos={repos}
        selectRepo={selectRepo}
        selectedRepo={selectedRepo}
      />
      <TabsPanel selectedRepo={selectedRepo} deleteRepo={deleteRepo} />
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
