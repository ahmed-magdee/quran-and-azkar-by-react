import ScrollToTop from "../../components/ScrollToTop";
import SorahsFetch from "../../components/Sorahs-fetch/SorahsFetch";
import TitleDocument from "../../components/Title-Modify/TitleDocument";
import ContainerSorahs from "../../components/container/ContainerSorahs";

export default function Quran() {
  TitleDocument("القرآن الكريم");

  // Return
  return (
    <>
      <ScrollToTop />
      <ContainerSorahs styles="bg-[url('./assets/quran-side.jpg')]" show>
        {/* All Sorahs Fetch And Show */}
        <SorahsFetch loc="/quran" />
      </ContainerSorahs>
    </>
  );
}
