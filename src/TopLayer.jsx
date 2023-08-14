import { useState } from "react";
import githubLogo from "./assets/icone-github-noir.png";
import linkedInLogo from "./assets/linkedin-logo.png";

export function TopLayer({ editing }) {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  return (
    <div className="top-layer">
      {editing ? (
        <>
          <div className="top-column">
            <label>Full Name</label>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            ></input>
            <label>Job</label>
            <input
              type="text"
              onChange={(e) => setJob(e.target.value)}
              value={job}
            ></input>
          </div>
          <div className="top-column">
            <label>Email</label>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            ></input>
            <label>Mobile number</label>
            <input
              type="text"
              onChange={(e) => setMobile(e.target.value)}
              value={mobile}
            ></input>
            <label>Location</label>

            <input
              type="text"
              onChange={(e) => setLocation(e.target.value)}
              value={location}
            ></input>
          </div>
          <div className="top-column">
            <label>LinkedIn link</label>
            <input
              type="url"
              onChange={(e) => setLinkedin(e.target.value)}
              value={linkedin}
            ></input>
            <label>GitHub link</label>
            <input
              type="url"
              onChange={(e) => setGithub(e.target.value)}
              value={github}
            ></input>
          </div>
        </>
      ) : (
        <>
          <div className="left-column">
            <h2 className="name">{name}</h2>
            <h3 className="job">{job}</h3>
          </div>
          <div className="middle-column">
            <p className="email">
              Email - <b>{email}</b>
            </p>
            <p className="mobile">
              Phone Number - <b>{mobile}</b>
            </p>
            <p className="location">
              Location - <b>{location}</b>
            </p>
          </div>
          <div className="right-column">
            {linkedin ? (
              <a className="linkedin" href={linkedin}>
                <img className="logo" src={linkedInLogo}></img>
              </a>
            ) : null}
            {github ? (
              <a className="github" href={github}>
                <img className="logo" src={githubLogo}></img>
              </a>
            ) : null}
          </div>
        </>
      )}
    </div>
  );
}
