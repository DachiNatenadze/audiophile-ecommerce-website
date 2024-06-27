import { useContext } from "react";
import Header from "../components/Header";
import xx99MarkII from "/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg";
import { MyContext } from "../Layouts";

export default function XX99MarkIIProducts() {
  const { XX99Price, setXX99Price, XX99qnty, setXX99qnty } =
    useContext(MyContext);
  const handleDecrement = () => {
    // Ensure qnty doesn't go below 0
    if (XX99qnty > 0) {
      setXX99qnty(XX99qnty - 1);
    }
  };
  return (
    <>
      <div className="bg-black">
        <Header />
      </div>
      <main className="px-6">
        <div className="">
          <div className="mt-[16px]">
            <span className="">Go Back</span>
            <img src={xx99MarkII} alt="" />
            <h3 className="text-[#D87D4A] font-[Manrope] mt-[32px] text-[14px] not-italic font-normal leading-[normal] tracking-[10px] uppercase">
              NEW PRODUCT
            </h3>
            <h2 className="text-[#000] mt-[24px] mb-[24px] font-[Manrope] text-[28px] not-italic font-bold leading-[normal] tracking-[1px] uppercase">
              XX99 Mark II Headphones
            </h2>
            <p className="text-[#000] font-[Manrope] text-[15px] not-italic font-normal leading-[25px] opacity-50">
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
            <h2 className="text-[#000] font-[Manrope] text-[18px] mt-[24px] not-italic font-bold leading-[normal] tracking-[1.286px] uppercase">
              ${XX99Price}
            </h2>
            <div className="">
              <button
                className="w-[16px] opacity-25 mr-[21px]"
                onClick={handleDecrement}>
                -
              </button>
              <span className="w-[16px] text-[#000] text-center font-[Manrope] text-[13px] not-italic font-bold leading-[normal] tracking-[1px] uppercase">
                {XX99qnty}
              </span>
              <button
                className="w-[16px] opacity-25 ml-[21px] mr-[21px]"
                onClick={() => {
                  setXX99qnty(XX99qnty + 1);
                }}>
                +
              </button>
              <button className="bg-[#D87D4A] w-[160px] h-[48px] flex-shrink-0  text-[#FFF] text-center font-[Manrope] text-[13px] not-italic font-bold leading-[normal] tracking-[1px] uppercase">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
