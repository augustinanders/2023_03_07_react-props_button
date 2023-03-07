import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    alert("You clicked me!");
  }
  return (
    <>
      <Button
        color="hotpink"
        text="thats a very nice button"
        onClick={handleClick}
        isDisabled
      />
      <Button color="red" text="thats a second button" onClick={handleClick} />
    </>
  );
}

function Button({ color, isDisabled, text, onClick }) {
  return (
    <button
      style={{ backgroundColor: color, borderRadius: "30px" }}
      onClick={onClick}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
}
