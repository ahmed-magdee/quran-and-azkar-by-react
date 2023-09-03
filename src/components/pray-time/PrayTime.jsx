import { useEffect, useReducer, useState } from "react";
import Header from "../header/Header";
import axios from "axios";
import MainContainer from "../constants/MainContainer";
import { allStyles } from "../constants/styles/allStyles";
import Loading from "../Animation/Loading";
import { rightLocation } from "../constants/mainSideDiv";

const TimingComp = ({ time }) => {
  const [hours, setHours] = useState(null);
  const keys = Object.keys(time);
  const date = new Date();

  useState(() => {
    setHours(date.getHours());
  }, []);

  const newKeys = keys.filter(
    (key) =>
      key !== "Sunrise" &&
      key !== "Sunset" &&
      key !== "Imsak" &&
      key !== "Midnight" &&
      key !== "Firstthird"
  );

  // const newest = newKeys.reduce((accu, current) =>
  //   (+time[accu] ? +time[accu].split(":")[0] - +hours : 0) >
  //   (+time[current] ? +time[current].split(":")[0] : 0)
  //     ? time[accu]
  //     : time[current]
  // );

  // console.log(newest);

  return (
    <ul className="mt-8 mx-auto max-w-[700px] flex items-center justify-center flex-wrap">
      {newKeys.map((key) => (
        <li
          key={key}
          className={`bg-blue-50 relative rounded-xl text-blue-500 w-[150px] h-[130px] text-[30px] flex items-center justify-center flex-col m-5 shadow-popup-shadow`}
        >
          <p>
            {key === "Fajr"
              ? "الفجر"
              : key === "Dhuhr"
              ? "الظهر"
              : key === "Asr"
              ? "العصر"
              : key === "Maghrib"
              ? "المغرب"
              : key === "Isha"
              ? "العشاء"
              : key === "Lastthird" && "الثلث الأخير"}
          </p>
          <p>{time[key]}</p>
        </li>
      ))}
    </ul>
  );
};

const initialState = {
  loading: false,
  prayTime: [],
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
        prayTime: action.payload,
        error: "",
      };
    case "failure":
      return {
        loading: false,
        prayTime: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

function PrayTime() {
  const [timePrayData, dispatch] = useReducer(reducer, initialState);
  const [selectValue, setSelectValue] = useState("الاسكندرية");
  const dateNow = new Date();
  const theDay = dateNow.getDate();
  const theMonth = dateNow.getMonth() + 1;
  const theYear = dateNow.getFullYear();

  useEffect(() => {
    document.title = "مواقيت الصلاة";
    dispatch({ type: "request" });
    axios
      .get(
        `https://api.aladhan.com/v1/timingsByCity/${theDay}-${theMonth}-${theYear}?city=${selectValue}&country=egypt`
      )
      .then((response) => {
        const allData = response.data;
        dispatch({ type: "success", payload: allData });
      })
      .catch((error) => dispatch({ type: "failure", payload: "حدث خطأ ما" }));
  }, [selectValue]);

  const handleSelect = (e) => setSelectValue(e.target.value);

  const loadingDiv = timePrayData.loading && <Loading />;
  const dateHeading = !timePrayData.loading && timePrayData.prayTime.data && (
    <div>
      <h1 className="text-blue-600 mb-[15px]">{`{مواقيت الصلاة}`}</h1>
      <h2 className="text-blue-500">
        {timePrayData.prayTime.data.date.hijri.weekday.ar} الموافق{" "}
        {`${timePrayData.prayTime.data.date.hijri.day}-${timePrayData.prayTime.data.date.hijri.month.ar}-${timePrayData.prayTime.data.date.hijri.year} هـ`}
      </h2>
    </div>
  );
  const timing = !timePrayData.loading && timePrayData.prayTime.data && (
    <TimingComp time={timePrayData.prayTime.data.timings} />
  );

  const selectDivs = (
    <div className="mt-5 text-blue-500 text-base sm:text-lg">
      <p>هذه المواقيت طبقا لمحافظة {selectValue}</p>
      <p className="mt-[15px] outline-none" id="mohafaza">
        أختر محافظتك الصحيحة{" "}
        <select
          className="border border-blue-600 outline-none rounded-lg"
          name="mohafaza"
          id="mohafaza"
          value={selectValue}
          onChange={handleSelect}
        >
          {rightLocation.map((one) => (
            <option value={one} key={one}>
              {one}
            </option>
          ))}
        </select>
      </p>
    </div>
  );

  return (
    <div className={allStyles["pray-div"]}>
      <Header />
      {loadingDiv}
      {!timePrayData.loading && timePrayData.prayTime.data && (
        <MainContainer>
          <div className="main-div py-8 text-center">
            {dateHeading}
            {selectDivs}
            {timing}
          </div>
        </MainContainer>
      )}
    </div>
  );
}

export default PrayTime;
