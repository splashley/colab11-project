import * as React from "react";
import axios from "axios";

import Spinner from './Spinner';

import { useNavigate } from "react-router-dom";

export default function ScanJobDescription() {
  const [loading, setLoading] = React.useState(false);

  let navigate = useNavigate();

  function handleJobDescription(el) {
    el.preventDefault();
    setLoading(true);
    const options = {
      method: "POST",
      url: "https://tldrthis.p.rapidapi.com/v1/model/abstractive/summarize-text/",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "f06dd54ff1msh660447096c187d3p1aec73jsnf7cd78cee375",
        "X-RapidAPI-Host": "tldrthis.p.rapidapi.com",
      },
      data: { text: el.target[0].value, min_length: 100, max_length: 300 },
    };

    axios
      .request(options)
      .then(function (response) {
        navigate('/results', {state: {data: response.data.summary}})
      })
      .catch(function (error) {
        console.error("error", error);
      });
  }
  return loading ? (
    <Spinner />
  ) : (
    <main className="scan-job-description-page" style={{ textAlign: "center" }}>
      <h2>
        Let’s get started...paste your job description below to start the
        keywords scan.{" "}
      </h2>
      <p>Exclude the “About the company” section</p>
      <form
        onSubmit={handleJobDescription}
        className="scan-job-description-form"
      >
        <textarea placeholder="Paste Your Job Description Here"></textarea>
        <br />
        <button className="btn btn--blue">Submit</button>
      </form>
      {/* {returnResults ? <Results loading={loading} data={handleData} /> : null} */}
    </main>
  );
}
