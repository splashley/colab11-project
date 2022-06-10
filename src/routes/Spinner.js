import React from "react";
import ReactLoading from 'react-loading';

const Spinner = () => {
  return (
    <div className="spinner" aria-busy="true" aria-label="Loading - Do not refresh the page">
   <ReactLoading type={"spin"} color="#0000FF" height={'20%'} width={'20%'} />
   <p>Please wait while we analyze your job description!</p>
    </div>
  );
};


export default Spinner;