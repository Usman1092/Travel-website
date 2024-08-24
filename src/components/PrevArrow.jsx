// import React from 'react'
// import Image from 'next/image';

// export const PrevArrow = (props ) => {
//     const { onClick } = props;
//     return (
//       <div
//         className="absolute top-[5100px] left-[1180px] transform -translate-x-1/2 cursor-pointer z-10  p-2 rounded-full"
//         onClick={onClick}
//       >
//         <Image src="/Fifth/Up.png" alt="Previous" width={20} height={20} />
//       </div>
//     );
// }


import React from 'react';
import Image from 'next/image';

export const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
     className="absolute 2xl:top-[5100px] -translate-y-1/2 left-0 z-10 p-2 rounded-full cursor-pointer md:left-4 lg:left-6 xl:left-8"
      
    onClick={onClick}
    >
      <Image src="/Fifth/Up.png" alt="Previous" width={20} height={20} />
    </div>
  );
};