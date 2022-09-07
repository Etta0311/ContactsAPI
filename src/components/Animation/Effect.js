import React from "react";
import Typewriter from "typewriter-effect";
import "./Effect.css";

const Home = () => {
  return (
    <div>
      <pre className="anime">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(1500)
              .typeString(
                `Looking for someone?
Check your contacts here.`
              )
              .pauseFor(1000)
              .start();
          }}
        />
      </pre>
    </div>
  );
};

export default Home;
