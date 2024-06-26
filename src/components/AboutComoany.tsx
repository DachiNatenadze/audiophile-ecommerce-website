import autohor from "/product-xx99-mark-two-headphones/mobile/BitmapFace.png";

export default function AboutComoany() {
  return (
    <>
      <main>
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <img
              src={autohor}
              alt=""
              className="rounded-[8px] bg-[#F1F1F1] w-[327px] h-[300px]"
            />
            <h2 className="text-[#000] text-center font-[Manrope] text-[28px] not-italic font-bold leading-[normal] tracking-[1px] uppercase mt-[40px] max-w-[300px] mb-[32px]">
              Bringing you the{" "}
              <span className="text-[#D87D4A] font-[Manrope] text-[28px] not-italic font-bold leading-[normal] tracking-[1px] uppercase">
                best
              </span>{" "}
              audio gear
            </h2>
            <p className="text-[#000] text-center font-[Manrope] text-[15px] not-italic font-normal leading-[25px] w-[290px] opacity-50 mb-[120px]">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
