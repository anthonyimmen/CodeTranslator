import './GitHubButton.css'

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
          window.location.href = "https://github.com/anthonyimmen";
        }}
      ></button>
    </div>
  );
}

export default GitHubButton