/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { LocalStorageData } from "../../context/localstrorage";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type LoopingData = {
  data: {
    number?: string;
    name?: string;
    numberOfAyahs?: string;
    [key: string]: string | number | object | undefined;
  }[];
  loc: string;
};

export default function LoopingData({ data, loc }: LoopingData) {
  const { getData } = useContext(LocalStorageData);

  // useEffect
  useEffect(() => {
    if (getData?.name) {
      const sorahScroll = document.querySelector(".sorah-scroll");
      sorahScroll?.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }
  }, []);

  // Looping Data
  const looping =
    data.length !== undefined &&
    data.map((sorah) => {
      return (
        <Link
          key={sorah.number}
          to={`${loc}/${sorah.number}`}
          className={`h-[170px] text-center flex items-center justify-center gap-7 flex-col border border-green-header rounded-xl bg-[#f1f5f9] dark:bg-slate-950 py-[10px] transition-[transform_box-shadow] duration-[.4s] 
          ${
            getData()?.name === sorah.number
              ? "-translate-y-[10px] shadow-box-sorah-hover dark:shadow-box-sorah"
              : "shadow-box-sorah hover:shadow-box-sorah-hover dark:hover:shadow-box-sorah hover:-translate-y-[10px] "
          }
        text-green-header dark:text-dark-green relative group overflow-hidden`}
        >
          {getData()?.name === sorah.number && (
            <FontAwesomeIcon
              className="sorah-scroll absolute -top-[5px] left-5 text-5xl text-[#82c9c5]"
              icon={faBookmark}
            />
          )}
          <h2
            className={`font-noto-urdo transition-transform duration-[.4s] 
            ${
              getData()?.name === sorah.number
                ? "-translate-y-10"
                : "group-hover:-translate-y-10 "
            }`}
          >
            {sorah.name}
          </h2>
          <div
            className={`absolute bottom-0 right-0 w-full transition-transform duration-[.4s]
            ${
              getData()?.name === sorah.number
                ? "-translate-y-[18px]"
                : "translate-y-[70px] group-hover:-translate-y-[18px]"
            }`}
          >
            <p>
              رقمها في المصحف <span>{sorah.number}</span>
            </p>
            <p>
              عدد الآيات <span>{sorah.numberOfAyahs}</span>
            </p>
            <p>سورة {sorah.revelationType === "Meccan" ? "مكية" : "مدنية"}</p>
          </div>
        </Link>
      );
    });

  // Return
  return looping;
}
