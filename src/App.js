import './App.css';
import Header from './Components/Header/Header'
import Prompt from './Components/Prompt/Prompt'
import Filters from './Components/Filters/Filters'
import ColorScheme from './Components/ColorScheme/ColorScheme'
import GitHubButton from './Components/GitHubButton/GitHubButton'
import React, { useState } from "react";

// This is the main file for the application. It uses a State variable for keeping track of light and dark mode. The setState function is then passed as a prop to the ColorScheme component to allow the user to change the colors to their preference. The state is passed as a prop to all of the other components so their colors can be adjusted accordingly.

function App() {
  const [state, setState] = useState("dark");
  return (
    <div className={state === "dark" ? "AppDark" : "AppLight"} alt="The background image is a gif of code falling from the top of the screen like rain. There is a dark and light mode variant.">
      <header className="App-header">
        <Header lightDark={state} />
      </header>
      <div className="App-body">
        <div className="upperbody">
          <div id="inputAndResponseArea"></div>
          <Prompt lightDark={state} />
          <div id="filters">
            <Filters/>
          </div>
        </div>
      </div>
      <div id="darkLightModeToggle">
        <ColorScheme lightDark={state} colorFunction={setState} />
      </div>
      <div id="gitHub">
        <GitHubButton lightDark={state} />
      </div>
    </div>
  );
}

export default App;
