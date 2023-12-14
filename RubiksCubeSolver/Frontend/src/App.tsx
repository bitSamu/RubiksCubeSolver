import { useState } from "react";
import Grid from "./components/Grid";
import CubeLayout from "./components/CubeLayout";

function App() {
  return (
    <div>
      <h1>Rubiks Cube Solver</h1>
      <CubeLayout></CubeLayout>
    </div>
  );
}

export default App;
