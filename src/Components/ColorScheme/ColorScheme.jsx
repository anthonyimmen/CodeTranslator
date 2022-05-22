import './ColorScheme.css' 

function ColorScheme(props) {

  function buttonClicked() {
    if (props.lightDark === "dark") {
      props.colorFunction("light")
    } else {
      props.colorFunction("dark");
    }
  }

  return props.lightDark === "dark" ? (
    <button id="darkMode" onClick={buttonClicked} />
  ) : (
    <button id="lightMode" onClick={buttonClicked} />
  );

}

export default ColorScheme