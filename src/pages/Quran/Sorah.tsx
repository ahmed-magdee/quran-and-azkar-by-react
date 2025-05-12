/* eslint-disable react-hooks/exhaustive-deps */
import LoadingAnimation from "../../components/Animation/LoadingAnimation";
import ContainerSorahs from "../../components/container/ContainerSorahs";
import { useParams } from "react-router-dom";
import { LoopingSorah } from "./LoopingSorah";
import GetData from "../../components/Get-Data/GetData";
import TitleDocument from "../../components/Title-Modify/TitleDocument";

type DataTypes = {
  name?: string | undefined;
  numberInSurah?: string | undefined;
  text?: string | undefined;
  revelationType?: string | undefined;
  numberOfAyahs?: string | undefined;
  ayahs?: [];
  number?: string | undefined;
};

// Component
export default function Sorah() {
  TitleDocument("القرآن الكريم");

  // useParams
  const { id } = useParams();

  // Fetching Data
  const { data } = GetData(`https://api.alquran.cloud/v1/surah/${id}`, false);

  // Loading
  if (data.loading) {
    return <LoadingAnimation />;
  }

  // Return
  return (
    <>
      <ContainerSorahs styles="container">
        <LoopingSorah data={data.data as DataTypes} />
      </ContainerSorahs>
    </>
  );
}
