import React, { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import { useGlobalContext } from "./context";
import { HANDLE_SEARCH } from "./actions";
import reducer from "./reducer";

const useAlan = () => {
  const { theme, setTheme, handleSearch } = useGlobalContext();
  useEffect(() => {
    alanBtn({
      key: process.env.REACT_APP_ALAN_API_KEY,
      onCommand: ({ command, mode, query }) => {
        if (command === "changeMode") {
          if (mode === "light") {
            setTheme("light-theme");
          } else {
            setTheme("dark-theme");
          }
        } else if (command === "search") {
          handleSearch(query);
        }
      },
    });
  }, []);
};

export default useAlan;
