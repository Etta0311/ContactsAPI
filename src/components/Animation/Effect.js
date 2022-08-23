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
                `Cat-Lovers?
Check out some random fun facts about cat!!
Click the below button.`
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
