import React from "react";
import { useState } from "react";

export function Education({ editing }) {
  const [inputToDisplay, setInputDisplay] = useState("school");
  const [school, setSchool] = useState({});
  const [schoolArr, setSchoolArr] = useState([]);

  function handleEdClick(e, value) {
    e.preventDefault();
    if (value === "") {
      return;
    }
    const newSchool = { ...school, name: value, id: crypto.randomUUID() };
    setSchool(newSchool);
    setInputDisplay("date");
    setSchoolInputValue("");
  }

  function deleteEd(id) {
    setSchoolArr((currentSchoolArr) => {
      return currentSchoolArr.filter((school) => school.id !== id);
    });
  }

  function handleDateClick(e, sDate, eDate) {
    e.preventDefault();
    const newSchool = {
      ...school,
      startDate: sDate,
      endDate: eDate,
    };
    setSchool(newSchool);
    setSchoolArr((currentSchoolArr) => [...currentSchoolArr, newSchool]);
    setInputDisplay("school");
    setDates("");
  }

  return (
    <div className="section">
      <div className="section-name">
        <h3>Education</h3>
      </div>
      <div className="section-content">
        {editing ? (
          <>
            <form>
              {inputToDisplay === "school" ? (
                <EdInput handleEdClick={handleEdClick} />
              ) : (
                <EdDurationInput handleDateClick={handleDateClick} />
              )}
            </form>
          </>
        ) : null}
        <ul>
          {schoolArr.map((school) => {
            return (
              <li key={school.id} className="education">
                <h4>{school.name}</h4>
                <p>
                  From {school.startDate} To {school.endDate}
                </p>
                {editing ? (
                  <button onClick={() => deleteEd(school.id)}>Delete</button>
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function EdInput({ handleEdClick }) {
  const [schoolInputValue, setSchoolInputValue] = useState("");
  return (
    <>
      <label>School</label>
      <input
        type="text"
        value={schoolInputValue}
        onChange={(e) => setSchoolInputValue(e.target.value)}
      ></input>
      <button onClick={(e) => handleEdClick(e, schoolInputValue)}>
        Add to list
      </button>
    </>
  );
}
function EdDurationInput({ handleDateClick }) {
  const [dates, setDates] = useState({ startDate: "", endDate: "" });
  return (
    <>
      <label>Start Year</label>
      <input
        type="number"
        max={new Date().getFullYear()}
        min={new Date().getFullYear() - 100}
        value={dates.startDate}
        onChange={(e) =>
          setDates((prevDates) => ({ ...prevDates, startDate: e.target.value }))
        }
      ></input>
      <label>End year</label>
      <input
        type="number"
        max={new Date().getFullYear()}
        min={new Date().getFullYear() - 100}
        value={dates.endDate}
        onChange={(e) =>
          setDates((prevDates) => ({
            ...prevDates,
            endDate: e.target.value,
          }))
        }
      ></input>

      <button
        onClick={(e) => handleDateClick(e, dates.startDate, dates.endDate)}
      >
        Add to list
      </button>
    </>
  );
}
