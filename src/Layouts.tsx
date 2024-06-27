import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";
import MainPage from "./components/MainPage";
import Headphones from "./Pages/Headphones";
import Speaker from "./Pages/Speaker";
import Earphones from "./Pages/Earphones";
import XX99MarkIIProducts from "./Pages/XX99MarkIIProducts";
import { ProductsType } from "./types";
export const MyContext = createContext<ProductsType>({
  XX99qnty: 0,
  setXX99qnty: () => {},
  XX99Price: 2999,
  setXX99Price: () => {},
});

export default function Layouts() {
  const [XX99Price, setXX99Price] = useState<number>(2.999);
  const [XX99qnty, setXX99qnty] = useState<number>(0);
  console.log(XX99Price.toFixed(1));
  return (
    <>
      <BrowserRouter>
        <MyContext.Provider
          value={{
            XX99qnty,
            setXX99qnty,
            XX99Price,
            setXX99Price,
          }}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/Headphones" element={<Headphones />} />
            <Route path="/Speaker" element={<Speaker />} />
            <Route path="/Earphones" element={<Earphones />} />
            <Route path="/XX99MarkIIProduct" element={<XX99MarkIIProducts />} />
          </Routes>
        </MyContext.Provider>
      </BrowserRouter>
    </>
  );
}
