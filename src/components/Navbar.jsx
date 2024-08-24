// import React from "react";
// import Image from "next/image";

// export const Navbar = () => {
//   return (
//     <div className="flex flex-row  justify-between space-x-10 pt-6 ml-20 mr-40 ">

//       <div className="logo flex-auto   ">
//         <Image
//           src="/HeroSection/Logo.png"
//           alt=" Logo Image"
//           width={204.38}
//           height={50}
//           className="w-[131px] xl:w-[149px] 2xl:w-[178px] 3xl:w-[204.38px] h-auto"
//         />
//       </div>

//       <nav className="navbar space-x-8   ">
//         <a href="/">Destinations</a>

//         <a href="/about">Hotals</a>

//         <a href="/contact">Flights</a>
//         <a href="/contact">Bookings</a>
//         <a href="/contact">Login</a>
//         <button className="border border-black rounded-md p-2 w-20">sign Up</button>
//         {/* <div className="relative inline-block">
//   <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded focus:outline-none">
//     En
//     <span>
//       <Image src={"/HeroSection/Vector 1@2x.png"} width={20} height={20} />
//     </span>
//   </button>
//   <ul className="absolute top-full left-0 bg-white shadow-md hidden group-hover:block">
//     <li className="py-2 px-4 hover:bg-gray-100">
//       <a href="#" className="text-gray-800 hover:text-gray-900">Urdu</a>
//     </li>
//     <li className="py-2 px-4 hover:bg-gray-100">
//       <a href="#" className="text-gray-800 hover:text-gray-900">Arabic</a>
//     </li>
//     <li className="py-2 px-4 hover:bg-gray-100">
//       <a href="#" className="text-gray-800 hover:text-gray-900">Chineas</a>
//     </li>
//   </ul>
//        </div> */}
//         <button className="">En<span><Image src={"/HeroSection/Vector 1@2x.png"} width={20} height={20}/></span></button>
//       </nav>
//     </div>
//   );
// };




// import React, { useState } from "react";
// import Image from "next/image";

// export const Navbar = () => {
//   const [showNavLinks, setShowNavLinks] = useState(false);

//   return (
//     <div className="flex flex-row justify-between space-x-10 pt-6 ml-20 mr-40 md:ml-10 md:mr-10 sm:ml-5 sm:mr-5 xs:ml-0 xs:mr-0">
//       <div className="logo flex-auto">
//         <Image
//           src="/HeroSection/Logo.png"
//           alt="Logo Image"
//           width={204.38}
//           height={50}
//           className="w-[100px] h-auto sm:w-[115px]md:w-[131px] xl:w-[149px] 2xl:w-[178px] 3xl:w-[204.38px] h-auto"
//         />
//       </div>

//       <nav className="navbar space-x-8 md:space-x-4 sm:space-x-2 xs:space-x-1">
//         <button
//           className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded focus:outline-none xs:hidden"
//           onClick={() => setShowNavLinks(!showNavLinks)}
//         >
//           Menu
//         </button>

//         <div className={`xs:flex xs:flex-col xs:space-y-2 xs:w-full ${showNavLinks ? "block" : "hidden"}`}>
//           <a href="/" className="text-lg md:text-md sm:text-sm xs:text-xs">
//             Destinations
//           </a>

//           <a href="/about" className="text-lg md:text-md sm:text-sm xs:text-xs">
//             Hotals
//           </a>

//           <a href="/contact" className="text-lg md:text-md sm:text-sm xs:text-xs">
//             Flights
//           </a>
//           <a href="/contact" className="text-lg md:text-md sm:text-sm xs:text-xs">
//             Bookings
//           </a>
//           <a href="/contact" className="text-lg md:text-md sm:text-sm xs:text-xs">
//             Login
//           </a>
//           <button className="border border-black rounded-md p-2 w-20 md:w-15 sm:w-10 xs:w-5">
//             sign Up
//           </button>
//         </div>

//         <div className="relative inline-block group">
//           <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded focus:outline-none">
//             En
//             <span>
//               <Image src={"/HeroSection/Vector 1@2x.png"} width={20} height={20} />
//             </span>
//           </button>
//           <ul className="absolute top-full left-0 bg-white shadow-md hidden group-hover:block">
//             <li className="py-2 px-4 hover:bg-gray-100">
//               <a href="#" className="text-gray-800 hover:text-gray-900">Urdu</a>
//             </li>
//             <li className="py-2 px-4 hover:bg-gray-100">
//               <a href="#" className="text-gray-800 hover:text-gray-900">Arabic</a>
//             </li>
//             <li className="py-2 px-4 hover:bg-gray-100">
//               <a href="#" className="text-gray-800 hover:text-gray-900">Chineas</a>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// };



