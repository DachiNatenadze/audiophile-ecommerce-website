import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";
import MainPage from "./components/MainPage";
import Headphones from "./Pages/Headphones";
import Speaker from "./Pages/Speaker";
import Earphones from "./Pages/Earphones";
import XX99MarkIIProducts from "./Pages/XX99MarkIIProducts";
import XX99MarkIProducts from "./Pages/XX99MarkIProduct";
import XX59Headphone from "./Pages/xx59Headphone";

import { ProductsType } from "./types";
import ZX9Speaker from "./Pages/ZX9Speaker";
import ZX7Speaker from "./Pages/ZX7Speaker";
import YX1EarPhones from "./Pages/YX1Earphones";
export const MyContext = createContext<ProductsType>({
  XX99qnty: 0,
  setXX99qnty: () => {},
  XX99IPrice: 1750,
  XX99Price: 2999,
  setXX99Price: () => {},
  setXX99IPrice: () => {},
  XX99Iqnty: 0,
  setXXI99qnty: () => {},
  XX59qnty: 0,
  setXX59qnty: () => {},
  XX59Price: 899,
  setXX59Price: () => {},
  ZX9Price: 4500,
  setZX9Price: () => {},
  ZX9Qnty: 0,
  setZX9Qnty: () => {},
  ZX7Price: 4500,
  setZX7Price: () => {},
  ZX7Qnty: 0,
  setZX7Qnty: () => {},
  YX1Price: 599,
  YX1Qnty: 0,
  setYX1Qnty: () => {},
  setYX1Price: () => {},
});

export default function Layouts() {
  const [XX99Price, setXX99Price] = useState<number>(2999);
  const [XX99IPrice, setXX99IPrice] = useState<number>(1750);
  const [XX99Iqnty, setXXI99qnty] = useState<number>(0);
  const [XX99qnty, setXX99qnty] = useState<number>(0);
  const [XX59qnty, setXX59qnty] = useState<number>(0);
  const [XX59Price, setXX59Price] = useState<number>(899);
  const [ZX9Price, setZX9Price] = useState<number>(4500);
  const [ZX9Qnty, setZX9Qnty] = useState<number>(0);
  const [ZX7Price, setZX7Price] = useState<number>(3500);
  const [ZX7Qnty, setZX7Qnty] = useState<number>(0);
  const [YX1Price, setYX1Price] = useState<number>(599);
  const [YX1Qnty, setYX1Qnty] = useState<number>(0);
  return (
    <>
      <BrowserRouter>
        <MyContext.Provider
          value={{
            YX1Price,
            YX1Qnty,
            setYX1Qnty,
            setYX1Price,
            ZX7Price,
            setZX7Price,
            ZX7Qnty,
            setZX7Qnty,
            ZX9Price,
            ZX9Qnty,
            setZX9Qnty,
            setZX9Price,
            XX59Price,
            setXX59Price,
            XX59qnty,
            setXX59qnty,
            XX99Iqnty,
            setXXI99qnty,
            XX99IPrice,
            setXX99IPrice,
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
            <Route path="/XX99Mark2Product" element={<XX99MarkIIProducts />} />
            <Route path="/XX99Mark1Product" element={<XX99MarkIProducts />} />
            <Route path="/XX59Headphone" element={<XX59Headphone />} />
            <Route path="/ZX9Speaker" element={<ZX9Speaker />} />
            <Route path="/ZX7Speaker" element={<ZX7Speaker />} />
            <Route path="/YX1Earphones" element={<YX1EarPhones />} />
          </Routes>
        </MyContext.Provider>
      </BrowserRouter>
    </>
  );
}
