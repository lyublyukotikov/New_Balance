import { FC } from "react";

const HeroRight: FC = () => {
  return (
   <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
    <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
      <img src="/hero/hero-1.png" alt="photo-1" className="h-full w-full object-cover object-center priority" width={500} height={500}/>
    </div>
    <div className="relative overflow-hidden rounded-lg bg-gray-100 shadow-lg">
      <img src="/hero/hero-2.png" alt="photo-1" className="h-full w-full object-cover object-center priority" width={500} height={500}/>
    </div>
   </div>
  );
};

export default HeroRight;




