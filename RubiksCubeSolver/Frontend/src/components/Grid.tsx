import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Grid.css"; // Import your custom CSS file
import Cell from "./Cell";
import ColorSelector from "./ColorSelector";

interface Props {
  color?: "blue" | "green" | "red" | "orange" | "white" | "black";
}

const Grid = ({ color }: Props) => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-md-auto">
          {[1, 2, 3].map((row) => (
            <div key={row} className="row">
              {[1, 2, 3].map((col) => (
                <div key={col} className="col-md-auto border text-center">
                  <Cell color={color} onClick={() => handleButtonClick()} />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <ColorSelector
        showModal={showModal}
        handleCloseModal={handleCloseModal}
      ></ColorSelector>
    </div>
  );
};

export default Grid;
