import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loading from "../Animation/Loading";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tafsirFetch } from "../redux/fafsirQuran/tafsirAction";

function TafsirAyaPopup({ sorahData, active, func }) {
  const { name, number, aya } = sorahData;
  const realAya = aya - 1;
  const tafsirat = useSelector((state) => state.tafsir);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(tafsirFetch(number));
  }, [realAya]);

  const load = tafsirat.loading && <Loading popup />;

  const ayaDiv = !tafsirat.loading && tafsirat.allTafsirat.result && (
    <div className="text-center font-noto-normal">
      <h2 className="text-blue-700 mb-6 text-xl sm:text-2xl leading-[1.5!important]">
        {tafsirat.allTafsirat.result[realAya].arabic_text}
        <span className="font-normal mr-[10px] bg-[url(../src/assets/aya-numbers.png)] bg-cover align-middle inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 text-base">
          {tafsirat.allTafsirat.result &&
            tafsirat.allTafsirat.result[realAya].aya}
        </span>
      </h2>
      <p className="text-blue-500 text-lg sm:text-2xl">
        {tafsirat.allTafsirat.result &&
          tafsirat.allTafsirat.result[realAya].translation}
      </p>
    </div>
  );

  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-[5px] sm:px-[15px] h-screen flex items-center justify-center bg-blue-50/70 backdrop-blur-xl z-30">
      <div className=" w-full md:w-[700px] h-[350px]  overflow-y-auto bg-blue-100 border-[2px] sm:border-[15px] border-t-[30px] border-[#dbeafe] rounded-xl shadow-popup-shadow">
        <button
          className="w-10 h-10 bg-blue-800 text-white border-none outline-none rounded-full absolute top-5 right-5 text-2xl transition-all duration-300 hover:bg-red-700"
          onClick={func}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        {load}
        {ayaDiv}
      </div>
    </div>
  );
}

export default TafsirAyaPopup;
