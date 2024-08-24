import React from "react";
import Image from "next/image";
export const Sixth = () => {
  return (
    <div className="SIXTH flex justify-center ml-auto mr-auto   items-center bg-[#fff] w-[1073px] h-[162px] mt-20 md:pt-20 pb-4 ">
     
      <div className="flex  flex-row flex-wrap space-x-20  justify-center sm:justify-center gap-x-2 space-y-4 md:justify-center ">
      <img
        src={"/Sixth/image 27.1@2x.png"}
        alt="card img"
        className="w-[117px] h-[36px] grayscale hover:grayscale-0"
      />

      <img
        src={"/Sixth/image 28.1@2x.png"}
        alt="card img"
        className="w-[124px] h-[35px]  grayscale hover:grayscale-0"
      />

      <img
        src={"/Sixth/image 29.1@2x.png"}
        alt="card img"
        className="w-[163px] h-[46px]  grayscale hover:grayscale-0"
      />

      <img
        src={"/Sixth/image 30@2x.png"}
        alt="card img"
       className="w-[162px] h-[32px]  grayscale hover:grayscale-0"
      />

      <img
        src={"/Sixth/image 31@2x.png"}
        alt="card img"
        className="w-[94px] h-[21px]  grayscale hover:grayscale-0"
      />
      </div>
    </div>
  );
};
