import './App.css';
import Header from './Components/Header/Header'
import Prompt from './Components/Prompt/Prompt'
import Filters from './Components/Filters/Filters'
import ColorScheme from './Components/ColorScheme/ColorScheme'
import GitHubButton from './Components/GitHubButton/GitHubButton'
import React, { useState } from "react";

function App() {
  const [state, setState] = useState("dark");
  return (
    <div className={state === "dark" ? "AppDark" : "AppLight"}>
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
