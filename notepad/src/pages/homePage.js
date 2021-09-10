import React, { useState, useEffect } from "react";
import { getItem, setItem } from "../services/storage";
import { Switch, Route } from "react-router-dom";
import { AddPage, EditPage } from "./";
import { useHistory } from "react-router-dom";
import DeleteIcon from "../images/delete-icon.png";
import EditIcon from "../images/edit-icon.png";
import ReactTooltip from "react-tooltip";
import "../styling/styles.css";

export function HomePage() {
  const [notes, setNotes] = useState([]);
  function addNote(note) {
    setNotes((state) => {
      const updatedNotes = [...state, note];
      setItem("notes", updatedNotes);
      return updatedNotes;
    });
  }

  function editNote(note, index) {
    setNotes((state) => {
      const updatedNotes = [...state];
      updatedNotes[index] = { title: note.title, content: note.content };
      setItem("notes", updatedNotes);
      return updatedNotes;
    });
  }

  useEffect(() => {
    setNotes(getItem("notes", []));
  }, []);

  return (
    <div className="layout">
      <Switch>
        <Route exact path="/">
          <AddPage add={addNote} />
        </Route>
        <Route path="/:index">
          <EditPage edit={editNote} />
        </Route>
      </Switch>
      <div className="notesListBox">
        {notes.map((note, index) => (
          <div style={{ display: "block", marginTop: 10 }}>
            <div className="rowIndex">{notes.indexOf(note) + 1}#</div>
            <div className="rowNoteTitle">{note.title}</div>
            <div
              style={{
                display: "inline-block",
                width: 30,
              }}
            ></div>
            <div data-tip={note.content} className="rowNoteContent">
              <ReactTooltip place="bottom" type="dark" effect="float" />
              {note.content}
            </div>
            <div style={{ width: 40, display: "inline-block" }}></div>
            <div
              style={{
                width: 40,
                display: "inline-block",
              }}
            >
              <Edit index={index} />
            </div>
            <div
              style={{
                width: 5,
                display: "inline-block",
              }}
            ></div>
            <div
              style={{
                display: "inline-block",
              }}
            >
              <button
                aria-label="delete"
                className="deleteButton"
                id={index}
                onClick={(e) => {
                  let result = notes.filter((n, i) => i != e.currentTarget.id);

                  setNotes(result);
                  setItem("notes", result);
                }}
              >
                <img className="icon-btn" alt="delete icon" src={DeleteIcon} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HomePage;

function Edit({ index }) {
  const history = useHistory();
  return (
    <div>
      <button
        aria-label="edit"
        className="editButton"
        onClick={() => history.push("/" + index)}
      >
        <img className="icon-btn" alt="edit icon" src={EditIcon} />
      </button>
    </div>
  );
}
