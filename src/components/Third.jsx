import React from "react";
import Image from "next/image";
export const Third = () => {
  return (
    <div className="THIRD bg-[#ffffff] w-[1102px] h-[617px] ml-auto mr-auto mt-20  ">   {/*h-auto w-auto*/}
     <div className="w-[100px] h-[27px] ml-auto mr-auto"> <p className="text-center text:lg md:text-xl pt-0">Top Selling</p></div>

      <div className="Heading w-[418px] h-[65px] ml-auto mr-auto mt-5">
        <p className="  text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Top Destinations
        </p>
      </div>

      <div className="CARDBOX  bg[#333] flex flex-row flex-wrap justify-center space-x-4 mt-0">
        {/* <div className="relative">
  <a href="#" >
    <Image
      src={"/Third/1st-building.png"}
      alt="card img"
      width={400}
      height={200}
    />
    
    <div className="absolute bottom-60 ml-10 w-full p-5 bg-white">
      <div className="flex flex-row justify-around">
        <p>rome , italy</p>
        <p>$5.42k</p>
      </div>
      <p className="mb-3 ml-10 mt-5 font-normal">10 days trip</p>
    </div>

  </a>
       </div> */}

        <div className="relative  ">
          <a href="#">
            <Image
              src={"/Third/1st-building.png"}
              alt="card img"
              width={315}
              height={457}
              className=" w-[315px] h-[457px] sm:w-[315px] h-[457px] md:w-[315px] h-[457px]"
            />

            <div className="absolute bottom-4 border  rounded-b-xl drop-shadow-xl left-7   w-[258px] h-[140px] p-5 bg-white ">
              <div className="flex flex-row justify-around ">
                <p>rome , italy</p>
                <p>$5.42k</p>
              </div>
              <div className="flex items-center ml-10 ">
                {" "}
                <Image
                  src={"/Third/navigation 1@2x.png"}
                  width={20}
                  height={20}
                  alt="navigation"
                  className="ml-0"
                />
                <p className="mb-3 ml-2 mt-5 font-normal">10 days trip</p>
              </div>
            </div>
          </a>
        </div>

        {/* <div className="IMAGE">
       <Image
              src={"/Forth/Destination.png"}
              alt="card img"
              width={600}
              height={800}
            />
          </div> */}

        {/* <div className="relative overflow-hidden ">
  <div className="IMAGE ">
    <Image
      src={"/Third/1st-building.png"}
      alt="card img"
      width={600}
      height={800}
    />
  </div>
  <div className="absolute bottom-[50px] h-[100px] left-0  p-5 bg-[#ffffff] rounded-b-2xl w-[320px] ml-9 ">
    <div className="flex flex-row justify-around flex-wrap ">
      <p>Rome , Itlay</p>
      <p>$4.2k</p>
    </div>
    <p className="ml-14">10 days trip</p>
  </div>
         </div> */}

        <div className="relative">
          <div className="IMAGE">
            <Image
              src={"/Third/2nd-building.png"}
              alt="card img"
              width={600}
              height={800}
              //  className="sm:w-[400] h-[500px] md:w-[450px] h-[600px]"
              className=" w-[315px] h-[457px] sm:w-[315px] h-[457px] md:w-[315px] h-[457px]"
            />
          </div>
          <div className="absolute bottom-4 left-7 border rounded-b-xl drop-shadow-xl  w-[258px] h-[140px] p-5 bg-white ">
            <div className="flex flex-row justify-around flex-wrap">
              <p>London , UK</p>
              <p>$4.2k</p>
            </div>
            <div className="flex items-center ml-10 mt-5 ">
              {" "}
              <Image
                src={"/Third/navigation 1@2x.png"}
                width={20}
                height={20}
                alt="navigation"
                className="ml-0"
              />
              <p className="ml-2">12 days trip</p>
            </div>
          </div>
        </div>

        <div className="relative">
          {/* Decore Image positioned behind everything */}
          <Image
            src={"/Third/Decore.png"}
            width={100}
            height={100}
            className="absolute right-[-28px] top-[140px] z-0" // z-index set to 0 to place it behind
          />

          {/* Main Card Image */}
          <div className="relative z-10">
            {" "}
            {/* Set a higher z-index for the card */}
            <Image
              src={"/Third/Third-building.png"}
              alt="card img"
              width={600}
              height={800}
              className="w-[315px] h-[457px] sm:w-[315px] h-[457px] md:w-[315px] h-[457px]"
            />
          </div>

          {/* Card Content */}
          <div className="absolute bottom-4 left-7 border rounded-b-xl drop-shadow-xl  w-[256px] h-[140px] p-5 bg-white z-20">
            {" "}
            {/* Even higher z-index for content */}
            <div className="flex flex-row justify-around flex-wrap">
              <p>Full Europe</p>
              <p>$15k</p>
            </div>
            <div className="flex items-center ml-10 mt-5">
              <Image
                src={"/Third/navigation 1@2x.png"}
                width={20}
                height={20}
                alt="navigation"
                className="ml-0"
              />
              <p className="ml-2">36 days trip</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
