import "./Header.css";

function Header(props) {
  let lightPreference = props.lightDark;
  return (
    <div id="Header">
      <div
        id="appTitle"
        style={
          lightPreference === "dark" ? { color: "white" } : { color: "#4c4c4d" }
        }
      >
        Code Translator
      </div>
      <div id="referenceSection">
        <div
          id="reference"
          style={
            lightPreference === "dark"
              ? { color: "white" }
              : { color: "#4c4c4d" }
          }
        >
          powered by
        </div>
        <button
          id={lightPreference === "dark" ? "openAILogoDark" : "openAILogoLight"}
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "https://beta.openai.com/overview";
          }}
          alt="Image of the OpenAI logo"
        ></button>
      </div>
    </div>
  );
}

export default Header;
