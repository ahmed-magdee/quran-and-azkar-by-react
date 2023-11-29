import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { footerData } from "../../data/data";
import { classes } from "../../data/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LoopingFooter() {
  //Looping Data
  const loopingData = footerData.map((one) => {
    return (
      <li className="mb-3 text-gray-400" key={one.span}>
        <a
          href={one.link}
          className={` hover:text-green-header transition-all duration-300 inline-flex items-center gap-2 group`}
          target="_blank"
        >
          <span
            className={`w-9 h-9 border border-gray-400 rounded-full inline-flex items-center justify-center text-xl group-hover:border-green-header`}
          >
            {one.icon}
          </span>
          <span className="inline-block">{one.span}</span>
        </a>
      </li>
    );
  });

  // Return
  return (
    <div className={classes["footer-divs"]}>
      <h3 className="text-green-header text-center md:text-right">لمتابعتي</h3>
      <ul className="follow-me mt-4 text-lg">
        {loopingData}
        <li>
          <a
            className="transition-all duration-300 text-gray-400 hover:text-green-header inline-flex items-center gap-2 group"
            href="tel:01144871555"
            target="_blank"
          >
            <span
              className={`w-9 h-9 border border-gray-400 rounded-full inline-flex items-center justify-center text-xl group-hover:border-green-header`}
            >
              <FontAwesomeIcon icon={faPhone} />
            </span>
            <span>01144871555</span>
          </a>
        </li>
      </ul>
    </div>
  );
}