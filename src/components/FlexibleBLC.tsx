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
  maxWidth: 450, // Max width for larger screens
  border: "2px solid #1A1A1A", // Added border and border color
  borderRadius: "10px",
  outline: "none",
});

export default function FlexibleBLC({ isVisible, onClose }) {
  const [value, setValue] = React.useState("0");
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [activeTab, setactiveTab] = useState(true);
  return (
    <div>
      <Modal
        open={isVisible}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style(isSmallScreen)}>
          <div className="flex justify-end cursor-pointer" onClick={onClose}>
            <CancelOutlined className="text-white" />
          </div>
          <div className="flex flex-col items-center mt-2">
            <div
              className="bg-[#101010] rounded-full p-1 flex flex-row justify-between items-center"
              style={{
                alignSelf: "center",
                width: isSmallScreen ? "100%" : "85%",
              }}
            >
              <div
                className={`py-[2%] w-full flex justify-center cursor-pointer rounded-full ${
                  activeTab === true ? "bg-[#1A1A1A]" : "bg-[#101010]"
                }`}
                onClick={() => setactiveTab(true)}
              >
                <span
                  className={`text-lg   text-center ${
                    activeTab == true
                      ? "text-[#5683DE] font-bold"
                      : "text-white font-medium"
                  }`}
                >
                  iRA
                </span>
              </div>
              <div
                className={`py-[2%] w-full flex justify-center cursor-pointer rounded-full ${
                  activeTab === false ? "bg-[#1A1A1A]" : "bg-[#101010]"
                }`}
                onClick={() => setactiveTab(false)}
              >
                <span
                  className={`text-lg   text-center ${
                    activeTab == false
                      ? "text-[#5683DE] font-bold"
                      : "text-white font-medium"
                  }`}
                >
                  BLC
                </span>
              </div>
            </div>

            <div
              className="bg-[#101010] px-4 py-2 rounded-[10px] my-4 flex flex-col"
              style={{
                width: isSmallScreen ? "100%" : "85%",
                alignSelf: "center",
              }}
            >
              <span className="text-[#5683DE] font-normal text-base">iRA</span>
              <input
                type="number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="p-2 rounded border border-[#101010] bg-[#101010] w-full text-white"
              />
              <span className="text-[#C7C7C7] font-normal text-sm">
                = {value} USDT
              </span>
            </div>
            <div
              className="flex flex-col"
              style={{
                width: isSmallScreen ? "100%" : "85%",
                alignSelf: "center",
              }}
            >
              <div className="flex flex-row justify-between">
                <span className="text-[#C7C7C7] text-sm">
                  Price:
                  <span className="text-white text-sm"> 1 iRA = 0.12 USDT</span>
                </span>
                <span className="text-base font-bold text-white">APR --</span>
              </div>

              <div className="flex flex-row justify-between mb-3 mt-4">
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
                    minWidth: "46%",
                    alignSelf: "center",
                    color: "#5683DE",
                    mt: 2, // Adjusted margin-top
                    py: isSmallScreen ? 0.5 : 0.5,
                    fontSize: isSmallScreen ? 12 : 15,
                    textTransform: "none",
                  }}
                />
                <Button
                  children="Authorize"
                  color="primary"
                  size="medium"
                  variant="outlined"
                  sx={{
                    borderWidth: 2,
                    borderColor: "#3C3C3C",
                    borderRadius: 8,
                    backgroundColor: "#191F2C",
                    minWidth: "46%",
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
          </div>
        </Box>
      </Modal>
    </div>
  );
}
