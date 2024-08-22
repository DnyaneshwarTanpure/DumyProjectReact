import React, { useState } from "react";
import Header from "../../components/Header";
import { Button } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";

export default function AssetsPage() {
  const [activeButton, setActiveButton] = useState(true);
  const [name, setName] = useState("");
  const CoinData = [
    {
      name: "USDT",
      icon: "./src/assets/USDT.png",
      price: 0,
    },
    {
      name: "BNB",
      icon: "./src/assets/BNB.png",
      price: 0,
    },
  ];

  return (
    <div className="flex flex-col h-screen bg-[#101010] text-white">
      <Header />
      <div className="flex flex-col w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[45%] xl:max-w-[45%] mx-auto mt-4 px-4">
        <span className="text-white text-lg font-medium py-1">
          Total Accounts Assets (USDT)
        </span>
        <span className="text-white text-lg font-medium py-1">0</span>
        <div className="flex flex-row justify-between gap-4 mt-4 items-center w-full">
          <Button
            children={"Escrow"}
            color={"primary"}
            size="medium"
            variant="outlined"
            sx={{
              borderWidth: 2,
              borderColor: "#0349D6",
              borderRadius: 8,
              padding: 1,
              color: activeButton ? "white" : "#0349D6",
              fontSize: { xs: 12, sm: 14, md: 16 },
              fontWeight: "medium",
              width: "100%",
              maxWidth: "200px",
              backgroundColor: activeButton ? "#0349D6" : "transparent",
              textTransform: "none",
            }}
            onClick={() => setActiveButton(true)}
          />
          <Button
            children={"Refund"}
            color={"primary"}
            size="medium"
            variant="outlined"
            sx={{
              borderWidth: 2,
              borderColor: "#0349D6",
              borderRadius: 8,
              padding: 1,
              color: activeButton ? "#0349D6" : "white",
              fontSize: { xs: 12, sm: 14, md: 16 },
              fontWeight: "medium",
              width: "100%",
              maxWidth: "200px",
              backgroundColor: activeButton ? "transparent" : "#0349D6",
              textTransform: "none",
            }}
            onClick={() => setActiveButton(false)}
          />
        </div>
        <div className="w-full p-4 rounded-[10px] bg-[#1A1A1A] mt-3">
          <div className="text-sm font-normal text-white bg-[#101010] px-7 py-2 rounded-[10px] flex flex-row w-full items-center">
            <SearchOutlined className="text-center text-[#808080]" />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter token or smart contract address"
              className="ml-2 p-2 rounded border border-[#101010] bg-[#101010] w-full text-white"
            />
          </div>
          <div className="flex flex-col items-center">
            {CoinData.map((coin) => (
              <div
                key={coin.name}
                className="flex flex-row mt-3 justify-between bg-[#101010] px-7 py-4 rounded-[10px] w-full items-center"
              >
                <div className="flex flex-row items-center">
                  <img
                    src={coin.icon}
                    alt={`${coin.name} icon`}
                    className="h-6 w-6 mr-2"
                  />
                  <span className="text-lg font-medium mr-5">{coin.name}</span>
                </div>
                <span>{coin.price}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center w-full mt-3">
            <span className="text-[#808080] text-sm md:text-base text-center">
              No More
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
