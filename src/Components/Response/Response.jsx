import './Response.css'

// This component is used to visualize the API inputs and outputs.
function Response(props) {
  let lightPreference = props.lightDark;
  return (
    <div
      id="ResponseContainer"
      style={
        lightPreference === "dark"
          ? { backgroundColor: "white", color: "#4c4c4d" }
          : { backgroundColor: "#4c4c4d", color: "white" }
      }
    >
      <div className="ResponseTextContainer">
        <div className="ResponseTitle" id="PromptTitle">
          Prompt:
        </div>
        <div className="ResponseInput">{props.input}</div>
      </div>
      <div className="ResponseTextContainer">
        <div className="ResponseTitle">Response:</div>
        <div className="ResponseOutput">{props.output}</div>
      </div>
    </div>
  );
}

export default Response