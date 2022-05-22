import "./Filters.css";

function Filters() {
  let python = true;
  let java = false;
  let cPP = false;
  let currentFilter = "Python 3";

  function buttonClicked(event) {
    const id = event.currentTarget.id;
    if (id === "python") {
      python = true;
      java = false;
      cPP = false;
      currentFilter = "Python 3";
    } else if (id === "Java") {
      python = false;
      java = true;
      cPP = false;
      currentFilter = "Java";
    } else if (id === "C++") {
      python = false;
      java = false;
      cPP = true;
      currentFilter = "C++";
    }
    setColor(id);
  }

  function setColor(elementFlag) {
    const links = document.getElementsByClassName("filter");
    const element = document.getElementById(elementFlag);

    for (const link of links) {
      link.style.backgroundColor = "grey";
      link.style.color = "white";
    }

    element.style.backgroundColor = "#17b332";
  }

  return (
    <div id="filterContainer">
      <button
        id="Python"
        className="filter"
        onClick={buttonClicked}
        style={{ backgroundColor: python ? "#17b332" : "gray" }}
      >
        Python Translator
      </button>
      <button
        id="Java"
        className="filter"
        onClick={buttonClicked}
        style={{ backgroundColor: java ? "#17b332" : "gray" }}
      >
        Java Translator
      </button>
      <button
        id="C++"
        className="filter"
        onClick={buttonClicked}
        style={{ backgroundColor: cPP ? "#17b332" : "gray" }}
      >
        C++ Translator
      </button>
    </div>
  );
}

export default Filters;
