/* eslint-disable react-hooks/exhaustive-deps */
import LoadingAnimation from "../Animation/LoadingAnimation";
import Container from "../container/Container";
import LoopingData from "./LoopingData";
import GetData from "../Get-Data/GetData";

type SorahsFetchProps = {
  loc: string;
};

type Data = {
  number?: string;
  name?: string;
  numberOfAyahs?: string;
  [key: string]: string | number | object | undefined;
}[];

// Component
export default function SorahsFetch({ loc }: SorahsFetchProps) {
  // fetching data
  const { data } = GetData(`https://api.alquran.cloud/v1/surah`, false);

  // Loading
  if (data.loading) {
    return <LoadingAnimation />;
  }

  // Return
  if (!data.loading && data.data.length != 0) {
    return (
      <Container styles="all-sorahs font-cairo relative py-10">
        <LoopingData data={data.data as unknown as Data} loc={loc} />
      </Container>
    );
  }
}
