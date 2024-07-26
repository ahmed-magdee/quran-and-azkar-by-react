import { useState } from "react";
import GetData from "../../components/Get-Data/GetData";
import Header from "../../components/Header/Header";
import Container from "../../components/container/Container";
import ContainerSorahs from "../../components/container/ContainerSorahs";
import TimingHeader from "./TimingHeader";
import LoadingAnimation from "../../components/Animation/LoadingAnimation";
import ChooseTheCountry from "./ChooseTheCountry";
import ShowThePrayTiming from "./ShowThePrayTiming";
import TitleDocument from "../../components/Title-Modify/TitleDocument";

export default function TimeMainPage() {
  TitleDocument("توقيت الصلاة");
  // useState
  const [selectValue, setSelectValue] = useState("الاسكندرية");
  const theDay = new Date().getDate();
  const theMonth = new Date().getMonth() + 1;
  const theYear = new Date().getFullYear();

  // Fetching Data
  const { data } = GetData(
    `https://api.aladhan.com/v1/timingsByCity/${theDay}-${theMonth}-${theYear}?city=${selectValue}&country=egypt`,
    false
  );

  // // loading
  if (data.loading) {
    return <LoadingAnimation />;
  }

  // Return
  return (
    <>
      <Header />
      <ContainerSorahs styles="p-5">
        <Container styles=" bg-white dark:bg-slate-950 text-center text-green-header dark:text-dark-green pb-3 pt-10 rounded-md shadow-sorah-header dark:shadow-header-shadow border border-[#ccc] dark:border-dark-green min-h-[calc(100vh-(70px+40px))] overflow-hidden px-[15px] md:px-8">
          <TimingHeader data={data.data && data.data.date} />
          {/* Choose The Country */}
          <ChooseTheCountry
            selectValue={selectValue}
            setSelectValue={setSelectValue}
          />
          <ShowThePrayTiming
            time={data.data && data.data.timings && data.data.timings}
          />
        </Container>
      </ContainerSorahs>
    </>
  );
}
