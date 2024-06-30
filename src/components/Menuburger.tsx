
import Items from "./Items";

export default function Menuburger() {

  return (
    <>
      <main className="bg-black">
        <div className="w-full h-[750px] flex-shrink-0 rounded-tl-none rounded-br-[8px] rounded-tr-none rounded-bl-[8px] bg-[#FFF] flex flex-col justify-center items-center">
          <div className="">
            <Items />
          </div>
        </div>
      </main>
    </>
  );
}
