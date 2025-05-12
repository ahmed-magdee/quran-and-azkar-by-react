/* eslint-disable react-hooks/exhaustive-deps */
import { memo, useContext, useEffect, useState } from "react";
import ScrollToTop from "../../components/ScrollToTop";
import { LocalStorageData } from "../../context/localstrorage";
import React from "react";
import PopUp from "./PopUp";
import AddressSorah from "./AddessSorah";
import TafsirAya from "../tafsir-aya/TafsirAya";

// LoopingSorahProps
type LoopingSorahProps = {
  data: {
    name?: string | undefined;
    numberInSurah?: string | undefined;
    text?: string | undefined;
    revelationType?: string | undefined;
    numberOfAyahs?: string | undefined;
    ayahs?: [];
    number?: string;
  };
};

// Component
export const LoopingSorah = memo(({ data }: LoopingSorahProps) => {
  // uuseState
  const [show, setShow] = useState(false);
  const [tafsirAyaStatus, setTafsirAyaStatus] = useState(false);
  const { name, revelationType, numberOfAyahs, ayahs, number } = data;
  const { setDataStorage, getData } = useContext(LocalStorageData);
  const [ayaAndSorah, setAyaAndSorah] = useState({});
  const [spanHover, setSpanHover] = useState(0);

  //handleClick
  const handleClick = (
    name: string | undefined,
    numberInSurah: string | undefined
  ) => {
    setDataStorage({
      name: name,
      aya: numberInSurah,
    });
    setShow(true);
    const showPopup = setTimeout(() => {
      clearTimeout(showPopup);
      setShow(false);
    }, 750);
  };

  // useEffect
  useEffect(() => {
    if (getData()?.aya) {
      const ayaToScroll = document.querySelector(".this-aya");
      ayaToScroll?.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }
  }, []);

  // ayaClick
  const ayaClick = (number: string, numberInSurah: string) => {
    setAyaAndSorah({ number, numberInSurah });
    setTafsirAyaStatus(true);
  };

  // Looping
  const loop = ayahs?.map((aya) => {
    const { numberInSurah, text } = aya;
    return (
      <React.Fragment key={numberInSurah}>
        <span
          className={`text-[28px] font-bold leading-[2.4] transition-colors duration-300 cursor-pointer  rounded-md
          ${
            getData()?.aya === numberInSurah && getData()?.name === number
              ? "bg-[#d3ffe3] dark:bg-white dark:text-green-header this-aya"
              : "hover:bg-paige-color dark:hover:bg-slate-800"
          } 
          `}
          onClick={() => ayaClick(number as string, numberInSurah)}
        >
          {text}
        </span>
        <span
          className="sorah-number text-green-header dark:text-dark-green font-normal cursor-pointer relative"
          onClick={() => {
            handleClick(number, numberInSurah);
          }}
          onMouseMove={() => setSpanHover(+numberInSurah)}
          onMouseLeave={() => setSpanHover(0)}
        >
          {spanHover > 0 && spanHover === +numberInSurah && (
            <div className="absolute -top-12 w-[100px]">
              <span className="py-[2px] px-2 text-center rounded-lg bg-green-100 dark:bg-white">
                أضغط للحفظ
              </span>
              <span className="save-span" />
            </div>
          )}
          {numberInSurah}
        </span>
      </React.Fragment>
    );
  });

  // Return
  return (
    <div className="py-5 overflow-hidden">
      <ScrollToTop />
      {show && <PopUp />}
      <div className="bg-white dark:bg-slate-950 text-green-header dark:text-white text-center py-3 rounded-md shadow-sorah-header dark:shadow-header-shadow border border-[#ccc] dark:border-dark-green min-h-[calc(100vh-(70px+40px))] overflow-hidden">
        <TafsirAya // Tafsir Aya
          tafsirAyaStatus={tafsirAyaStatus}
          setTafsirAyaStatus={setTafsirAyaStatus}
          ayaAndSorah={ayaAndSorah}
        />
        <AddressSorah // Address of Sorah
          name={name}
          number={number}
          numberOfAyahs={numberOfAyahs}
          revelationType={revelationType}
        />
        {/* The Sorah Text */}
        <div className="text-right px-[15px] mt-16">{loop}</div>
      </div>
    </div>
  );
});
