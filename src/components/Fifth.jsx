// import React, { useState } from "react";
// import Image from "next/image";
// import Slider from "react-slick";
// export const Fifth = () => {
//   const[showPic,setShowPic]=useState("");

//   return (
//     <div className="FIFTH flex flex-row md:flex-wrap justify-center items-center basis-1/2 mt-20 bg-[#ffffff]">
//       <div className="flex basis-1/2 flex-col ml-20  ">
//         <p className=" ">TESTIMONIALS</p>
//         <p className="flex text-4xl font-bold mt-10">What People Say</p>

//       </div>

//       <div className="Profile-Pic">
//        <button    onClick={() => setShowPic(!showPic)}>
//          <Image
//           src="/Image@2x.png"
//           alt="Profile Pic"
//           width={100}
//           height={100}
//           className="rounded-full" /></button>
//           {!showPic &&(<span className="text-sm  ">Cilck to view</span>)}
//           {showPic &&(
//             <>
//         <div class="mt-[-8px] mr-10 max-w-sm h-auto w-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//           <div class="p-5">
//             <p class="mb-3 font-normal text-gray-600 dark:text-gray-400">
//               "On the windowns talking painted pasture yet it express parties it
//               use.Sure last upon he same as now next.Of believed or diverted
//               no."{" "}
//             </p>
//             <div className="flex flex-col ">
//               <p class="mb-3 font-normal text-gray-600 dark:text-gray-400 mt-10">
//                 Mike Taylor
//               </p>
//               <p class="text-gray-500 dark:text-gray-200">Lahore, Pakistan</p>
//             </div>
//           </div>
//         </div>

//        </>
//           )}

//       </div>
//     </div>
//   );
// };

// import React, { useState } from "react";
// import Image from "next/image";

// export const Fifth = () => {
//   const [showPic, setShowPic] = useState(0); // Initialize with 0, not an empty string
//   const cards = [
//     {
//       image: "/Traveller 1.png",
//       testimonial:
//         '"On the windowns talking painted pasture yet it express parties it use.Sure last upon he same as now next.Of believed or diverted no."',
//       name: "Mike Taylor",
//       location: "Lahore, Pakistan",
//     },
//     {
//       image: "/Sixth/Group 77@2x.png",
//       testimonial:
//         '"Use these Tailwind CSS navbar components to help users get around your application with responsive  navigation bars featuring search bars, menus, and quick action buttons."',
//       name: "Mike Taylor",
//       location: "Lahore, Pakistan",
//     },
//   ];

//   const handleNext = () => {
//     setShowPic((prevIndex) => (prevIndex + 1) % cards.length);
//   };

//   const handlePrev = () => {
//     setShowPic((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
//   };

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     // nextArrow: <NextArrow />,
//     // prevArrow: <PreviousArrow />,
//     swipeToSlide: true,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           dots: true,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="FIFTH flex flex-row md:flex-wrap justify-center items-center basis-1/2 pt-20 bg-[#ffffff]">
//       <div className="flex basis-1/2 flex-col ml-20">
//         <p className="">TESTIMONIALS</p>
//         <p className="flex text-4xl font-bold mt-10">What People Say</p>
//       </div>

//       <div className="Profile-Pic flex flex-col">
//         <button className="relative" onClick={handlePrev}>
//           {/* <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M15 19l-7-7 7-7"
//             />
//           </svg> */}
//           <svg class="w-6 h-6 text-gray-800 dark:text-white" className="absolute top-60 left-[450px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
//   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m5 15 7-7 7 7"/>
// </svg>

//         </button>

//         <div
//           className="carousel-container"
//           style={{
//             transform: `translateY(-${showPic * 10}%)`,
//           }}
//         >
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               className="carousel-item"
//               style={{
//                 transform: `translateY(${index * 10}%)`,
//               }}
//             >
//               <button    onClick={() => setShowPic(!showPic)}>
//               <Image
//                 src={card.image}
//                 alt="Profile Pic"
//                 width={100}
//                 height={100}
//                 className="rounded-full"
//               />
//               </button>
//               {!showPic &&(<span className="text-sm  ">Cilck to view</span>)}
//              {showPic &&(
//               <div className="mt-[-8px] mr-10 max-w-sm h-auto w-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//                 <div className="p-5">
//                   <p className="mb-3 font-normal text-gray-600 dark:text-gray-400">
//                     {card.testimonial}
//                   </p>
//                   <div className="flex flex-col">
//                     <p className="mb-3 font-normal text-gray-600 dark:text-gray-400 mt-10">
//                       {card.name}
//                     </p>
//                     <p className="text-gray-500 dark:text-gray-200">
//                       {card.location}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               )}
//             </div>
//           ))}
//         </div>

