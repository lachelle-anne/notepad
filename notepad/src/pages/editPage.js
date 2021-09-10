import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../services/storage";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styling/styles.css";

export function EditPage({ edit }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { index } = useParams();

  const history = useHistory();

  const onBackClick = () => {
    history.push("/");
  };

  useEffect(() => {
    if (index) {
      const createdNotes = getItem("notes", []);
      const editedNote = createdNotes[index];
      setTitle(editedNote.title);
      setContent(editedNote.content);
    }
  }, [index]);

  return (
    <div style={{ display: "grid", margin: 30 }}>
      <input
        className="titleInput"
        placeholder="Title..."
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <textarea
        className="contentTextarea"
        placeholder="Write your notes here...  "
        value={content}
        onChange={(event) => setContent(event.target.value)}
      ></textarea>
      <div>
        <button
          className="edit-page-btn"
          onClick={() => {
            setTitle("");
            setContent("");
            edit({ title, content }, index);
            history.push("/");
            toast.dark("Your changes have been saved!", {
              position: "bottom-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              style: {
                fontSize: 18,
                fontWeight: "bold",
                textAlign: "center",
                fontFamily: "monospace",
              },
            });
          }}
        >
          Save Changes
        </button>
        <button className="edit-page-btn" onClick={onBackClick}>
          Cancel
        </button>
      </div>
    </div>
  );
}
