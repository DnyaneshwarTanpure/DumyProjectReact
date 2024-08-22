import React, { Component, useState } from "react";
import { Menu, Transition } from "@headlessui/react"; // For dropdown functionality
import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import "../../App.css";
import BlockComponent from "../../components/BlockComponent";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
export default function HomeScreen(props: any) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen bg-[#101010] text-white">
      <Header Home connect />
      <div className="flex flex-col justify-center items-center pb-[5%]">
        {/* <h1 className="text-6xl font-semibold text-white">iRA Blocks</h1> */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-semibold text-white">
          iRA Blocks
        </h1>
        <span className="text-sm font-normal text-[#CFCFCF] max-w-screen-sm text-center pt-3 pb-7">
          Benefit from a secure and user-friendly iRA trading platform brought
          to you by iRA Blocks, designed for the community.
        </span>
        <Button
          children="Trade Now"
          color={"primary"}
          size="small"
          variant="outlined"
          sx={{
            borderWidth: 2,
            borderColor: "#1A4DCE",
            borderRadius: 8,
            backgroundColor: "#1A4DCE",
            minWidth: "14%",
            alignSelf: "center",
            color: "white",
            textTransform: "none",
          }}
          onClick={() => navigate("/Desktop3")}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 self-center gap-x-11 gap-y-16 max-w-[60%]">
        <BlockComponent
          header={"Seamless Swap"}
          subText={
            "Seamlessly swap between iRA, the governance token of iRA Blocks, and USDT."
          }
        />
        <BlockComponent
          header={"Security & Transparency"}
          subText={
            "Trade with confidence knowing your assets are secured by robust protocols and transparent transaction history."
          }
        />
        <BlockComponent
          header={"Competitive Rates"}
          subText={
            "Access competitive exchange rates powered by the iRa Blocks ecosystem, ensuring you get the most out of your trades."
          }
        />
        <BlockComponent
          header={"User-Friendly Interface"}
          subText={
            "Enjoy a clean and intuitive interface designed for a smooth trading experience, whether you're a DeFi veteran or just starting out."
          }
        />
      </div>
    </div>
  );
}
