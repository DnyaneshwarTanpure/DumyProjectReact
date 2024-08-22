import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import { CancelOutlined, ContentCopy } from "@mui/icons-material";
import { useTheme, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useAccount } from "wagmi";

const style = (isSmallScreen: boolean) => ({
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#1A1A1A",
  p: isSmallScreen ? 2 : 2, // Adjust padding for small screens
  width: "90%", // Adjust width for small screens
  maxWidth: 500, // Max width for larger screens
  border: "2px solid #1A1A1A", // Added border and border color
  borderRadius: "10px",
  outline: "none",
});

const textStyle = (isSmallScreen: boolean) => ({
  fontSize: isSmallScreen ? "14px" : "16px",
  lineHeight: isSmallScreen ? "18px" : "22px",
});

export default function InvitationAddressModal({ isVisible, onClose }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [copied, setCopied] = useState(false);
  const { address } = useAccount();
  const walletAddress = address;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress).then(
      () => {
        setCopied(true);
      },
      () => {
        console.error("Failed to copy!");
      }
    );
  };

  return (
    <Modal
      open={isVisible}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style(isSmallScreen)}>
        <div className="flex flex-row justify-between">
          <span
            className="text-base text-medium text-white self-center"
            style={textStyle(isSmallScreen)}
          >
            Invitation Address
          </span>
          <div className="cursor-pointer" onClick={onClose}>
            <CancelOutlined className="text-white" />
          </div>
        </div>
        <div className="flex flex-row justify-between pt-8 pb-5 space-x-2">
          <span
            className="text-base text-medium text-white flex-1 break-all"
            style={textStyle(isSmallScreen)}
          >
            {address}
          </span>
          <div onClick={copyToClipboard} className="cursor-pointer">
            <ContentCopy
              fontSize="small"
              className="text-[#0349D6] self-center"
            />
          </div>
        </div>
      </Box>
    </Modal>
  );
}
