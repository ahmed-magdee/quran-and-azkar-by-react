import { classes } from "../../data/styles";
import LinksHeader from "../Header/LinksHeader";
import LoopingFooter from "./LoopingFooter";

// Component
export default function Footer() {
  // Return
  return (
    <footer className="bg-white dark:bg-slate-900 pt-6 font-cairo">
      <div className="container flex flex-col md:flex-row gap-5">
        {/* Links Footer */}
        <LoopingFooter />
        <div className="w-full md:w-[calc(50%-10px)]">
          <h3 className="mb-4 text-green-header dark:text-dark-green text-center md:text-right">
            أقسام الموقع
          </h3>
          <LinksHeader
            classDiv="flex items-start gap-3 flex-col"
            classes={classes["header-links"]}
          />
        </div>
      </div>
      <p
        className={`md:text-right text-gray-400  bg-white dark:bg-slate-950 mt-6 px-[15px] py-5 border-t border-green-header flex items-center justify-center gap-2 flex-wrap`}
      >
        <span>تم التصميم بواسطة</span>
        <span className="font-bold text-green-header dark:text-dark-green">
          أحمد مجدي
        </span>
      </p>
    </footer>
  );
}