// import React, { useState } from "react";
// import Image from "next/image";

// export const Navbar = () => {
//   const [showNavLinks, setShowNavLinks] = useState(false);

//   return (
//     <div className="flex flex-row justify-between space-x-10 pt-6 ml-20 mr-40 md:ml-10 md:mr-10 sm:ml-5 sm:mr-5 xs:ml-0 xs:mr-0">
//       <div className="logo flex-auto">
//         <Image
//           src="/HeroSection/Logo.png"
//           alt="Logo Image"
//           width={204.38}
//           height={50}
//           className="w-[100px] h-auto sm:w-[115px] md:w-[131px] xl:w-[149px] 2xl:w-[178px] 3xl:w-[204.38px] h-auto"
//         />
//       </div>

//       <nav className="navbar space-x-8 md:space-x-4 sm:space-x-2 xs:space-x-1">
//         {/* Menu button visible only on small screens */}
//         <button
//           className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded focus:outline-none md:hidden"
//           onClick={() => setShowNavLinks(!showNavLinks)}
//         >
//           Menu
//         </button>

//         {/* Nav links visible only on large screens */}
//         <div className={`hidden md:flex space-x-8`}>
//           <a href="/" className="text-lg md:text-md sm:text-sm xs:text-xs">
//             Destinations
//           </a>

//           <a href="/about" className="text-lg md:text-md sm:text-sm xs:text-xs">
//             Hotels
//           </a>

//           <a href="/contact" className="text-lg md:text-md sm:text-sm xs:text-xs">
//             Flights
//           </a>
//           <a href="/contact" className="text-lg md:text-md sm:text-sm xs:text-xs">
//             Bookings
//           </a>
//           <a href="/contact" className="text-lg md:text-md sm:text-sm xs:text-xs">
//             Login
//           </a>
//           <button className="border border-black rounded-md p-2 w-20 md:w-15 sm:w-10 xs:w-5">
//             Sign Up
//           </button>
//         </div>

//         {/* Conditional rendering for mobile dropdown menu */}
//         <div className={`xs:flex xs:flex-col xs:space-y-2 xs:w-full ${showNavLinks ? "block" : "hidden"} md:hidden`}>
//           <a href="/" className="text-lg md:text-md sm:text-sm xs:text-xs">
//             Destinations
//           </a>

//           <a href="/about" className="text-lg md:text-md sm:text-sm xs:text-xs">
//             Hotels
//           </a>

//           <a href="/contact" className="text-lg md:text-md sm:text-sm xs:text-xs">
//             Flights
//           </a>
//           <a href="/contact" className="text-lg md:text-md sm:text-sm xs:text-xs">
//             Bookings
//           </a>
//           <a href="/contact" className="text-lg md:text-md sm:text-sm xs:text-xs">
//             Login
//           </a>
//           <button className="border border-black rounded-md p-2 w-20 md:w-15 sm:w-10 xs:w-5">
//             Sign Up
//           </button>
//         </div>

//         <div className="relative inline-block group">
//           <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded focus:outline-none">
//             En
//             <span>
//               <Image src={"/HeroSection/Vector 1@2x.png"} width={20} height={20} />
//             </span>
//           </button>
//           <ul className="absolute top-full left-0 bg-white shadow-md hidden group-hover:block">
//             <li className="py-2 px-4 hover:bg-gray-100">
//               <a href="#" className="text-gray-800 hover:text-gray-900">Urdu</a>
//             </li>
//             <li className="py-2 px-4 hover:bg-gray-100">
//               <a href="#" className="text-gray-800 hover:text-gray-900">Arabic</a>
//             </li>
//             <li className="py-2 px-4 hover:bg-gray-100">
//               <a href="#" className="text-gray-800 hover:text-gray-900">Chinese</a>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// };




import React, { useState } from "react";
import Image from "next/image";

