import React from "react";
import Cell from "./Cell";
import { Modal, Button } from "react-bootstrap";

interface Props {
  showModal: boolean;
  handleCloseModal: () => void;
}

const ColorSelector = ({ showModal, handleCloseModal }: Props) => {
  return (
    <div>
      <Modal show={showModal} onHide={handleCloseModal} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Pic Color</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mx-auto">
            <Cell color={"blue"} onClick={() => {}} />
            <div className="my-2"></div>
            <Cell color={"green"} onClick={() => {}} />
            <div className="my-2"></div>
            <Cell color={"red"} onClick={() => {}} />
            <div className="my-2"></div>
            <Cell color={"orange"} onClick={() => {}} />
            <div className="my-2"></div>
            <Cell color={"white"} onClick={() => {}} />
            <div className="my-2"></div>
            <Cell color={"black"} onClick={() => {}} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ColorSelector;
