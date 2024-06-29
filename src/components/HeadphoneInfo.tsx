import { Link } from "react-router-dom";

export default function HeadphoneInfo() {
  return (
    <>
      <main>
        <section>
          <div>
            <div className="flex flex-col justify-center items-center gap-4 max-sm:mt-[108px]">
              <span className="text-[#FFF] text-center font-[Manrope] text-[14px] not-italic font-normal leading-[normal] tracking-[10px] uppercase opacity-50 mb-[8px]">
                NEW PRODUCT
              </span>
              <h2 className="text-[#FFF] text-center font-[Manrope] text-[36px] not-italic font-bold leading-[40px] uppercase mb-[14px]">
                XX99 Mark II HeadphoneS
              </h2>
              <p className="text-[#FFF] text-center font-[Manrope] w-[295px] text-[15px] not-italic font-normal leading-[25px] opacity-70  mb-[16px]">
                Experience natural, lifelike audio and exceptional build quality
                made for the passionate music enthusiast.
              </p>
              <Link to={"/XX99Mark2 Product"}>
                <button className="w-[160px] h-[48px] flex-shrink-0 bg-[#D87D4A] text-[#FFF] font-[Manrope] text-[13px] not-italic font-bold leading-[normal] tracking-[1px] uppercase">
                  See Product
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
