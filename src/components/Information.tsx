import { information } from "../data/data";
import Header from "./Header/Header";
import TitleDocument from "./Title-Modify/TitleDocument";

function Information() {
  TitleDocument("التعليمات");

  const informationLooping = information.map((one) => (
    <li key={one.id} className="">
      <p className="inline-block leading-[2] sm:leading-[2] text-xl sm:text-2xl">
        <span className=" bg-green-header/20 inline-flex items-center justify-center p-2 rounded-md font-bold">
          {one.id}
        </span>{" "}
        {one.text}{" "}
        {one.img && (
          <img
            src={one.img}
            alt="img-explain"
            className="w-[70px] inline-block"
          />
        )}
        .
      </p>
    </li>
  ));

  return (
    <>
      <Header />
      <div className="bg-white dark:bg-slate-900 text-green-header dark:text-dark-green m-5 pt-10 pb-5 rounded-md shadow-sorah-header border border-[#ccc] min-h-[calc(100vh-(70px+40px))] overflow-hidden px-[15px] md:px-8 relative">
        <h1 className="w-fit border-b border-green-header mx-auto">
          <span className="w-2 h-2 bg-green-header inline-block rounded-full" />{" "}
          صفحة التعليمات{" "}
          <span className="w-2 h-2 bg-green-header inline-block rounded-full" />
        </h1>
        <ul className="mt-8 space-y-3 sm:text-lg">{informationLooping}</ul>
      </div>
    </>
  );
}

export default Information;
