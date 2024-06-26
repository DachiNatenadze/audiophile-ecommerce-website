import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext } from "react";
import MainPage from "./components/MainPage";
import Headphones from "./Pages/Headphones";
export const MyContext = createContext({});

export default function Layouts() {
  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={{}}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/Headphones" element={<Headphones />} />
          </Routes>
        </MyContext.Provider>
      </BrowserRouter>
    </>
  );
}
