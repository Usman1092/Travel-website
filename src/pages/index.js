import Image from "next/image";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { Second } from "@/components/Second";
import { Third } from "@/components/Third";
import { Forth } from "@/components/Forth";
import { Fifth } from "@/components/Fifth";
import { Sixth } from "@/components/Sixth";
import { Seven } from "@/components/Seven";
import { Eight } from "@/components/Eight";
import { SliderComponent } from "@/components/SliderComponent";
import { HeroSec } from "@/components/HeroSec";

const inter = Inter({ subsets: ["latin"] });

// #####  in this code Main component will be uncommented later   ####

export default function Home() {
  return (
    // <main
    //   className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    // >
    //  <p className="text-center font-bold text-xl">Travel site</p>
  <> 
  {/* <Navbar/> */}
  <div className="w-[1440px] relative h-[4774px] bg-[#fff] overflow-hidden">
  <Image src={"/HeroSection/Decore.png"} width={766.31} height={872.58} className="absolute   top-[-140px] right-[-240px]  z-0 "/>
        <Image
          src="/HeroSection/Ellipse 8.png"
          alt="Hero Image"
          className="absolute left-[-330px] top-[-100px]"
          width={478.94}
          height={496.86}
        />
  <Navbar />
  {/* <HeroSection  /> */}
  <HeroSec />
  <Second />
  <Third />
  <Forth />
  <Fifth  />
  <Sixth />
  <Seven />
  <Eight />
  </div>
  {/* <SliderComponent /> */}
  </>
    // {/* </main> */}
  );
}
