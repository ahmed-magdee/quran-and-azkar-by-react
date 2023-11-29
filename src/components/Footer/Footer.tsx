import { classes } from "../../data/styles";
import LinksHeader from "../Header/LinksHeader";
import Container from "../container/Container";
import LoopingFooter from "./LoopingFooter";

// Component
export default function Footer() {
  // Return
  return (
    <footer className="bg-[#f1f5f9] pt-6 font-cairo text-center">
      <Container styles="footer-container text-right max-w-6xl mx-auto">
        {/* Links Footer */}
        <LoopingFooter />
        {/* Exist Website */}
        <div className={classes["footer-divs"]}>
          <h3 className="mb-4 text-green-header text-center md:text-right">
            أقسام الموقع
          </h3>
          <LinksHeader
            classDiv="flex items-start gap-3 flex-col"
            classes={classes["header-links"]}
          />
        </div>
      </Container>
      <p
        className={`md:text-right text-gray-400  bg-white mt-6 px-[15px] py-5 border-t border-green-header flex items-center justify-center gap-2 flex-wrap`}
      >
        <span>تم التصميم بواسطة</span>
        <span className="font-bold text-green-header">أحمد مجدي</span>
      </p>
    </footer>
  );
}
