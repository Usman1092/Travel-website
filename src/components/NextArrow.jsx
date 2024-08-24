// import React from 'react'
// import Image from 'next/image'

// export const NextArrow = (props) => {
//     const { onClick } = props;
//     return (
//       <div
//         className="absolute top-[5000px] left-[1180px] transform -translate-x-1/2 cursor-pointer z-10  p-2 rounded-full"
//         onClick={onClick}
//       >
//         <Image src="/Fifth/up1.png" alt="Next" width={20} height={20} />
//       </div>
//     );
// }





import React from 'react';
import Image from 'next/image';

export const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute  lg:top-[3200px]  xl:top-[5200px] left-[1180px]  2xl:top-[4200px] left-[1180px] -translate-y-1/2 right-0 z-10 p-2 rounded-full cursor-pointer md:right-4 lg:right-6 xl:right-8"
     
    onClick={onClick}
    >
      <Image src="/Fifth/up1.png" alt="Next" width={20} height={20} />
    </div>
  );
};