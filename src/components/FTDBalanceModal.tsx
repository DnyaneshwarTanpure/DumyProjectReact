import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import { CancelOutlined } from "@mui/icons-material";
import { useTheme, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Input } from "@mui/material";
const style = (isSmallScreen: boolean) => ({
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#1A1A1A",
  p: isSmallScreen ? "1%" : "0.5%",
  width: isSmallScreen ? "92%" : "90%", // Adjust width for small screens
  maxWidth: 400, // Max width for larger screens
  border: "2px solid #1A1A1A", // Added border and border color
  borderRadius: "10px",
  outline: "none",
});

export default function FTDBalanceModal({ isVisible, onClose }) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [value, setValue] = useState("0");
  const [wallet, setwallet] = useState(
    "0x85e24dc151bda0aedf18a813012950a02adfc1c9"
  );
  return (
    <div>
      <Modal
        open={isVisible}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style(isSmallScreen)}>
          <div className="flex justify-between flex-row item-center">
            <div className="flex flex-row items-center ">
              <img
                src="./src/assets/Logo.png"
                alt="Logo"
                className="h-6 md:h-8 w-6 md:w-8"
              />
              <span className="ml-2 text-white text-base md:text-lg">
                FTD Balance
              </span>
            </div>
            <CancelOutlined className="text-white self-center" />
          </div>
          <div className="flex flex-col  max-w-[82%] w-full  mx-8 md:mx-10">
            <span className="text-3xl font-medium text-[#B0B0B0]">
              0<span className="text-base font-bold text-white ml-2">iRA</span>
            </span>
            <span className="text-base font-medium text-[#808080] mt-8">
              iRA Amount
            </span>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="0"
              className="p-3 rounded-[10px] border border-[#101010] bg-[#101010]  w-full text-[#808080] my-4 "
            />
            <span className="text-base font-medium text-[#808080] ">
              Wallet Address
            </span>
            <Input
              type="text"
              value={wallet}
              onChange={(e) => setwallet(e.target.value)}
              placeholder="0"
              sx={{
                borderRadius: "10px",
                p: "4%",
                color: "#808080",
                my: 2,
                backgroundColor: "#101010",
              }}
              disableUnderline={true}
              multiline={true}
              maxRows={2}
            />
            <span className="text-sm text-medium text-white">
              Transaction Fee : 1 iRA
            </span>

            <div className="flex flex-row justify-between my-4">
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
                  minWidth: "45%",
                  alignSelf: "center",
                  color: "#5683DE",
                  mt: 2, // Adjusted margin-top
                  py: isSmallScreen ? 0.5 : 0.5,
                  fontSize: isSmallScreen ? 12 : 15,
                  textTransform: "none",
                }}
              />
              <Button
                children="Withdraw"
                color="primary"
                size="medium"
                variant="outlined"
                sx={{
                  borderWidth: 2,
                  borderColor: "#1A4DCE",
                  borderRadius: 8,
                  backgroundColor: "#1A4DCE",
                  minWidth: "45%",
                  alignSelf: "center",
                  color: "white",
                  mt: 2, // Adjusted margin-top
                  py: isSmallScreen ? 0.5 : 0.5,
                  fontSize: isSmallScreen ? 12 : 15,
                  fontWeight: "medium",
                  textTransform: "none",
                }}
              />
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
