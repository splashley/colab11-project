import * as React from 'react';

import { useLocation } from 'react-router-dom';

export default function Results() {
  const { state } = useLocation();

let keywordsArr = [...new Set(state.keywords)];
console.log(keywordsArr);

  return (
    <main className="results-data" style={{textAlign: "center", margin: "0 auto"}}>
      <h2>Results</h2>
      <h3>Keywords</h3>
      <div className="details-list" style={{padding: "35px", width: "500px"}}>
      <ul>{keywordsArr.map(keyword => {return (<li className="li-keywords">{keyword}</li>)})}
      </ul>
      </div>
      <div>
      <p className="details-list">{state.data}</p>
      </div>
    </main>
  );
}