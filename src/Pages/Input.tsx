import { useState } from "react";
import Header from "../components/Header";
import "./input.css";

export default function Input() {
  const [isShowed, setisShowed] = useState<boolean>(false);
  function Change() {
    setisShowed(!isShowed);
  }
  function Cash() {
    setisShowed(false);
  }
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
          <div className="flex flex-col space-y-2">
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
            <div className="mt-[32px]">
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
        </section>
      </main>
    </>
  );
}
