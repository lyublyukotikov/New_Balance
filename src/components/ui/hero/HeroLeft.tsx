import { FC } from "react";

const HeroLeft: FC = () => {
  return (
   <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-40">
    <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
      Стиль это все
    </h1>
    <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
    «Стиль — это всё. Это свежий взгляд на скучное и опасное.
Стильные, но скучные — лучше, чем опасные, но нестильные.
Опасные и стильные — это искусство»
    </p>
   </div>
  );
};

export default HeroLeft;




