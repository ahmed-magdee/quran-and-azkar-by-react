/* eslint-disable react-hooks/exhaustive-deps */
import LoadingAnimation from "../Animation/LoadingAnimation";
import Container from "../container/Container";
import LoopingData from "./LoopingData";
import { ErrorHandlingComponent } from "../ErrorHandlingComponent";
import { useGetData } from "../../custom-hooks/useGetData";

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
  const { data } = useGetData(`https://api.alquran.cloud/v1/surah`, false);

  // Loading
  if (data.loading) {
    return <LoadingAnimation />;
  }

  // Return
  // if (!data.loading && data.data.length != 0) {
  return (
    <Container
      styles={`${
        !data.error ? "all-sorahs" : "flex items-center justify-center"
      } font-cairo relative py-10 min-h-[calc(100vh-70px)]`}
    >
      {!data.error ? (
        <LoopingData data={data.data as unknown as Data} loc={loc} />
      ) : (
        <ErrorHandlingComponent error={data.error} />
      )}
    </Container>
  );
  // }
}
