import { FC } from 'react';

export const HeroSection: FC = () => {
  return (
    <div className="py-5 px-4 flex w-full flex-col items-center justify-center gap-5 xs:gap-6 sm:gap-7 md:gap-10 md:py-8 md:px-5 lg:gap-12">
      <div className="flex flex-col items-center justify-center gap-3 md:gap-6 lg:gap-10">
        <h1 className="text-[24px] text-center font-black w-[340px] font-inter xs:text-3xl xs:w-[380px] sm:text-4xl sm:w-[450px] md:text-5xl md:w-[600px] lg:text-6xl lg:w-[750px]">
          Create Custom Receipts. Anywhere. Anytime.
        </h1>
        <h3 className="text-sm w-80 text-center xs:text-base xs:w-96 sm:text-lg sm:w-[400px] md:text-xl md:w-[440px] lg:text-2xl lg:w-[530px]">
          Quickly generate professional, branded receipts. Ideal for small
          businesses and entrepreneurs needing a fast, easy solution.
        </h3>
      </div>
      <button className="btn btn-primary btn-md text-white sm:btn-lg">
        Explore templates
      </button>
    </div>
  );
};
