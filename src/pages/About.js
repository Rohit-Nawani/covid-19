import React from "react";
import "../App.css";

function About() {
  return (
    <div
      style={{
        backgroundColor: "white",
        textAlign: "center",
      }}
    >
      <br />
      <h2>About</h2>
      <br />

      <div
        style={{
          padding: "20px",
          backgroundColor: "grey",
          color: "white",
          margin: "20px",
          borderRadius: "20px",
        }}
      >
        <div style={{ fontSize: "20px" }}>
          In the wake of the current global health crisis, it becomes vital for
          us to have accurate data, in order to make informed decisions and take
          precautionary measures. We also urge you to follow recommendations
          from the WHO and your respective governments, in order to prevent the
          further spread of this virus. Please stay safe, and we wish you and
          your families the best in these trying times. Let’s all share and act
          based on facts, not fear.
        </div>
        <br />
        <h4>How to connect?</h4>
        <div style={{ fontSize: "20px" }}>
          You can connect me via linkedIn{" "}
          <a href="https://www.linkedin.com/in/rohit-nawani98/" target="_blank">
            here
          </a>
          .
        </div>
        <br />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default About;
