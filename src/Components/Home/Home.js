import HomeSlider from "./HomeSlider";
import LaptopShowCase from "./LaptopShowcase";
import MobileShowCase from "./MobileShowcase";
import TvsShowcase from "./TvsShowcase";

export default function Home() {
    
    
  return (
    <div>
    {/* {JSON.stringify(data)} */}
       <HomeSlider/>
       <MobileShowCase/>
       <LaptopShowCase/>
       <TvsShowcase/>
    </div>
  )
}
