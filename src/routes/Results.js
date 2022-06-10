import * as React from 'react';

import { useLocation } from 'react-router-dom';

export default function Results() {
  const { state } = useLocation();

  return (
    <main className="results-data" style={{textAlign: "center"}}>
      <h2>Results</h2>
      <p>{state.data}</p>
    </main>
  );
}