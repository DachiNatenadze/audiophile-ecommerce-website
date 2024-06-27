import Header from "../components/Header";
import ZX9speaker from "/product-zx9-speaker/mobile/image-category-page-preview.jpg";
import ZX7Speaker from "/product-zx7-speaker/mobile/image-category-page-preview.jpg";
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
            SPEAKERS
          </h1>
        </header>
        <div className="flex flex-col justify-center items-center px-[24px] ">
          <div className="flex flex-col justify-center items-center">
            <img
              src={ZX9speaker}
              className="w-[220px] h-[243px] mt-[66px] "
              alt=""
            />
            <h3 className="mt-[50px] mb-[24px] text-[#D87D4A] text-center font-[Manrope] text-[14px] not-italic font-normal leading-[normal] tracking-[10px] uppercase">
              NEW PRODUCT
            </h3>
            <h2 className="mb-[24px] text-[#000] text-center font-[Manrope] text-[28px] not-italic font-bold leading-[normal] tracking-[1px] uppercase w-[200px]">
              ZX9 speaker
            </h2>
            <p className="mb-[24px] w-[306px] text-[#000] text-center font-[Manrope] text-[15px] not-italic font-normal leading-[25px] opacity-50">
              Upgrade your sound system with the all new ZX9 active speaker.
              It’s a bookshelf speaker system that offers truly wireless
              connectivity -- creating new possibilities for more pleasing and
              practical audio setups.
            </p>
            <button className="bg-[#D87D4A] w-[160px] h-[48px] flex-shrink-0 text-[#FFF] font-[Manrope] text-[13px] not-italic font-bold leading-[normal] tracking-[1px] uppercase">
              See Product
            </button>
          </div>
          <div className="flex flex-col justify-center items-center mt-[120px] mb-[44px]">
            <img
              src={ZX7Speaker}
              className="w-[220px] h-[243px] mb-[100px]"
              alt=""
            />
            <h2 className="mb-[24px] text-[#000] text-center font-[Manrope] text-[28px] not-italic font-bold leading-[normal] tracking-[1px] uppercase w-[200px]">
              ZX7 SPEAKER
            </h2>
            <p className="mb-[24px] w-[306px] text-[#000] text-center font-[Manrope] text-[15px] not-italic font-normal leading-[25px] opacity-50">
              Stream high quality sound wirelessly with minimal loss. The ZX7
              bookshelf speaker uses high-end audiophile components that
              represents the top of the line powered speakers for home or studio
              use.
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
