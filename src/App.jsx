import React, { useState } from "react";
import { Summary } from "./Summary";
import { Qualifications } from "./Qualifications";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { TopLayer } from "./TopLayer";

export function Wrapper() {
  const [editing, setEditing] = useState(true);
  return (
    <div className="wrapper">
      <TopLayer editing={editing} />
      <Summary editing={editing} />
      <Qualifications editing={editing} />
      <Education editing={editing} />
      <Experience editing={editing} />
      <button className="final-submit" onClick={() => setEditing(false)}>
        Submit CV
      </button>
      <button className="final-edit" onClick={() => setEditing(true)}>
        Edit CV
      </button>
    </div>
  );
}
