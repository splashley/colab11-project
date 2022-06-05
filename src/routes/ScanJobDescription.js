import * as React from 'react';

export default function ScanJobDescription() {
  return (
    <main style={{textAlign: "center"}}>
      <h2>Let’s get started...paste your job description below to start the keywords scan. </h2>
      <p>Exclude the “About the company” section</p>
      <form>
      <textarea>
  Content of the textarea.
</textarea><br />
<button className="btn btn--blue">Submit</button>
    </form>
    </main>
  );
}