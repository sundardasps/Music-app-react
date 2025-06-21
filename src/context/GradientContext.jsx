// GradientContext.js
import { createContext, useContext, useState } from "react";
import { localstorageKeys } from "../data";

const GradientContext = createContext();

export const GradientProvider = ({ children }) => {
  const [bgGradient, setBgGradient] = useState(
    localStorage.getItem(localstorageKeys.bgGradient) ||
      "linear-gradient(to right, #000, #333)"
  );

  const updateGradient = (gradient) => {
    setBgGradient(gradient);
    localStorage.setItem(localstorageKeys.bgGradient, gradient);
  };

  return (
    <GradientContext.Provider value={{ bgGradient, updateGradient }}>
      {children}
    </GradientContext.Provider>
  );
};

export const useGradient = () => useContext(GradientContext);
