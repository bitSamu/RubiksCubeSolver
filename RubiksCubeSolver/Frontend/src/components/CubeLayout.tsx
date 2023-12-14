import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Grid.css"; // Import your custom CSS file
import Cell from "./Cell";
import Grid from "./Grid";

const CubeLayout = () => {
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-md-auto">
          <Grid color="blue"></Grid>
        </div>
      </div>
      <div className="row justify-content-md-center">
        <div className="col-md-auto">
          <Grid color="red"></Grid>
        </div>
        <div className="col-md-auto">
          <Grid color="white"></Grid>
        </div>
        <div className="col-md-auto">
          <Grid color="black"></Grid>
        </div>
      </div>
      <div className="row justify-content-md-center">
        <div className="col-md-auto"></div>
        <div className="col-md-auto">
          <Grid color="green"></Grid>
        </div>
        <div className="col-md-auto"></div>
      </div>
      <div className="row justify-content-md-center">
        <div className="col-md-auto"></div>
        <div className="col-md-auto">
          <Grid color="orange"></Grid>
        </div>
        <div className="col-md-auto"></div>
      </div>
    </div>
  );
};

export default CubeLayout;