export const Navbar = () => {
  const [showNavLinks, setShowNavLinks] = useState(false);

  return (
    <div className="relative w-[1160.58px] h-[50.5px] bg-[#] ml-auto mr-auto flex flex-row justify-between space-x-10 ">
      <div className="logo flex-auto mt-4 ml-14">
        <Image
          src="/HeroSection/Logo.png"
          alt="Logo Image"
          width={204.38}
          height={50}
          className="w-[100px] h-auto sm:w-[115px] md:w-[131px] xl:w-[149px] 2xl:w-[178px] 3xl:w-[204.38px] h-auto"
        />
      </div>

      <nav className="navbar space-x-8 md:space-x-4 sm:space-x-2 xs:space-x-1">
        {/* Menu button visible only on small screens */}
        <button
          className="bg-white flex justify-between  hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded focus:outline-none md:hidden"
          onClick={() => setShowNavLinks(!showNavLinks)}
        >
          Menu
        </button>

        {/* Nav links visible only on large screens */}
        <div className={`hidden md:flex space-x-14`}>
          <a href="/" className="text-lg md:text-md sm:text-sm mt-4 xs:text-xs">
            Destinations
          </a>

          <a href="/about" className="text-lg md:text-md mt-4 sm:text-sm xs:text-xs">
            Hotels
          </a>

          <a href="/contact" className="text-lg md:text-md mt-4 sm:text-sm xs:text-xs">
            Flights
          </a>
          <a href="/contact" className="text-lg md:text-md mt-4 sm:text-sm xs:text-xs">
            Bookings
          </a>
          <a href="/contact" className="text-lg md:text-md mt-4 sm:text-sm xs:text-xs">
            Login
          </a>
          <a className="text-lg border border-black px-6 py-2 mb-2 mt-2 mx-auto cursor-pointer   rounded-md md:text-md sm:text-sm xs:text-xs">
            Sign Up
          </a>
        
        
       <div className="relative inline-block group">
        <button className=" flex flex-row text-xl mt-2   text-black  py-1 px-4  rounded focus:outline-none">
            En
         
              <Image src={"/HeroSection/Vector 1@2x.png"} width={20} height={10} className="mt-3 ml-2" />
          
          </button>
          <ul className="absolute top-full left-0 bg-white shadow-md hidden group-hover:block">
            <li className="py-2 px-4 hover:bg-gray-100">
              <a href="#" className="text-gray-800 hover:text-gray-900">Urdu</a>
            </li>
            <li className="py-2 px-4 hover:bg-gray-100">
              <a href="#" className="text-gray-800 hover:text-gray-900">Arabic</a>
            </li>
            <li className="py-2 px-4 hover:bg-gray-100">
              <a href="#" className="text-gray-800 hover:text-gray-900">Chinese</a>
            </li>
          </ul>
        </div>

        </div>

        {/* Conditional rendering for mobile dropdown menu */}
        {showNavLinks &&
         (
          <div className="absolute top-full left-0  bg-[#2f3937] text-white flex flex-col space-y-4 p-6 z-50 xs:w-40 sm:w-60 md:w-full">
            <a href="/" className="text-lg md:text-md sm:text-sm xs:text-xs">
              Destinations
            </a>

            <a href="/about" className="text-lg md:text-md sm:text-sm xs:text-xs">
              Hotels
            </a>

            <a href="/contact" className="text-lg md:text-md sm:text-sm xs:text-xs">
              Flights
            </a>
            <a href="/contact" className="text-lg md:text-md sm:text-sm xs:text-xs">
              Bookings
            </a>
            <a href="/contact" className="text-lg md:text-md sm:text-sm xs:text-xs">
              Login
            </a>
            <a className="text-lg border border-white px-6 py-2 rounded-lg  md:text-md sm:text-sm xs:text-xs">
              Sign Up
            </a>
            <div className="relative inline-block group">
          <button className="text-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4  rounded ">
            En
            <span className="">
              <Image src={"/HeroSection/Vector 1@2x.png"} width={20} height={20} />
            </span>
          </button>
          <ul className="absolute top-full left-0 bg-white shadow-md hidden group-hover:block">
            <li className="py-2 px-4 hover:bg-gray-100">
              <a href="#" className="text-gray-800 hover:text-gray-900">Urdu</a>
            </li>
            <li className="py-2 px-4 hover:bg-gray-100">
              <a href="#" className="text-gray-800 hover:text-gray-900">Arabic</a>
            </li>
            <li className="py-2 px-4 hover:bg-gray-100">
              <a href="#" className="text-gray-800 hover:text-gray-900">Chinese</a>
            </li>
          </ul>
        </div>
          </div>
          
        )}

      </nav>
    </div>





  );
};
