import { useEffect, useState } from "react";
import Header from "../header/Header";
import SorahsFetch from "../sorahsFetch/SorahsFetch";
import ScrollToTop from "../ScrollToTop";

function Quran() {
  const [path, setPath] = useState("");

  useEffect(() => {
    document.title = "القرآن الكريم";
    setPath(window.location.hash);
  }, []);

  return (
    <div
      className={
        "bg-[url('./assets/quran-side.png')] bg-fixed bg-cover bg-blue-100"
      }
    >
      <ScrollToTop />
      <Header />
      <SorahsFetch path={path} />
    </div>
  );
}

export default Quran;
