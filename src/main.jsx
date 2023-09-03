import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import MainPage from "./components/main-page/MainPage.jsx";
import Quran from "./components/quran/Quran.jsx";
import ReadSorah from "./components/quran/ReadSorah.jsx";
import TafsirAllSorah from "./components/tafsir/TafsirAllSorah.jsx";
import SorahTafsirText from "./components/tafsir/SorahTafsirText.jsx";
import HadeethShareef from "./components/hadeeth-shareef/HadeethShareef.jsx";
import Azkar from "./components/azkar/Azkar.jsx";
import PrayTime from "./components/pray-time/PrayTime.jsx";
import NoMatch from "./components/no-match/NoMatch.jsx";
import { Provider } from "react-redux";
import store from "./components/store/store";
import { ContextLocalstorageProvider } from "./components/constants/ContextLocalstorage.jsx";
import { ContextSorahsProvider } from "./components/constants/ContextSorahs.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "quran",
    element: <Quran />,
  },
  {
    path: "quran/:sorahId",
    element: <ReadSorah />,
  },
  {
    path: "tafsir",
    element: <TafsirAllSorah />,
  },
  {
    path: "tafsir/:sorahId",
    element: <SorahTafsirText />,
  },
  {
    path: "hadeeth",
    element: <HadeethShareef />,
  },
  {
    path: "azkar",
    element: <Azkar />,
  },
  {
    path: "pray",
    element: <PrayTime />,
  },
  {
    path: "*",
    element: <NoMatch />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ContextSorahsProvider>
      <ContextLocalstorageProvider>
        <RouterProvider router={router} />
      </ContextLocalstorageProvider>
    </ContextSorahsProvider>
  </Provider>
);
