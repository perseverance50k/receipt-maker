import { NextPage } from 'next';

export interface TemplatePageProps {
  params: {
    id: string;
  };
}

export const TemplatePage: NextPage<TemplatePageProps> = ({ params }) => {
  return <div>{`TemplatePage ID ${params.id}`}</div>;
};
