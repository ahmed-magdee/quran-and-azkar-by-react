import axios from "axios";
import { useContext, useEffect, useReducer, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Animation/Loading";
import { allStyles } from "../constants/styles/allStyles";
import SaveComponent from "../saveComponent/SaveComponent";
import TafsirAyaPopup from "../tafsir/TafsirAyaPopup";
import MainContainer from "../constants/MainContainer";
import HeaderList from "../headerReturnSorahsList/HeaderList";
import ScrollToTop from "../ScrollToTop";
import { ContextLocalstorage } from "../constants/ContextLocalstorage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const initialState = {
  loading: false,
  sorah: [],
  error: "",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "request":
      return {
        ...state,
        loading: true,
      };
    case "success":
      return {
        loading: false,
        sorah: action.payload,
        error: "",
      };
    case "failure":
      return {
        loading: false,
        sorah: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

const initial = {
  name: "",
  number: "",
  aya: "",
};

function ReadSorah() {
  const { sorahId } = useParams();
  const [texts, dispatch] = useReducer(reducer, initialState);
  const [spanNumber, setSpanNumber] = useState(initial);
  const [save, setSave] = useState(false);
  const [note, setNote] = useState(true);
  const [windowScroll, setWindowScroll] = useState(false);
  const [tafsirPopup, setTafsirPopup] = useState(false);
  const dataStorage = useContext(ContextLocalstorage);
  const { fetchDataStorage } = useContext(ContextLocalstorage);
  const divRef = useRef();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    dispatch({ type: "request" });
    axios
      .get(`https://api.alquran.cloud/v1/surah/${sorahId && sorahId}`)
      .then((response) => {
        const allData = response.data.data;
        dispatch({ type: "success", payload: allData });
        const divRef = setTimeout(() => {
          document.querySelector(".book-mark") &&
            document
              .querySelector(".book-mark")
              .scrollIntoView({ block: "center", behavior: "smooth" });
        }, 50);
      })
      .catch((error) => dispatch({ type: "failure", payload: "حدث خطأ ما !" }));

    const handleScroll = () =>
      window.scrollY >= 300 ? setWindowScroll(true) : setWindowScroll(false);

    window.addEventListener("scroll", handleScroll);

    return () => {
      removeEventListener("scroll", handleScroll);
      clearTimeout(divRef);
    };
  }, []);

  if (save) {
    const timer = setTimeout(() => {
      clearTimeout(timer);
      setSave(false);
    }, 600);
  }

  const tafsirFunction = () => {
    setTafsirPopup(false);
  };

  const animateDiv = texts.loading && <Loading />;
  const dataDiv = !texts.loading && texts.sorah && texts.sorah.ayahs && (
    <div className="text-center">
      {note && (
        <div className="text-right animate-color-change p-3 w-fit rounded-tl-xl rounded-br-xl text-blue-800 font-noto-normal fixed z-30 border-blue-800 shadow-popup-shadow">
          <p className="mb-2">تستطيع الضغط علي الأية لتفسيرها!</p>
          <p>تستطيع الضغط علي رقم الآية لعمل حفظ!</p>
          <button
            className="w-5 h-5 rounded-full outline-none bg-red-500 text-white absolute -top-[10px] -right-[10px] font-cairo flex items-center justify-center"
            onClick={() => setNote(false)}
          >
            x
          </button>
        </div>
      )}
      <div className="text-blue-800 text-2xl">
        <h1 className="text-blue-900 font-noto-reqaa mb-[15px]">
          {texts.sorah.name}
        </h1>
        <p className="mt-8">
          رقم{" "}
          <span
            className={`${allStyles["span-number"]} text-base`}
          >{`${texts.sorah.number}`}</span>{" "}
          في المصحف
        </p>
        <p className="mt-[10px]">
          هي{" "}
          <span>
            {texts.sorah.revelationType === "Meccan"
              ? "سورة مكية"
              : "سورة مدنية"}
          </span>
        </p>
      </div>
      <div className="mt-14 text-lg sm:text-2xl mx-auto bg-blue-200 p-[10px] sm:p-5 rounded-2xl">
        {texts.sorah.ayahs.map((aya) => (
          <div
            key={aya.number}
            className={`relative mb-5 font-bold text-blue-800 bg-blue-100 p-[10px] rounded-xl transition-all duration-300 hover:bg-blue-200 shadow-links-sorah-shadow hover:-translate-y-1 hover:shadow-links-aya-hover  ${
              fetchDataStorage &&
              fetchDataStorage.name == texts.sorah.name &&
              fetchDataStorage &&
              fetchDataStorage.aya == aya.numberInSurah &&
              "book-mark"
            }`}
          >
            {fetchDataStorage &&
              fetchDataStorage.name == texts.sorah.name &&
              fetchDataStorage &&
              fetchDataStorage.aya == aya.numberInSurah && (
                <FontAwesomeIcon
                  icon={faBookmark}
                  className="absolute top-0 left-[15px] text-[50px] -z-[1] text-blue-400"
                />
              )}
            <p
              className="font-noto-normal leading-[1.5] sm:leading-[2.5] inline-block ml-3 cursor-pointer"
              onClick={() => {
                setTafsirPopup(true);
                setSpanNumber({
                  ...spanNumber,
                  name: texts.sorah.name,
                  number: texts.sorah.number,
                  aya: aya.numberInSurah,
                });
              }}
            >
              {aya.text}
            </p>
            <span
              className={`cursor-pointer text-blue-400 font-normal relative group before:content-[''] before:absolute before:border-[10px] before:border-r-transparent before:border-b-transparent before:border-l-transparent before:-top-[11px] before:left-1/2 before:-translate-x-1/2 before:border-t-gray-600 before:hidden hover:before:block ${
                save && "pointer-events-none"
              } bg-[url(../src/assets/aya-numbers.png)] bg-cover align-middle inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 text-base`}
              onClick={() => {
                setSpanNumber({
                  ...spanNumber,
                  name: texts.sorah.name,
                  number: texts.sorah.number,
                  aya: aya.numberInSurah,
                });
                setSave(true);
                dataStorage.setDataLocalStorage(
                  texts.sorah.name,
                  texts.sorah.number,
                  aya.numberInSurah
                );
              }}
            >
              {aya.numberInSurah}
              <span className="absolute -top-[40px] w-[145px] bg-gray-600 py-1 text-white text-base rounded-xl -left-[1px] opacity-0 transition-all duration-300 hidden group-hover:block group-hover:opacity-[1]">
                أضغط لحفظ الآية!
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  const SaveComp = save && spanNumber.aya && save && <SaveComponent save />;

  return (
    <div className="bg-[url(../src/assets/moshaf2.jpg)] bg-cover bg-fixed bg-center min-h-screen relative before:content-[''] before:absolute before:w-full before:h-full before:bg-blue-100/50 before:backdrop-blur-sm before:top-0 before:left-0">
      <HeaderList scroll={windowScroll} />
      <ScrollToTop />
      <div>
        <MainContainer>
          {animateDiv}
          {!texts.loading && texts.sorah && texts.sorah.ayahs && (
            <div className="py-4">{dataDiv}</div>
          )}

          {SaveComp}
          {tafsirPopup && (
            <TafsirAyaPopup
              popup
              sorahData={spanNumber}
              active={tafsirPopup}
              func={tafsirFunction}
            />
          )}
        </MainContainer>
      </div>
    </div>
  );
}

export default ReadSorah;
