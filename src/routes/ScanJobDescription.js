import * as React from 'react';

export default function ScanJobDescription() {
  return (
    <main className="scan-job-description-page" style={{textAlign: "center"}}>
      <h2>Let’s get started...paste your job description below to start the keywords scan. </h2>
      <p>Exclude the “About the company” section</p>
      <form className="scan-job-description-form">
      <textarea placeholder="Paste Your Job Description Here">
</textarea><br />
<button className="btn btn--blue">Submit</button>
    </form>
    </main>
  );
}