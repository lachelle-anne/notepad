import React from "react";
import { removeItem } from "../services/storage";
import "../styling/styles.css";

export function Header() {
  function clear() {
    const entriesToBeCleared = window.confirm(
      "Are you sure you would like to clear all entries?"
    );
    if (entriesToBeCleared === true) {
      window.location.reload();
      removeItem("notes");
    }
  }
  return (
    <div className="headerLayout">
      <div className="headerText">NotePad</div>
      <button className="clearAllButton" onClick={clear}>
        CLEAR ALL
      </button>
    </div>
  );
}
