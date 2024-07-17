import { useContext, useState } from "react";
import Header from "../components/Header";
import "./input.css";
import Footer from "../components/Footer";
import { prodType } from "../types";
import { MyContext } from "../Layouts";

export default function Input() {
  const { producia } = useContext(MyContext);
  const [isShowed, setisShowed] = useState<boolean>(false);
  function Change() {
    setisShowed(!isShowed);
  }
  function Cash() {
    setisShowed(false);
  }
  const total = producia.reduce(
    (acc, item) => acc + item.price * item.quanatty,
    0
  );
  const shipping = 50; // Assuming a flat shipping rate
  const vat = total * 0.2; // Assuming VAT is 20%
  const grandTotal = total + shipping + vat;
  return (
    <>
      <div className="bg-black">
        <Header />
      </div>
      <main className="w-full h-screen">
        <section className="px-6">
          <div className="bg">
            <div className="mt-[16px] mb-[34px]">
              <h3>Go Back</h3>
            </div>
            <div className="mt-[24px] px-4">
              <h1 className="ml-[24px]">CHECKOUT</h1>
              <h2 className="text-[#D87D4A] font-[Manrope] text-[13px] not-italic font-bold leading-[25px] uppercase mt-[32px] mb-[16px]">
                Billing details
              </h2>
              <h2>Name </h2>
              <input
                type="text"
                placeholder="Alexei Ward"
                className="w-[280px] h-[56px] flex-shrink-0 rounded-[8px] border-[1px] border-[solid] border-[#FFF] bg-[#FFF] pl-6"
              />
            </div>
            <div className="mt-[26px]">
              <h2 className="mb-[9px]">Email Address </h2>
              <input
                type="email"
                placeholder="alexei@mail.com"
                className="w-[280px] h-[56px] flex-shrink-0 rounded-[8px] border-[1px] border-[solid] border-[#FFF] bg-[#FFF] pl-6"
              />
            </div>
            <div className="mt-[26px]">
              <h2 className="mb-[9px]">Phone Number</h2>
              <input
                type="number"
                placeholder="+1 202-555-0136"
                className="w-[280px] h-[56px] flex-shrink-0 rounded-[8px] border-[1px] border-[solid] border-[#FFF] bg-[#FFF] pl-6"
              />
            </div>
            <div className="mt-[32px]">
              <h2 className="text-[#D87D4A] font-[Manrope] text-[13px] not-italic font-bold leading-[25px] uppercase mb-[16px]">
                shipping info
              </h2>
              <h2 className="mb-[9px]">Your Address</h2>
              <input
                type="text"
                placeholder="1137 Williams Avenue"
                className="w-[280px] h-[56px] flex-shrink-0 rounded-[8px] border-[1px] border-[solid] border-[#FFF] bg-[#FFF] pl-6"
              />
              <h2 className="mb-[9x] mt-[24px]">ZIP CODE</h2>
              <input
                type="number"
                placeholder="10001"
                className="w-[280px] h-[56px] flex-shrink-0 rounded-[8px] border-[1px] border-[solid] border-[#FFF] bg-[#FFF] pl-6"
              />
              <h2 className="mb-[9x] mt-[24px]">City</h2>
              <input
                type="text"
                placeholder="New York"
                className="w-[280px] h-[56px] flex-shrink-0 rounded-[8px] border-[1px] border-[solid] border-[#FFF] bg-[#FFF] pl-6"
              />
              <h2 className="mb-[9x] mt-[24px]">Country</h2>
              <input
                type="text"
                placeholder="United States"
                className="w-[280px] h-[56px] flex-shrink-0 rounded-[8px] border-[1px] border-[solid] border-[#FFF] bg-[#FFF] pl-6"
              />
            </div>
          </div>
          <h2 className="text-[#D87D4A] font-[Manrope] text-[13px] not-italic font-bold leading-[25px] uppercase mb-[16px] mt-[32px]">
            payment details
          </h2>
          <h2 className="mb-[4px]">Payment Method</h2>
          <div className="flex flex-col space-y-2 mb-[40px]">
            <label className="flex items-center border-2 rounded-lg p-4 cursor-pointer">
              <input
                type="radio"
                name="payment"
                onClick={Change}
                className="form-radio text-orange-500"
              />
              <span className="ml-8">e-Money</span>
            </label>
            <label className="flex items-center border-2 rounded-lg p-4 cursor-pointer">
              <input
                type="radio"
                name="payment"
                onClick={Cash}
                value="Cash on Delivery"
                className="form-radio text-orange-500"
              />
              <span className="ml-8">Cash on Delivery</span>
            </label>
          </div>
          {isShowed ? (
            <div className="mt-[32px] mb-[40px]">
              <h2 className="mb-[9x]">e-Money Number</h2>
              <input
                type="number"
                placeholder="238521993"
                className="w-[280px] h-[56px] flex-shrink-0 rounded-[8px] border-[1px] border-[solid] border-[#FFF] bg-[#FFF] pl-6"
              />
              <h2 className="mb-[9x] mt-[24px]">e-Money PIN</h2>
              <input
                type="number"
                placeholder="6891"
                className="w-[280px] h-[56px] flex-shrink-0 rounded-[8px] border-[1px] border-[solid] border-[#FFF] bg-[#FFF] pl-6"
              />
            </div>
          ) : (
            ""
          )}
          <div className="">
            <div className="">
              {producia.length === 0 ? (
                ""
              ) : (
                <h2 className="text-[#000] font-[Manrope] text-[18px] not-italic font-bold leading-[normal] tracking-[1.286px] uppercase mt-[100px] mb-[32px]">
                  Summary
                </h2>
              )}
              {producia.map((item: prodType, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center ga-[32px]">
                  <div className="flex items-start justify-start">
                    <img
                      className="h-[64px] w-[64px] rounded-[8px] bg-[#F1F1F1] mr-[20px]"
                      src={item.img1}
                      alt=""
                    />
                    <div className="flex flex-col mt-[7px]">
                      <h2 className="text-[#000] font-[Manrope] text-[15px] not-italic font-bold leading-[25px]">
                        {item.name}
                      </h2>
                      <span className="text-[#000] font-[Manrope] text-[15px] not-italic font-bold leading-[25px] opacity-50">
                        $
                        {item.price.toLocaleString("en-US", {
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        })}
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <span className="text-[#000] text-right font-[Manrope] text-[15px] not-italic font-bold leading-[25px] opacity-50 mr-[24px]">
                      x{item.quanatty}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {producia.length === 0 ? (
            ""
          ) : (
            <div className="mt-[32px]">
              <div className="flex justify-between items-center px-6">
                <h2 className="text-[#000] font-[Manrope] text-[15px] not-italic font-bold leading-[25px]">
                  Total
                </h2>
                <span className="text-[#000] font-[Manrope] text-[15px] not-italic font-bold leading-[25px] opacity-50">
                  $
                  {total.toLocaleString("en-US", {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                </span>
              </div>
              <div className="flex justify-between items-center px-6 mt-[16px]">
                <h2 className="text-[#000] font-[Manrope] text-[15px] not-italic font-bold leading-[25px]">
                  Shipping
                </h2>
                <span className="text-[#000] font-[Manrope] text-[15px] not-italic font-bold leading-[25px] opacity-50">
                  $
                  {shipping.toLocaleString("en-US", {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                </span>
              </div>
              <div className="flex justify-between items-center px-6 mt-[16px]">
                <h2 className="text-[#000] font-[Manrope] text-[15px] not-italic font-bold leading-[25px]">
                  VAT (20%)
                </h2>
                <span className="text-[#000] font-[Manrope] text-[15px] not-italic font-bold leading-[25px] opacity-50">
                  $
                  {vat.toLocaleString("en-US", {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                </span>
              </div>
              <div className="flex flex-col justify-between items-center px-6 mt-[16px] w-full">
                <div className="flex flex-row justify-between items-center w-full">
                  <h2 className="text-[#000] font-[Manrope] text-[15px] not-italic font-bold leading-[25px]">
                    Grand Total
                  </h2>
                  <span className="text-[#000] font-[Manrope] text-[15px] not-italic font-bold leading-[25px] opacity-50">
                    $
                    {grandTotal.toLocaleString("en-US", {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </span>
                </div>
                <button className="w-full h-[48px] mt-[32px] flex-shrink-0 mb-[31px] bg-[#D87D4A] text-[#FFF] text-center font-[Manrope] text-[13px] not-italic font-bold leading-[normal] tracking-[1px] uppercase">
                CONTINUE & PAY
                </button>
              </div>
            </div>
          )}
        </section>
        <Footer />
      </main>
    </>
  );
}
