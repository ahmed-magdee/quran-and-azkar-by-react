/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import LoadingAnimation from "../../components/Animation/LoadingAnimation";

// UseStateProps
type UseStateProps = {
  loading: boolean;
  data: {
    arabic_text?: string | undefined;
    translation?: string | undefined;
  };
  error?: string;
};

// TafsirAyaProps
type TafsirAyaProps = {
  tafsirAyaStatus: boolean;
  setTafsirAyaStatus: Dispatch<SetStateAction<boolean>>;
  ayaAndSorah: {
    number?: string;
    numberInSurah?: string;
  };
};

// initialState
const initialState = {
  loading: false,
  data: {},
  error: "",
};

// Component
export default function TafsirAya({
  tafsirAyaStatus,
  setTafsirAyaStatus,
  ayaAndSorah,
}: TafsirAyaProps) {
  // useState
  const [data, setData] = useState<UseStateProps>(initialState);

  // useEffect
  useEffect(() => {
    if (ayaAndSorah.numberInSurah != undefined) fetchData();
  }, [ayaAndSorah.numberInSurah]);

  // fetchData
  function fetchData() {
    setData({
      ...data,
      loading: true,
    });
    axios
      .get(
        `https://quranenc.com/api/v1/translation/aya/arabic_moyassar/${ayaAndSorah.number}/${ayaAndSorah.numberInSurah}`
      )
      .then((res) => {
        const data = res.data.result;
        setData({
          loading: false,
          data: data,
          error: "",
        });
      })
      .catch(() => {
        setData({
          loading: false,
          data: {},
          error: "حدث خطأ ما !",
        });
      });
  }

  // Loading Animation
  if (data.loading) {
    return <LoadingAnimation />;
  }

  // closeClick
  const closeClick = () => {
    setTafsirAyaStatus(false);
  };

  // CloseByParent
  const closeByParent = () => {
    setTafsirAyaStatus(false);
  };

  // Return
  return (
    data.data.arabic_text && (
      <div
        className={`fixed bg-white/60 dark:bg-slate-900/60 backdrop-blur-md text-center w-full h-full z-30 top-0 right-0 p-[15px] flex items-center justify-center transition-all duration-300 ${
          tafsirAyaStatus ? "translate-y-0" : "translate-y-full"
        }`}
        onClick={closeByParent}
      >
        <button
          className="close w-10 h-10 bg-red-700 text-white absolute top-5 right-5 focus:outline-none border-none rounded-2xl text-2xl"
          onClick={closeClick}
        >
          <span>X</span>
        </button>

        {/* Box Of Texts */}
        <div className="font shadow-header-shadow rounded-lg w-[72rem] max-h-[450px] py-5 px-3 overflow-y-auto border border-[#009688] bg-white dark:bg-slate-900">
          <h1 className="leading-[1.6] mb-9 border-b border-green-header dark:border-dark-green pb-1">
            {data.data.arabic_text}
          </h1>
          <p className="text-2xl leading-[1.8]">{data.data.translation}</p>
        </div>
      </div>
    )
  );
}
