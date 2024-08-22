import React, { Component, useState } from "react";

import { Button } from "@mui/material";
import "../../App.css";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header";
import FTDBalanceModal from "../../components/FTDBalanceModal";
import FlexibleBLC from "../../components/FlexibleBLC";
import InvitationAddressModal from "../../components/InvitationAddressModal";
export default function MainHomeScreen(props: any) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col h-screen bg-[#101010] text-white">
      <Header />
      <div className="flex flex-col justify-center items-center pb-[2%]">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-semibold text-white mt-7">
          iRA Blocks
        </h1>
        <span className="text-sm font-normal text-[#CFCFCF] max-w-screen-sm text-center pt-3 pb-7">
          Benefit from a secure and user-friendly iRA trading platform brought
          to you by iRA Blocks, designed for the community.
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 self-center gap-x-11 gap-y-16 max-w-[80%]">
        <div className="bg-[#1A1A1A] px-8 py-6 flex flex-col self-center rounded-[10px]">
          <img
            alt="swap"
            src="./src/assets/Swap.png"
            className="w-12 h-12 self-center"
          />
          <span className="text-[#C2C2C2] text-lg text-medium text-center py-2">
            iRA Swap
          </span>
          <Button
            children="Start Now"
            color={"primary"}
            size="medium"
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
              fontSize: 17,
              fontWeight: "medium",
              px: 3,
            }}
            onClick={() => navigate("/HomeScreen")}
          />
        </div>
        <div className="bg-[#1A1A1A] px-8 py-6 flex flex-col self-center rounded-[10px]">
          <img
            alt="staking"
            src="./src/assets/Staking.png"
            className="w-12 h-12 self-center"
          />
          <span className="text-[#C2C2C2] text-lg text-medium text-center py-2">
            BLC Staking
          </span>
          <Button
            children="Start Now"
            color={"primary"}
            size="medium"
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
              fontSize: 17,
              fontWeight: "medium",
              px: 3,
            }}
            onClick={() => navigate("/BLCStaking")}
          />
        </div>
      </div>
      <InvitationAddressModal />
    </div>
  );
}
