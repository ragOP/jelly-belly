// Route path constants
export const ROUTES = {
  HOME: '/home',
  CART: '/cart',
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
  {
    path: ROUTES.CART,
    name: 'Cart',
    component: 'Cart',
  },
];

export default ROUTES; 