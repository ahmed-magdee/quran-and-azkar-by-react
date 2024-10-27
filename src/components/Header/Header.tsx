import { Link } from "react-router-dom";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LinksHeader from "./LinksHeader";
import { FormEvent, useEffect, useRef, useState } from "react";
import { classes } from "../../data/styles";
import DarkModeButton from "../DarkModeButton";

// Main Component
export default function Header() {
  // useState
  const [open, setOpen] = useState(false);
  const divSmallScreens = useRef<null | HTMLDivElement>(null);

  // useEffect to close menu
  useEffect(() => {
    function closeMenu() {
      setOpen(false);
    }
    if (divSmallScreens) {
      window.addEventListener("click", (e) => {
        if (e.target !== divSmallScreens.current) {
          closeMenu();
        }
      });
    }
  }, [divSmallScreens]);

  // handleClick
  const handleClick = (e: FormEvent) => {
    e.stopPropagation();
    setOpen(!open);
  };

  // Return
  return (
    <header
      className={`sticky top-0 bg-white dark:bg-slate-950 text-green-header dark:text-white h-[70px] flex items-center z-30 border-b border-green-header shadow-header-shadow`}
    >
      <div className="absolute border-b border-black" />
      <div className="container">
        <nav
          className={`flex items-center justify-between py-4 flex-row-reverse lg:flex-row`}
        >
          <h1 className="font-noto-urdo">
            <Link to={"/"}>قرآن وأذكار</Link>
          </h1>
          {/* All Links */}
          <div className="flex items-center gap-3">
            <LinksHeader
              classes={classes["header-links"]}
              classDiv={"hidden lg:flex items-center gap-3"}
            />
            {/* Links On Small Screens  */}
            <div className="links-small-screens block lg:hidden">
              <span
                className="flex"
                onClick={handleClick}
                ref={divSmallScreens}
              >
                <FontAwesomeIcon
                  icon={faBars}
                  className={`text-2xl cursor-pointer transition-all duration-300  ${
                    open
                      ? "text-green-header dark:text-dark-green "
                      : "text-green-700 hover:text-green-header dark:hover:text-dark-green"
                  }`}
                />
              </span>
              <div
                className={`absolute w-[calc(100%-30px)] ${
                  open ? "right-[15px]" : "-right-[100%]"
                } top-[80px] transition-all duration-300" `}
              >
                <LinksHeader
                  classDiv={`flex flex-col text-lg gap-4 rounded-md bg-white/80 dark:bg-slate-950/90 backdrop-blur-md p-4`}
                  classes="relative text-gray-400 transition-all duration-300 hover:text-green-header dark:hover:text-dark-green font-simibold before:content-[''] before:absolute before:right-0 before:-bottom-[6px] before:w-0 before:h-[1px] before:transition-all before:duration-300 before:bg-green-header hover:before:w-full font-cairo"
                />
              </div>
            </div>
            <DarkModeButton />
          </div>
        </nav>
      </div>
    </header>
  );
}