//         <button className="relative" onClick={handleNext}>
//           {/* <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M9 5l7 7-7 7"
//             />
//           </svg> */}

// <svg class="w-6 h-6 text-gray-800 dark:text-white" className="absolute bottom-60 left-[450px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
//   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/>
// </svg>

//         </button>
//       </div>
//     </div>
//   );
// };

// import React, { useState } from "react";
// import Slider from "react-slick";
// import Image from "next/image";
// import { NextArrow } from "./NextArrow";
// import { PrevArrow } from "./PrevArrow";

// export const Fifth = () => {
//   const [showPic, setShowPic] = useState("");

//   const testimonials = [
//     {
//       image: "/Traveller 1.png",
//       text: "On the windows talking painted pasture yet it express parties it use. Sure last upon he same as now next. Of believed or diverted no.",
//       name: "Mike Taylor",
//       location: "Lahore, Pakistan"
//     },
//     {
//       image: "/Play button.png",
//       text: "Use these Tailwind CSS navbar components to help users get around your application with responsive navigation bars featuring search bars, menus, and quick action buttons.",
//       name: "Arsalan ",
//       location: "Karachi, Pakistan"
//     },
//     {
//       image: "/HeroSection/Structure.png",
//       text: "Slick slider is a wonderful tool for building carousels and scrollable sections.",
//       name: "Naveed Punjab",
//       location: "Islamabad, Pakistan"
//     },
//   ];

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     vertical: true,  // Enable vertical scrolling
//     verticalSwiping: true, // Enable vertical swiping
//     autoplay: true,
//     autoplaySpeed: 2000,
//    nextArrow: <NextArrow />, // Use custom down arrow
//     prevArrow: <PrevArrow />, // Use custom up arrow
//   };

//   return (
//       <div className="FIFTH flex flex-row  md:flex-wrap justify-center items-center basis-1/2 pt-20 bg-[#f9a602] h-[100vh]">
//       <div className="flex basis-1/2 flex-col ml-20  ">
//         <p className=" ">TESTIMONIALS</p>
//         <p className="flex text-4xl font-bold mt-10">What People Say</p>
//       </div>
//       <div className="Profile-Pic h-[70vh] overflow-y-hidden bg-[#333]">
//       <Slider {...settings} className="">
//         {testimonials.map((testimonial, index) => (
//           <div key={index} className="p-4 flex flex-wrap justify-center space-y-2  items-center overflow-y-hidden">
//             <div className="lg:max-w-sm h-auto w-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5">
//               <div className="flex justify-center mb-5">
//                 <Image
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   width={100}
//                   height={100}
//                   className="rounded-full"
//                 />
//               </div>
//               <p className="mb-3 font-normal text-gray-600 dark:text-gray-400">
//                 "{testimonial.text}"
//               </p>
//               <div className="flex flex-col items-center mt-4">
//                 <p className="font-semibold text-gray-800 dark:text-gray-200">{testimonial.name}</p>
//                 <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.location}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//       </div>
//     </div>
//   );
// };

//  #####  2nd final code ######
// import React, { useState } from "react";
// import Slider from "react-slick";
// import Image from "next/image";

// export const Fifth = () => {
//   const [showPic, setShowPic] = useState("");

//   const testimonials = [
//     {
//       image: "/Traveller 1.png",
//       text: "On the windows talking painted pasture yet it express parties it use. Sure last upon he same as now next. Of believed or diverted no.",
//       name: "Mike Taylor",
//       location: "Lahore, Pakistan"
//     },
//     {
//       image: "/Play button.png",
//       text: "Use these Tailwind CSS navbar components to help users get around your application with responsive navigation bars featuring search bars, menus, and quick action buttons.",
//       name: "Arsalan",
//       location: "Karachi, Pakistan"
//     },
//     {
//       image: "/HeroSection/Structure.png",
//       text: "Slick slider is a wonderful tool for building carousels and scrollable sections.",
//       name: "Naveed Punjab",
//       location: "Islamabad, Pakistan"
//     },
//   ];

