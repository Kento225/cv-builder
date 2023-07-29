import React from "react";
import { useState } from "react";

export function Summary({ editing }) {
  const [summary, setSummary] = useState("");
  const [h4Value, setH4Value] = useState("");

  function handleButtonClick(e, summary) {
    e.preventDefault();
    setH4Value(summary);
  }

  return (
    <div className="section">
      <div className="section-name">
        <h3>Summary Statement</h3>
      </div>
      <div className="section-content">
        {editing ? (
          <>
            <form>
              <label htmlFor="summary">Enter your summary</label>
              <textarea
                id="summary"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
              ></textarea>
              <button onClick={(e) => handleButtonClick(e, summary)}>
                Submit
              </button>
            </form>
          </>
        ) : null}
        <h4>{h4Value}</h4>
      </div>
    </div>
  );
}
