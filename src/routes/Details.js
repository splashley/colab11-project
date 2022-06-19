import * as React from "react";
import { useLocation } from "react-router-dom";

export default function Details() {
  const { state } = useLocation();

  const jobDetails = [
    {
      "role": "Product Manager",
        "Entry-level": [
          "Collaborated with Technical Evangelism, Marketing, Education and Public Relations teams to strategize how to increase reach and engagement of web developers with Microsoft Edge content",
        ],
        "Junior": [
          "Won 1st place at Stanford Design Challenge out of 97 teams across 24 countries, awarded $11,000 to scale product ",
        ],
        "Senior": [
          "Spearheaded billing execution to customers such as Bentley, P&G, Johnson & Johnson, resulting in $1.4M in annual revenue; Drove cloud data migration project, resulting in savings of $7.2 million annually in on-prem hardware costs",
        ],
    },

    {
      role: "UX Designer",
        "Entry-level": [
          "Redesigned a responsive website by identifying user pain points and creating a better user flow to improve user experience, increase user retention rate, and attract are users; Successfully achieved design goals based on a 90% satisfaction rate from usability testing",
        ],
        "Junior": [
          "Act as lead interaction designer on team of 4 to design 3 key features of iOS native app designed for kids aged 9-13; Advocate for design thinking and help promote its use throughout the organization",
        ],
        "Senior": [
          "Did rapid prototyping, interaction design, and visuals for 22 screens for B2B SaaS product using Figma; Tested mid-fidelity prototype with 5 users and increased customer satisfaction from 60% to 80% after iterating design",
        ],

    },
    {
      role: "Software Developer",
        "Entry-level": ["entry-lvel software developer"],
        "Junior": [""],
        "Senior": [""],
    },
  ];

const selectedJobDescriptions = [];

jobDetails.forEach((jobDescription) => {
    if (jobDescription.role === state.data.role) {
       jobDescription[state.data.experienceLevel].map((experienceDescription) => {
            return selectedJobDescriptions.push(experienceDescription);
        });
    }
});


  return (
    <main style={{ textAlign: "center" }}>
      <h1>{state.data.role}</h1>
      <h2>{state.data.experienceLevel}</h2>
      <div className="details-list">
        <ul>
        {
        selectedJobDescriptions.map((jobDesciption) => {
              return (
                <li>{jobDesciption}</li>
                  
              );
            })
        }
        </ul>
      </div>
    </main>
  );
}
