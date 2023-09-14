import { useEffect } from "react";
import ScrollToTop from "../ScrollToTop";
import Header from "../header/Header";
import SorahsFetch from "../sorahsFetch/SorahsFetch";

function TafsirAllSorah() {
  const path = window.location.hash;

  useEffect(() => {
    document.title = "التفسير الميسر";
  }, []);

  return (
    <div className="bg-[url('./assets/quran-side.png')] bg-cover bg-fixed min-h-[calc(100vh-68px)] bg-blue-100">
      <Header />
      <ScrollToTop />
      <SorahsFetch path={path} />
    </div>
  );
}

export default TafsirAllSorah;
