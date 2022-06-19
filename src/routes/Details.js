import * as React from "react";
import { useLocation } from "react-router-dom";

export default function Details() {
  const { state } = useLocation();

  const jobDetails = [
    {
      "role": "Product Manager",
        "Entry-level": [
          "Collaborated with Technical Evangelism, Marketing, Education and Public Relations teams to strategize how to increase reach and engagement of web developers with Microsoft Edge content", "Starred in an informational video with 15K+ views; improved surfacing of relevant content on Channel9, going from page 6 to page 1; strategized and organized 3 grassroots meetups with local developers", "Took mobile game with 250K+ daily users from 1-star to 4+ stars on all 5 SKUs on Google Play and App Store in just three months", "Created copy for outbound emails and promotional posts, spearheaded weekly online contests with 60+ participants per week, improved Facebook post engagement by 400% and total likes by 20%"
        ],
        "Junior": [
          "Won 1st place at Stanford Design Challenge out of 97 teams across 24 countries, awarded $11,000 to scale product ", "Identified customer pain points by conducting 91 user tests across 5 generations to increase UX measures by 25% ", "Managed team of 9 developers and designers to build MVP of a dating app to promote genuine connections; Self-taught React Native and Typescript to more effectively manage the team"
        ],
        "Senior": [
          "Spearheaded billing execution to customers such as Bentley, P&G, Johnson & Johnson, resulting in $1.4M in annual revenue; Drove cloud data migration project, resulting in savings of $7.2 million annually in on-prem hardware costs", "Led org-wide initiative to onboard to DevOps, live-site-first model; going from a 0 to 80% adoption rate" ,"Pitched and obtained funding for Early-in-Career community; currently leading v-team to execute cultural strategy for 300+ participants",
        ],
    },

    {
      role: "UX Designer",
        "Entry-level": [
          "Redesigned a responsive website by identifying user pain points and creating a better user flow to improve user experience, increase user retention rate, and attract are users; Successfully achieved design goals based on a 90% satisfaction rate from usability testing", "Support SaaS and PaaS products that uses AI/ML capabilities to help companies identify what matters most to their employees and clients. Responsible for designing experiences and features in response to business and user demand. Create wireframes, visual concepts, visual design assets and prototypes.", "Using Agile and the design thinking process, we collaborated within a cross-functional team to design, build and ship a product within 8 weeks. Conducted user interviews and analyzed survey responses to understand user persona’s pains, needs, and desires", "Drove 40%-50% growth in online sales by leading end-to-end website redesign for e-commerce site; Delivered and tested designs and prototypes for Android, iOS, web, and desktop"
        ],
        "Junior": [
          "Act as lead interaction designer on team of 4 to design 3 key features of iOS native app designed for kids aged 9-13; Advocate for design thinking and help promote its use throughout the organization",
        ],
        "Senior": [
          "Did rapid prototyping, interaction design, and visuals for 22 screens for B2B SaaS product using Figma; Tested mid-fidelity prototype with 5 users and increased customer satisfaction from 60% to 80% after iterating design", "Empathy-driven designer with 5+ years' experience in design, marketing and customer service who aims to create remarkable products, designing technology that is better for humans and better at interacting with humans. Passionate about humanizing tech experiences and creating thoughtful products for community and well-being.  ",
        ],

    },
    {
      role: "Software Developer",
        "Entry-level": [""],
        "Junior": [""],
        "Senior": ["Engineered modern cloud infrastructure to store millions of client data points with full consideration for modern infosec.", "Led team of 5 junior software engineers undertaking the software development life cycle for 9 bespoke client projects."],
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
