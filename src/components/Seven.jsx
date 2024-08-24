import React from 'react'
import Image from 'next/image'
export const Seven = () => {
  return (
    <div className='SEVEN  relative flex  flex-wrap flex-col bg-[#fff] w-[1356px] h-[490px] relative ml-auto mr-auto mt-20 '>
<div className='w-[1257px] h-[407px] bg-[#] '>
      <Image src={"/Group 5.png"} width={153} height={166} alt='pluses' className='absolute bottom-0 right-0'/>
       <img src={"/Sixth/Rectangle 164.png"}  className="absolute  top-0 left-8  w-[1170px] h-[407px] ml-14 mr-14 w-[90%] h-full object-center z-0" />
       <Image src={"/Sixth/Group 77@2x.png"} width={70} height={70}  alt="pic" className='absolute top-[-30px] right-[50px]  '/>
    
       {/* <Image src={"/Eight/Mask Group.png" } width={400} height={400} className='absolute top-0 right-2 bottom-0 object-center z-0'/> */}
       <Image src={"/Eight/Mask Group.png" } width={400} height={400} className='absolute top-10 left-6 z-10'/>
       <div className="relative z-10 p-10">
        <p className=' text-center text-lg text-black  pt-10'>Subscribe to get information, latest news and other</p>
        <p className='text-center text-lg text-black pt-2'> interesting offers about Cobham</p>
        
        <form class="flex items-center w-[40%] mx-auto pt-20 pb-20 ">   
          <label for="simple-search" class="sr-only">Search</label>
          <div class="relative w-[70%]  md:w-full">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <Image src={"/Fifth/Email.png"}  width={20} height={20}/>
            </div>
            <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Email" required />
          </div>
          <button type="submit" class="p-2.5 px-6 ms-2  text-sm font-medium text-white bg-red-700 rounded-lg border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800  md:w-auto">
            Subscribe
          </button>
        </form>
      </div>
      </div>

</div>
       
  )
}
