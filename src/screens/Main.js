import React from "react";
import CircularButton from "../components/CircularButton";
import TabsPanel from "../components/right_panel/TabsPanel";
import Modal from "react-bootstrap/Modal";
import AddRepositoryForm from "../components/AddRepositoryForm";

const Main = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <TabsPanel />
      <CircularButton onPress={setModalShow} />
      <AddRepositoryModal show={modalShow} onHide={() => setModalShow(false)} />
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
        <AddRepositoryForm />
      </Modal.Body>
    </Modal>
  );
}

export default Main;
