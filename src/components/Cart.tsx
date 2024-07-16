import { useContext } from "react";
import { MyContext } from "../Layouts";
import { prodType } from "../types";

export default function Cart() {
  const { producia } = useContext(MyContext);
  return (
    <>
      <main>
        <div className="flex flex-col justify-center items-center">
          <div className="w-[327px]  h-[488px] flex-shrink-0 rounded-[8px] bg-[#FFF]">
            <div className="ifnotempy">
              <div className="text flex flex-row justify-center items-center">
                <h2>CART ()</h2>
                <h2>Remove All</h2>
              </div>
              <div className="">
                <div className="">
                  {producia.map((item: prodType, index) => {
                    return (
                      <div className="" key={index}>
                        <img src={item.img1} alt="" />
                        <div className="">
                          <span>
                            {item.price.toLocaleString("en-US", {
                              style: "currency",
                              currency: "USD",
                            })}
                          </span>
                          <h2>{item.name}</h2>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="total flex flex-row justify-center items-center">
                <h2 className="text-[#000] font-[Manrope] text-[15px] not-italic font-normal leading-[25px] opacity-50">
                  TOTAL
                </h2>
                <h2 className="text-[#000] text-center font-[Manrope] text-[18px] not-italic font-bold leading-[normal] uppercase">
                  {}
                </h2>
                <button className="w-[271px] h-[48px] flex-shrink-0 bg-[#D87D4A] text-[#FFF] text-center font-[Manrope] text-[13px] not-italic font-bold leading-[normal] tracking-[1px] uppercase">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
