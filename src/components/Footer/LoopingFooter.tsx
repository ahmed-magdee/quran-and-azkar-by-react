import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { footerData } from "../../data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LoopingFooter() {
  //Looping Data
  const loopingData = footerData.map((one) => {
    return (
      <li className="mb-3 text-gray-400" key={one.span}>
        <a
          href={one.link}
          className={` hover:text-green-header dark:hover:text-dark-green transition-all duration-300 inline-flex items-center gap-2 group`}
          target="_blank"
        >
          <span
            className={`w-9 h-9 border border-gray-400 rounded-full inline-flex items-center justify-center text-xl group-hover:border-green-header dark:group-hover:border-dark-green`}
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
    <div className="w-full md:w-[calc(50%-10px)]">
      <h3 className="text-green-header dark:text-dark-green text-center md:text-right">
        لمتابعتي
      </h3>
      <ul className="follow-me mt-4 text-lg">
        {loopingData}
        <li>
          <a
            className="transition-colors duration-300 text-gray-400 hover:text-green-header dark:hover:text-dark-green inline-flex items-center gap-2 group"
            href="tel:01144871555"
            target="_blank"
          >
            <span
              className={`w-9 h-9 border border-gray-400 rounded-full inline-flex items-center justify-center text-xl group-hover:border-green-header dark:group-hover:border-dark-green`}
            >
              <FontAwesomeIcon icon={faPhone} className="" />
            </span>
            <span>01144871555</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
