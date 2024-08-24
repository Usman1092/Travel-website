import React from "react";
import Image from "next/image";
export const Forth = () => {
  return (
    // <div className="Forth border border-[#333]">
    //   <div>
    //     <p className="flex ml-20 justify-start text-lg">Easy and fast</p>
    //   </div>

    //   <div className="flex flex-row justify-between">
    //     <p className="mt-5 ml-20 text-3xl font-bold">Book Your Next Trip</p>
    //     <div className="relative mr-10 mt-0 ">
    //       <a href="#">
    //         <Image
    //           src={"/HeroSection/Red Girl.png"}
    //           alt="card img"
    //           width={400}
    //           height={400}

    //         />

    //       </a>
    //     </div>
    //   </div>

    //   <div className="Content flex flex-col ml-20 space-y-20">
    //     <div className=" flex flex-row space-x-2">
    //       <Image src={"/Forth/Yellow.png"} width={50} height={50} />
    //       <div className="flex flex-col"> <p className=" text-xl font-bold">Choose Destination</p>
    //      <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p></div>
    //     </div>
    //     <div className=" flex flex-row space-x-2">
    //       {" "}
    //       <Image src={"/Forth/Red.png"} width={50} height={50} />
    //       <div className="flex flex-col"> <p className=" text-xl font-bold">Make Payment</p>
    //       <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p></div>
    //     </div>
    //     <div className=" flex flex-row space-x-2">
    //       {" "}
    //       <Image src={"/Forth/Cyan.png"} width={50} height={50} />{" "}
    //      <div className="flex flex-col">  <p className=" text-xl font-bold">Reach Airport on Selected Date</p>
    //      <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
    //      </div>
    //     </div>
    //   </div>
    // </div>

    <div className="Forth bg-[#ffffff] w-[1114px] h-[492px] border border-black pt-0 ml-auto mr-auto relative mt-20 ">
      <div className="flex flex-row justify-between flex-wrap justify-center items-center  md:flex-wrap justify-center items-center ml-0 mr-0">
        <div className="flex flex-col ml-2 mr-2 md:text-center lg:ml-20">
        
        <div className="w-[126px] h-[27px] absolute top-0 left-[15px]"><p className="flex justify-center lg:justify-start text-lg ">Easy and fast</p></div>
        <div className="w-[511px] h-[130px] bg-[#fff] ml-0 absolute top-10 left-0"><p className="mt-10   text-3xl font-bold">Book Your Next Trip</p></div>
        
    
<div className="w-[395px] h-[289px] absolute bottom-0 left-0 bg-[#] flex justify-between flex-wrap"> 

  <div className="1ST mt-0 w-[395px] h-[64px] bg-[#] flex flex-row  items-center text-start">
  <Image src={"/Forth/Yellow.png"} width={47} height={48} />
  <div className="ml-4">
   <div className="w-[190px] h-[20px]"> <p className="text-xl font-bold">Choose Destination</p></div>
    <div className="w-[327px] h-40px]">
      <p>Lorem ipsum dolor sit amet, consectetur </p>
    <p>adipiscing elit,eiusmod tempor.</p></div>
  </div>
</div>
    
<div className="2ND mt-0  w-[395px] h-[64px] bg-[#] flex flex-row items-center text-start">
  <Image src={"/Forth/Red.png"} width={47} height={48} />
  <div className="ml-4">
   <div className="w-[160px] h-[40px]"><p className="text-lg font-bold">Make Payment</p></div> 
   <div className="w-[327px] h-[40px] "> <p className="">Lorem ipsum dolor sit amet, consectetur </p>
    <p>adipiscing elit,eiusmod tempor.</p>
    </div>
  </div>
</div>

<div className="3RD mt-0 w-[395px] h-[65px] bg-[#] flex flex-row items-center text-start">
  <Image src={"/Forth/Cyan.png"} width={50} height={50} />
  <div className="ml-4">
   <div className="w-[290px] h-[20px] bg-[#]"> <p className="text-lg font-bold">Reach Airport On Selected Date</p></div>
    <div className="w-[327px] h-[40px] bg-[#]">
      <p >Lorem ipsum dolor sit amet, consectetur </p>
    <p>adipiscing elit,eiusmod tempor.</p>
    </div>
  </div>
</div>

</div>


     </div>

{/* 
        <div className="relative mr-10 mt-40 ">
          <a href="#">
            <Image
              src={"/HeroSection/Red Girl.png"}
              alt="card img"
              width={400}
              height={400}
            />
          </a>
        </div> */}

        
<div className="w-[485px] h-[459px] bg-[#] border border-black mt-4 relative">
  <div className="w-[485px] h-[400px] bg-[#] border border-black absolute  bottom-0">

  <div class="mt-0 ml-20    relative w-[370px] h-[400px] bg-white border border-gray-200 flex-wrap rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ml-10 mr-10 lg:ml-20 ">

        {/* Ellipse back to the card */}
        <Image src={"/Forth/Ellipse 8.png"} width={354} height={367} className="ellipse absolute top-[-100px] right-[-80px] z-0" />
    <a href="#" >
    
    {/* Red Girl Image */}
    <img class="rounded-t-lg ml-auto mr-auto p-5 z-10 relative" src="/HeroSection/Red Girl.png" alt="" />

       
    </a>
    <div class="p-5 flex flex-col flex-wrap">
        <a href="#">
            <h5 class="mb-2 text-xl  tracking-tight text-gray-900 dark:text-white">Trip to Greec</h5>
        </a>
        <p class="mb-3 font-normal text-gray-600 dark:text-gray-400">14 - 29 june   |  by Robin jonson </p>
        <div className="flex flex-row flex-wrap space-x-1 md:space-x-4">
            <Image src={"/Forth/LEAF@2x.png"} width={50} height={50} />
            <Image src={"/Forth/map icon@2x.png"} width={50} height={50} />
            <Image src={"/Forth/send@2x.png"} width={50} height={50} />
        </div>

        <div className="flex flex-row flex-wrap justify-between space-x-1 md:space-x-4 mt-4">
           <div className="flex flex-row space-x-3"> 
            <Image src={"/Forth/building 1@2x.png"} width={20} height={20} />
            <p className=" font-normal text-gray-500 dark:text-gray-400"> 24 people  going</p>
            </div>
            <Image src={"/Forth/heart (6) 1@2x.png"} width={20} height={20}  />
        </div>

    
    </div>
  </div> 

</div>

</div>


      </div>
    </div>
  );
};
