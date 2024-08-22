import {
  KeyboardArrowUpRounded,
  SearchOutlined,
  SearchRounded,
} from "@mui/icons-material";
import { Select, MenuItem, FormControl, Button } from "@mui/material";
import React, { useState } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
export default function BuySell() {
  const [activeButton, setActiveButton] = useState("buy");
  const [selectedOption, setSelectedOption] = useState("");
  const [first, setFirst] = useState(0.001);
  const [first1, setFirst1] = useState(0.001);
  const [transactionAmount, setTransactionAmount] = useState("");
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const options = [
    { name: "Limit", id: 1 },
    { name: "Limit", id: 2 },
  ];

  const handleOptionClick = (event: any) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="w-full max-w-full md:max-w-[90%] lg:max-w-[80%] mx-auto px-2 md:px-4">
      <div className="p-4 md:p-6 lg:p-8 rounded-[20px] bg-[#1A1A1A] mx-auto mt-5">
        <div className="flex flex-row items-center mb-4">
          <img
            src="./src/assets/Logo.png"
            alt="Logo"
            className="h-6 md:h-8 w-6 md:w-8"
          />
          <span className="ml-2 text-white text-sm md:text-lg">iRA/USDT</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-row bg-[#101010] justify-between p-1 w-full rounded-full max-w-[100%] lg:max-w-[90%]">
            <div
              className={`p-2 cursor-pointer w-full flex justify-center ${
                activeButton === "buy"
                  ? "bg-[#1A1A1A] text-[#5683DE] px-4 md:px-8 lg:px-6 rounded-full py-1 md:py-2 text-sm md:text-lg"
                  : "bg-transparent text-white text-sm md:text-lg px-4 md:px-8 lg:px-6 py-1 md:py-2"
              }`}
              onClick={() => setActiveButton("buy")}
            >
              <span>Buy</span>
            </div>
            <div
              className={`p-2 cursor-pointer w-full flex  justify-center ${
                activeButton === "sell"
                  ? "bg-[#1A1A1A] text-[#5683DE] px-4 md:px-8 lg:px-6 rounded-full py-1 md:py-2 text-sm md:text-lg"
                  : "bg-transparent text-white text-sm md:text-lg px-4 md:px-8 lg:px-6 py-1 md:py-2"
              }`}
              onClick={() => setActiveButton("sell")}
            >
              <span>Sell</span>
            </div>
          </div>

          {/* Input Fields and Percentage Buttons */}
          <FormControl
            variant="outlined"
            fullWidth
            sx={{
              marginTop: "4%",
              borderColor: "#101010",
              borderWidth: 0,
              backgroundColor: "#101010",
              borderRadius: "8px",
              outline: "none",
              height: isSmallScreen ? 38 : 50,
            }}
            focused={false}
          >
            <Select
              variant="outlined"
              fullWidth
              value={selectedOption}
              onChange={handleOptionClick}
              sx={{
                color: "white",
                outline: "none",
                height: isSmallScreen ? 38 : 50,
                borderRadius: "8px",
              }}
            >
              <MenuItem value={selectedOption}>Select your option</MenuItem>
              {options.map((plan) => (
                <MenuItem value={plan.id} key={plan.id}>
                  {plan.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Amount Input and Percentage Buttons */}
          <div className="flex flex-row items-center bg-[#101010] px-2 py-1 rounded-lg w-full mt-3">
            <div onClick={() => setFirst(first + 0.001)}>
              <span className="text-center text-white text-lg md:text-xl">
                +
              </span>
            </div>
            <input
              type="number"
              value={first}
              onChange={(e) => setFirst(parseFloat(e.target.value))}
              placeholder="1.45663"
              className="ml-2 p-1 md:p-2 rounded border border-[#101010] bg-[#101010] w-full text-white text-sm md:text-base"
            />
            <div onClick={() => setFirst(first - 0.001)}>
              <span className="text-center text-white text-lg md:text-xl">
                -
              </span>
            </div>
          </div>

          <div className="flex flex-row items-center bg-[#101010] px-2 py-1 rounded-lg w-full mt-3">
            <span className="text-center text-white text-lg md:text-xl">+</span>
            <input
              type="number"
              value={first1}
              onChange={(e) => setFirst1(parseFloat(e.target.value))}
              placeholder="Amount (iRA)"
              className="ml-2 p-1 md:p-2 rounded border border-[#101010] bg-[#101010] w-full text-white text-sm md:text-base"
            />
            <span className="text-center text-white text-lg md:text-xl">-</span>
          </div>

          <div className="flex flex-row justify-between mt-3 w-full gap-1">
            <span className="text-center text-[#808080] bg-[#101010] px-2 py-1 rounded-lg text-xs md:text-sm">
              25%
            </span>
            <span className="text-center text-[#808080] bg-[#101010] px-2 py-1 rounded-lg text-xs md:text-sm">
              50%
            </span>
            <span className="text-center text-[#808080] bg-[#101010] px-2 py-1 rounded-lg text-xs md:text-sm">
              75%
            </span>
            <span className="text-center text-[#808080] bg-[#101010] px-2 py-1 rounded-lg text-xs md:text-sm">
              100%
            </span>
          </div>

          {/* Transaction Amount */}
          <div className="flex flex-row items-center bg-[#101010] px-2 py-1 rounded-lg w-full mt-3">
            <input
              type="text"
              value={transactionAmount}
              onChange={(e) => setTransactionAmount(e.target.value)}
              placeholder="Transaction Amount"
              className="ml-2 p-1 md:p-2 rounded border border-[#101010] bg-[#101010] w-full text-white text-sm md:text-base"
            />
          </div>
          <div className="flex flex-row justify-between w-full py-2">
            <span className="text-[#808080] text-sm md:text-base">
              Available
            </span>
            <span className="text-white text-sm md:text-base">0 USDT</span>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-white text-sm md:text-base font-medium">
            Advanced Options
            <KeyboardArrowUpRounded fontSize="small" className="ml-2" />
          </span>
          <Button
            children={activeButton == "buy" ? "Buy" : "Sell"}
            color={"primary"}
            size="medium"
            variant="outlined"
            sx={{
              borderWidth: 2,
              borderColor: "#0349D6",
              borderRadius: 8,
              marginTop: 1,
              marginBottom: 1,
              backgroundColor: "#0349D6",
              padding: 1,
              color: "white",
              fontSize: 14,
              fontWeight: "bold",
              width: "100%",
              textTransform: "none",
            }}
          />
        </div>
      </div>
    </div>
  );
}
