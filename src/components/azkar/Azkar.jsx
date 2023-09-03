import Header from "../header/Header";
import Loading from "../Animation/Loading";
import { useEffect, useReducer, useState } from "react";
import MainContainer from "../constants/MainContainer";
import ScrollToTop from "../ScrollToTop";
import axios from "axios";
import { allStyles } from "../constants/styles/allStyles";

const initialState = {
  loading: false,
  azkar: [],
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
        azkar: action.payload,
        error: "",
      };
    case "failure":
      return {
        loading: false,
        azkar: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

function Azkar() {
  const [allAzkar, dispatch] = useReducer(reducer, initialState);
  const [keyLi, setKeyLi] = useState("");
  let slice;
  let slice2;
  let data = [];

  useEffect(() => {
    document.title = "الأذكار";
    dispatch({ type: "request" });
    axios
      .get(
        `https://raw.githubusercontent.com/nawafalqari/azkar-api/56df51279ab6eb86dc2f6202c7de26c8948331c1/azkar.json`
      )
      .then((response) => {
        const allData = response.data;
        dispatch({ type: "success", payload: allData });
      })
      .catch((error) => dispatch({ type: "failure", payload: "حدث خطأ ما" }));
  }, []);

  const handleClickLi = (e) => setKeyLi(e.target.dataset.type);

  const dataKeys =
    !allAzkar.loading && allAzkar.azkar && Object.keys(allAzkar.azkar);

  if (keyLi !== "") {
    if (keyLi === dataKeys[0]) {
      slice = allAzkar.azkar[keyLi][0];
      slice2 = allAzkar.azkar[keyLi].slice(1, allAzkar.azkar[keyLi].length - 1);
      data = [...slice, ...slice2];
    } else {
      data = allAzkar.azkar[keyLi];
    }
  }

  const loadDiv = allAzkar.loading && <Loading />;
  const ulKeys = !allAzkar.loading && allAzkar.azkar && (
    <ul className="flex flex-wrap gap-5 items-center justify-center">
      {dataKeys.map((key) => (
        <li
          key={key}
          data-type={key}
          className={`${allStyles["li-zekr"]} ${keyLi === key && "active"}`}
          onClick={handleClickLi}
        >
          {key}
        </li>
      ))}
    </ul>
  );

  const dataDivs = !allAzkar.loading && allAzkar.azkar && keyLi && data && (
    <div>
      <h1 className="mb-6 text-blue-700 w-fit mx-auto border-b-[2px] border-blue-700">
        {keyLi}
      </h1>
      <div className="space-y-5">
        {data.map(
          (one) =>
            one.content !== "stop" && (
              <div key={one.content} className={allStyles["zekr-div"]}>
                <p>
                  {one.content !== "stop" &&
                    one.content
                      .split("\\n',")
                      .join(`" '"`)
                      .split(`'"`)
                      .join(" ")
                      .split(`"`)
                      .join(" ")
                      .split(`'`)
                      .join(" ")}
                  &nbsp;{" "}
                  {one.count && (
                    <span className="py-[2px] px-2 bg-blue-700 rounded-xl text-blue-50 text-sm whitespace-nowrap">
                      {+one.count === 1
                        ? "تُقرأ مرة"
                        : +one.count === 2
                        ? "تُقرأ مرتين"
                        : +one.count <= 10
                        ? `تُقرأ ${one.count} مرات`
                        : `تُقرأ ${one.count} مرة`}
                    </span>
                  )}
                </p>
                {one.description && (
                  <p className={allStyles["p-description"]}>
                    {one.description}
                  </p>
                )}
              </div>
            )
        )}
      </div>
    </div>
  );

  return (
    <div className="bg-[url('./assets/azkar.jpg')] min-h-screen bg-cover bg-fixed bg-center relative before:content-[''] before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-blue-200/60 z-10 before:-z-[1]">
      <Header />
      <ScrollToTop />
      <MainContainer>
        {loadDiv}
        {!allAzkar.loading && allAzkar.azkar && (
          <div className="py-16">{ulKeys}</div>
        )}
      </MainContainer>
      {!allAzkar.loading && allAzkar.azkar && keyLi && (
        <div className="text-center max-w-[700px] mx-auto py-8">
          <MainContainer>{dataDivs}</MainContainer>
        </div>
      )}
    </div>
  );
}

export default Azkar;
