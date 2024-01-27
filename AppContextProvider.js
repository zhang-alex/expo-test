import { useState, useEffect, createContext } from "react";
import { dummyJournalData } from "./data";

// context variable containing global state
export const AppContext = createContext();

const fetchDataWithDelay = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dummyJournalData);
    }, 3000); // Simulating a 3-second delay
  });
};

export default function AppContextProvider({ children }) {
  const [journalData, setJournalData] = useState([]);

  // get dummy data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDataWithDelay();
        console.log("successfully fetched journal data");
        setJournalData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the useEffect runs only once on mount

  const contextValue = {
    journalData,
    setJournalData,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}
