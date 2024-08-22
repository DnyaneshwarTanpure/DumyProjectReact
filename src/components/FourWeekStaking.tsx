import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { CancelOutlined } from "@mui/icons-material";
import { useTheme, useMediaQuery } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#1A1A1A",
  p: 1,
  width: "90%", // Adjust width for small screens
  maxWidth: 450, // Max width for larger screens
  border: "2px solid #1A1A1A", // Added border and border color
  borderRadius: "10px",
  outline: "none",
};

export default function FourWeekStaking({ isVisible, onClose }) {
  const [value, setValue] = React.useState("0");
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <Modal
        open={isVisible}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex justify-end cursor-pointer" onClick={onClose}>
            <CancelOutlined className="text-white" />
          </div>
          <div className="flex flex-col items-center">
            <div
              className="bg-[#0349D699] rounded-[5px] py-1 px-2"
              style={{ alignSelf: "center" }}
            >
              <span className="text-base font-medium text-white text-center">
                Four Week Staking
              </span>
            </div>
            <div
              className="bg-[#101010] px-4 py-2 rounded-[10px] my-6 flex flex-col"
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
              <span className="text-[#C7C7C7] text-sm">
                Price:
                <span className="text-white text-sm"> 1 iRA = 0.12 USDT</span>
              </span>
              <div className="flex flex-row justify-between mb-5">
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
                    minWidth: "42%",
                    alignSelf: "center",
                    color: "#5683DE",
                    mt: 2, // Adjusted margin-top
                    py: isSmallScreen ? 0.5 : 1,
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
                    borderColor: "#1A4DCE",
                    borderRadius: 8,
                    backgroundColor: "#1A4DCE",
                    minWidth: "42%",
                    alignSelf: "center",
                    color: "white",
                    mt: 2, // Adjusted margin-top
                    py: isSmallScreen ? 0.5 : 1,
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
