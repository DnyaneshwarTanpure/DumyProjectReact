import React, { useState } from "react";
import "../../App.css";
import Header from "../../components/Header";
import { ContentCopyOutlined } from "@mui/icons-material";
import { useAccount } from "wagmi";

export default function WalletConnect() {
  const [copied, setCopied] = useState(false);
  const { address } = useAccount();
  const walletAddress = address;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      },
      () => {
        console.error("Failed to copy!");
      }
    );
  };

  return (
    <div className="flex flex-col h-screen bg-[#101010] text-white">
      <Header />
      <div className="flex justify-center items-center pt-6 md:pt-[7%] px-4">
        <div className="bg-[#1A1A1A] rounded-[10px] p-5 w-full max-w-[500px] md:max-w-[45%]">
          <span className="text-sm font-normal text-white">Wallet</span>
          <div className="pt-4">
            <span className="text-sm font-normal text-[#808080]">
              Wallet Address
            </span>
            <div className="flex flex-row justify-between items-center pt-2">
              <span className="text-sm font-normal text-white overflow-hidden overflow-ellipsis max-w-[70%] sm:max-w-[80%]">
                {address}
              </span>
              <ContentCopyOutlined
                className="text-[#0349D6] cursor-pointer text-sm"
                fontSize="small"
                onClick={copyToClipboard}
              />
            </div>
            {copied && (
              <span className="text-xs text-green-400 pt-2">Copied!</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
