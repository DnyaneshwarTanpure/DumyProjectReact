import React, { useState } from "react";
import Header from "../../components/Header";
import { ContentCopyRounded } from "@mui/icons-material";
import RecentTransactions from "../../components/RecentTransactions";
import LockedOrders from "../../components/LockedOrders";
import OrderBook from "../../components/OrderBook";
import { useNavigate } from "react-router-dom";
import ChartType from "../../components/ChartType";

export default function Desktop3() {
  const tabs = ["K Line", "Order Book", "Recent Transactions", "Locked Orders"];
  const [activeTab, setActiveTab] = useState(tabs[0]); // Initialize with the first tab
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen bg-[#101010] text-white">
      <Header />

      <div className="flex flex-col w-full max-w-[90%] 2xl:max-w-[85%] self-center mt-4">
        <div className="flex flex-row justify-between items-center w-full max-w-[70%] sm:max-w-[60%] md:max-w-[40%] lg:max-w-[33%] self-end">
          <ContentCopyRounded fontSize="medium" />
          <img
            src="./src/assets/Share.png"
            className="w-5 h-5 md:w-6 md:h-6 cursor-pointer"
            alt="Share"
          />
          <img
            src="./src/assets/Home.png"
            alt="Home"
            className="w-4 h-4 md:w-5 md:h-5 cursor-pointer"
            onClick={() => navigate("/")}
          />
          <div
            className="bg-[#2A8913] rounded-[10px] px-3 py-1 md:px-4 md:py-2 lg:px-12 cursor-pointer"
            onClick={() => navigate("/Desktop1")}
          >
            <span className="text-xs md:text-sm">Buy</span>
          </div>
          <div
            className="bg-[#A52020] rounded-[10px] px-3 py-1 md:px-4 md:py-2 lg:px-12 cursor-pointer"
            onClick={() => navigate("/Desktop1")}
          >
            <span className="text-xs md:text-sm">Sell</span>
          </div>
        </div>
      </div>

      <div
        className={`flex flex-wrap items-center bg-[#1A1A1A] justify-around md:justify-between p-1 w-full rounded-full max-w-[90%] md:max-w-[85%] self-center mt-6 ${
          activeTab == "K Line" ? "mb-5" : "mb-0"
        }`}
      >
        {tabs.map((text, index) => {
          const isActive = activeTab === text;
          return (
            <div
              key={index}
              onClick={() => setActiveTab(text)}
              className={`${
                isActive
                  ? "bg-[#101010] text-[#5683DE]"
                  : "bg-transparent text-white"
              } px-2 py-2 md:px-4 md:py-2 lg:px-5 lg:py-3 rounded-full text-xs md:text-sm lg:text-base text-center cursor-pointer m-1 flex-1 min-w-[40%] sm:min-w-[30%] md:min-w-[20%] mx-4`}
            >
              <span>{text}</span>
            </div>
          );
        })}
      </div>
      {activeTab == "Recent Transactions" && <RecentTransactions />}
      {activeTab == "Locked Orders" && <LockedOrders />}
      {activeTab == "Order Book" && <OrderBook />}
      {activeTab == "K Line" && <ChartType />}
    </div>
  );
}
