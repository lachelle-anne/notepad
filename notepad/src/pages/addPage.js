import React, { useState } from "react";
import "../styling/styles.css";

export function AddPage({ add }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div style={{ display: "grid", margin: 30, fontFamily: "monospace" }}>
      <input
        className="inputText"
        placeholder="Title..."
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <textarea
        className="textareaText"
        placeholder="Write your notes here...  "
        value={content}
        onChange={(event) => setContent(event.target.value)}
      ></textarea>
      <button
        className="addNoteButton"
        onClick={() => {
          setTitle("");
          setContent("");
          add({ title, content });
        }}
      >
        ADD NOTE
      </button>
    </div>
  );
}
