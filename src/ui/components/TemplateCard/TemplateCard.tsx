import { FC } from 'react';

import Image, { StaticImageData } from 'next/image';

export interface TemplateCardProps {
  title: string;
  description: string;
  url: string;
  image?: string | StaticImageData;
}

export const TemplateCard: FC<TemplateCardProps> = ({
  title,
  description,
  url,
  image,
}) => {
  return (
    <div className="card bg-base-100 w-full shadow-lg md:w-[350px] lg:w-96">
      <div className="card-body">
        <h2 className="card-title text-lg font-semibold lg:text-xl lg:font-bold">
          {title}
        </h2>
        {image && (
          <div className="w-full flex items-center justify-center">
            <Image src={image} width="280" alt="template-card-image" />
          </div>
        )}
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn w-full bg-orange-600 hover:bg-orange-700 text-white md:w-24">
            <a href={url}>Use</a>
          </button>
        </div>
      </div>
    </div>
  );
};
