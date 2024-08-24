// import React from "react";
// import Slider from "react-slick";
// export const SliderComponent = () => {
//   const Heading = [
//     {
//       head: "What People Say",
//     },
//     {
//       head: "About Others",
//     },
//     {
//       head: "About Our Company",
//     },
//   ];

//   const settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     //nextArrow: <NextArrow />, //Next Arrow Component will show an arrow on Screen
//     //prevArrow: <PreviousArrow />,  //Previous Arrow Component will show an arrow on Screen
//     swipeToSlide: true,
  
//   };
//   return (
//     <div className="SLIDER-COMPONENT">
//       <div className="flex flex-col justify-center items-center">
//         <p className="">TESTIMONIALS</p>
//         {/* <p className="flex text-4xl font-bold mt-10">What People Say</p> */}
//         <Slider {...settings}>
//         {Heading.map((heading, index) => (
//           <div key={index} className="carousel-item">
//             <p>{heading.head}</p>
//           </div>
//         ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };






import React from "react";
import Slider from "react-slick";


export const SliderComponent = () => {
  const Heading = [
    { head: "What People Say" },
    { head: "About Others" },
    { head: "About Our Company" },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    swipeToSlide: true,
   
  };

  return (
    <div className="SLIDER-COMPONENT">
      <div className="flex flex-col justify-center items-center">
        <p className="text-gray-500 text-xl">TESTIMONIALS</p>
        <Slider {...settings} className="w-full max-w-md">
          {Heading.map((heading, index) => (
            <div key={index} className="carousel-item flex justify-center items-center h-40">
              <p className="text-2xl font-bold text-center">{heading.head}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
