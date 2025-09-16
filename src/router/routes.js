// Route path constants
export const ROUTES = {
  HOME: '/home',
  ROOT: '/',
};

export const routeConfig = [
  {
    path: ROUTES.ROOT,
    redirectTo: ROUTES.HOME,
    replace: true,
  },
  {
    path: ROUTES.HOME,
    name: 'Home',
    component: 'Home',
  },
];

export default ROUTES; 