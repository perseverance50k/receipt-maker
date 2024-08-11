export const routes: Route[] = [
  {
    path: '/templates',
    name: 'Templates',
  },
  {
    path: '/demo',
    name: 'Demo',
  },
  {
    path: '/pricing',
    name: 'Pricing',
  },
];

export type Route = {
  path: string;
  name: string;
};
