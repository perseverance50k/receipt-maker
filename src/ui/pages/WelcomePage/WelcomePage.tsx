import { NextPage } from 'next';

import { HeroSection } from './components';

export const WelcomePage: NextPage = () => {
  return (
    <main>
      <div className="flex w-full h-screen flex-col gap-5">
        <HeroSection />
      </div>
    </main>
  );
};
