import { useContext } from "react";
import Header from "../components/Header";
import zx9 from "/product-zx9-speaker/mobile/image-category-page-preview.jpg";
import xx59 from "/product-xx59-headphones/mobile/image-category-page-preview.jpg";
import xx99markI from "/product-xx59-headphones/mobile/image-category-page-preview.jpg";
import zx7 from "/product-zx7-speaker/mobile/image-category-page-preview.jpg";
import HeadstenonLegs from "/product-zx9-speaker/mobile/image-gallery-2.jpg";
import headset from "/product-zx9-speaker/mobile/image-gallery-3.jpg";

import autohor from "/product-zx9-speaker/mobile/image-gallery-1.jpg";

import { MyContext } from "../Layouts";
import Items from "../components/Items";
import AboutComoany from "../components/AboutComoany";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { prodType } from "../types";
import Cart from "../components/Cart";

export default function ZX9Speaker() {
  const { producia, setProducia, ZX9Price, ZX9Qnty, setZX9Qnty } =
    useContext(MyContext);
  2;
  const handleDecrement = () => {
    // Ensure qnty doesn't go below 0
    if (ZX9Qnty > 0) {
      setZX9Qnty(ZX9Qnty - 1);
    }
  };
  function AddproducttoCart() {
    const cartInstance = [...producia];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const inThecart: any = cartInstance.find((product: prodType) => {
      return product.id === 6;
    });
    if (inThecart) {
      inThecart.quanatty++;
      setProducia(cartInstance);
    } else {
      setProducia((prev: prodType[]) => [
        ...prev,
        {
          id: 6,
          name: "YX9",
          price: ZX9Price,
          quanatty: 1,
          img1: "/product-zx9-speaker/mobile/image-category-page-preview.jpg",
        },
      ]);
    }
  }
  return (
    <>
      <Cart />
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
            <img src={zx9} alt="" />
            <h2 className="text-[#000] mt-[24px] mb-[24px] font-[Manrope] text-[28px] not-italic font-bold leading-[normal] tracking-[1px] uppercase">
              ZX9 SPEAKER
            </h2>
            <p className="text-[#000] font-[Manrope] text-[15px] not-italic font-normal leading-[25px] opacity-50">
              Upgrade your sound system with the all new ZX9 active speaker.
              It’s a bookshelf speaker system that offers truly wireless
              connectivity -- creating new possibilities for more pleasing and
              practical audio setups.
            </p>
            <h2 className="text-[#000] font-[Manrope] text-[18px] mt-[24px] not-italic font-bold leading-[normal] tracking-[1.286px] uppercase mb-[32px]">
              <span>
                ${ZX9Price.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
              </span>
            </h2>
            <div className="">
              <button
                className="w-[16px] opacity-25 mr-[21px]"
                onClick={handleDecrement}>
                -
              </button>
              <span className="w-[16px] text-[#000] text-center font-[Manrope] text-[13px] not-italic font-bold leading-[normal] tracking-[1px] uppercase">
                {ZX9Qnty}
              </span>
              <button
                className="w-[16px] opacity-25 ml-[21px] mr-[21px]"
                onClick={() => {
                  setZX9Qnty(ZX9Qnty + 1);
                }}>
                +
              </button>
              <button
                onClick={AddproducttoCart}
                className="bg-[#D87D4A] w-[160px] h-[48px] flex-shrink-0  text-[#FFF] text-center font-[Manrope] text-[13px] not-italic font-bold leading-[normal] tracking-[1px] uppercase">
                ADD TO CART
              </button>
            </div>
            <h2 className="mt-[88px] text-[#000] font-[Manrope] text-[24px] not-italic font-bold leading-[36px] uppercase">
              FEATURES
            </h2>
            <p className="mb-[24px] mt-[24px] text-[#000] font-[Manrope] text-[15px] not-italic font-normal leading-[25px] opacity-50">
              Connect via Bluetooth or nearly any wired source. This speaker
              features optical, digital coaxial, USB Type-B, stereo RCA, and
              stereo XLR inputs, allowing you to have up to five wired source
              devices connected for easy switching. Improved bluetooth
              technology offers near lossless audio quality at up to 328ft
              (100m).
            </p>
            <p className=" text-[#000] font-[Manrope] text-[15px] not-italic font-normal leading-[25px] opacity-50">
              Discover clear, more natural sounding highs than the competition
              with ZX9’s signature planar diaphragm tweeter. Equally important
              is its powerful room-shaking bass courtesy of a 6.5” aluminum
              alloy bass unit. You’ll be able to enjoy equal sound quality
              whether in a large room or small den. Furthermore, you will
              experience new sensations from old songs since it can respond to
              even the subtle waveforms.Discover clear, more natural sounding
              highs than the competition with ZX9’s signature planar diaphragm
              tweeter. Equally important is its powerful room-shaking bass
              courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to
              enjoy equal sound quality whether in a large room or small den.
              Furthermore, you will experience new sensations from old songs
              since it can respond to even the subtle waveforms.
            </p>

            <h2 className="text-[#000] font-[Manrope] text-[24px] not-italic font-bold leading-[36px] uppercase mt-[88px]">
              in the box
            </h2>

            <div className="flex flex-col mt-[24px]">
              <span className="text-[#D87D4A] font-[Manrope] text-[15px] not-italic font-bold leading-[25px] ">
                1x
                <span className="text-[#000] font-[Manrope] text-[15px] not-italic font-normal leading-[25px] opacity-50 ml-[24px]">
                  Speaker Unit
                </span>
              </span>
              <span className="text-[#D87D4A] font-[Manrope] text-[15px] not-italic font-bold leading-[25px] ">
                2x
                <span className="text-[#000] font-[Manrope] text-[15px] not-italic font-normal leading-[25px] opacity-50 ml-[24px]">
                  Speaker Cloth Panel
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
                  10m Optical Cable
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
              <img src={zx7} alt="" />
              <h2 className="text-[#000] text-center font-[Manrope] text-[24px] not-italic font-bold leading-[normal] tracking-[1.714px] uppercase mb-[32px]">
                ZX7 SPEAKER
              </h2>
              <button className="w-[160px] h-[48px] flex-shrink-0 bg-[#D87D4A] text-[#FFF] font-[Manrope] text-[13px] not-italic font-bold leading-[normal] tracking-[1px] uppercase">
                See Product
              </button>

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
