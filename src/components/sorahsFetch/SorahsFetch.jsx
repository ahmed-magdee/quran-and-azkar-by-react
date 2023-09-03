import axios from "axios";
import { useContext, useEffect, useReducer, useRef } from "react";
import Loading from "../Animation/Loading";
import { NavLink } from "react-router-dom";
import { ContextSorahs } from "../constants/ContextSorahs";
import MainContainer from "../constants/MainContainer";
import { ContextLocalstorage } from "../constants/ContextLocalstorage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const initialState = {
  loading: true,
  sorahs: [],
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
        sorahs: action.payload,
        error: "",
      };
    case "failure":
      return {
        loading: false,
        sorahs: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

function SorahsFetch({ path }) {
  const [allSorahs, dispatch] = useReducer(reducer, initialState);
  const context = useContext(ContextSorahs);
  const { fetchDataStorage } = useContext(ContextLocalstorage);
  const aRef = useRef();

  useEffect(() => {
    dispatch({ type: "request" });
    axios
      .get("https://api.alquran.cloud/v1/surah")
      .then((response) => {
        const allData = response.data.data;
        dispatch({ type: "success", payload: allData });
        const aRef = setTimeout(() => {
          document.querySelector(".active-a") &&
            document
              .querySelector(".active-a")
              .scrollIntoView({ block: "center", behavior: "smooth" });
        });
      })
      .catch((error) => dispatch({ type: "failure", payload: "حدث خطأ ما !" }));
    return () => clearTimeout(aRef);
  }, []);

  const animateLoading = allSorahs.loading && <Loading />;
  const sorahsDivs = !allSorahs.loading && allSorahs.sorahs.length && (
    <div className="flex justify-center py-8 flex-wrap">
      {allSorahs.sorahs.map((sorah) => (
        <NavLink
          key={sorah.name}
          to={`${`${sorah.number}`}`}
          className={`relative w-[200px] h-[180px] bg-blue-50 m-3 flex items-center justify-center flex-col shadow-links-sorah-shadow py-[10px] rounded-xl transition-all duration-500 hover:-translate-y-[20px] hover:shadow-links-sorah-shadow-hover ${
            fetchDataStorage &&
            fetchDataStorage.name === sorah.name &&
            path === "#/quran" &&
            "active-a"
          }`}
          onClick={() =>
            context.data(sorah.name, sorah.number, sorah.numberOfAyahs)
          }
        >
          {fetchDataStorage &&
            fetchDataStorage.name === sorah.name &&
            path === "#/quran" && (
              <FontAwesomeIcon
                icon={faBookmark}
                className="absolute top-0 left-[15px] text-[50px] -z-[1] text-blue-400"
              />
            )}
          <h1 className="font-noto-reqaa mb-6 text-blue-800">{sorah.name}</h1>
          <div className="flex items-center justify-center flex-col">
            <p>رقمها في المصحف {sorah.number}</p>
            <p>عدد الآيات {sorah.numberOfAyahs}</p>
            <p>
              {sorah.revelationType === "Meccan" ? "سورة مكية" : "سورة مدنية"}
            </p>
          </div>
        </NavLink>
      ))}
    </div>
  );

  return (
    <div className="min-h-[calc(100vh-68px)]">
      <MainContainer>
        {animateLoading}
        <div>{sorahsDivs}</div>
      </MainContainer>
    </div>
  );
}

export default SorahsFetch;
