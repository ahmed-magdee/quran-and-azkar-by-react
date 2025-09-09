import ScrollToTop from "../../components/ScrollToTop";
import Doaa from "./Doaa";
import SectionForm from "./SectionForm";
import Footer from "../../components/Footer/Footer";
import LandingPageTwo from "./LandingPageTwo";
import { useTitleDocument } from "../../custom-hooks/useTitleDocument";

export default function Home() {
  useTitleDocument("قرآن وأذكار");
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
