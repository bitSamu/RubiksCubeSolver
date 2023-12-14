import React from "react";

interface Props {
  color?: "blue" | "green" | "red" | "orange" | "white" | "black";
  onClick: () => void;
}

const Cell = ({ color = "blue", onClick }: Props) => {
  return (
    <button
      type="button"
      className={"btn btn-" + getColor(color) + " btn-square"}
      onClick={onClick}
    ></button>
  );
};

function getColor(color: string) {
  const colorMap: Record<string, string> = {
    blue: "primary",
    green: "success",
    red: "danger",
    orange: "warning",
    white: "light",
    black: "dark",
  };

  return colorMap[color] || "";
}

export default Cell;
