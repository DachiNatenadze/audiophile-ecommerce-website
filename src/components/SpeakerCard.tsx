import { Link } from "react-router-dom";
import SpeakerPic from "/product-zx9-speaker/mobile/image-removebg-preview(38).png";
export default function SpeakerCard() {
  return (
    <>
      <main>
        <div className="flex justify-center items-center mt-[120px]">
          <div className="max-w-[327px] max-sm:w-full h-[600px] flex-shrink-0 rounded-[8px] bg-[#D87D4A] flex flex-col items-center px-[24px]">
            <img src={SpeakerPic} alt="" className="max-sm:mt-[55px]" />
            <h2 className="mt-[33px] mb-[24px] text-[#FFF] text-center font-[Manrope] text-[36px] not-italic font-bold leading-[40px] uppercase max-w-[200px]">
              ZX9 SPEAKER
            </h2>
            <p className="mb-[24px] text-[#FFF] text-center font-[Manrope] text-[15px] not-italic font-normal leading-[25px] w-full">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link to={"/ZX9Speaker"}>
              <button className="w-[160px] h-[48px] flex-shrink-0 bg-[#000] text-[#FFF] font-[Manrope] text-[13px] not-italic font-bold leading-[normal] tracking-[1px] uppercase">
                See Product
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
