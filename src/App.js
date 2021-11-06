import "./App.css";
import axios from "axios";
import React from "react";
import JokeBody from "./JokeBody";
import { useState, useEffect } from "react";
import Footer from "./Footer";
function App() {
  const [jokes, setJokes] = useState([]);
  const [jokePrint, setjokePrint] = useState("loading");
  var options = {
    method: "GET",
    url: "https://v2.jokeapi.dev/joke/Any",
  };

  const newsApi = async () => {
    axios
      .request(options)
      .then(function (response) {
        setJokes(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    newsApi();
    setjokePrint("Loading");
  }, []);

  return (
    <>
      <div className="App">
        <main>
          <section className="glass">
            <JokeBody
              jokes={jokes}
              setJokes={setJokes}
              jokePrint={jokePrint}
              setjokePrint={setjokePrint}
            />
          </section>
        </main>
        <div className="circle1"></div>
        <div className="circle2"></div>
        <Footer />
      </div>
    </>
  );
}

export default App;
