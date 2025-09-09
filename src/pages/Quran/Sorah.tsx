/* eslint-disable react-hooks/exhaustive-deps */
import LoadingAnimation from "../../components/Animation/LoadingAnimation";
import ContainerSorahs from "../../components/container/ContainerSorahs";
import { useParams } from "react-router-dom";
import { LoopingSorah } from "./LoopingSorah";
import { ErrorHandlingComponent } from "../../components/ErrorHandlingComponent";
import { useGetData } from "../../custom-hooks/useGetData";
import { useTitleDocument } from "../../custom-hooks/useTitleDocument";

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
  useTitleDocument("القرآن الكريم");

  // useParams
  const { id } = useParams();

  // Fetching Data
  const { data } = useGetData(
    `https://api.alquran.cloud/v1/surah/${id}`,
    false
  );

  // Loading
  if (data.loading) {
    return <LoadingAnimation />;
  }

  // Return
  return (
    <>
      <ContainerSorahs
        styles={`container ${data.error && "flex items-center justify-center"}`}
      >
        {!data.error ? (
          <LoopingSorah data={data.data as DataTypes} />
        ) : (
          <ErrorHandlingComponent error={data.error} />
        )}
      </ContainerSorahs>
    </>
  );
}
