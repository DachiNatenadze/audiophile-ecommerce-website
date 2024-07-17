import { useContext } from "react";
import Items from "./Items";
import { MyContext } from "../Layouts";

export default function Menuburger() {
  const { isShowen } = useContext(MyContext);

  return (
    <>
      {isShowen ? (
        <main className="absolute w-full left-[0%] right-[0%] bg-[#FFF] z-10">
          <div className="w-full h-[750px] flex-shrink-0 rounded-tl-none rounded-br-[8px] rounded-tr-none rounded-bl-[8px] bg-[#FFF] flex flex-col justify-center items-center">
            <div className="">
              <Items />
            </div>
          </div>
        </main>
      ) : (
        ""
      )}
    </>
  );
}
