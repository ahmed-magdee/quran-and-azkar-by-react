/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import Header from "../../components/Header/Header";
import Container from "../../components/container/Container";
import ContainerSorahs from "../../components/container/ContainerSorahs";
import LoadingAnimation from "../../components/Animation/LoadingAnimation";
import AzkarKeys from "./AzkarKeys";
import DataLooping from "./DataLooping";
import GetData from "../../components/Get-Data/GetData";
import TitleDocument from "../../components/Title-Modify/TitleDocument";

type Data =
  | {
      category: string | undefined;
      content: string | undefined;
      description: string | undefined;
      count: number | undefined;
    }[]
  | undefined;

// Component
export default function AzkarMainPage() {
  TitleDocument("الأذكار");
  // useState
  // const [data, setData] = useState<UseStateProps>(initialState);
  const [zekr, setZekr] = useState<string>("");
  const { data } = GetData(
    `https://raw.githubusercontent.com/nawafalqari/azkar-api/56df51279ab6eb86dc2f6202c7de26c8948331c1/azkar.json`,
    true
  );

  // Loading Animation
  if (data.loading) {
    return <LoadingAnimation />;
  }

  // Keys
  const keys = data.data && Object.keys(data.data);

  // All Data With The Key
  const dataWithKey = data.data[zekr];

  console.log(dataWithKey);

  // Return
  return (
    <>
      <Header />
      <ContainerSorahs styles="p-5">
        <Container styles=" bg-white text-center text-green-header pb-3 pt-10 rounded-md shadow-sorah-header border border-[#ccc] min-h-[calc(100vh-(70px+40px))] overflow-hidden px-[15px] md:px-8">
          {/* Keys Of Azkar */}
          <AzkarKeys allKeys={keys} zekr={zekr} setZekr={setZekr} />
          {/* Data Div */}
          {zekr != "" && (
            <DataLooping dataWithKey={dataWithKey as Data} zekr={zekr} />
          )}
        </Container>
      </ContainerSorahs>
    </>
  );
}
