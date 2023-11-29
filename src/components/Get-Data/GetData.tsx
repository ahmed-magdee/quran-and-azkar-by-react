/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";

type State = {
  [key: string]: number | object | undefined;
};

type DataStart = {
  loading: boolean;
  data: {
    [key: string]: number | object | undefined;
    length?: number;
    timings?: object;
    date?: object;
    // number?: string | undefined;
    // name?: string | undefined;
    // numberOfAyahs?: string | undefined;
    // revelationType?: string | undefined;
    time?: { [key: string]: string } | undefined;
    reciters?: {
      name?: string;
      moshaf?: {
        name?: string;
        surah_total?: string;
      }[];
    }[];
  };
  error: string;
};

const initialState = {
  loading: false,
  data: {} as State,
  error: "",
};

export default function GetData(link: string, loc: boolean) {
  // useState
  const [data, setData] = useState<DataStart>(initialState);

  // useEffect
  useEffect(() => {
    setData({
      ...data,
      loading: true,
    });
    axios
      .get(link)
      .then((res) => {
        const data = res.data.data || (loc && res.data);
        setData({
          loading: false,
          data,
          error: "",
        });
      })
      .catch(() => {
        setData({
          loading: false,
          data: {},
          error: "حدث خطأ ما",
        });
      });
  }, [link]);

  // Return
  return { data: data };
}
