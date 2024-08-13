import { NextPage } from 'next';

import { TemplatePageProps, TemplatePage as TemplatePageUI } from '@pages';

const TemplatePage: NextPage<TemplatePageProps> = ({ params }) => {
  return <TemplatePageUI params={params} />;
};

export default TemplatePage;
