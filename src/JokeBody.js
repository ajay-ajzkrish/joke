import React from "react";
import { useEffect } from "react";

const JokeBody = ({ jokes, setJokes, jokePrint, setjokePrint }) => {
  const makeJoke = () => {
    if (jokes.type === "single") {
      console.log("yes");
      let tempstr = jokes.joke;
      setjokePrint(tempstr);
      console.log(tempstr);
    } else {
      console.log("no");
      let tempstr = jokes.setup + "  \n" + jokes.delivery;
      console.log(tempstr);
      setjokePrint(tempstr);
    }

    console.log(jokes.category);
  };

  useEffect(() => {
    makeJoke();
  }, [jokes]);

  return (
    <>
      <div className="joke">
        <section>Category : {jokes.category}</section>
        <div className="jokediv">{jokePrint}</div>
      </div>
    </>
  );
};

export default JokeBody;
