import ScrollToTop from "../../components/ScrollToTop";
import Doaa from "./Doaa";
import SectionForm from "./SectionForm";
import Footer from "../../components/Footer/Footer";
import LandingPageTwo from "./LandingPageTwo";
import TitleDocument from "../../components/Title-Modify/TitleDocument";

export default function Home() {
  TitleDocument("قرآن وأذكار");
  return (
    <>
      <ScrollToTop />
      <LandingPageTwo />
      <Doaa />
      <SectionForm />
      <Footer />
    </>
  );
}
