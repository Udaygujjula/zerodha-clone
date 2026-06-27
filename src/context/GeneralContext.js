import React, { createContext } from "react";

export const GeneralContext = createContext({});

export const GeneralContextProvider = ({ children }) => {
  const contextValue = {
    // Add shared state or functions here as needed
  };

  return (
    <GeneralContext.Provider value={contextValue}>
      {children}
    </GeneralContext.Provider>
  );
};
