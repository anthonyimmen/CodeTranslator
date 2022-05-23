import './GitHubButton.css'

// Button used to as link the Github to view the source code.
function GitHubButton(props) {
  let lightPreference = props.lightDark
  return (
    <div id="GithubReference">
      <div
        id="GithubTitle"
        style={
          lightPreference === "dark" ? { color: "white" } : { color: "#4c4c4d" }
        }
      >
        View code on GitHub @
      </div>
      <button
        id="githubLogo"
        onClick={(e) => {
          e.preventDefault();
          window.location.href =
            "https://github.com/anthonyimmen/CodeTranslator";
        }}
        alt="Image of the GitHub for link to view the code created to build this site"
      ></button>
    </div>
  );
}

export default GitHubButton