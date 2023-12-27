import React, { useRef } from "react";
import SearchForm from "./SearchForm";
import Stories from "./Stories";
import Buttons from "./Buttons";
import ToggleTheme from "./ToggleTheme";
import useAlan from "./Alan";
function App() {
  useAlan();
  const alanBtnContainer = useRef();

  return (
    <>
      <SearchForm />
      <Buttons />
      <Stories />
      <div ref={alanBtnContainer} />
    </>
  );
}

export default App;