//   // Declare the PrevArrow and NextArrow inside the component
//   const PrevArrow = (props) => {
//     const { onClick } = props;
//     return (
//       <div
//         className="absolute top-[45px] -translate-y-1/2 left-20 md:left-80 z-10 p-2 rounded-full cursor-pointer"
//         onClick={onClick}
//       >
//         <Image src="/Fifth/up1.png" alt="Previous" width={40} height={40} />
//       </div>
//     );
//   };

//   const NextArrow = (props) => {
//     const { onClick } = props;
//     return (
//       <div
//         className="absolute bottom-[2px] -translate-y-1/2  left-20 md:left-80 z-10 p-2 rounded-full cursor-pointer"
//         onClick={onClick}
//       >
//         <Image src="/Fifth/Up.png" alt="Next" width={40} height={40} />
//       </div>
//     );
//   };

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     vertical: true, // Enable vertical scrolling
//     verticalSwiping: true, // Enable vertical swiping
//     autoplay: true,
//     autoplaySpeed: 2000,
//     nextArrow: <NextArrow />, // Use custom down arrow
//     prevArrow: <PrevArrow />, // Use custom up arrow
//   };

//   return (
//     <div className="FIFTH flex flex-row flex-wrap justify-center xs:pb-40 md:flex-wrap justify-center items-center lg:flex-wrap basis-1/2 pt-20 bg-[#ffffff] h-[100vh]">
//       <div className="flex basis-1/2 flex-col ml-20">
//         <p>TESTIMONIALS</p>
//         <p className="flex  text-xl md:text-3xl lg:text-4xl font-bold mt-10">What People Say</p>
//       </div>
//       <div className="Profile-Pic h-[70vh] overflow-y-hidden bg-[#fffffff] relative mt-[40px] sm:mt-20 md:mt-10">
//         <Slider {...settings}>
//           {testimonials.map((testimonial, index) => (
//             <div key={index} className="p-4 flex flex-wrap justify-center space-y-2 items-center overflow-y-hidden">
//               <div className=" max-w-sm lg:max-w-lg h-auto w-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5">
//                 <div className="flex justify-center mb-5">
//                   <Image
//                     src={testimonial.image}
//                     alt={testimonial.name}
//                     width={100}
//                     height={100}
//                     className="rounded-full"
//                   />
//                 </div>
//                 <p className="mb-3 font-normal text-gray-600 dark:text-gray-400">
//                   "{testimonial.text}"
//                 </p>
//                 <div className="flex flex-col items-center mt-4">
//                   <p className="font-semibold text-gray-800 dark:text-gray-200">{testimonial.name}</p>
//                   <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.location}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// import React, { useState } from "react";
// import Image from "next/image";
// import Slider from "react-slick";

// export const Fifth = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const testimonials = [
//     {
//       image: "/Image@2x.png",
//       text: `"On the windowns talking painted pasture yet it express parties it use.Sure last upon he same as now next.Of believed or diverted no."`,
//       name: "Mike Taylor",
//       location: "Lahore, Pakistan",
//     },
//     {
//       image: "/Image@2x.png",
//       text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex."`,
//       name: "John Doe",
//       location: "New York, USA",
//     },
//     {
//       image: "/Image@2x.png",
//       text: `"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo odio, dapibus ac facilisis in, egestas eget quam."`,
//       name: "Jane Smith",
//       location: "London, UK",
//     },
//   ];

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     nextArrow: <div className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer">›</div>,
//     prevArrow: <div className="absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer">‹</div>,
//     afterChange: (index) => setCurrentIndex(index),
//   };

//   return (
//     <div className="FIFTH flex flex-row md:flex-wrap justify-center items-center basis-1/2 mt-20 bg-[#ffffff]">
//       <div className="flex basis-1/2 flex-col ml-20  ">
//         <p className="">TESTIMONIALS</p>
//         <p className="flex text-4xl font-bold mt-10">What People Say</p>
//       </div>

//       <Slider {...settings}>
//         {testimonials.map((testimonial, index) => (
//           <div key={index} className="Profile-Pic">
//             <Image
//               src={testimonial.image}
//               alt="Profile Pic"
//               width={100}
//               height={100}
//               className="rounded-full"
//             />
//             <div
//               className="mt-[-8px] mr-10 max-w-sm h-auto w-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
//             >
//               <div className="p-5">
//                 <p className="mb-3 font-normal text-gray-600 dark:text-gray-400">
//                   {testimonial.text}
//                 </p>
//                 <div className="flex flex-col">
//                   <p className="mb-3 font-normal text-gray-600 dark:text-gray-400 mt-10">
//                     {testimonial.name}
//                   </p>
//                   <p className="text-gray-500 dark:text-gray-200">
//                     {testimonial.location}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

