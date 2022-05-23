import "./ResponseList.css";
import Response from '../Response/Response'

// This component renders all the responses which will be created from the inputOutputArr from Prompt.jsx

function ResponseList(props) {

  let lightPreference = props.lightDark;
  let responseArray = [];

  function generateResponses(inputOutputArr) {
    for (let i = 0; i < inputOutputArr.length;) {
      let newestResponse = (
        <Response
          input={inputOutputArr[i]}
          output={inputOutputArr[i+1]}
          lightDark={lightPreference}
        />
      );
      responseArray.push(newestResponse);
      i += 2;
    }
    return responseArray
  }
  
  return (
    <div id="ResponseListContainer">
      <div
        id="ResponseListTitle"
        style={
          lightPreference === "dark" ? { color: "white" } : { color: "#4c4c4d" }
        }
      >
        Responses:
      </div>
      <div id="ResponseListItems">
        {generateResponses(props.responseList)}
      </div>
    </div>
  );
}

export default ResponseList;
