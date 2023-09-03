import { Route, Routes } from "react-router-dom";
import NoMatch from "./components/no-match/NoMatch";
import { ContextSorahsProvider } from "./components/constants/ContextSorahs";
import { Provider } from "react-redux";
import store from "./components/store/store";
// import React, { Suspense } from "react";
// import Loading from "./components/Animation/Loading";
import { ContextLocalstorageProvider } from "./components/constants/ContextLocalstorage";
import MainPage from "./components/main-page/MainPage";
import Quran from "./components/quran/Quran";
import ReadSorah from "./components/quran/ReadSorah";
import TafsirAllSorah from "./components/tafsir/TafsirAllSorah";
import SorahTafsirText from "./components/tafsir/SorahTafsirText";
import HadeethShareef from "./components/hadeeth-shareef/HadeethShareef";
import Azkar from "./components/azkar/Azkar";
import PrayTime from "./components/pray-time/PrayTime";
// const MainPageLazy = React.lazy(() =>
//   import("./components/main-page/MainPage")
// );
// const QuranLazy = React.lazy(() => import("./components/quran/Quran"));
// const ReactSorahLazy = React.lazy(() => import("./components/quran/ReadSorah"));
// const TafsirAllSorahLazy = React.lazy(() =>
//   import("./components/tafsir/TafsirAllSorah")
// );
// const SorahTafsirTextLazy = React.lazy(() =>
//   import("./components/tafsir/SorahTafsirText")
// );
// const HadeethShareefLazy = React.lazy(() =>
//   import("./components/hadeeth-shareef/HadeethShareef")
// );
// const AzkarLazy = React.lazy(() => import("./components/azkar/Azkar"));
// const PrayTimeLazy = React.lazy(() =>
//   import("./components/pray-time/PrayTime")
// );

function App() {
  return (
    <ContextSorahsProvider>
      <ContextLocalstorageProvider>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="quran" element={<Quran />} />
            <Route path="quran/:sorahId" element={<ReadSorah />} />
            <Route path="tafsir" element={<TafsirAllSorah />} />
            <Route path="tafsir/:sorahId" element={<SorahTafsirText />} />
            <Route path="hadeeth" element={<HadeethShareef />} />
            <Route path="azkar" element={<Azkar />} />
            <Route path="pray" element={<PrayTime />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </Provider>
      </ContextLocalstorageProvider>
    </ContextSorahsProvider>
  );
}

export default App;
