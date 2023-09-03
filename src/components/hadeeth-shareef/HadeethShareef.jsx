import { useEffect, useReducer, useState } from "react";
import Header from "../header/Header";
import MainContainer from "../constants/MainContainer";
import axios from "axios";
import Loading from "../Animation/Loading";

const initialState = {
  loading: false,
  hadeeths: [],
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
        hadeeths: action.payload,
        error: "",
      };
    case "failure":
      return {
        loading: false,
        hadeeths: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

function HadeethShareef() {
  const [allHadeeths, dispatch] = useReducer(reducer, initialState);
  const [button, setButton] = useState(0);
  const [selectValue, setSelectValue] = useState(1);

  useEffect(() => {
    document.title = "الحديث الشريف";
    dispatch({ type: "request" });
    axios
      .get(
        `https://hadis-api-id.vercel.app/hadith/abu-dawud?page=${+selectValue}&limit=300`
      )
      .then((response) => {
        const data = response.data;
        dispatch({ type: "success", payload: data });
      })
      .catch((error) => dispatch({ type: "failure", payload: "حدث خطأ ما" }));
  }, [selectValue]);

  const changeHandler = (e) => {
    setSelectValue(e.target.value);
    setButton(0);
  };

  const loadDiv = allHadeeths.loading && <Loading />;
  const dataDiv = !allHadeeths.loading &&
    allHadeeths.hadeeths &&
    allHadeeths.hadeeths.items && (
      <div className="text-center max-w-[700px] mx-auto mt-14 pb-8">
        <div className="address py-5 px-[15px] shadow-popup-shadow bg-blue-200 rounded-xl">
          <p className="text-blue-700 mb-[10px] text-xl font-bold">
            إجمالي الأحاديث هو <span>{allHadeeths.hadeeths.total}</span>
          </p>
          <p className="text-blue-500 text-lg underline">
            هذا حديث رقم{" "}
            <span>{allHadeeths.hadeeths.items[+button].number}</span> من{" "}
            <span>{allHadeeths.hadeeths.pagination.endIndex + 1}</span>
          </p>
        </div>
        <div className="data mt-10">
          <p className="bg-blue-200 p-5 text-lg text-blue-700 leading-[2.5] shadow-popup-shadow rounded-xl">
            {allHadeeths.hadeeths.items[+button].arab}
          </p>
          <div className="select-and-buttons mt-5 flex items-center justify-between">
            <button
              className={`bg-blue-100 text-blue-700 w-[70px] py-1 rounded-xl shadow-popup-shadow transition-all duration-300 hover:bg-blue-300 ${
                button == +allHadeeths.hadeeths.pagination.pageSize &&
                "pointer-events-none bg-white text-blue-100"
              }`}
              onClick={() => setButton((prevState) => prevState + 1)}
            >
              التالي
            </button>
            <select
              name="page-number"
              id="page-number"
              value={`${selectValue}`}
              onChange={changeHandler}
              className="text-[14px] sm:text-base py-1 w-[80px] sm:w-[100px] bg-blue-100 transition-all duration-300 focus:bg-blue-300 rounded-xl outline-none shadow-popup-shadow"
            >
              {allHadeeths.hadeeths.pagination.pages.map((one) => (
                <option key={one} value={one}>
                  الصفحة {one}
                </option>
              ))}
            </select>
            <button
              className={`bg-blue-100 text-blue-700 w-[70px] py-1 rounded-xl shadow-popup-shadow transition-all duration-300 hover:bg-blue-300 ${
                button === 0 && "pointer-events-none bg-white text-blue-100"
              }`}
              onClick={() => setButton((prevState) => prevState - 1)}
            >
              السابق
            </button>
          </div>
        </div>
      </div>
    );

  return (
    <div className="bg-[url('../src/assets/almasjid-alnabawi.jpg')] min-h-screen bg-cover bg-fixed bg-center bg-blue-100 relative before:content-[''] before:absolute before:w-full before:h-full before:bg-blue-200/50 z-20 before:-z-[1] before:top-0 before:left-0">
      <Header />
      {loadDiv}
      <MainContainer>{dataDiv}</MainContainer>
    </div>
  );
}

export default HadeethShareef;
