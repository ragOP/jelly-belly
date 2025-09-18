// Route path constants
export const ROUTES = {
  HOME: '/home',
  CART: '/cart',
  ORDER_CONFIRMATION: '/order-confirmation',
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
  {
    path: ROUTES.ORDER_CONFIRMATION,
    name: 'OrderConfirmation',
    component: 'OrderConfirmation',
  },
];

export default ROUTES; 