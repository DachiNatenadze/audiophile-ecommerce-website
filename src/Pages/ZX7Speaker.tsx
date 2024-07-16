import { useContext } from "react";
import Header from "../components/Header";
import zx7 from "/product-zx7-speaker/mobile/image-category-page-preview.jpg";
import xx59 from "/product-xx59-headphones/mobile/image-category-page-preview.jpg";
import xx99markI from "/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg";
import zx9 from "/product-zx9-speaker/mobile/image-category-page-preview.jpg";
import HeadstenonLegs from "/product-zx7-speaker/mobile/image-gallery-2.jpg";
import headset from "/product-zx7-speaker/mobile/image-gallery-3.jpg";
import autohor from "/product-zx7-speaker/mobile/image-gallery-1.jpg";

import { MyContext } from "../Layouts";
import Items from "../components/Items";
import AboutComoany from "../components/AboutComoany";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { prodType } from "../types";

export default function ZX7Speaker() {
  const { producia, setProducia, ZX7Price, ZX7Qnty, setZX7Qnty } =
    useContext(MyContext);
  2;
  const handleDecrement = () => {
    // Ensure qnty doesn't go below 0
    if (ZX7Qnty > 0) {
      setZX7Qnty(ZX7Qnty - 1);
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
          name: "ZX7",
          price: ZX7Price,
          quanatty: 1,
          img1: "/product-zx7-speaker/mobile/image-category-page-preview.jpg",
        },
      ]);
    }
  }

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
            <img src={zx7} alt="" />
            <h2 className="text-[#000] mt-[24px] mb-[24px] font-[Manrope] text-[28px] not-italic font-bold leading-[normal] tracking-[1px] uppercase">
              ZX7 SPEAKER
            </h2>
            <p className="text-[#000] font-[Manrope] text-[15px] not-italic font-normal leading-[25px] opacity-50">
              Stream high quality sound wirelessly with minimal to no loss. The
              ZX7 speaker uses high-end audiophile components that represents
              the top of the line powered speakers for home or studio use.
            </p>
            <h2 className="text-[#000] font-[Manrope] text-[18px] mt-[24px] not-italic font-bold leading-[normal] tracking-[1.286px] uppercase mb-[32px]">
              $
              {ZX7Price.toLocaleString("en-US", {
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
                {ZX7Qnty}
              </span>
              <button
                className="w-[16px] opacity-25 ml-[21px] mr-[21px]"
                onClick={() => {
                  setZX7Qnty(ZX7Qnty + 1);
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
              Reap the advantages of a flat diaphragm tweeter cone. This
              provides a fast response rate and excellent high frequencies that
              lower tiered bookshelf speakers cannot provide. The woofers are
              made from aluminum that produces a unique and clear sound. XLR
              inputs allow you to connect to a mixer for more advanced usage.
            </p>
            <p className=" text-[#000] font-[Manrope] text-[15px] not-italic font-normal leading-[25px] opacity-50">
              The ZX7 speaker is the perfect blend of stylish design and high
              performance. It houses an encased MDF wooden enclosure which
              minimises acoustic resonance. Dual connectivity allows pairing
              through bluetooth or traditional optical and RCA input. Switch
              input sources and control volume at your finger tips with the
              included wireless remote. This versatile speaker is equipped to
              deliver an authentic listening experience.
            </p>

            <h2 className="text-[#000] font-[Manrope] text-[24px] not-italic font-bold leading-[36px] uppercase mt-[88px]">
              in the box
            </h2>

            <div className="flex flex-col mt-[24px]">
              <span className="text-[#D87D4A] font-[Manrope] text-[15px] not-italic font-bold leading-[25px] ">
                2x
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
                  7.5m Optical Cable
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
              <img src={zx9} alt="" />
              <h2 className="text-[#000] text-center font-[Manrope] text-[24px] not-italic font-bold leading-[normal] tracking-[1.714px] uppercase mb-[32px]">
                ZX9 SPEAKER
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
