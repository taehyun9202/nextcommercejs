import { useState } from "react";

function Basket() {
  const [openBasket, setOpenBasket] = useState(false);
  return (
    <>
      <div
        onClick={() => setOpenBasket(true)}
        className="flex fixed z-10 h-11 w-full bottom-0 cursor-pointer md:hidden opacity-70 hover:shadow-lg hover:opacity-100"
      >
        <div className="w-full items-center justify-center text-center pt-2 border bg-yellow-50">
          <p>2 Item(s)</p>
        </div>
        <div className="w-full items-center justify-center text-center pt-2 border bg-white">
          <p>Total: $1200</p>
        </div>
        <div className="w-full items-center justify-center text-center pt-2 border bg-green-300">
          <p>See Basket</p>
        </div>
      </div>
      <div
        onClick={() => setOpenBasket(true)}
        className="fixed z-10 h-11 top-6 right-10 hidden cursor-pointer md:flex opacity-70 hover:shadow-lg hover:opacity-100 rounded-md overflow-hidden"
      >
        <div className="items-center justify-center text-center pt-2 px-2 border bg-yellow-50">
          <p>2 Item(s)</p>
        </div>
        <div className="items-center justify-center text-center pt-2 px-2 border bg-white">
          <p>$1200</p>
        </div>
        <div className="items-center justify-center text-center pt-2 px-2 border bg-green-300">
          <p>See Basket</p>
        </div>
      </div>

      {openBasket && (
        <>
          <div className="hidden md:block fixed right-10 top-20 bg-blue-200 z-10">
            <div className="flex p-2">
              <img src="" alt="image" />
              <p>Item Name</p>
              <p>$400</p>
            </div>
            <div className="flex px-2 py-2">
              <img src="" alt="image" />
              <p>Item Name</p>
              <p>$300</p>
            </div>
            <div className="flex px-2 py-2">
              <img src="" alt="image" />
              <p>Item Name</p>
              <p>$500</p>
            </div>
          </div>
          <div className="block md:hidden fixed w-full bottom-[40px] h-1/3 bg-blue-200 z-10 overflow-y-scroll">
            <div className="flex p-2">
              <img src="" alt="image" />
              <p>Item Name</p>
              <p>$400</p>
            </div>
            <div className="flex px-2 py-2">
              <img src="" alt="image" />
              <p>Item Name</p>
              <p>$300</p>
            </div>
            <div className="flex px-2 py-2">
              <img src="" alt="image" />
              <p>Item Name</p>
              <p>$500</p>
            </div>
          </div>
        </>
      )}
      {openBasket && (
        <div
          onClick={() => setOpenBasket(false)}
          className="fixed inset-0 w-full h-screen z-5"
        ></div>
      )}
    </>
  );
}

export default Basket;
