import React from "react";

export default function RecentTransactions() {
  return (
    <div className="w-full max-w-[85%] self-center mt-3">
      <div className="flex flex-col md:flex-row md:justify-between">
        {/* Volume Section */}
        <div className="flex flex-col  mb-4 md:mb-0">
          <span className="text-white text-base font-semibold p-2 text-center md:text-start">
            Vol
          </span>
          {Array(7)
            .fill(306.244991)
            .map((vol, index) => (
              <span
                key={index}
                className="text-[#2CB909] text-base font-medium p-2 text-center"
              >
                {vol}
              </span>
            ))}
        </div>
        {/* Price Section */}
        <div className="flex flex-col  mb-4 md:mb-0">
          <span className="text-white text-base font-semibold p-2 text-center md:text-center">
            Price (USDT)
          </span>
          {Array(7)
            .fill(1.232)
            .map((price, index) => (
              <span
                key={index}
                className="text-white text-base font-medium p-2 text-center"
              >
                {price}
              </span>
            ))}
        </div>
        {/* Time Section */}
        <div className="flex flex-col ">
          <span className="text-white text-base font-semibold p-2 text-center md:text-end">
            Time
          </span>
          {Array(7)
            .fill("2024-08-09 09:13:14")
            .map((time, index) => (
              <span
                key={index}
                className="text-white text-base font-medium p-2 text-center"
              >
                {time}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
}
