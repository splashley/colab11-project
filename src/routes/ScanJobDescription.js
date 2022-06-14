import * as React from "react";
import axios from "axios";

import Spinner from "./Spinner";

import { useNavigate } from "react-router-dom";

export default function ScanJobDescription() {
  const [loading, setLoading] = React.useState(false);
  const apiKey = "47aa983e-7f4a-4ecf-abae-f2ca9cd4c59f";

  let navigate = useNavigate();

  function handleJobDescription(el) {
    el.preventDefault();
    setLoading(true);
    const config = {
      method: "POST",
      url: "https://api.oneai.com/api/v0/pipeline",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
      },
      data: {
        input: el.target[0].value,
        input_type: "article",
        steps: [
          {
            skill: "keywords",
          },
        ],
      },
    };

    axios
      .request(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        navigate("/results", { state: { data: response.data.summary } });
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
