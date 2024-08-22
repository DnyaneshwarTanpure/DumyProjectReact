import React, { Component } from "react";
import "../App.css";
function BlockComponent(props: any) {
  return (
    <div className="border border-[#5683DE] rounded-lg flex flex-col justify-center items-center  py-7 max-w-[100%]">
      <img src="./src/assets/Semless.png" alt="Logo" className="h-8 w-10" />
      <span className="text-xl text-[#5683DE] font-semibold py-2 text-center">
        {props?.header}Seamless Swap
      </span>
      <span className="text-xs text-[#CFCFCF] font-normal max-w-[60%] text-center">
        {props?.subText}Seamlessly swap between iRA, the governance token of iRA
        Blocks, and USDT.
      </span>
    </div>
  );
}

export default BlockComponent;
