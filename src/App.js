import logo from "./assets/logo.png";

import Home from "./routes/Home";
import ScanJobDescription from "./routes/ScanJobDescription";
import { Route, Routes, Outlet } from "react-router-dom";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Results from "./routes/Results";
import ReactStars from "react-stars";
import axios from "axios";

function App() {
  let feedbackRating = "";

  const ratingChanged = (rating) => {
    feedbackRating = rating;
  };

  const submitFeedback = (element) => {
    element.preventDefault();
    axios
      .post("http://localhost:3001/api/handlefeedback", {
        feedbackRating: feedbackRating,
        feedback: element.target[0].value,
      })
      .then((res) => console.log(res))
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="page">
      <header className="header">
        <div>
          <img src={logo} className="logo" alt="Right Your Resume" />
        </div>
        <div>
          <Popup
            trigger={<button className="btn btn--blue">Feedback</button>}
            modal
            nested
          >
            {(close) => (
              <div className="modal">
                <div className="modal-close">
                  <button className="btn--modal-close" onClick={close}>
                    &times;
                  </button>
                </div>
                <div className="modal-header">Feedback</div>
                <div className="modal-content">
                  <p>Blah blah give us feedback</p>
                  <form onSubmit={submitFeedback}>
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={40}
                      color2={"#ffd700"}
                    />
                    {/* <label for="feedback" className="visuallyhidden">What feedback would you like to share?</label> */}
                    <textarea
                      name="feedback"
                      id="feedback"
                      placeholder="Let us know your thoughts"
                    ></textarea>
                    <button className="btn btn--blue">Submit</button>
                  </form>
                </div>
              </div>
            )}
          </Popup>
        </div>
      </header>
      <Outlet />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/scanjobdescription" element={<ScanJobDescription />} />
        <Route path="/results" element={<Results />} />
        <Route
          path="*"
          element={
            <main>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
      <footer>Right Your Resume © 2022</footer>
    </div>
  );
}

export default App;
