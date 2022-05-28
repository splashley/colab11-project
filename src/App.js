import logo from "./assets/logo.png";
import sideImg from "./assets/resume.jpg";

function App() {
  return (
    <div className="page">
      <header className="header">
        <div>
          <img src={logo} className="logo" alt="Right Your Resume" />
        </div>
        <div>
          <button className="btn btn--blue">Feedback</button>
        </div>
      </header>
      <div className="content">
        <div style={{padding: "0 5%"}}>
        <h2>
          We scan job descriptions and give you concrete examples for
          highlighting your transferable skills.
        </h2>
        </div>
        <div className="steps">
          <div>
            <div className="steps-box">
              <div>
                <div className="steps-number">
                  <p>1</p>
                </div>
                <div className="steps-name">
                  <h4>Scan</h4>
                </div>
              </div>
              <div className="steps-description">
                <p>We can job descriptions for keywords</p>
              </div>
            </div>
            <div className="steps-box">
              <div>
                <div className="steps-number">
                  <p>2</p>
                </div>
                <div className="steps-name">
                  <h4>Identify</h4>
                </div>
              </div>
              <div className="steps-description">
                <p>So you can use them to identify your transferable skills</p>
              </div>
            </div>
            <div className="steps-box">
              <div>
                <div className="steps-number">
                  <p>3</p>
                </div>
                <div className="steps-name">
                  <h4>Phrase</h4>
                </div>
              </div>
              <div className="steps-description">
                <p>
                  We can even show you examples of how to phrase the skills from
                  real resumes that landed interviews
                </p>
              </div>
            </div>
            <div className="steps-box">
              <div>
                <div className="steps-number">
                  <p>4</p>
                </div>
                <div className="steps-name">
                  <h4>Apply</h4>
                </div>
              </div>
              <div className="steps-description">
                <p>So you can apply with confidence</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src={sideImg}
              alt="Man Writing a Resume"
              className="imgResume"
            />
          </div>
        </div>
        <div className="bottom-section">
          <h3>Your Transferable Skills at Work</h3>
          <div className="btn-section">
            <button className="btn btn--nextsteps btn--blue">
              Scan a Job Description
            </button>
            <button className="btn btn--nextsteps btn--blue">
              Check out TBD
            </button>
          </div>
        </div>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
