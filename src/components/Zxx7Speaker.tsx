import ZX7SpeakerImage from "/product-zx7-speaker/mobile/Bitmap.png";

export default function Zxx7Speaker() {
  return (
    <>
      <main>
        <div className="flex justify-center items-center mt-[40px]">
          <div className="relative">
            <img src={ZX7SpeakerImage} alt="" />
            <h2 className="absolute top-[110px] ml-[16px] text-[#000] font-[Manrope] text-[28px] not-italic font-bold leading-[normal] tracking-[2px] uppercase">
              ZX7 SPEAKER
            </h2>
            <button className="absolute top-[180px] ml-[16px] w-[160px] h-[48px] flex-shrink-0 border-[1px] border-[solid] border-[#000] text-[#000] font-[Manrope] text-[13px] not-italic font-bold leading-[normal] tracking-[1px] uppercase">
              See Product
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
