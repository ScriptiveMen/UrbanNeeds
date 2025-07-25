import String from "../components/String";
import { useSelector } from "react-redux";

const Cart = () => {
  const user = useSelector((state) => state.userReducer.users);

  return (
    <div className="min-h-screen w-full bg-white text-black pt-20 md:pt-30 overflow-hidden">
      <div className="flex flex-col items-start justify-center gap-5 pb-20 md:pb-20">
        <div className="left relative  w-full px-5 md:px-15  flex flex-col items-start gap-4">
          <p className=" font-thin text-sm md:text-xl">
            Secure your picks before they're gone.
          </p>
          <div className="main-head pb-20 md:pb-40">
            <h1 className="text-[12vw] md:text-[5vw] tracking-tight font-light leading-[1.1] text-black">
              Your Cart
            </h1>
          </div>
          <div className="absolute bottom-0 w-[90%] md:w-full">
            <String color={"black"} />
          </div>
        </div>

        <div className="cards w-full px-5 md:px-15 flex flex-col-reverse md:flex-row gap-10 ">
          {user ? (
            <>
              <div className="products flex flex-col justify-center gap-3 w-full md:w-[60%]">
                <div className=" card1 flex gap-5 border-b py-6 items-center">
                  <div className="w-[120px] h-[160px] rounded-xl overflow-hidden">
                    <img
                      src="/images/card1.webp"
                      alt="Product"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-medium">Oversized Tee</h3>
                      <button className="text-red-400 text-sm">Remove</button>
                    </div>
                    <p className="text-gray-400">Color: Black | Size: M</p>
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center border w-fit px-3 py-1 rounded-md gap-2">
                        <button className="text-lg">-</button>
                        <span className="text-sm">2</span>
                        <button className="text-lg">+</button>
                      </div>
                      <p className="text-lg font-semibold">₹ 1,798</p>
                    </div>
                  </div>
                </div>
                <div className=" card1 flex gap-5 border-b py-6 items-center">
                  <div className="w-[120px] h-[160px] rounded-xl overflow-hidden">
                    <img
                      src="/images/card2.webp"
                      alt="Product"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-medium">Oversized Tee</h3>
                      <button className="text-red-400 text-sm">Remove</button>
                    </div>
                    <p className="text-gray-400">Color: Black | Size: M</p>
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center border w-fit px-3 py-1 rounded-md gap-2">
                        <button className="text-lg">-</button>
                        <span className="text-sm">2</span>
                        <button className="text-lg">+</button>
                      </div>
                      <p className="text-lg font-semibold">₹ 1,798</p>
                    </div>
                  </div>
                </div>
                <div className=" card1 flex gap-5 border-b py-6 items-center">
                  <div className="w-[120px] h-[160px] rounded-xl overflow-hidden">
                    <img
                      src="/images/card4.webp"
                      alt="Product"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-medium">Oversized Tee</h3>
                      <button className="text-red-400 text-sm">Remove</button>
                    </div>
                    <p className="text-gray-400">Color: Black | Size: M</p>
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center border w-fit px-3 py-1 rounded-md gap-2">
                        <button className="text-lg">-</button>
                        <span className="text-sm">2</span>
                        <button className="text-lg">+</button>
                      </div>
                      <p className="text-lg font-semibold">₹ 1,798</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="total w-full  md:w-[40%] ">
                <div className="w-full sticky top-20 md:top-1/2 bg-[#fff] p-6 rounded-2xl border border-gray-400 text-black space-y-4">
                  <h2 className="text-2xl font-medium">Order Summary</h2>
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>₹ 5,394</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping</span>
                    <span>₹ 100</span>
                  </div>
                  <div className="flex justify-between font-bold pt-2 border-t border-gray-700">
                    <span>Total</span>
                    <span>₹ 5,494</span>
                  </div>
                  <button className="w-full py-3 bg-black text-white rounded-xl hover:bg-zinc-600 cursor-pointer transition">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </>
          ) : (
            <h1 className="m-auto">Your Cart is Empty!</h1>
          )}

          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Cart;
