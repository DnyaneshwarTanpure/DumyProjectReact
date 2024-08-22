import React, { useState } from "react";
import Header from "../../components/Header";
import "../../App.css";
import { SearchOutlined } from "@mui/icons-material";

export default function OrderPage() {
  const [name, setName] = useState("");
  const [order, setorder] = useState(true);

  return (
    <div className="flex flex-col h-screen bg-[#101010] text-white">
      <Header />
      <div className="flex flex-col items-center pt-6 md:pt-2 px-4">
        <div className="bg-[#1A1A1A] rounded-[30px] p-1 w-full max-w-[90%] sm:max-w-[75%] md:max-w-[60%] lg:max-w-[50%] flex flex-row justify-between lg:px-10 ">
          <div
            className={order ? "order-selected" : "order"}
            onClick={() => setorder(true)}
          >
            <span className="text-sm font-normal text-white text-center mx-5">
              Open Order
            </span>
          </div>
          <div
            className={order ? "order" : "order-selected"}
            onClick={() => setorder(false)}
          >
            <span className="text-sm font-normal text-white text-center mx-5">
              Order History
            </span>
          </div>
        </div>

        <div className="text-sm font-normal text-white bg-[#1A1A1A] px-7 py-2 rounded-[10px] flex flex-row w-full max-w-[90%] sm:max-w-[75%] md:max-w-[60%] lg:max-w-[45%] mt-5 items-center">
          <SearchOutlined className="text-center text-[#808080]" />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Search by coin name"
            className="ml-2 p-2 rounded border border-[#1A1A1A] bg-[#1A1A1A] w-full text-white"
          />
        </div>

        <span className="text-[#808080] text-sm pt-8">No Record Found</span>
      </div>
    </div>
  );
}
