import YX1EarPhoneImg from "/product-yx1-earphones/mobile/image-gallery-2.jpg";
export default function YX1EarPhones() {
  return (
    <>
      <main>
        <div className="flex justify-center items-center mt-[16px]">
          <div className="">
            <img
              src={YX1EarPhoneImg}
              alt=""
              className="w-[327px] h-[200px] flex-shrink-0 rounded-[8px] bg-[#F1F1F1]"
            />
            <h2 className="ml-[24px] mt-[65px] mb-[32px] text-[#000] font-[Manrope] text-[28px] not-italic font-bold leading-[normal] tracking-[2px] uppercase">
              YX1 EARPHONES
            </h2>
            <button className="ml-[24px] border-[1px] border-[solid] border-[#000] w-[160px] h-[48px] flex-shrink-0 mb-[165px]">
              SEE PRODUCT
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
