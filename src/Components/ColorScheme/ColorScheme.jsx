import './ColorScheme.css' 

function ColorScheme(props) {

  function buttonClicked() {
    if (props.lightDark === "dark") {
      props.colorFunction("light")
    } else {
      props.colorFunction("dark");
    }
  }

  // There are two different buttons that used to display different images depending on light or dark mode.
  return props.lightDark === "dark" ? (
    <button id="darkMode" onClick={buttonClicked} alt="Image of a Moon for Dark Mode"/>
  ) : (
    <button id="lightMode" onClick={buttonClicked} alt="Image of a Sun for Light Mode"/>
  );

}

export default ColorScheme