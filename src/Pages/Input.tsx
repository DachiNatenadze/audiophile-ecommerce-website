import Header from "../components/Header";

export default function Input() {
  return (
    <>
      <div className="bg-black">
        <Header />
      </div>
      <main className="w-full h-screen">
        <section className="px-6">
          <div className="bg">
            <div className="mt-[16px] mb-[34px]">
              <h3>Go Back</h3>
            </div>
            <div className="mt-[24px] px-4">
              <h1 className="ml-[24px]">CHECKOUT</h1>
              <h2 className="text-[#D87D4A] font-[Manrope] text-[13px] not-italic font-bold leading-[25px] uppercase mt-[32px] mb-[16px]">
                Billing details
              </h2>
              <h2>Name </h2>
              <input
                type="text"
                placeholder="Alexei Ward"
                className="w-[280px] h-[56px] flex-shrink-0 rounded-[8px] border-[1px] border-[solid] border-[#FFF] bg-[#FFF] pl-6"
              />
            </div>
            <div className="mt-[26px]">
              <h2 className="mb-[9px]">Email Address </h2>
              <input
                type="email"
                placeholder="alexei@mail.com"
                className="w-[280px] h-[56px] flex-shrink-0 rounded-[8px] border-[1px] border-[solid] border-[#FFF] bg-[#FFF] pl-6"
              />
            </div>
            <div className="mt-[26px]">
              <h2 className="mb-[9px]">Phone Number</h2>
              <input
                type="number"
                placeholder="+1 202-555-0136"
                className="w-[280px] h-[56px] flex-shrink-0 rounded-[8px] border-[1px] border-[solid] border-[#FFF] bg-[#FFF] pl-6"
              />
            </div>
            <div className="mt-[32px]">
              <h2 className="text-[#D87D4A] font-[Manrope] text-[13px] not-italic font-bold leading-[25px] uppercase mb-[16px]">
                shipping info
              </h2>
              <h2 className="mb-[9px]">Your Address</h2>
              <input
                type="text"
                placeholder="1137 Williams Avenue"
                className="w-[280px] h-[56px] flex-shrink-0 rounded-[8px] border-[1px] border-[solid] border-[#FFF] bg-[#FFF] pl-6"
              />
              <h2 className="mb-[9x] mt-[24px]">ZIP CODE</h2>
              <input
                type="number"
                placeholder="10001"
                className="w-[280px] h-[56px] flex-shrink-0 rounded-[8px] border-[1px] border-[solid] border-[#FFF] bg-[#FFF] pl-6"
              />
              <h2 className="mb-[9x] mt-[24px]">City</h2>
              <input
                type="text"
                placeholder="New York"
                className="w-[280px] h-[56px] flex-shrink-0 rounded-[8px] border-[1px] border-[solid] border-[#FFF] bg-[#FFF] pl-6"
              />
              <h2 className="mb-[9x] mt-[24px]">Country</h2>
              <input
                type="text"
                placeholder="United States"
                className="w-[280px] h-[56px] flex-shrink-0 rounded-[8px] border-[1px] border-[solid] border-[#FFF] bg-[#FFF] pl-6"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
