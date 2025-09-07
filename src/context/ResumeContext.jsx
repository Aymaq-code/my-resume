import { createContext, useContext, useReducer } from "react";

const BASE_URL = "";

const ResumeContext = createContext();

const initialState = {};

function reducer(state, action) {
  switch (action.type) {
  }
}

function ResumeProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <ResumeContext.Provider value={{}}>{children}</ResumeContext.Provider>;
}

function useResume() {
  const context = useContext();
  if (context === undefined)
    throw new Error("CoffeeContext is used outside the CoffeeProvider");

  return context;
}

export { ResumeContext, useResume };
