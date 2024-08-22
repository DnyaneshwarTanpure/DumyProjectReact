import React from "react";

export default function OrderBook() {
  return (
    <div className="flex flex-col items-center justify-center w-[90%] mx-auto lg:w-[85%] xl:w-[85%]">
      <div className="flex flex-col w-full mt-5">
        {/* Header */}
        <div className="flex flex-row w-full justify-between text-center text-sm md:text-base lg:text-lg xl:text-xl">
          <span className="text-white font-semibold">Price</span>
          <span className="text-white font-semibold">Buy Orders</span>
          <span className="text-white font-semibold">Sell Orders</span>
        </div>

        {/* Order Book Body */}
        <div className="flex flex-col lg:flex-row w-full justify-between mt-3 space-y-4 lg:space-y-0 gap-3 mb-5  ">
          {/* Buy Orders */}
          <div className="flex flex-col w-full">
            {[96, 80, 72, 64, 60, 56, 52, 48, 48, 48].map((width, index) => (
              <div
                key={index}
                className="flex flex-row items-center justify-between mt-4"
                style={{ maxWidth: "100%" }}
              >
                {/* Buy Price */}
                <span className="text-sm text-white">{`3245.9`}</span>
                {/* Buy Order Bar */}
                <div
                  className="bg-red-600 shadow rounded-[10px] text-right pr-4 h-6"
                  style={{
                    width: `${Math.min((width / 100) * 100, 100)}%`,
                    maxWidth: "90%",
                  }}
                >
                  {`w-${width}`}
                </div>
              </div>
            ))}
          </div>

          {/* Sell Orders */}
          <div className="flex flex-col w-full">
            {[96, 80, 72, 64, 60, 56, 52, 48, 48, 48].map((width, index) => (
              <div
                key={index}
                className="flex flex-row items-center justify-between mt-4"
                style={{ maxWidth: "100%" }}
              >
                {/* Sell Order Bar */}
                <div
                  className="bg-blue-500 shadow rounded-[10px] text-left pl-4 h-6"
                  style={{
                    width: `${Math.min((width / 100) * 100, 100)}%`,
                    maxWidth: "90%",
                  }}
                >
                  {`w-${width}`}
                </div>
                {/* Sell Price */}
                <span className="text-sm text-white">{`3245.9`}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
