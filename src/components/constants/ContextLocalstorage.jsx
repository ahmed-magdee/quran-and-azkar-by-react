import { createContext, useState } from "react";

export const ContextLocalstorage = createContext(null);

const initial = {
  name: "",
  number: "",
  aya: "",
};

export const ContextLocalstorageProvider = ({ children }) => {
  const [storageData, setDataStorage] = useState(initial);
  const setDataLocalStorage = (name, number, aya) => {
    setDataStorage({
      ...storageData,
      name: name,
      number: number,
      aya: aya,
    });
  };

  storageData.name &&
    window.localStorage.setItem("sorahAndAya", JSON.stringify(storageData));

  const parseDataStorage = JSON.parse(
    window.localStorage.getItem("sorahAndAya")
  );

  const fetchDataStorage = parseDataStorage && parseDataStorage;

  const deleteDataStorage = () => {
    window.localStorage.removeItem("sorahAndAya");
  };

  return (
    <ContextLocalstorage.Provider
      value={{
        setDataLocalStorage,
        storageData,
        fetchDataStorage,
        deleteDataStorage,
      }}
    >
      {children}
    </ContextLocalstorage.Provider>
  );
};
