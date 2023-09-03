import { createContext, useContext, useState } from "react";

export const ContextSorahs = createContext(null);

const initialState = {
  name: "",
  sorahNumber: "",
  ayaNumber: "",
};

export const ContextSorahsProvider = ({ children }) => {
  const [sorahData, setSorahData] = useState(initialState);

  const data = (name, number, aya) => {
    setSorahData({
      ...sorahData,
      name: name,
      sorahNumber: number,
      ayaNumber: aya,
    });
  };

  return (
    <ContextSorahs.Provider value={{ data, sorahData }}>
      {children}
    </ContextSorahs.Provider>
  );
};
