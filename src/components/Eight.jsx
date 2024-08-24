import React from "react";
import Image from "next/image";

export const Eight = () => {
  return (
    <div className="EIGHT relative w-auto h-[50vh] pb-20 overflow-hidden flex flex-row basis-1/5  mt-20  flex-wrap  bg-[#fffffff] space-y-2 space-x-3 sm:space-x-4 md:justify-between">
     <Image src={"/HeroSection/Ellipse 8.png"} width={478.94} height={496.86} className="absolute top-10 right-[-100px]"/>
      <div className="flex flex-col">
         <p className="text-2xl text-center mt-20 font-bold">Jadoo</p>
         <div className="flex inline-block bg-[#ffff] w-60"><p className="text-lg text-[#5E6282]  text-center mt-2">Book your trip in minute, get full control of much longer</p></div>
      </div>

      <div className="flex flex-col  ">
      <p className="text-lg text-center mt-20 font-bold">Company</p>
      <p className="text-center  text-[#5E6282] pt-5">About</p>
      <p className="text-center  text-[#5E6282] pt-2">Careears</p>
      <p className="text-center  text-[#5E6282] pt-2">Mobile</p>
      </div>

      <div className="flex flex-col  ">
      <p className="text-lg text-center mt-20 font-bold">Contact</p>
      <p className="text-center  text-[#5E6282] pt-5">Help/FAQ</p>
      <p className="text-center  text-[#5E6282] pt-2">Press</p>
      <p className="text-center  text-[#5E6282] pt-2">Affilates</p>
      </div>

      <div className="flex flex-col  ">
      <p className="text-lg text-center mt-20 font-bold">More</p>
      <p className="text-center  text-[#5E6282] pt-5">Airlinefees</p>
      <p className="text-center  text-[#5E6282] pt-2">Airline</p>
      <p className="text-center  text-[#5E6282] pt-2">Low fare tips</p>
      </div>

      <div className="flex  justify-center mt-[-40px]   flex-col">
     <div className="flex flex-row space-x-0 ml-0 mt-0">
       <Image src={"/Eight/f.png"} width={100} height={100} alt="facebook" className=""/>
      <Image src={"/Eight/I.png"} width={100} height={100} alt="Instagram" className=""/>
      <Image src={"/Eight/t.png"} width={100} height={100} alt="twitter" className=""/>
      </div>
      <p className="text-lg  text-left  text-[#5E6282] mt-2 ml-8 ">Discover Our app</p>
      <div className="flex flex-row flex-wrap space-x-2 ml-8 mt-4">
      {/* <button className=" flex flex-row  text-white rounded-full bg-black p-2"><span className="0.9"><Image src={"/Eight/google-play 1@2x.png"} width={20} height={20}/></span>Google Play</button>
      <button className="flex flex-row  text-white rounded-full bg-black p-2"><span className=""><Image src={"/Eight/apple (2) 1@2x.png"} width={20} height={20}/></span>App Store</button> */}
     <button className="flex flex-row text-white rounded-full bg-black p-2 items-center ">
  <span className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12">
    <Image src={"/Eight/google-play 1@2x.png"} className=" items-center md:ml-2 mt-2" width={20} height={20} alt="Google Play" />
  </span>
  Google Play
</button>

<button className="flex flex-row text-white rounded-full bg-black p-2 items-center">
  <span className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12">
    <Image src={"/Eight/apple (2) 1@2x.png"} className=" items-center md:ml-2 mt-2" width={20} height={20} alt="App Store" />
  </span>
  App Store
</button>
      </div>
      </div>
     
    </div>
  );
};
