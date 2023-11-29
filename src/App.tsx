import { RouterProvider, createHashRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Sorah from "./pages/Quran/Sorah";
import Hadeeth from "./pages/Hadeeth-shareef/Hadeeth";
import AzkarMainPage from "./pages/Azkar/AzkarMainPage";
import TimeMainPage from "./pages/Pray-timing/TimeMainPage";
import Quran from "./pages/Quran/Quran";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "quran",
    element: <Quran />,
  },
  {
    path: "quran/:id",
    element: <Sorah />,
  },
  {
    path: "hadeeth",
    element: <Hadeeth />,
  },
  {
    path: "azkar",
    element: <AzkarMainPage />,
  },
  {
    path: "pray-timing",
    element: <TimeMainPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
