import { useContext } from "react";
import Header from "../components/Header";
import zx9 from "/product-zx9-speaker/mobile/image-category-page-preview.jpg";
import xx59 from "/product-xx59-headphones/mobile/image-category-page-preview.jpg";
import xx99markI from "/product-xx59-headphones/mobile/image-category-page-preview.jpg";
import xx99MarkII from "/product-xx59-headphones/mobile/image-category-page-preview.jpg";
import HeadstenonLegs from "/product-xx59-headphones/mobile/image-gallery-2.jpg";
import headset from "/product-xx59-headphones/mobile/image-gallery-3.jpg";

import autohor from "/product-xx59-headphones/mobile/image-gallery-1.jpg";

import { MyContext } from "../Layouts";
import Items from "../components/Items";
import AboutComoany from "../components/AboutComoany";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function XX59Headphone() {
  const { XX59qnty, setXX59qnty, XX59Price } = useContext(MyContext);
  2;
  const handleDecrement = () => {
    // Ensure qnty doesn't go below 0
    if (XX59qnty > 0) {
      setXX59qnty(XX59qnty - 1);
    }
  };
  return (
    <>
      <div className="bg-black flex justify-center items-center">
        <Header />
      </div>
      <main className="px-6">
        <div className="">
          <div className="mt-[16px]">
            <Link to={"/"}>
              <span className="text-[#000] font-[Manrope] text-[15px] not-italic font-normal leading-[25px] opacity-50">
                Go Back
              </span>
            </Link>
            <img src={xx99MarkII} alt="" />
            <h2 className="text-[#000] mt-[24px] mb-[24px] font-[Manrope] text-[28px] not-italic font-bold leading-[normal] tracking-[1px] uppercase">
              XX59 Headphones
            </h2>
            <p className="text-[#000] font-[Manrope] text-[15px] not-italic font-normal leading-[25px] opacity-50">
              Enjoy your audio almost anywhere and customize it to your specific
              tastes with the XX59 headphones. The stylish yet durable versatile
              wireless headset is a brilliant companion at home or on the move.
            </p>
            <h2 className="text-[#000] font-[Manrope] text-[18px] mt-[24px] not-italic font-bold leading-[normal] tracking-[1.286px] uppercase mb-[32px]">
              $
              {XX59Price.toLocaleString("en-US", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </h2>
            <div className="">
              <button
                className="w-[16px] opacity-25 mr-[21px]"
                onClick={handleDecrement}>
                -
              </button>
              <span className="w-[16px] text-[#000] text-center font-[Manrope] text-[13px] not-italic font-bold leading-[normal] tracking-[1px] uppercase">
                {XX59qnty}
              </span>
              <button
                className="w-[16px] opacity-25 ml-[21px] mr-[21px]"
                onClick={() => {
                  setXX59qnty(XX59qnty + 1);
                }}>
                +
              </button>
              <button className="bg-[#D87D4A] w-[160px] h-[48px] flex-shrink-0  text-[#FFF] text-center font-[Manrope] text-[13px] not-italic font-bold leading-[normal] tracking-[1px] uppercase">
                ADD TO CART
              </button>
            </div>
            <h2 className="mt-[88px] text-[#000] font-[Manrope] text-[24px] not-italic font-bold leading-[36px] uppercase">
              FEATURES
            </h2>
            <p className="mb-[24px] mt-[24px] text-[#000] font-[Manrope] text-[15px] not-italic font-normal leading-[25px] opacity-50">
              These headphones have been created from durable, high-quality
              materials tough enough to take anywhere. Its compact folding
              design fuses comfort and minimalist style making it perfect for
              travel. Flawless transmission is assured by the latest wireless
              technology engineered for audio synchronization with videos.
            </p>
            <p className=" text-[#000] font-[Manrope] text-[15px] not-italic font-normal leading-[25px] opacity-50">
              More than a simple pair of headphones, this headset features a
              pair of built-in microphones for clear, hands-free calling when
              paired with a compatible smartphone. Controlling music and calls
              is also intuitive thanks to easy-access touch buttons on the
              earcups. Regardless of how you use the XX59 headphones, you can do
              so all day thanks to an impressive 30-hour battery life that can
              be rapidly recharged via USB-C.
            </p>

            <h2 className="text-[#000] font-[Manrope] text-[24px] not-italic font-bold leading-[36px] uppercase mt-[88px]">
              in the box
            </h2>

            <div className="flex flex-col mt-[24px]">
              <span className="text-[#D87D4A] font-[Manrope] text-[15px] not-italic font-bold leading-[25px] ">
                1x
                <span className="text-[#000] font-[Manrope] text-[15px] not-italic font-normal leading-[25px] opacity-50 ml-[24px]">
                  Headphone Unit
                </span>
              </span>
              <span className="text-[#D87D4A] font-[Manrope] text-[15px] not-italic font-bold leading-[25px] ">
                2x
                <span className="text-[#000] font-[Manrope] text-[15px] not-italic font-normal leading-[25px] opacity-50 ml-[24px]">
                  Replacement Earcups
                </span>
              </span>
              <span className="text-[#D87D4A] font-[Manrope] text-[15px] not-italic font-bold leading-[25px]">
                1x
                <span className="text-[#000] font-[Manrope] text-[15px] not-italic font-normal leading-[25px] opacity-50 ml-[24px]">
                  User Manual
                </span>
              </span>
              <span className="text-[#D87D4A] font-[Manrope] text-[15px] not-italic font-bold leading-[25px] ">
                1x
                <span className="text-[#000] font-[Manrope] text-[15px] not-italic font-normal leading-[25px] opacity-50 ml-[24px]">
                  3.5mm 5m Audio Cable
                </span>
              </span>
              <span className="text-[#D87D4A] font-[Manrope] text-[15px] not-italic font-bold leading-[25px] ">
                1x
                <span className="text-[#000] font-[Manrope] text-[15px] not-italic font-normal leading-[25px] opacity-50 ml-[24px]">
                  Travel Bag
                </span>
              </span>
            </div>
            <div className="">
              <img
                src={autohor}
                alt=""
                className="w-[327px] h-[174px] flex-shrink-0 rounded-[8px] bg-[#F1F1F1] mt-[99px] mb-[16px]"
              />
              <img
                src={HeadstenonLegs}
                className="w-[327px] h-[174px] flex-shrink-0 rounded-[8px] bg-[#F1F1F1] mb-[16px]"
                alt=""
              />
              <img
                src={headset}
                alt=""
                className="w-[327px] h-[368px] flex-shrink-0 rounded-[8px] bg-[#F1F1F1]"
              />
            </div>
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-[#000] text-center font-[Manrope] text-[24px] not-italic font-bold leading-[36px] uppercase mt-[120px] mb-[40px]">
                you may also like
              </h2>
              <img src={xx99markI} alt="" />
              <h2 className="text-[#000] text-center font-[Manrope] text-[24px] not-italic font-bold leading-[normal] tracking-[1.714px] uppercase mb-[32px]">
                XX99 MARK I
              </h2>
              <button className="w-[160px] h-[48px] flex-shrink-0 bg-[#D87D4A] text-[#FFF] font-[Manrope] text-[13px] not-italic font-bold leading-[normal] tracking-[1px] uppercase">
                See Product
              </button>
              <img src={xx59} alt="" />
              <h2 className="text-[#000] text-center font-[Manrope] text-[24px] not-italic font-bold leading-[normal] tracking-[1.714px] uppercase mb-[32px]">
                XX59
              </h2>
              <button className="w-[160px] h-[48px] flex-shrink-0 bg-[#D87D4A] text-[#FFF] font-[Manrope] text-[13px] not-italic font-bold leading-[normal] tracking-[1px] uppercase mb-[50px]">
                See Product
              </button>
              <img src={zx9} alt="" />
              <h2 className="text-[#000] text-center font-[Manrope] text-[24px] not-italic font-bold leading-[normal] tracking-[1.714px] uppercas mb-[32px] ">
                ZX9 SPEAKER
              </h2>
              <button className="w-[160px] h-[48px] flex-shrink-0 bg-[#D87D4A] text-[#FFF] font-[Manrope] text-[13px] not-italic font-bold leading-[normal] tracking-[1px] uppercase mb-[120px]">
                See Product
              </button>
            </div>
            <Items />
            <div className="mt-[120px] mb-[120px]">
              <AboutComoany />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
