import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function ScrollToTop() {
  const [windowScroll, setWindowScroll] = useState(false);

  window.onscroll = () => {
    window.scrollY >= 300 ? setWindowScroll(true) : setWindowScroll(false);
  };
  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      aria-label="scroll-to-top"
      className={`fixed  bottom-5 border-none outline-none w-10 h-10 text-xl rounded-full bg-blue-900 text-white transition-all duration-300 z-20 ${
        windowScroll ? "right-5" : "-right-10"
      }`}
      onClick={toTop}
    >
      <FontAwesomeIcon icon={faChevronUp} />
    </button>
  );
}

export default ScrollToTop;
