import { useContext } from "react";
import Header from "../components/Header";
import zx9 from "/product-zx9-speaker/mobile/image-category-page-preview.jpg";
import xx59 from "/product-xx59-headphones/mobile/image-category-page-preview.jpg";
import xx99markI from "/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg";
import xx99MarkII from "/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg";
import HeadstenonLegs from "/product-xx99-mark-one-headphones/mobile/image-gallery-2.jpg";
import headset from "/product-xx99-mark-one-headphones/mobile/image-gallery-3.jpg";

import autohor from "/product-xx99-mark-one-headphones/mobile/image-gallery-1.jpg";

import { MyContext } from "../Layouts";
import Items from "../components/Items";
import AboutComoany from "../components/AboutComoany";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { prodType } from "../types";
import Cart from "../components/Cart";

export default function XX99MarkIProducts() {
  const { producia, setProducia, XX99Iqnty, setXXI99qnty, XX99IPrice } =
    useContext(MyContext);
  2;
  const handleDecrement = () => {
    // Ensure qnty doesn't go below 0
    if (XX99Iqnty > 0) {
      setXXI99qnty(XX99Iqnty - 1);
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
          name: "XX99 Mark I",
          price: XX99IPrice,
          quanatty: 1,
          img1: "/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg",
        },
      ]);
    }
  }

  return (
    <>
      <Cart />
      <div className="bg-black">
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
              XX99 Mark I Headphones
            </h2>
            <p className="text-[#000] font-[Manrope] text-[15px] not-italic font-normal leading-[25px] opacity-50">
              As the gold standard for headphones, the classic XX99 Mark I
              offers detailed and accurate audio reproduction for audiophiles,
              mixing engineers, and music aficionados alike in studios and on
              the go.
            </p>
            <h2 className="text-[#000] font-[Manrope] text-[18px] mt-[24px] not-italic font-bold leading-[normal] tracking-[1.286px] uppercase mb-[32px]">
            ${XX99IPrice.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
            </h2>
            <div className="">
              <button
                className="w-[16px] opacity-25 mr-[21px]"
                onClick={handleDecrement}>
                -
              </button>
              <span className="w-[16px] text-[#000] text-center font-[Manrope] text-[13px] not-italic font-bold leading-[normal] tracking-[1px] uppercase">
                {XX99Iqnty}
              </span>
              <button
                className="w-[16px] opacity-25 ml-[21px] mr-[21px]"
                onClick={() => {
                  setXXI99qnty(XX99Iqnty + 1);
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
              As the headphones all others are measured against, the XX99 Mark I
              demonstrates over five decades of audio expertise, redefining the
              critical listening experience. This pair of closed-back headphones
              are made of industrial, aerospace-grade materials to emphasize
              durability at a relatively light weight of 11 oz.
            </p>
            <p className=" text-[#000] font-[Manrope] text-[15px] not-italic font-normal leading-[25px] opacity-50">
              From the handcrafted microfiber ear cushions to the robust metal
              headband with inner damping element, the components work together
              to deliver comfort and uncompromising sound. Its closed-back
              design delivers up to 27 dB of passive noise cancellation,
              reducing resonance by reflecting sound to a dedicated absorber.
              For connectivity, a specially tuned cable is included with a
              balanced gold connector.
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
