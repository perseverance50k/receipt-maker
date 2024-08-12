import { NextPage } from 'next';

import { HeroSection, TemplatesSection } from './components';

export const TemplatesPage: NextPage = () => {
  return (
    <div className="w-full flex flex-col">
      <HeroSection />
      <TemplatesSection />
    </div>
  );
};
