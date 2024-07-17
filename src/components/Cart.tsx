import { useContext } from "react";
import { MyContext } from "../Layouts";
import { prodType } from "../types";
import { Link } from "react-router-dom";

export default function Cart() {
  const { producia, setProducia, isEmpty, isShowen } = useContext(MyContext);

  function incrementProductQuantity(id: number) {
    const updatedProducts = producia.map((product) =>
      product.id === id
        ? { ...product, quantity: product.quanatty + 1 }
        : product
    );
    setProducia(updatedProducts);
  }

  function decrementProductQuantity(id: number) {
    const updatedProducts = producia.map((product) =>
      product.id === id && product.quanatty > 0
        ? { ...product, quanatty: product.quanatty - 1 }
        : product
    );
    setProducia(updatedProducts.filter((product) => product.quanatty > 0));
  }

  // Calculate total price
  const totalPrice = producia.reduce(
    (acc, product) => acc + product.price * product.quanatty,
    0
  );

  return (
    <>
      {isShowen ? (
        <main className="absolute top-[140px] left-[50%] right-[50%] bg-black">
          <div className="flex flex-col justify-center items-center">
            <div className="w-[327px]  h-full flex-shrink-0 rounded-[8px] bg-[#FFF]">
              <div className="ifnotempy">
                <div className="text flex flex-row justify-between items-center mt-[32px] px-6 mb-[24px]">
                  <h2 className="text-[#000] font-[Manrope] text-[18px] not-italic font-bold leading-[normal] tracking-[1.286px] uppercase ">
                    Cart ({producia.length})
                  </h2>
                  <h2 className="text-[#000] font-[Manrope] text-[15px] not-italic font-normal leading-[25px] opacity-50">
                    Remove All
                  </h2>
                </div>
                <div className="">
                  <div className="">
                    {producia.length === 0 ? (
                      <div className="flex justify-center items-center mt-[80px] mb-[80px]">
                        <h2>Cart is Empty</h2>
                      </div>
                    ) : (
                      producia.map((item: prodType, index) => (
                        <div
                          className="flex flex-row justify-between items-center px-6"
                          key={index}>
                          <img
                            className="h-[64px] w-[64px] rounded-[8px] bg-[#F1F1F1]"
                            src={item.img1}
                            alt=""
                          />
                          <div className="flex flex-col">
                            <h2 className="text-[#000] font-[Manrope] text-[15px] not-italic font-bold leading-[25px]">
                              {item.name}
                            </h2>
                            <span className="text-[#000] font-[Manrope] text-[15px] not-italic font-bold leading-[25px] opacity-50">
                              $
                              {item.price.toLocaleString("en-US", {
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0,
                              })}
                            </span>
                          </div>
                          <div className="bg-[#F1F1F1] flex justify-center items-center">
                            <button
                              onClick={() => decrementProductQuantity(item.id)}
                              className="w-[16px] opacity-25 mr-[21px]">
                              -
                            </button>
                            <span className="w-[16px] text-[#000] text-center font-[Manrope] text-[13px] not-italic font-bold leading-[normal] tracking-[1px] uppercase">
                              {item.quanatty}
                            </span>
                            <button
                              onClick={() => incrementProductQuantity(item.id)}
                              className="w-[16px] opacity-25 ml-[21px] mr-[21px]">
                              +
                            </button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
                <div className="total flex flex-col justify-center items-center px-6">
                  <div className="flex flex-row justify-between items-center w-full mb-[24px]">
                    {!isEmpty && (
                      <div className="flex justify-between items-center w-full mt-[24px]">
                        <h2 className="text-[#000] font-[Manrope] text-[15px] not-italic font-normal leading-[25px] opacity-50">
                          TOTAL
                        </h2>
                        <h2 className="text-[#000] text-center font-[Manrope] text-[18px] not-italic font-bold leading-[normal] uppercase">
                          $
                          {totalPrice.toLocaleString("en-US", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </h2>
                      </div>
                    )}
                  </div>
                  <Link to={"/input"}>
                    <button className="w-[271px] h-[48px] flex-shrink-0 mb-[31px] bg-[#D87D4A] text-[#FFF] text-center font-[Manrope] text-[13px] not-italic font-bold leading-[normal] tracking-[1px] uppercase">
                      Checkout
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      ) : (
        " "
      )}
    </>
  );
}
