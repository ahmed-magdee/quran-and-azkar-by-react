import { createContext, useState, ReactNode, useEffect } from "react";

const defaultContextValue: LocalStorageData = {
  dataStorage: {},
  setDataStorage: () => {},
  useGetData: () => null,
};

// LocalDataProviderProps
type LocalDataProviderProps = {
  children: ReactNode;
};

// UseStateProps
type UseStateProps = {
  length?: number;
  name?: string;
  aya?: string;
};

// SorahData
interface SorahData {
  name: string;
  aya: string;
}

// LocalStorageData
interface LocalStorageData {
  dataStorage: {
    name?: string;
    aya?: string;
  };
  setDataStorage: (data: object) => void;
  useGetData: () => SorahData | null;
}

// CreateContext
export const LocalStorageData =
  createContext<LocalStorageData>(defaultContextValue);

// Context Provider
export const LocalDataProvider = ({ children }: LocalDataProviderProps) => {
  const [dataStorage, setDataStorage] = useState<UseStateProps>({});

  //useEffect and Set dataStorage
  useEffect(() => {
    if (dataStorage.name) {
      window.localStorage.setItem("sorah-data", JSON.stringify(dataStorage));
    }
  }, [dataStorage]);

  // useGetDataStorage
  function useGetData(): SorahData | null {
    const storedDataString = window.localStorage.getItem("sorah-data");

    if (storedDataString) {
      return JSON.parse(storedDataString) as SorahData;
    }

    return null;
  }

  // Return
  return (
    <LocalStorageData.Provider
      value={{ dataStorage, setDataStorage, useGetData }}
    >
      {children}
    </LocalStorageData.Provider>
  );
};
