import React from "react";
import Header from "../../components/Header";
import BuySell from "../../components/BuySell";
import { SearchRounded, ViewListRounded } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function Desktop1(props: any) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen bg-[#101010] text-white">
      <Header />

      <div className="flex justify-center w-full p-0 md:p-4">
        <div className="flex flex-row w-full max-w-[100%] md:max-w-[80%] lg:max-w-[75%] xl:max-w-[70%] 2xl:max-w-[55%] gap-0 md:gap-4 lg:gap-4 xl:gap-4">
          <BuySell />
          <div className="flex flex-col w-full max-w-[35%] md:max-w-[80%] lg:max-w-[60%] mt-3 lg:ml-5 pr-3 md:pr-0">
            <div className="flex flex-row justify-between w-full mb-4">
              <div className="flex flex-col mt-9">
                <span className="text-[#808080] text-sm md:text-base py-1">
                  Amount
                </span>
                <span className="text-[#808080] text-base md:text-lg font-medium py-1">
                  (iRA)
                </span>
                <span className="md:text-base text-sm font-medium py-1 text-white  ">
                  13233.9
                </span>
                <span className="md:text-base text-sm font-medium py-1 text-white">
                  13233.9
                </span>
                <span className="md:text-base text-sm font-medium py-1 text-white">
                  13233.9
                </span>
                <span className="md:text-base text-sm font-medium py-1 text-white">
                  13233.9
                </span>
                <span className="text-base md:text-lg font-bold py-8 text-[#5683DE]">
                  13233.9
                </span>
              </div>
              <div className="flex flex-col">
                <img
                  src="./src/assets/Candle.png"
                  alt="Candle"
                  className="h-7 w-7 self-end mb-2 cursor-pointer "
                  onClick={() => navigate("/HomeScreen")}
                />
                <span className="text-[#808080] text-sm md:text-base py-1">
                  Price
                  <ViewListRounded fontSize="small" />
                </span>
                <span className="text-[#808080] text-base md:text-lg font-medium py-1">
                  (USDT)
                </span>
                <span className="md:text-base text-sm font-medium py-1 text-[#C64444]">
                  13233.9
                </span>
                <span className="md:text-base text-sm font-medium py-1 text-[#C64444]">
                  13233.9
                </span>
                <span className="md:text-base text-sm font-medium py-1 text-[#C64444]">
                  13233.9
                </span>
                <span className="md:text-base text-sm font-medium py-1 text-[#C64444]">
                  13233.9
                </span>
              </div>
            </div>
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-col">
                <span className="md:text-base text-sm font-medium py-1 text-white">
                  13233.9
                </span>
                <span className="md:text-base text-sm font-medium py-1 text-white">
                  13233.9
                </span>
                <span className="md:text-base text-sm font-medium py-1 text-white">
                  13233.9
                </span>
                <span className="md:text-base text-sm font-medium py-1 text-white">
                  13233.9
                </span>
              </div>
              <div className="flex flex-col">
                <span className="md:text-base text-sm font-medium py-1 text-[#5683DE]">
                  13233.9
                </span>
                <span className="md:text-base text-sm font-medium py-1 text-[#5683DE]">
                  13233.9
                </span>
                <span className="md:text-base text-sm font-medium py-1 text-[#5683DE]">
                  13233.9
                </span>
                <span className="md:text-base text-sm font-medium py-1 text-[#5683DE]">
                  13233.9
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[100%] md:max-w-[68%] flex justify-center self-center flex-col">
        <div className="flex flex-row justify-between w-full px-3 py-5">
          <span className="text-white text-sm md:text-base">Open Order(0)</span>
          <img src="./src/assets/Search.png" className="w-5 h-3" />
        </div>
        <div className="flex items-center justify-center w-full h-[100px]">
          <span className="text-[#808080] text-sm md:text-base text-center">
            No Record Found
          </span>
        </div>
      </div>
    </div>
  );
}
