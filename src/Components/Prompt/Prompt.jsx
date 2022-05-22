import "./Prompt.css";
import ResponseList from "../ResponseList/ResponseList";
import React, { useState } from "react";
import Filters from "../Filters/Filters";

let inputOutputArr = [];

function Prompt(props) {
  const [promptInput, setPromptInput] = useState("");

  async function onSubmit(event) {
    setPromptInput(promptInput);
    event.preventDefault();
    const data = {
      prompt:
        "# " +
        Filters.currentFilter +
        "\n " +
        promptInput +
        " # Explanation of what the code does\n\n#",
      temperature: 0.5,
      max_tokens: 128,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ["#"],
    };
    const response = await fetch(
      "https://api.openai.com/v1/engines/text-curie-001/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_SECRET}`,
        },
        body: JSON.stringify(data),
      }
    );
    const finalData = await response.json();
    let result = finalData.choices[0].text;
    console.log(result);

    if (promptInput === "") {
      return;
    } else {
      inputOutputArr.unshift(finalData.choices[0].text);
      inputOutputArr.unshift(promptInput);
      setPromptInput("");
    }
  }

  let lightPreference = props.lightDark;
  return (
    <div id="promptAndResponses">
      <div
        id="promptContainer"
        style={
          lightPreference === "dark"
            ? { backgroundColor: "white" }
            : { backgroundColor: "#4c4c4d" }
        }
      >
        <div id="promptDescription">
          <div
            id="promptTitle"
            style={
              lightPreference === "dark"
                ? { color: "#4c4c4d" }
                : { color: "white" }
            }
          >
            Enter a code snippet:
          </div>
          <button id="submitButton" onClick={onSubmit}>
            Submit
          </button>
        </div>

        <div id="txtBox">
          <textarea
            className="promptTextArea"
            value={promptInput}
            placeholder="#
            def remove_common_prefix(x, prefix, ws_prefix): #"
            onChange={(e) => setPromptInput(e.target.value)}
          />
        </div>
      </div>
      <ResponseList lightDark={lightPreference} responseList={inputOutputArr} />
    </div>
  );
}

export default Prompt;
