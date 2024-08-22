import React, { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import "../../App.css";
import { useTheme, useMediaQuery } from "@mui/material";
export default function BLCStaking() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div className="flex flex-col min-h-screen bg-[#101010] text-white">
      <Header exit />

      <div className="flex flex-col mt-5 flex-grow items-center ">
        <div className="bg-[#1A1A1A] py-8 px-4 sm:px-6 md:px-10 lg:px-14 flex flex-col rounded-[10px] w-full max-w-[90%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-[33%]">
          <div className="flex flex-row gap-3 justify-center items-center mb-4">
            <img
              alt="swap"
              src="./src/assets/blc.png"
              className="w-10 h-10 sm:w-12 sm:h-12"
            />
            <span className="text-[#FFFFFF] text-base sm:text-2xl font-bold">
              BLC Staking
            </span>
          </div>

          <span className="mb-2 text-sm sm:text-base text-white text-medium mt-4 mb-3">
            Invitation Wallet Address
          </span>

          <div className="bg-[#101010] px-4 py-1 rounded-[10px] flex flex-col w-full">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Invitation Wallet Address"
              className="p-2 rounded border border-[#101010] bg-[#101010] w-full text-white"
            />
          </div>
          <div className="flex flex-row justify-between">
            <Button
              children="Cancel"
              color="primary"
              size="medium"
              variant="outlined"
              sx={{
                borderWidth: 2,
                borderColor: "#101010",
                borderRadius: 8,
                backgroundColor: "#101010",
                minWidth: "43%",
                alignSelf: "center",
                color: "#5683DE",
                marginTop: "20px",

                py: isSmallScreen ? 0.5 : 0.5, // Adjust padding based on screen size
                fontSize: isSmallScreen ? 14 : 18, // Adjust font size based on screen size
                textTransform: "none",
              }}
              onClick={() => navigate("/HomeScreen")}
            />
            <Button
              children="Confirm"
              color="primary"
              size="medium"
              variant="outlined"
              sx={{
                borderWidth: 2,
                borderColor: "#1A4DCE",
                borderRadius: 8,
                backgroundColor: "#1A4DCE",
                minWidth: "43%",
                alignSelf: "center",
                color: "white",
                marginTop: "20px",
                py: isSmallScreen ? 0.5 : 0.5, // Adjust padding based on screen size
                fontSize: isSmallScreen ? 14 : 18, // Adjust font size based on screen size
                fontWeight: "bold",
                textTransform: "none",
              }}
              onClick={() => navigate("/Desktop7")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
