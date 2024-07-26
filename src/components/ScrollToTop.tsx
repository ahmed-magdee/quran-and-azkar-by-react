import { faChevronUp } from "@fortawesome/free-solid-svg-icons/faChevronUp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  window.onscroll = () => {
    if (window.scrollY >= 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      name="scroll-to-top"
      id="scroll-to-top"
      className={`fixed w-10 h-10 bg-green-header text-white border-none outline-none rounded-full bottom-5 transition-all duration-300 ${
        show ? "right-5" : "-right-10"
      } z-30`}
      type="button"
      title="To Top"
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={faChevronUp} />
    </button>
  );
}
