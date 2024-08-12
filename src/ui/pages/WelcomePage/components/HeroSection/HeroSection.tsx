import { FC } from 'react';

import Image from 'next/image';

import WOMAN_RECEIPT_IMAGE from '@public/woman-receipt.svg';

export const HeroSection: FC = () => {
  return (
    <div className="flex flex-col-reverse items-center py-5 px-4 md:py-8 md:px-5 xl:flex-row">
      <div className="flex w-full h-5/6 flex-col items-center justify-center gap-5 xs:gap-6 sm:gap-7 md:gap-10 lg:gap-12 xl:h-[80vh] xl:w-2/3">
        <div className="flex flex-col items-center justify-center gap-3 md:gap-6 lg:gap-10">
          <h1 className="text-[24px] font-inter text-center font-black w-[340px] xs:text-3xl xs:w-[380px] sm:text-4xl sm:w-[450px] md:text-5xl md:w-[600px] lg:text-6xl lg:w-[750px]">
            Create Custom Receipts. Anywhere. Anytime.
          </h1>
          <h3 className="text-base w-[320px] text-center xs:w-96 sm:text-lg sm:w-[400px] md:text-xl md:w-[440px] lg:text-2xl lg:w-[530px]">
            Quickly generate professional, branded receipts. Ideal for small
            businesses and entrepreneurs needing a fast, easy solution.
          </h3>
        </div>
        <button className="btn bg-orange-600 hover:bg-orange-700 btn-md text-white sm:btn-lg">
          <a href="/templates">Explore templates</a>
        </button>
      </div>
      <div className="flex items-center justify-center w-1/2 xl:w-1/3">
        <div className="w-5/6">
          <Image src={WOMAN_RECEIPT_IMAGE} alt="" />
        </div>
      </div>
    </div>
  );
};
