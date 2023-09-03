import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { tafsirFetch } from "../redux/fafsirQuran/tafsirAction";
import HeaderList from "../headerReturnSorahsList/HeaderList";
import Loading from "../Animation/Loading";
import MainContainer from "../constants/MainContainer";
import { ContextSorahs } from "../constants/ContextSorahs";
import ScrollToTop from "../ScrollToTop";

function SorahTafsirText() {
  const { sorahId } = useParams();
  const context = useContext(ContextSorahs);
  const tafsir = useSelector((state) => state.tafsir);
  const [windowScroll, setWindowScroll] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(tafsirFetch(sorahId));
    window.scrollTo({ top: 0, behavior: "smooth" });
    const handleScroll = () => {
      window.scrollY >= 300 ? setWindowScroll(true) : setWindowScroll(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => removeEventListener("scroll", handleScroll);
  }, []);

  const load = tafsir.loading && <Loading />;
  const address = !tafsir.loading &&
    tafsir.allTafsirat.result &&
    context.sorahData.name && (
      <div className="bg-blue-800 text-white p-3 rounded-xl border border-blue-600 shadow-popup-shadow mb-16">
        <h1 className="mb-5 font-noto-reqaa">{context.sorahData.name}</h1>
        <p className="">
          رقمها في المصحف{" "}
          <span className=" w-10 h-10 inline-flex items-center justify-center bg-[url('../src/assets/aya-numbers.png')] bg-cover">
            {context.sorahData.sorahNumber}
          </span>
        </p>
      </div>
    );

  const allTafsirSorah =
    !tafsir.loading &&
    tafsir.allTafsirat.result &&
    tafsir.allTafsirat.result.map((one) => (
      <div
        key={one.aya}
        className="bg-blue-200 rounded-xl p-5 mb-8 shadow-popup-shadow"
      >
        <h2 className="text-blue-800 mb-5 font-noto-normal">
          {one.arabic_text} <span>{one.aya}</span>
        </h2>
        <p className="leading-[2] text-lg text-blue-700">{one.translation}</p>
      </div>
    ));

  return (
    <div className="bg-[url('./assets/moshaf2.jpg')] bg-cover bg-fixed bg-center min-h-screen relative before:content-[''] before:absolute before:w-full before:h-full before:bg-blue-100/50 before:backdrop-blur-sm before:top-0 before:left-0">
      <HeaderList scroll={windowScroll} />
      <ScrollToTop />
      {load}
      {!tafsir.loading && tafsir.allTafsirat.result && (
        <div className="text-center py-10 sm:p-10 ">
          <MainContainer>
            {address}
            <div className="">{allTafsirSorah}</div>
          </MainContainer>
        </div>
      )}
    </div>
  );
}

export default SorahTafsirText;
