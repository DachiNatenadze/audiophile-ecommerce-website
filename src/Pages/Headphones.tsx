import Header from "../components/Header";
import xx99MarkII from "/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg";

export default function Headphones() {
  return (
    <>
      <main>
        <header className="bg-black pb-[33px]">
          <Header />
          <h1 className="text-[#FFF] text-center font-[Manrope] text-[28px] not-italic font-bold leading-[normal] tracking-[2px] uppercase mt-[33px]">
            HEADPHONES
          </h1>
        </header>
        <div className="flex flex-col justify-center items-center px-[24px] ">
          <div className="flex flex-col justify-center items-center">
            <img src={xx99MarkII} className="w-[220px] h-[243px] " alt="" />
            <h3 className="mt-[50px] mb-[24px] text-[#D87D4A] text-center font-[Manrope] text-[14px] not-italic font-normal leading-[normal] tracking-[10px] uppercase">
              NEW PRODUCT
            </h3>
            <h2 className="mb-[24px] text-[#000] text-center font-[Manrope] text-[28px] not-italic font-bold leading-[normal] tracking-[1px] uppercase">
              XX99 Mark II Headphones
            </h2>
            <p className="mb-[24px] w-[306px] text-[#000] text-center font-[Manrope] text-[15px] not-italic font-normal leading-[25px] opacity-50">
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
            <button className="bg-[#D87D4A] w-[160px] h-[48px] flex-shrink-0 text-[#FFF] font-[Manrope] text-[13px] not-italic font-bold leading-[normal] tracking-[1px] uppercase">
              See Product
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
