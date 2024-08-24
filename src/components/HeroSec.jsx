import React from "react";
import { Navbar } from "./Navbar";
import Image from "next/image";

export const HeroSec = () => {
  return (
    <div className="heroSection bg-[#ffffff]    w-[1182px] h-[764px] ml-auto mr-auto ">
      <div className="flex flex-row  justify-center items-center ">
        {/*flex-wrap md:justify-around lg:justify-around xl:justify-around items-center flex-wrap lg:justify-between*/}

        <div className="CONTENT relative  w-[630px] h-[535px] ml-4 mr-4  md:ml-20  pt-0 flex-col ">
          <div className="w-[410px] h-[30px]">
            <p className=" text-[#f15f5f] font-bold text-sm sm:text-base md:text-lg">
              BEST DESTINATIONS AROUND THE WORLD
            </p>
          </div>
          <div className="heading mt-10 ">
            <Image
              src={"/HeroSection/RedLine.png"}
              width={300}
              height={80}
              className="Red absolute  top-[107px] left-[220px] z-0"
            />
            <div className="w-[545px] h-[250px]  ">
            <p className=" text-6xl font-bold absolute z-10">
              TRAVEL, enjoy <br/> and live a new and full life.
            </p>
            {/* <p className="text-6xl font-bold">
              and live a new
            </p>
            <p className="text-6xl font-bold">
              and full life.
            </p> */}
            </div>
          </div>

          <div className="w-[470px] h-[90px]  ">
            <p className=" text-left text-lg text-[#5E6282]">
              Built wicket longer admire to barton vanity itself do it
              in.Preffered to sports man it engrossed listening.Park gate sell
              they west hard for the.
            </p>
          </div>

          <div className="flex absolute bottom-0 left-0 flex-row w-[396px] h-[60px] items-center   pt-0 sm:items-center flex-row space-x-2">
            <button className="bg-[#ffa500]  text-white text-base w-[170px] h-[60px]  rounded-md py-2  mb-[0px]  md:text-lg ">
              Find Out More
            </button>
            <button className="flex  items-center w-[250px] h-[53.5px] bg-[#]  rounded-md ">
              <Image src="/Play button.png" width={200} height={200} className="" />
              <span className=" w-[200px] h-[41px] ml-[-60px] text-base md:text-lg">
                Play Demo
              </span>
            </button>
          
          </div>
        </div>

        {/* <div className="GirlImg pt-10 mr-20 reletive flex flex-wrap  hidden md: flex flex-wrap-reverse "> */}

        <div className="GirlImg pt-10 mr-0 w-[765px] h-[764px] relative flex flex-wrap   sm:flex flex-wrap">
          <img
            src="/1stPlane.png"
            alt="plane"
            className="absolute w-[112.05px] h-[71.73px] top-40 ml-20 "
          />
          <Image
            src="/Traveller 1.png"
            alt="Girl Image"
            width={765}
            height={764}
            // className="sm:w-[400px] h-[600px]"
            className="mr-10 sm:w-[765px] h-[764px]"
          />

          <Image
            src="/2ndPlane.png"
            alt="plane"
            width={100}
            height={100}
            className="absolute w-[112.05px] h-[71.73px]  top-60 right-10"
          />
        </div>
      </div>
    </div>
  );
};
