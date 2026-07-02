import React, { createContext } from "react";

export const GeneralContext = createContext({});

export const GeneralContextProvider = ({ children }) => {
  const contextValue = {
    openBuyWindow: (uid) => {
      console.log(`openBuyWindow called for ${uid}`);
      // TODO: replace this stub with actual buy window logic
    },
  };

  return (
    <GeneralContext.Provider value={contextValue}>
      {children}
    </GeneralContext.Provider>
  );
};
