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
                defaultChecked
                value="Cash on Delivery"
                className="form-radio text-orange-500"
              />
              <span className="ml-8">Cash on Delivery</span>
            </label>
          </div>
          {isShowed ? (
            ""
          ) : (
            <div className="flex flex-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M42.2812 8.4375H46.5938C47.3704 8.4375 48 9.06713 48 9.84375C48 10.6204 47.3704 11.25 46.5938 11.25H45.0938V23.9062C45.0938 24.6829 44.4641 25.3125 43.6875 25.3125H33.8438V40.9688C33.8438 41.7454 33.2141 42.375 32.4375 42.375H25.0773C24.4239 45.5805 21.5831 48 18.1875 48H1.40625C0.629625 48 0 47.3704 0 46.5938C0 45.8171 0.629625 45.1875 1.40625 45.1875H18.1875C20.021 45.1875 21.585 44.012 22.1653 42.375H8.4375C7.66087 42.375 7.03125 41.7454 7.03125 40.9688C7.03125 40.1921 7.66087 39.5625 8.4375 39.5625H12.5625C13.3379 39.5625 13.9688 38.9317 13.9688 38.1562C13.9688 37.3808 13.3379 36.75 12.5625 36.75H9.43444C6.87619 36.75 4.37297 37.6373 2.38575 39.2485C1.78247 39.7376 0.896906 39.6454 0.407719 39.0419C-0.0814688 38.4385 0.0110625 37.553 0.614344 37.0639C2.84203 35.2578 5.58806 34.1792 8.4375 33.9741V18.375C8.4375 17.5984 9.06713 16.9688 9.84375 16.9688H18.375V7.03125C18.375 6.25462 19.0046 5.625 19.7812 5.625H28.1223C31.9334 2.02078 36.9875 0 42.2641 0H46.5938C47.3704 0 48 0.629625 48 1.40625C48 2.18287 47.3704 2.8125 46.5938 2.8125H42.2642C38.805 2.8125 35.4975 3.79453 32.658 5.625H38.0625C38.8326 5.625 39.4688 6.25228 39.4688 7.03125C39.4688 7.52423 39.3372 7.69561 38.4891 8.80021C38.0648 9.3528 37.4613 10.1389 36.6052 11.3157C36.2039 11.8513 36.3433 12.6075 36.8974 12.9688C37.4088 13.3025 38.0923 13.1781 38.4534 12.6856L41.1473 9.01219C41.4121 8.65088 41.8333 8.4375 42.2812 8.4375ZM32.4375 16.9688C32.9273 16.9688 33.3582 17.2195 33.6099 17.5993C35.4415 15.9118 34.2652 12.7969 31.7344 12.7969C29.5943 12.7969 28.2687 15.1348 29.3533 16.9688H32.4375ZM21.1875 8.4375H35.2472C35.0152 8.75898 34.8251 9.00687 34.6644 9.21646C34.3106 9.67792 34.0992 9.95371 33.896 10.4204C29.6796 8.64131 25.1696 12.4771 26.337 16.9688H21.1875V8.4375ZM22.5938 25.4062V19.7812H19.7812V25.4062H22.5938ZM31.0312 39.5625H16.5403C17.5098 36.8283 15.4711 33.9375 12.5625 33.9375H11.25V19.7812H16.9688V26.8125C16.9688 27.5891 17.5984 28.2188 18.375 28.2188H24C24.7766 28.2188 25.4062 27.5891 25.4062 26.8125V19.7812H31.0312V39.5625ZM33.8438 20.7288V22.5H42.2812V12.2217L40.7213 14.3488C39.9301 15.4278 38.6519 16.0371 37.2972 15.9602C37.1467 18.1043 35.7894 19.9393 33.8438 20.7288Z"
                  fill="#D87D4A"
                />
              </svg>
              <p className="text-[#000] font-[Manrope] text-[15px] not-italic font-normal leading-[25px] opacity-50">
                The ‘Cash on Delivery’ option enables you to pay in cash when
                our delivery courier arrives at your residence. Just make sure
                your address is correct so that your order will not be
                cancelled.
              </p>
            </div>
          )}

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
