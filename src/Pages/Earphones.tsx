import Header from "../components/Header";
import yx1Earphones from "/product-yx1-earphones/mobile/image-category-page-preview.jpg";
import AboutComoany from "../components/AboutComoany";
import Footer from "../components/Footer";
import Items from "../components/Items";

export default function Speaker() {
  return (
    <>
      <main>
        <header className="bg-black pb-[33px]">
          <Header />
          <h1 className="text-[#FFF] text-center font-[Manrope] text-[28px] not-italic font-bold leading-[normal] tracking-[2px] uppercase mt-[33px]">
            EARPHONES
          </h1>
        </header>
        <div className="flex flex-col justify-center items-center px-[24px] ">
          <div className="flex flex-col justify-center items-center mb-[120px]">
            <img
              src={yx1Earphones}
              className="w-[220px] h-[243px] mt-[66px] "
              alt=""
            />
            <h3 className="mt-[50px] mb-[24px] text-[#D87D4A] text-center font-[Manrope] text-[14px] not-italic font-normal leading-[normal] tracking-[10px] uppercase">
              NEW PRODUCT
            </h3>
            <h2 className="mb-[24px] text-[#000] text-center font-[Manrope] text-[28px] not-italic font-bold leading-[normal] tracking-[1px] uppercase w-[300px]">
              YX1 WIRELESS EARPHONES
            </h2>
            <p className="mb-[24px] w-[306px] text-[#000] text-center font-[Manrope] text-[15px] not-italic font-normal leading-[25px] opacity-50">
              Tailor your listening experience with bespoke dynamic drivers from
              the new YX1 Wireless Earphones. Enjoy incredible high-fidelity
              sound even in noisy environments with its active noise
              cancellation feature.
            </p>
            <button className="bg-[#D87D4A] w-[160px] h-[48px] flex-shrink-0 text-[#FFF] font-[Manrope] text-[13px] not-italic font-bold leading-[normal] tracking-[1px] uppercase">
              See Product
            </button>
          </div>
          <div className="mb-[120px]">
            <Items />
          </div>
          <AboutComoany />
        </div>
        <Footer />
      </main>
    </>
  );
}
