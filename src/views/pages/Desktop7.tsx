import React from "react";
import Header from "../../components/Header";

import FourWeekStaking from "../../components/FourWeekStaking";
import FlexibleBLC from "../../components/FlexibleBLC";
import FTDBalanceModal from "../../components/FTDBalanceModal";
import InvitationAddressModal from "../../components/InvitationAddressModal";

export default function Desktop7() {
  const [open, setOpen] = React.useState(false);
  const [openBLC, setOpenBLC] = React.useState(false);
  const [openFTD, setOpenFTD] = React.useState(false);
  const [openInvitation, setOpenInvitation] = React.useState(false);
  const handleOpen = () => setOpen(true); //function for modal visible
  const handleClose = () => setOpen(false); //function for modal disable
  const handleCloseBLC = () => setOpenBLC(false);
  const handleOpenBLC = () => setOpenBLC(true);
  const handleCloseFTD = () => setOpenBLC(false);
  const handleOpenFTD = () => setOpenFTD(true);
  const handleCloseInvitation = () => setOpenInvitation(false);
  const handleOpenInvitation = () => setOpenInvitation(true);
  return (
    <div className="flex flex-col min-h-screen bg-[#101010] text-white">
      <Header exit />

      <div className="flex flex-col w-full max-w-[90%] 2xl:max-w-[85%] self-center mt-4">
        <div className="flex flex-col md:flex-row self-center gap-10 md:gap-20 w-full  justify-center">
          <div className="flex flex-col w-full md:w-auto">
            <span className="font-bold text-base text-white">iRA Balance</span>
            <span className="font-medium text-4xl md:text-5xl text-[#B0B0B0] py-2">
              0 <span className="font-bold text-base text-white">iRA</span>
            </span>
            <span className="text-lg font-bold text-white my-3 md:my-5">
              Stake
            </span>
            <div className="bg-[#1A1A1A] rounded-[10px] border-[#3C3C3C] pb-4 pt-2 pl-2 pr-2 border w-full">
              <div className="flex flex-row gap-4 items-center">
                <span className="bg-[#0349D699] px-2 rounded-[5px] text-base font-medium text-white">
                  Four Week Staking
                </span>
                <img
                  src="./src/assets/Arrow.png"
                  className="w-5 h-5 self-center cursor-pointer"
                  onClick={handleOpen}
                />
              </div>
              <div className="flex flex-col mt-4 md:mt-8">
                <span className="font-medium text-sm text-[#C7C7C7]">APR</span>
                <span className="text-base font-medium text-[#5683DE]">
                  190%
                </span>
              </div>
            </div>
            <div className="bg-[#1A1A1A] rounded-[10px] border-[#3C3C3C] pb-4 pt-2 pl-2 pr-2 border mt-14 w-full">
              <div className="flex flex-row gap-4 items-center">
                <span className="bg-[#0349D699] px-2 rounded-[5px] text-base font-medium text-white">
                  Two Week Staking
                </span>
                <img
                  src="./src/assets/Arrow.png"
                  className="w-5 h-5 self-center"
                  onClick={handleOpen}
                />
              </div>
              <div className="flex flex-col mt-4 md:mt-8">
                <span className="font-medium text-sm text-[#C7C7C7]">APR</span>
                <span className="text-base font-medium text-[#5683DE]">
                  190%
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full md:w-auto">
            <span
              className="font-medium text-base text-[#5683DE] text-right md:my-[31.8%] my-4 "
              onClick={handleOpenFTD}
            >
              Withdraw To Wallet
            </span>
            <div className="bg-[#1A1A1A] rounded-[10px] border-[#3C3C3C] pb-4 pt-2 pl-2 pr-2 border w-full">
              <div className="flex flex-row gap-4 items-center">
                <span className="bg-[#0349D699] px-2 rounded-[5px] text-base font-medium text-white">
                  Three Week Staking
                </span>
                <img
                  src="./src/assets/Arrow.png"
                  className="w-5 h-5 self-center"
                  onClick={handleOpen}
                />
              </div>
              <div className="flex flex-col mt-4 md:mt-8">
                <span className="font-medium text-sm text-[#C7C7C7]">APR</span>
                <span className="text-base font-medium text-[#5683DE]">
                  190%
                </span>
              </div>
            </div>
            <div className="bg-[#1A1A1A] rounded-[10px] border-[#3C3C3C] pb-4 pt-2 pl-2 pr-2 border mt-14 w-full">
              <div className="flex flex-row gap-4 items-center">
                <span className="bg-[#0349D699] px-2 rounded-[5px] text-base font-medium text-white">
                  Flexible Pledge
                </span>
                <img
                  src="./src/assets/Arrow.png"
                  className="w-5 h-5 self-center"
                  onClick={handleOpenBLC}
                />
              </div>
              <div className="flex flex-col mt-4 md:mt-8">
                <span className="font-medium text-sm text-[#C7C7C7]">APR</span>
                <span className="text-base font-medium text-[#5683DE]">
                  190%
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-auto lg:max-w-[43%] self-center w-full mt-10 ">
          <span>Current Staking</span>
          <div className="bg-[#1A1A1A] rounded-[10px] border-[#3C3C3C] pb-4 pt-2 pl-2 pr-2 border my-6 md:my-6 ">
            <div className="flex flex-row justify-between items-center mb-1">
              <span className="bg-[#0349D699] px-2 rounded-[5px] text-base font-medium text-white">
                Four Week Staking
              </span>
              <div className="flex flex-row gap-2 pr-2">
                <div className="h-2 w-2 p-1 bg-[#30C922] rounded-full  self-center"></div>
                <span className="text-[#30C922] text-sm font-semiBold ">
                  Staking
                </span>
              </div>
            </div>
            <span className="font-bold text-base text-white p-1">5 iRA</span>
            <div className="flex flex-row justify-between pl-3 pr-2 w-full">
              <div className="flex flex-col mt-4 md:mt-4 ">
                <span className="font-normal text-sm text-[#C7C7C7] text-center">
                  iRA minted
                </span>
                <span className="font-normal text-sm text-white text-center ">
                  0
                </span>
              </div>
              <div className="flex flex-col mt-4 md:mt-4 ">
                <span className="font-normal text-sm text-[#C7C7C7] text-center">
                  Staking Period
                </span>
                <span className="font-normal text-sm text-white text-center">
                  Aug 12 2024 12:20:42
                </span>
              </div>
              <div className="flex flex-col mt-4 md:mt-4 ">
                <span className="font-normal text-sm text-[#C7C7C7] text-center">
                  Expiry Time
                </span>
                <span className="font-normal text-sm text-white text-center">
                  Aug 12 2024 12:20:42
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#1A1A1A] rounded-[10px] border-[#3C3C3C] pb-4 pt-2 pl-2 pr-2 border my-4 md:my-4 max-w-auto lg:max-w-[43%] self-center w-full">
          <div className="flex flex-row  justify-between items-center ">
            <span className="text-base font-normal text-white">
              Participate in the promotion
            </span>
            <img
              src="./src/assets/Arrow.png"
              className="w-5 h-5 self-center"
              onClick={handleOpenInvitation}
            />
          </div>
          <div className="flex flex-row mt-4 md:mt-4 gap-2">
            <span className="font-normal text-base text-white">Users</span>
            <span className="text-base font-normal text-white">0</span>
          </div>
        </div>
      </div>
      <FourWeekStaking isVisible={open} onClose={handleClose} />
      <FlexibleBLC isVisible={openBLC} onClose={handleCloseBLC} />
      <FTDBalanceModal isVisible={openFTD} onClose={handleCloseFTD} />
      <InvitationAddressModal
        isVisible={openInvitation}
        onClose={handleCloseInvitation}
      />
    </div>
  );
}
