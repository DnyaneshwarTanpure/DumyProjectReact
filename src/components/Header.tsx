import React, { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../App.css";
import {
  AccountBalanceWalletOutlined,
  ExitToApp,
  KeyboardArrowDownOutlined,
} from "@mui/icons-material";
import { useWalletInfo, useWeb3Modal } from "@web3modal/wagmi/react";
import { Modal1 } from "./Modal1";
import { useAccount } from "wagmi";
import { useTheme, useMediaQuery } from "@mui/material";
export default function Header(props: any) {
  const navigate = useNavigate();
  const { open } = useWeb3Modal();
  const { walletInfo } = useWalletInfo();
  console.log(walletInfo, "walletInfo");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { isDisconnected } = useAccount();
  console.log(isDisconnected, "isDisconnected");
  const handleButtonClick = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const HomeVisible = props?.Home;
  console.log(HomeVisible, "HomeVisible");

  return (
    <div>
      <header
        className={HomeVisible == undefined ? "header-no-buttons" : "header"}
      >
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          <img src="./src/assets/Logo.png" alt="Logo" className="logo-image" />
        </div>
        {props?.Home && (
          <div className="header-buttons">
            <button className="home-button">
              <img
                src="./src/assets/Home.png"
                alt="Home"
                className="home-image"
              />{" "}
              <span className="ml-2">Home</span>
            </button>
            <button className="market-button">
              <img
                src="./src/assets/Market.png"
                alt="Market"
                className="market-image"
              />{" "}
              <span className="ml-2">Market</span>
            </button>
          </div>
        )}

        {isDisconnected ? (
          <div className="Connect-button">
            <Button
              children="Connect Wallet"
              color={"primary"}
              size="medium"
              variant="outlined"
              sx={{
                borderWidth: 2,
                borderColor: "#0349D6",
                borderRadius: 8,
                textTransform: "none",
                px: isSmallScreen ? 4 : 5,
                py: isSmallScreen ? ["1.5%"] : ["2.5%"],
                fontSize: isSmallScreen ? 16 : 18,
                fontWeight: isSmallScreen ? "medium" : "semiBold",
              }}
              onClick={() => open()}
            />
          </div>
        ) : (
          <div>
            {props?.exit ? (
              <div className="flex flex-row item-center gap-2 cursor-pointer ">
                <ExitToApp className="self-center" />
                <span className="text-[#5683DE] text-semiBold text-xl ">
                  Exit
                </span>
              </div>
            ) : (
              <div
                className="bg-[#1A1A1A] rounded-[16px] px-2 py-1 flex justify-center items-center cursor-pointer"
                onClick={handleButtonClick}
              >
                <AccountBalanceWalletOutlined />
                <KeyboardArrowDownOutlined />
              </div>
            )}

            <Modal1 isVisible={isModalVisible} onClose={handleCloseModal} />
          </div>
        )}
      </header>
    </div>
  );
}
{
  /* <div className="bg-[#1A1A1A] rounded-[16px] px-2 py-1 flex flex-col justify-center items-center mt-2 sm:mt-0">
<span className="text-sm sm:text-base">{walletInfo?.name}</span>
<span className="text-xs sm:text-sm">{address}</span>
<span className="text-xs sm:text-sm">{selectedNetworkId}</span>
</div> */
}
