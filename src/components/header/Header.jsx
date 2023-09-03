import { NavLink, useNavigate } from "react-router-dom";
import { linksHeader } from "./linksHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { mainSideDiv } from "../constants/mainSideDiv";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { allStyles } from "../constants/styles/allStyles";
import { ContextLocalstorage } from "../constants/ContextLocalstorage";

function Header({ section }) {
  const [status, setStatus] = useState(false);
  const [deleteData, setDeleteData] = useState(false);
  const { deleteDataStorage } = useContext(ContextLocalstorage);
  const navigate = useNavigate();
  const [text] = useTypewriter({
    words: mainSideDiv,
    loop: {},
  });
  const { fetchDataStorage } = useContext(ContextLocalstorage);
  const clickHandle = () => {
    setStatus(!status);
  };

  const delateDataStorageHandle = () => setDeleteData(true);

  const deleteComponent = (
    <div className="fixed top-0 left-0 bg-blue-100/70 w-full h-full z-30 border-[15px] border-transparent">
      <div className={allStyles["div-hefz"]}>
        هل تريد حذف علامة الحفظ؟
        <div className="mt-5 flex items-center justify-center gap-[10px]">
          <button
            className="bg-blue-800 rounded-xl w-[70px] py-[5px] transition-all duration-300 hover:bg-red-500"
            onClick={() => {
              setDeleteData(false);
              deleteDataStorage();
              window.location.reload();
            }}
          >
            نعم
          </button>
          <button
            className="bg-blue-800 rounded-xl w-[70px] py-[5px]"
            onClick={() => setDeleteData(false)}
          >
            لا
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <header
        className={`${
          !section && "bg-gradient-to-r from-blue-600 to-blue-400"
        }`}
      >
        {section && (
          <div
            className={`img absolute w-full h-full top-0 right-0 -z-[1] bg-[url('assets/masjed-haram.jpg')] bg-cover bg-center before:content-[''] before:absolute before:w-full before:h-full before:bg-black/40 before:top-0 before:right-0`}
          ></div>
        )}
        <div className={`container ${section && "h-screen"} relative`}>
          <nav
            className={`flex items-center justify-between py-4 ${
              section && "border-b border-b-white"
            }`}
          >
            <h1
              className={`${
                section ? "text-blue-600" : "text-blue-200"
              } font-noto-reqaa order-1 lg:-order-1 cursor-pointer`}
              onClick={() => navigate("/")}
            >
              قرآن وأذكار
            </h1>
            <div className="space-x-3 space-x-reverse hidden lg:block">
              {linksHeader.map((link) => (
                <NavLink
                  key={link.id}
                  to={link.to}
                  className={
                    "relative text-white transition-all duration-300 before:content-[''] before:absolute before:w-0 before:h-[1px] before:right-0 before:-bottom-[10px] before:bg-blue-800 before:duration-300 hover:text-blue-200 hover:before:w-full"
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              {fetchDataStorage && fetchDataStorage.name && (
                <button
                  name="delete-data"
                  className={allStyles["delete-data"]}
                  onClick={delateDataStorageHandle}
                >
                  حذف علامة الحفظ؟
                </button>
              )}
            </div>
            <div className="links-icon block lg:hidden z-20">
              <FontAwesomeIcon
                icon={faBars}
                className={`text-3xl cursor-pointer transition-all duration-300 ${
                  status ? "text-blue-600" : "text-white"
                }`}
                onClick={clickHandle}
              />
              <div
                className={`icon-links absolute top-24 right-0 ${
                  status ? "block" : "hidden"
                } px-[15px] w-full`}
              >
                <div
                  className={`flex items-start flex-col gap-5 bg-gradient-to-r from-blue-600 to-blue-400 w-full left-0 p-5 rounded-xl`}
                >
                  {linksHeader.map((link) => (
                    <NavLink
                      key={link.id}
                      to={link.to}
                      className={
                        "relative text-white transition-all duration-300 before:content-[''] before:absolute before:w-0 before:h-[1px] before:right-0 before:-bottom-[10px] before:bg-blue-800 before:duration-300 hover:text-blue-200 hover:before:w-full hover:pr-5 text-base sm:text-lg block w-full"
                      }
                    >
                      {link.name}
                    </NavLink>
                  ))}
                  {fetchDataStorage && fetchDataStorage.name && (
                    <button
                      name="delete-data"
                      className={allStyles["delete-data"]}
                      onClick={() => {
                        setDeleteData(false);
                        delateDataStorageHandle();
                      }}
                    >
                      حذف علامة الحفظ؟
                    </button>
                  )}
                </div>
              </div>
            </div>
          </nav>
          {section && (
            <div className="absolute w-full left-0 top-1/2 -translate-y-1/2 text-center px-[15px]">
              <div className="text-2xl sm:text-6xl font-bold bg-blue-100 py-6 px-[10px] max-w-[700px] backdrop-blur-[5px] mx-auto rounded-xl">
                <span className="text-blue-600">{text}</span>
                <span className="text-blue-500">
                  <Cursor cursorStyle="|" />
                </span>
              </div>
            </div>
          )}
          {section && (
            <div className="text-white absolute bottom-20 right-0 animate-hide-and-show pr-[15px]">
              <h2 className="mb-5">مرحبا بك في</h2>
              <p>
                موقع&nbsp;
                <span className="font-noto-reqaa text-blue-400">
                  قرآن وأذكار
                </span>
                &nbsp;الإسلامي
              </p>
            </div>
          )}
        </div>
      </header>
      {deleteData && deleteComponent}
    </>
  );
}

export default Header;
