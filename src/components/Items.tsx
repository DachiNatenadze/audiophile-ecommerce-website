import Headphones from "/product-xx99-mark-one-headphones/mobile/image-product.jpg";
import Speaker from "/product-zx9-speaker/mobile/image-category-page-preview.jpg";
import Earphone from "/product-yx1-earphones/mobile/image-category-page-preview.jpg";
import { Link } from "react-router-dom";

export default function Items() {
  return (
    <>
      <main className="">
        <div className="flex flex-col justify-center items-center text-center">
          <div>
            <img
              src={Headphones}
              alt=""
              className="w-[150px] h-[150px] mb-[5px]"
            />
            <h2 className="text-[#000] text-center font-[Manrope] text-[15px] not-italic font-bold leading-[normal] tracking-[1.071px] uppercase">
              HEADPHONES
            </h2>
          </div>
          <div className="flex flex-row items-center justify-center mt-[18px] gap-3">
            <Link to={"/Headphones"}>
              <span className="text-[#000] font-[Manrope] text-[13px] not-italic font-bold leading-[normal] tracking-[1px] uppercase opacity-50">
                Shop
              </span>
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none">
              <path
                d="M1.32178 1L6.32178 6L1.32178 11"
                stroke="#D87D4A"
                stroke-width="2"
              />
            </svg>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center text-center mt-[36px]">
          <div>
            <img
              src={Speaker}
              alt=""
              className="w-[150px] h-[150px] mb-[5px]"
            />
            <h2 className="text-[#000] text-center font-[Manrope] text-[15px] not-italic font-bold leading-[normal] tracking-[1.071px] uppercase">
              SPEAKERS
            </h2>
          </div>
          <div className="flex flex-row items-center justify-center mt-[18px] gap-3">
            <Link to={"/Speaker"}>
              <span className="text-[#000] font-[Manrope] text-[13px] not-italic font-bold leading-[normal] tracking-[1px] uppercase opacity-50">
                Shop
              </span>
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none">
              <path
                d="M1.32178 1L6.32178 6L1.32178 11"
                stroke="#D87D4A"
                stroke-width="2"
              />
            </svg>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center text-center mt-[36px]">
          <div>
            <img
              src={Earphone}
              alt=""
              className="w-[150px] h-[150px] mb-[5px]"
            />
            <h2 className="text-[#000] text-center font-[Manrope] text-[15px] not-italic font-bold leading-[normal] tracking-[1.071px] uppercase">
              Earphone
            </h2>
          </div>
          <div className="flex flex-row items-center justify-center mt-[18px] gap-3">
            <Link to={"/Earphones"}>
              <span className="text-[#000] font-[Manrope] text-[13px] not-italic font-bold leading-[normal] tracking-[1px] uppercase opacity-50">
                Shop
              </span>
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none">
              <path
                d="M1.32178 1L6.32178 6L1.32178 11"
                stroke="#D87D4A"
                stroke-width="2"
              />
            </svg>
          </div>
        </div>
      </main>
    </>
  );
}
