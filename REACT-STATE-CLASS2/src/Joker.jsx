import { useState } from "react";

function Joker() {
  let Url = "https://official-joke-api.appspot.com/random_joke";

  let getJoke = async () => {
    let response = await fetch(Url);
    let jsonResponse = await response.json();
    setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
  };

  let [joke, setJoke] = useState({});

  return (
    <div>
      <h1>Joker</h1>
      <h2>{joke.setup}</h2>
      <h2>{joke.punchline}</h2>
      <button onClick={getJoke}>get</button>
    </div>
  );
}

export default Joker;
