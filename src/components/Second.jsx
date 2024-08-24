import React from "react";
import Image from "next/image";

export const Second = () => {
  return (
    <div className=" bg-[#ffffff] flex-wrap w-[1228px] h-[525px]  relative ml-40 mt-20 "> {/* */}
     
    
     <div className="w-[98px] h-[27px]  ml-auto mr-auto"> <p className=" text-lg md:text-xl">CATEGORY</p></div>
  <Image src={"/Second/Group 4.png"} width={153} height={166} className="absolute  top-0  right-0  " />
      <div className="CONTENT  ">
        <div className="HEADING w-[547px] h-[65px] ml-auto mr-auto">
          <p className=" mt-10   text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-black font-bold">
            We Offer Best Services
          </p>
        </div>

        {/* <div className=" CardBox  flex flex-row  ml-0  justify-center items-center pt-5 md:flex-col flex-wrap justify-center mt-10 items-center  lg:flex-row mt-20 space-x-4 ml-10 mr-10">
         <div className="card1  ml-4 pointer-events-auto hover:text-lg  hover:scale-75 transition duration-300 ease-in-out">  
            <a
              href="#"
              class="block w-190 h-227   p-2 bg-white   border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:w-302 h-347 transition duration-300 "
            >
              
              <div className="transition-transform duration-300 ease-in-out hover:scale-150">
                <Image
                src={"/Second/1st.png"}
                alt="card img"
                width={50}
                height={50}
                className="ml-auto mr-auto"
              />
              </div>
              <div className="  text-center">
              <h5 class="mb-2  mt-5 text-lg  font-bold tracking-tight text-gray-900 dark:text-white">
                Caculated Weather
              </h5>
              <p class="font-normal w-[140px]  ml-auto mr-auto  mt-10 text-gray-700 dark:text-gray-400">
                Built Wicket longer admire do barton vanity itself do in it.
              </p>
              </div>
            </a>
          </div>

          <div className="card2 pointer-events-auto  hover:text-lg  hover:scale-75 transition duration-300 ease-in-out"> 
            <a
              href="#"
              class="block w-190 h-227    p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:w-302 h-347 transition duration-300"
            >
                  <div className="transition-transform duration-300 ease-in-out hover:scale-150">
                 <Image
                src={"/Second/2nd.png"}
                alt="card img"
                width={50}
                height={50}
                className="ml-auto mr-auto"
              />
              </div>
              <div className="  text-center">
              <h5 class="mb-2 mt-5 text-lg  font-bold tracking-tight text-gray-900 dark:text-white">
                Best Flights
              </h5>
              <p class="font-normal w-[140px]  ml-auto mr-auto  mt-10 text-gray-700 dark:text-gray-400">
             Engrossed listening , Park Gate sell they west hard for.
              </p>
              </div>
            </a>
          </div>

          <div className="card3 pointer-events-auto hover:text-lg  hover:scale-75 transition duration-300 ease-in-out">  
            <a
              href="#"
              class="block relative w-183 h-278 p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700  hover:w-302 h-347  transition duration-300 "
            >
                   <div className=" transition-transform duration-300 ease-in-out ">
                 <Image
                src={"/Second/Rectangle 159.png"}
                alt="card img"
                width={30}
                height={30}
                className="absolute top-0 right-0"
              />
              
 <Image
                src={"/Second/image 25.png"}
                alt="card img"
                width={20}
                height={20}
                className="absolute top-5 right-20"
              />

              </div>
             
              <div className="  text-center"> 
              <h5 class="mb-2 mt-[52px] text-lg  font-bold tracking-tight text-gray-900 dark:text-white">
                Local Events
              </h5>
              <p class="font-normal w-[140px]  ml-auto mr-auto mt-10 pb-0  text-gray-700 dark:text-gray-400">
                
                 Engrossed listening , Park Gate sell they west hard for.
              </p>
              </div>
            </a>
          </div>

          <div className="card4 w-181 h-216 hover:w-302 h-347 transition duration-300  pointer-events-auto hover:text-lg  hover:scale-75 transition duration-300 ease-in-out">   
            <a
              href="#"
              class="block  p-4  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700  "
            >
                  <div className="transition-transform duration-300 ease-in-out hover:scale-150">
                 <Image
                src={"/Second/4th.png"}
                alt="card img"
                width={50}
                height={50}
                className="ml-auto mr-auto "
               
              />
              </div>
             <div className="  text-center"> 
             <h5 class="mb-0 mt-5 text-lg   font-bold tracking-tight text-gray-900 dark:text-white">
                Customization
              </h5>
              <p class="font-normal w-[160px]  ml-auto mr-auto mt-10   text-gray-700 dark:text-gray-400">
             We deliver outsourced  aviation services for miltary customers
              </p>
              </div>
            </a>
          </div>
        </div> */}


        <div className="CardBox  flex flex-row justify-around bg-[#fff]  space-x-10 "> {/*ml-0  justify-center items-center pt-5 space-x-2 md:flex-col flex-wrap justify-center space-x-4  mt-10 items-center  lg:flex-row mt-20 space-x-8 ml-10 mr-10*/}

          {/* <div className="Card1 w-[190px] h-[227px] border border-black flex flex-col flex-wrap justify-center items-center  rounded-md hover:w-[302px] h-[347px]  p-0 hover:bg-white  drop-shadow-xl rounded-b-2xl ">
         <img src="/Second/Rectangle 157.png" className="w-[100px] h-[100px]"/>
          <div className="transition-transform duration-300 ease-in-out hover:scale-150">
                <Image
                src={"/Second/1st.png"}
                alt="card img"
                width={50}
                height={50}
                className="ml-auto mr-auto"
              />
              </div>
              <div className="  text-center">
              <h5 class="mb-2  mt-5 text-lg  font-bold tracking-tight text-gray-900 dark:text-white">
                Caculated Weather
              </h5>
              <p class="font-normal w-[140px]  ml-auto mr-auto  mt-10 text-gray-700 dark:text-gray-400">
                Built Wicket longer admire do barton vanity itself do in it.
              </p>
              </div>
          </div> */}
          <div className="Card1 w-[190px] h-[227px] flex flex-col flex-wrap justify-center items-center   rounded-md hover:w-[302px] h-[347px] hover:bg-white  drop-shadow-xl rounded-b-2xl transition-all duration-300 hover:w-[267px] hover:h-[314px] group">
         {/* Rectangle 157 Image (shown only on hover) */}
  <img src="/Second/Rectangle 157.png" className="w-[100px] absolute left-[-40px] bottom-[-40px] z-0 h-[100px] hidden group-hover:block transition-all duration-300 ease-in-out" />
          <div className="transition-transform duration-300 ease-in-out hover:scale-150 z-10">
                <Image
                src={"/Second/1st.png"}
                alt="card img"
                width={50}
                height={50}
                className="ml-auto mr-auto "
              />
              </div>
              <div className="  text-center">
              <h5 class="mb-2  mt-5 text-lg  font-bold tracking-tight text-gray-900 dark:text-white">
                Calculated Weather
              </h5>
            <div className="w-[180px]"> 
               <p class="font-normal   ml-auto mr-auto  mt-10 text-gray-700 dark:text-gray-400">
               Built Wicket longer admire do barton vanity itself do in it.
              </p></div>
              </div>
          </div>


          <div className="Card2 w-[190px] h-[227px] flex flex-col flex-wrap justify-center items-center   rounded-md hover:w-[302px] h-[347px] hover:bg-white  drop-shadow-xl rounded-b-2xl transition-all duration-300 hover:w-[267px] hover:h-[314px] group">
         {/* Rectangle 157 Image (shown only on hover) */}
  <img src="/Second/Rectangle 157.png" className="w-[100px] absolute left-[-40px] bottom-[-40px] z-0 h-[100px] hidden group-hover:block transition-all duration-300 ease-in-out" />
          <div className="transition-transform duration-300 ease-in-out hover:scale-150 z-10">
                <Image
                src={"/Second/2nd.png"}
                alt="card img"
                width={50}
                height={50}
                className="ml-auto mr-auto "
              />
              </div>
              <div className="  text-center">
              <h5 class="mb-2  mt-5 text-lg  font-bold tracking-tight text-gray-900 dark:text-white">
                Best Flights
              </h5>
            <div className="w-[180px]"> 
               <p class="font-normal   ml-auto mr-auto  mt-10 text-gray-700 dark:text-gray-400">
               Engrossed listening. Park gate sell they west hard for the. 
              </p></div>
              </div>
          </div>

          {/* <div className="Card3  w-[190px] h-[227px] flex flex-col flex-wrap justify-center items-center   rounded-md hover:w-[302px] h-[347px] hover:bg-white  drop-shadow-xl rounded-b-2xl">
         <div className="relative transition-transform duration-300 ease-in-out ">
                 <Image
                src={"/Second/Rectangle 159.png"}
                alt="card img"
                width={30}
                height={30}
                className="absolute top-0 right-0 z-10"
              />
              
 <Image
                src={"/Second/image 25.png"}
                alt="card img"
                width={20}
                height={20}
                className="absolute top-5 right-20 z-10"
              />

<div className="  text-center"> 
              <h5 class="mb-2 mt-[52px] text-lg  font-bold tracking-tight text-gray-900 dark:text-white">
                Local Events
              </h5>
              <p class="font-normal w-[140px]  ml-auto mr-auto mt-10 pb-0  text-gray-700 dark:text-gray-400">
                
                 Engrossed listening , Park Gate sell they west hard for.
              </p>
              </div>

              </div>
          </div> */}
          <div className="Card3 w-[190px] h-[227px] flex flex-col flex-wrap justify-center items-center   rounded-md hover:w-[302px] h-[347px] hover:bg-white  drop-shadow-xl rounded-b-2xl transition-all duration-300 hover:w-[267px] hover:h-[314px] group">
         {/* Rectangle 157 Image (shown only on hover) */}
  <img src="/Second/Rectangle 157.png" className="w-[100px] absolute left-[-40px] bottom-[-40px] z-0 h-[100px] hidden group-hover:block transition-all duration-300 ease-in-out" />
          <div className="transition-transform duration-300 ease-in-out hover:scale-150 z-10">
                <Image
                src={"/Second/3rd.png"}
                alt="card img"
                width={50}
                height={50}
                className="ml-auto mr-auto "
              />
              </div>
              <div className="  text-center">
              <h5 class="mb-2  mt-5 text-lg  font-bold tracking-tight text-gray-900 dark:text-white">
                Local Events
              </h5>
            <div className="w-[180px]"> 
               <p class="font-normal   ml-auto mr-auto  mt-10 text-gray-700 dark:text-gray-400">
              Barton vanity itself do in it. Preferd to men it engrossed listening. 
              </p></div>
              </div>
          </div>

          {/* <div className="Card4 w-[190px] h-[227px]  flex flex-col flex-wrap justify-center items-center   rounded-md hover:w-[302px] h-[347px] hover:bg-white  drop-shadow-xl rounded-b-2xl">
          <div className="transition-transform duration-300 ease-in-out hover:scale-150">
                <Image
                src={"/Second/4th.png"}
                alt="card img"
                width={50}
                height={50}
                className="ml-auto mr-auto"
              />
              </div>
              <div className="  text-center">
              <h5 class="mb-2  mt-5 text-lg  font-bold tracking-tight text-gray-900 dark:text-white">
                Customization
              </h5>
              <p class="font-normal w-[140px]  ml-auto mr-auto  mt-10 text-gray-700 dark:text-gray-400">
              We deliver outsourced
               aviation services for
              military customers
              </p>
              </div>
          </div> */}
         
         <div className="Card4 w-[190px] h-[227px] flex flex-col flex-wrap justify-center items-center   rounded-md hover:w-[302px] h-[347px] hover:bg-white  drop-shadow-xl rounded-b-2xl transition-all duration-300 hover:w-[267px] hover:h-[314px] group">
         {/* Rectangle 157 Image (shown only on hover) */}
  <img src="/Second/Rectangle 157.png" className="w-[100px] absolute left-[-40px] bottom-[-40px] z-0 h-[100px] hidden group-hover:block transition-all duration-300 ease-in-out" />
          <div className="transition-transform duration-300 ease-in-out hover:scale-150 z-10">
                <Image
                src={"/Second/4th.png"}
                alt="card img"
                width={50}
                height={50}
                className="ml-auto mr-auto "
              />
              </div>
              <div className="  text-center">
              <h5 class="mb-2  mt-5 text-lg  font-bold tracking-tight text-gray-900 dark:text-white">
                Customization
              </h5>
            <div className="w-[180px]"> 
               <p class="font-normal   ml-auto mr-auto  mt-10 text-gray-700 dark:text-gray-400">
               We deliver outsourced aviation services for military customers 
              </p></div>
              </div>
          </div>

        </div>

      </div>
    </div>
  );
};


// Barton vanity itself do in it. Preferd to men it engrossed listening. 