import { FC } from 'react';

export const HeroSection: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-5 px-4 md:py-8 md:px-5 xl:flex-row">
      <h1 className="font-inter font-black text-[24px] text-center w-[340px] xs:text-3xl xs:w-[380px] sm:text-4xl sm:w-[450px] md:text-5xl md:w-[600px] lg:text-6xl lg:w-[750px]">
        Explore Our Latest Templates
      </h1>
    </div>
  );
};
