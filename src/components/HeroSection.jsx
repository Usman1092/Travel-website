import React from "react";
import { Navbar } from "./Navbar";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <div className="heroSection bg-[#ffffff]  relative  overflow-hidden   "> {/* bg-center bg-heroImg bg-scroll bg-origin-border bg-no-repeat bg-cover */}
     <Image src={"/HeroSection/Decore.png"} width={766.31} height={872.58} className="absolute   top-[-140px] right-[-240px]  z-0 "/>
    
      <Navbar   />
      {/* background image */}
      <div className="BACKGROUND  w-full h-full pointer-events-none select-none  ">
        <Image
          src="/HeroSection/Ellipse 8.png"
          alt="Hero Image"
          className="absolute left-[-330px] top-[-100px]"
          width={478.94}
          height={496.86}
        />
      </div>
      <div className="flex flex-row  justify-center items-center ">{/*flex-wrap md:justify-around lg:justify-around xl:justify-around items-center flex-wrap lg:justify-between*/} 
        <div className="CONTENT ml-4 mr-4  md:ml-20  pt-40 flex-col ">
          <p className=" text-[#f15f5f] font-bold text-sm sm:text-base md:text-lg">
            BEST DESTINATIONS AROUND THE WORLD
          </p>
          <div className="heading mt-10 w-[545px] h-auto">
 

<Image
      src={"/HeroSection/RedLine.png"}
      width={300}
      height={80}
      className="Red absolute  top-[380px] left-[320px] z-10"
    />
            <p className=" text-3xl sm:text-4xl md:text-6xl font-bold z-20">TRAVEL, enjoy</p>
            <p className="text-3xl  sm:text-4xl md:text-6xl font-bold">and live a new</p>
            <p className="text-3xl  sm:text-4xl md:text-6xl font-bold">and full life.</p>
          </div>
          
          <div className="w-[447px] h-[90px]  ">
          <p className="mt-20 ml-auto mr-auto">
            Built wicket longer admire to barton vanity itself do it
            in.Preffered to sports man it engrossed listening.Park gate sell
            they west hard for the.
          </p>
          </div>

          {/* <div className="grid  grid-rows-1">
            {" "}
            <button className="bg-[#ffa500] text-white rounded-md pr-2 pt-2 pb-2 pl-2">
              Find Out More
            </button>
            <button className="rounded-md p-2 flex items-center">
              <Image src="/Play button.png" width={200} height={200} />
              <span className="ml-[-50px] mb-[20px]">Play Demo</span>
            </button>
          </div> */}
          <div className="flex flex-row items-center space-y-2 pt-10 sm:items-center flex-row space-x-2">
  <button className="bg-[#ffa500]  text-white text-base  rounded-md py-2  mb-[20px] w-20 md:text-lg w-40">
    Find Out More
  </button>
  <button className="flex items-center  rounded-md p-2">
    <Image src="/Play button.png" width={200} height={200} />
    <span className="ml-[-55px] mb-[20px] text-base md:text-lg">Play Demo</span>
  </button>
          </div>

        </div>

        {/* <div className="GirlImg pt-10 mr-20 reletive flex flex-wrap  hidden md: flex flex-wrap-reverse "> */}
        <div className="GirlImg pt-10 mr-20 relative flex flex-wrap hidden xs:hidden  sm:flex flex-wrap">
          <Image src="/1stPlane.png" alt="plane" width={100} height={100}  className="absolute top-40 ml-20 "/>
          <Image
            src="/Traveller 1.png"
            alt="Girl Image"
            width={765}
            height={764}
            // className="sm:w-[400px] h-[600px]"  
            className="sm:w-[765px] h-[764px]"
          />

 <Image
          src="/2ndPlane.png"
          alt="plane"
          width={100}
          height={100}
          className="absolute top-60 right-10"
          /> 
        </div>
      </div>
    </div>
  );
};




// import React from "react";
// import { Navbar } from "./Navbar";
// import Image from "next/image";

// export const HeroSection = () => {
//   return (
//     <div className="heroSection relative min-h-screen bg-center bg-heroImg bg-scroll bg-no-repeat bg-cover">
//       <Navbar />
//       <div className="flex flex-row justify-between relative z-10">
//         <div className="CONTENT ml-20 pt-40 flex-col">
//           <p className="text-[#f15f5f] font-bold">
//             BEST DESTINATIONS AROUND THE WORLD
//           </p>
//           <div className="heading mt-10">
//             <p className="text-6xl font-bold">TRAVEL, enjoy</p>
//             <p className="text-6xl font-bold">and live a new</p>
//           </div>
//           <p className="mt-20 w-[500px]">
//             Built wicket longer admire to barton vanity itself do it in.
//             Preferred to sports man it engrossed listening. Park gate sell they
//             west hard for the.
//           </p>
//           <div className="flex items-center space-x-2">
//             <button className="bg-[#ffa500] text-white rounded-md py-2 px-4 mb-[20px]">
//               Find Out More
//             </button>
//             <button className="flex items-center rounded-md p-2">
//               <Image src="/Play button.png" width={50} height={50} />
//               <span className="ml-[-50px] mb-[20px]">Play Demo</span>
//             </button>
//           </div>
//         </div>
//         <div className="GirlImg pt-10 mr-20">
//           <Image src="/1stPlane.png" alt="plane" width={100} height={100} />
//           <Image src="/Traveller 1.png" alt="Girl Image" width={800} height={500} />
//         </div>
//       </div>
//     </div>
//   );
// };

