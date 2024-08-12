import { TemplateCard } from '@components';
import RECEIPT_TEMPLATE_IMAGE from '@public/receipt-template-image.jpg';

export const TemplatesSection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 py-5 px-4 md:py-8 md:px-5">
      <h2 className="w-full text-xl font-medium text-center md:text-2xl">
        Receipts
      </h2>
      <div className="w-full flex flex-col items-center">
        <div className="grid grid-cols-1 grid-rows-2 gap-4 md:grid-cols-2 lg:gap-6 xl:grid-cols-3">
          <TemplateCard
            title="Receipt #1"
            description="Neat and minimalistic receipt template."
            url="/some-url"
            image={RECEIPT_TEMPLATE_IMAGE}
          />
          <TemplateCard
            title="Receipt #2"
            description="Awesome receipt for e-commerce shops."
            url="/some-url"
            image={RECEIPT_TEMPLATE_IMAGE}
          />
          <TemplateCard
            title="Receipt #3"
            description="Colorful receipt template."
            url="/some-url"
            image={RECEIPT_TEMPLATE_IMAGE}
          />
          <TemplateCard
            title="Receipt #4"
            description="Neat and minimalistic receipt template."
            url="/some-url"
            image={RECEIPT_TEMPLATE_IMAGE}
          />
        </div>
      </div>
    </div>
  );
};
