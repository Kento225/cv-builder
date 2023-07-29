import React from "react";
import { useState } from "react";

export function Experience({ editing }) {
  const [experienceArr, setExperienceArr] = useState([]);
  const [company, setCompany] = useState("");
  const [work, setWork] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");

  function handleExpAdd(e) {
    e.preventDefault();
    if (company === "" || work === "" || startYear === "" || endYear === "") {
      return;
    }
    setExperienceArr((currentExperienceArr) => {
      return [
        ...currentExperienceArr,
        {
          id: crypto.randomUUID(),
          company: company,
          work: work,
          startYear: startYear,
          endYear: endYear,
        },
      ];
    });
    setStartYear("");
    setEndYear("");
    setWork("");
    setCompany("");
  }

  function deleteExp(id) {
    setExperienceArr((currentExperienceArr) => {
      return currentExperienceArr.filter((exp) => exp.id !== id);
    });
  }

  return (
    <div className="section">
      <div className="section-name">
        <h3>Experience</h3>
      </div>
      <div className="section-content">
        {editing ? (
          <>
            {" "}
            <form onSubmit={(e) => handleExpAdd(e)}>
              <label>Company</label>
              <input
                type="text"
                onChange={(e) => setCompany(e.target.value)}
                value={company}
              ></input>
              <label>Type of work</label>
              <textarea
                type="text"
                onChange={(e) => setWork(e.target.value)}
                value={work}
              ></textarea>
              <label>Start Year</label>
              <input
                type="number"
                max={new Date().getFullYear()}
                min={new Date().getFullYear() - 100}
                value={startYear}
                onChange={(e) => setStartYear(e.target.value)}
              ></input>
              <label>End year</label>
              <input
                type="number"
                max={new Date().getFullYear()}
                min={new Date().getFullYear() - 100}
                value={endYear}
                onChange={(e) => setEndYear(e.target.value)}
              ></input>

              <button>Add to list</button>
            </form>
          </>
        ) : null}
        <ul className="exp-list">
          {experienceArr.map((exp) => {
            return (
              <li key={exp.id} className="experience-li">
                <h4>{exp.company}</h4>
                <p>{exp.work}</p>
                <p>
                  From {exp.startYear} To {exp.endYear}
                </p>
                {editing ? (
                  <button onClick={() => deleteExp(exp.id)}>Delete</button>
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
