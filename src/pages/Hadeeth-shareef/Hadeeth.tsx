/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import Header from "../../components/Header/Header";
import Container from "../../components/container/Container";
import ContainerSorahs from "../../components/container/ContainerSorahs";
import LoadingAnimation from "../../components/Animation/LoadingAnimation";
import Select from "./Select";
import GetData from "../../components/Get-Data/GetData";
import TitleDocument from "../../components/Title-Modify/TitleDocument";

type UseStateProps = {
  pagination?: {
    totalItems: string;
    pages: [];
    currentPage: string;
    pageSize: string;
    startIndex: string;
    endIndex: string;
  };
  items?:
    | {
        number: string | undefined;
        arab: string | undefined;
      }[]
    | undefined;
};

// Component
export default function Hadeeth() {
  TitleDocument("الحديث الشريف");

  // useSatate
  const [selectStatue, setSelectStatue] = useState("1");
  const [hadeethNumber, setHadeethNumber] = useState(0);

  // Fetching Data
  const { data } = GetData(
    `https://hadis-api-id.vercel.app/hadith/abu-dawud?page=${+selectStatue}&limit=300`,
    true
  );

  // Pagination
  const { pagination, items } = data.data as UseStateProps;

  // Loading Animation
  if (data.loading) {
    return <LoadingAnimation />;
  }

  // Return
  return (
    <>
      <Header />
      <ContainerSorahs styles="p-5">
        <Container styles=" bg-white text-center text-green-header py-3 rounded-md shadow-sorah-header border border-[#ccc] min-h-[calc(100vh-(70px+40px))] overflow-hidden px-[15px] md:px-8 flex items-center justify-center flex-col">
          {/* Hadeeth Header */}
          <div className="hadeeth-header w-full bg-green-header text-white py-[10px] px-[5px] rounded-xl mb-10">
            <h2 className="mb-5 font-cairo leading-[2]">
              إجمالي الأحاديث هو {pagination?.totalItems}
            </h2>
            <p className="sm:text-xl">
              هذا حديث رقم {items?.length && items[+hadeethNumber].number} من{" "}
              {pagination?.endIndex && pagination?.endIndex + 1}
            </p>
          </div>

          {/* Hadeeth Text */}
          <div className="leading-[2.3] sm:leading-[2.3] text text-xl sm:text-2xl mb-8">
            {items?.length && items[+hadeethNumber].arab}
          </div>

          {/* Select And Buttons */}
          <Select
            pagination={pagination}
            selectStatue={selectStatue}
            setSelectStatue={setSelectStatue}
            hadeethNumber={hadeethNumber}
            setHadeethNumber={setHadeethNumber}
          />
        </Container>
      </ContainerSorahs>
    </>
  );
}