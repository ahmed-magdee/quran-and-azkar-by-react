/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
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
    number?: string | undefined;
  };
};

// Component
export default function LoopingSorah({ data }: LoopingSorahProps) {
  // uuseState
  const [show, setShow] = useState(false);
  const [tafsirAyaStatus, setTafsirAyaStatus] = useState(false);
  const { name, revelationType, numberOfAyahs, ayahs, number } = data;
  const { setDataStorage, getData } = useContext(LocalStorageData);
  const [ayaAndSorah, setAyaAndSorah] = useState({});

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
  const ayaClick = (number: string | undefined, numberInSurah: never) => {
    setAyaAndSorah({ number, numberInSurah });
    setTafsirAyaStatus(true);
  };

  // Looping
  const loop = ayahs?.map((aya) => {
    const { numberInSurah, text } = aya;
    // console.log(aya);
    return (
      <React.Fragment key={numberInSurah}>
        <span
          className={`text-[28px] font-bold leading-[2.4] transition-all duration-300 cursor-pointer 
          ${
            getData()?.aya === numberInSurah && getData()?.name === number
              ? "bg-[#d3ffe3] this-aya"
              : "hover:bg-paige-color"
          } 
          `}
          onClick={() => ayaClick(number, numberInSurah)}
        >
          {text}
        </span>
        <span
          className="sorah-number text-green-header font-normal cursor-pointer relative group"
          onClick={() => handleClick(number, numberInSurah)}
        >
          <div className="absolute -top-12 w-[100px] invisible transition-all duration-300 group-hover:visible">
            <span className=" py-[2px] px-2 text-center rounded-lg bg-green-100">
              أضغط للحفظ
            </span>
            <span className="save-span" />
          </div>
          {numberInSurah}
        </span>
      </React.Fragment>
    );
  });

  // Return
  return (
    <div className="p-5 overflow-hidden">
      <ScrollToTop />
      {show && <PopUp />}
      <div className="bg-white text-green-header text-center py-3 rounded-md shadow-sorah-header border border-[#ccc] min-h-[calc(100vh-(70px+40px))] overflow-hidden">
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
}
