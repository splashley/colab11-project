import * as React from "react";

export default function IdentifyKeywords() {
  const [isRole, setIsRole] = React.useState(null);
  const [isExperienceLevel, setIsExperienceLevel] = React.useState(null);

  console.log(isRole);
  console.log(isExperienceLevel);

  const handleOptionsClick = (e) => {

    if (e.target.classList.contains("btn-role")) {
        setIsRole(e.target.innerText);
    }

    if (e.target.classList.contains("btn-experienceLevel")) {
        setIsExperienceLevel(e.target.innerText);
    }

  };

  const roleTypes = ["Product Manager", "UX Designer", "Software Developer"];
  const experienceLevels = ["Entry-level", "Junior", "Senior"]

  return (
    <main>
      <h2>Select your desired role and experience level</h2>
      <div>
        <div>
          <h3>Role</h3>
          {roleTypes.map((value) => {
            return (
              <button
                className={`btn btn-role ${isRole === value ? "btn-selected" : ""}`}
                onClick={handleOptionsClick}
              >{value}</button>
            );
          })}
        </div>
        <div>
          <h3>Experience Level</h3>
          {experienceLevels.map((value) => {
            return (
              <button
                className={`btn btn-experienceLevel ${isExperienceLevel === value ? "btn-selected" : ""}`}
                onClick={handleOptionsClick}
              >{value}</button>
            );
          })}
        </div>
        <button className="btn btn--blue" disabled={(isRole !== null && isExperienceLevel !== null? false: true )}>Submit</button>
      </div>
    </main>
  );
}
