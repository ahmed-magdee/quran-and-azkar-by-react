/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import Container from "../../components/container/Container";
import ContainerSorahs from "../../components/container/ContainerSorahs";
import LoadingAnimation from "../../components/Animation/LoadingAnimation";
import AzkarKeys from "./AzkarKeys";
import DataLooping from "./DataLooping";
import { khatmQuran } from "../../data/data";
import { ErrorHandlingComponent } from "../../components/ErrorHandlingComponent";
import { useGetData } from "../../custom-hooks/useGetData";
import { useTitleDocument } from "../../custom-hooks/useTitleDocument";

// Component
export default function AzkarMainPage() {
  useTitleDocument("الأذكار");

  // useState
  const [zekr, setZekr] = useState<string>("");
  const { data } = useGetData(
    `https://raw.githubusercontent.com/nawafalqari/azkar-api/56df51279ab6eb86dc2f6202c7de26c8948331c1/azkar.json`,
    true
  );

  // Loading Animation
  if (data.loading) {
    return <LoadingAnimation />;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const allData: { [key: string]: any } = data.data && {
    ...data.data,
    "دعاء ختم القرآن": khatmQuran,
  };

  // Keys
  const keys = allData && Object.keys(allData);

  // All Data With The Key
  const dataWithKey = allData[zekr];

  // Return
  return (
    <>
      <ContainerSorahs styles="p-5">
        <Container
          styles={`bg-white dark:bg-slate-950 text-center text-green-header pb-3 pt-10 rounded-md shadow-sorah-header dark:shadow-header-shadow border border-[#ccc] dark:border-dark-green min-h-[calc(100vh-(70px+40px))] overflow-hidden px-[15px] md:px-8
          ${data.error && "flex items-center justify-center"}
          `}
        >
          {!data.error ? (
            <>
              {/* Keys Of Azkar */}
              <AzkarKeys allKeys={keys} zekr={zekr} setZekr={setZekr} />
              {/* Data Div */}
              {zekr != "" && (
                <DataLooping dataWithKey={dataWithKey} zekr={zekr} />
              )}
            </>
          ) : (
            <ErrorHandlingComponent error={data.error} />
          )}
        </Container>
      </ContainerSorahs>
    </>
  );
}
