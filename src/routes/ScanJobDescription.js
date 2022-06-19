import * as React from "react";
import axios from "axios";

import Spinner from "./Spinner";

import { useNavigate } from "react-router-dom";

export default function ScanJobDescription() {
  const [loading, setLoading] = React.useState(false);
  const apiKey = "47aa983e-7f4a-4ecf-abae-f2ca9cd4c59f";

  let navigate = useNavigate();
  let keywords = [];

  async function handleJobDescription(el) {
    try {
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

      const options = {
        method: "POST",
        url: "https://tldrthis.p.rapidapi.com/v1/model/abstractive/summarize-text/",
        headers: {
          "content-type": "application/json",
          "X-RapidAPI-Key":
            "f06dd54ff1msh660447096c187d3p1aec73jsnf7cd78cee375",
          "X-RapidAPI-Host": "tldrthis.p.rapidapi.com",
        },
        data: { text: el.target[0].value, min_length: 100, max_length: 300 },
      };

      await axios
        .request(config)
        .then(function (response) {
          let data = response.data.output[0].labels;
          data.forEach((item) => {
            keywords.push(item.name);
          });
          console.log(keywords);
        })
        .catch(function (error) {
          console.error("error", error);
        });

      await axios
        .request(options)
        .then(function (response) {
          navigate("/results", {
            state: { data: response.data.summary, keywords: keywords },
          });
        })
        .catch(function (error) {
          console.error("error", error);
        });
    } catch (error) {
      console.log(error);
    }
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
    </main>
  );
}
