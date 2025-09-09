import ScrollToTop from "../../components/ScrollToTop";
import SorahsFetch from "../../components/Sorahs-fetch/SorahsFetch";
import ContainerSorahs from "../../components/container/ContainerSorahs";
import { useTitleDocument } from "../../custom-hooks/useTitleDocument";

export default function Quran() {
  useTitleDocument("القرآن الكريم");

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
