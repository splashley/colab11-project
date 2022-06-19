import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function IdentifyKeywords() {
  const [isRole, setIsRole] = React.useState(null);
  const [isExperienceLevel, setIsExperienceLevel] = React.useState(null);

  let navigate = useNavigate();
  const roleTypes = ["Product Manager", "UX Designer", "Software Developer"];
  const experienceLevels = ["Entry-level", "Junior", "Senior"];

  const handleOptionsClick = (e) => {
    e.preventDefault();
    if (e.target.classList.contains("btn-role")) {
      setIsRole(e.target.innerText);
    }
    if (e.target.classList.contains("btn-experienceLevel")) {
      setIsExperienceLevel(e.target.innerText);
    }
  };

  const showPhrases = (e) => {
    e.preventDefault();
    let information = {
      role: isRole,
      experienceLevel: isExperienceLevel,
    };
    navigate("/details", { state: { data: information } });
  };

  return (
    <main style={{ textAlign: "center" }}>
      <h2>Select your desired role and experience level</h2>
      <form onSubmit={showPhrases}>
        <div className="ipk-container" style={{ marginBottom: "30px" }}>
          <div className="ipk-container-column">
            <h3>Role</h3>
            {roleTypes.map((value) => {
              return (
                <button
                  className={`btn btn-role ${
                    isRole === value ? "btn-selected" : ""
                  }`}
                  onClick={handleOptionsClick}
                >
                  {value}
                </button>
              );
            })}
          </div>
          <div className="ipk-container-column">
            <h3>Experience Level</h3>
            {experienceLevels.map((value) => {
              return (
                <button
                  className={`btn btn-experienceLevel ${
                    isExperienceLevel === value ? "btn-selected" : ""
                  }`}
                  onClick={handleOptionsClick}
                >
                  {value}
                </button>
              );
            })}
          </div>
        </div>
        <button
          className="btn btn--blue"
          disabled={
            isRole !== null && isExperienceLevel !== null ? false : true
          }
        >
          Submit
        </button>
      </form>
    </main>
  );
}
