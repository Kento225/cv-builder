import React from "react";
import { useState } from "react";

export function Qualifications({ editing }) {
  const [text, setText] = useState("");
  const [qualifications, setQualifications] = useState([]);

  function deleteQual(id) {
    setQualifications((currentQualifications) => {
      return currentQualifications.filter((qual) => qual.id !== id);
    });
  }
  function handleQualAdd(e) {
    e.preventDefault();
    if (text === "") {
      return;
    }
    setQualifications((currentQualifications) => {
      return [...currentQualifications, { id: crypto.randomUUID, title: text }];
    });
    setText("");
  }

  return (
    <div className="section">
      <div className="section-name">
        <h3>Qualifications</h3>
      </div>
      <div className="section-content">
        {editing ? (
          <>
            <form onSubmit={handleQualAdd}>
              <label>Qualification</label>
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button>Add to list</button>
            </form>
          </>
        ) : null}{" "}
        <ul className="qual-list">
          {qualifications.map((qual) => {
            return (
              <>
                <li key={qual.id}>{qual.title}</li>
                {editing ? (
                  <button onClick={() => deleteQual(qual.id)}>Delete</button>
                ) : null}
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
