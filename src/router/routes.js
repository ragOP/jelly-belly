// Route path constants
export const ROUTES = {
  HOME: '/home',
  CART: '/cart',
  ORDER_CONFIRMATION: '/order-confirmation',
  RECORD: '/record',
  ABANDONED_ORDERS: '/abandoned-orders',
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
  {
    path: ROUTES.RECORD,
    name: 'Record',
    component: 'Record',
  },
  {
    path: ROUTES.ABANDONED_ORDERS,
    name: 'AbandonedOrders',
    component: 'AbandonedOrders',
  },
];

export default ROUTES; 