export const Fifth = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      image: "/Image@2x.png",
      text: `"On the windows talking painted pasture yet it express parties it use. Sure last upon he same as now next. Of believed or diverted no."`,
      name: "Mike Taylor",
      location: "Lahore, Pakistan",
    },
    {
      image: "/Traveller 1.png",
      text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex."`,
      name: "John Doe",
      location: "New York, USA",
    },
    {
      image: "/Play Button.png",
      text: `"Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras justo odio, dapibus ac facilisis in, egestas eget quam."`,
      name: "Jane Smith",
      location: "London, UK",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: (
      <div className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer">
        ›
      </div>
    ),
    prevArrow: (
      <div className="absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer">
        ‹
      </div>
    ),
    afterChange: (index) => setCurrentIndex(index),
  };

  return (
    <div className="FIFTH flex flex-row w-[1165px] h-[356px] ml-auto mr-auto border border-black ml-20  bg-[#ffffff]">
      <div className="flex flex-col basis-1/2 text-left mb-10 relative">
        <div className=" w-[128px] h-[27px] absolute top-2">
          <p className="text-sm uppercase">TESTIMONIALS</p>
        </div>
        <div className="w-[409px] h-[130px] absolute left-0 top-10 ">
          <p className="text-4xl font-bold mt-2">What People Say</p>
        </div>
      </div>

      <div className="w-[669px] h-[356px] relative flex basis-1/2 border border-black md:w-1/2">
        {/* <div className="w-[541px] h-[279px] relative border border-black">
          <div className="Profile-img  w-[68px] h-[68px] rounded-full z-10">
            <img
              src="/Image@2x.png"
              alt="Profile Pic"
             
            />
          </div>

          <div class=" mr-0 absolute bottom-0 right-0 z-0  w-[504px] h-[245px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div class="p-5">
              <p class="mb-3 font-normal text-gray-600 dark:text-gray-400">
                "On the windowns talking painted pasture yet it express parties
                it use.Sure last upon he same as now next.Of believed or
                diverted no."{" "}
              </p>
              <div className="flex flex-col ">
                <p class="mb-3 font-normal text-gray-600 dark:text-gray-400 mt-10">
                  Mike Taylor
                </p>
                <p class="text-gray-500 dark:text-gray-200">Lahore, Pakistan</p>
              </div>
            </div>
          </div>
        </div> */}


<div className="w-[541px] h-[279px] relative ">
  <div className="Profile-img  w-[68px] h-[68px] rounded-full absolute top-0 left-0 z-10">
    <img
      src="/Image@2x.png"
      alt="Profile Pic"
    />
  </div>

  <div className="mr-0 absolute bottom-0 right-0 z-0 h-auto w-[504px] h-[245px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="p-5">
      <p className="mb-3 font-normal text-gray-600 dark:text-gray-400">
        "On the windowns talking painted pasture yet it express parties
        it use.Sure last upon he same as now next.Of believed or
        diverted no."{" "}
      </p>
      <div className="flex flex-col ">
        <p className="mb-3 font-normal text-gray-600 dark:text-gray-400 mt-10">
          Mike Taylor
        </p>
        <p className="text-gray-500 dark:text-gray-200">Lahore, Pakistan</p>
      </div>
    </div>
  </div>
</div>
<div className="w-[14px] h-[71px]  absolute top-40 right-0">

<img src="/Fifth/Vector 2.png" className="w-[14px] h-[7px]" /></div>
<div className="flex absolute bottom-[123px] right-0"><img src="/Fifth/Vector 3.png" className="w-[14px] h-[7px]" />

</div>
        {/* <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="Profile-Pic flex flex-col items-center">
              <Image
                src={testimonial.image}
                alt="Profile Pic"
                width={100}
                height={100}
                className="rounded-full"
              />
              <div className="mt-4 max-w-sm w-full bg-white border border-gray-200 rounded-lg shadow-lg p-5 dark:bg-gray-800 dark:border-gray-700">
                <p className="mb-3 font-normal text-gray-600 dark:text-gray-400">
                  {testimonial.text}
                </p>
                <div className="flex flex-col text-center">
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider> */}
      </div>
    </div>
  );
};
