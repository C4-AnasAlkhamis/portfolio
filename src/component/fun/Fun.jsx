import "./fun.css";
import { useEffect, useState } from "react";
import axios from "axios";
function Fun() {
  const [joke, setJoke] = useState();
  const generateJoke = async () => {
    const res = await axios.get("https://icanhazdadjoke.com", {
      headers: {
        Accept: "application/json",
      },
    });
    setJoke(res.data.joke);
  };
  useEffect(() => {
    generateJoke();
  }, []);
  return (
    <div className="container">
      <div className="joke_box">
        <h3>Don't Laugh Challenge</h3>
        <div id="joke" className="joke">
          {joke ? joke : "//Joke goes here"}
        </div>
        <button onClick={generateJoke} id="jokeBtn" className="btn">
          Get Another Joke
        </button>
      </div>
    </div>
  );
}

export default Fun;
