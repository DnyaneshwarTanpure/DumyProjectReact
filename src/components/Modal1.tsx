import React, { useState } from "react";
import { useWalletInfo, useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "fixed", // Use 'fixed' to position relative to the viewport
  top: 75, // Adjust this value to set the top margin
  right: 25, // Adjust this value to set the right margin
  width: 200,
  bgcolor: "#1A1A1A",
  boxShadow: 24,
  pt: 1,
  pb: 1,
  outline: "none",
  // p: 4,
};

export function Modal1({ isVisible, onClose }) {
  if (!isVisible) return null;
  const navigate = useNavigate();
  const { open, close } = useWeb3Modal();
  const { address } = useAccount();
  const { walletInfo } = useWalletInfo();
  function shortenAddress(address: any, startLength = 10, endLength = 4) {
    if (!address) return "";
    return `${address.slice(0, startLength)}...${address.slice(-endLength)}`;
  }

  return (
    <div>
      <Modal
        // keepMounted
        open={isVisible}
        onClose={onClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <button
            className="py-[2%] hover:bg-[#0349D6] w-full text-left"
            onClick={() => navigate("/WalletConnect")}
          >
            <span className="text-white text-base text-medium ml-4">
              Wallet
            </span>
          </button>
          <button
            className="py-[2%] hover:bg-[#0349D6] w-full text-left"
            onClick={() => navigate("/AssetsPage")}
          >
            <span className="text-white text-base text-medium ml-4">
              Assets
            </span>
          </button>
          <button
            className="py-[2%] hover:bg-[#0349D6] w-full text-left"
            onClick={() => navigate("/OrderPage")}
          >
            <span className="text-white text-base text-medium ml-4">Order</span>
          </button>
          <button
            className="py-[2%] hover:bg-[#0349D6] w-full text-left"
            onClick={() => open()}
          >
            <span className="text-white text-base text-medium ml-4">
              Exit Wallet
            </span>
          </button>
        </Box>
      </Modal>
    </div>
  );
}
