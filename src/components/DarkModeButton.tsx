import { useEffect, useState } from "react";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DarkModeButton() {
  const [position, setPosition] = useState(false);

  // useEffect to get localstorage darkmode
  useEffect(() => {
    const darkmode = window.localStorage.getItem("darkmode");
    if (darkmode) {
      setPosition(JSON.parse(darkmode));
    } else {
      window.localStorage.setItem("darkmode", "false");
    }
  }, []);

  // useEffect to set class to html
  useEffect(() => {
    const html = document.querySelector("html");
    if (position) {
      html?.classList.add("dark");
    } else {
      html?.classList.remove("dark");
    }
  }, [position]);

  // onclick handleClick
  const handleClick = () => {
    const dark = !position;
    if (dark) {
      window.localStorage.setItem("darkmode", "true");
    } else {
      window.localStorage.setItem("darkmode", "false");
    }
    console.log(dark);
    setPosition((prev) => !prev);
  };

  return (
    <button
      type="button"
      label-area="darkmode-button"
      title="darkmode-btn"
      className="flex items-center justify-center"
      onClick={handleClick}
    >
      {!position ? (
        <FontAwesomeIcon size="lg" icon={faSun} />
      ) : (
        <FontAwesomeIcon size="lg" icon={faMoon} />
      )}
    </button>
  );
}

export default DarkModeButton;
