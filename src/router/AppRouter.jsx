import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import { ROUTES } from './routes';
import Cart from '../pages/Cart';
import OrderConfirmation from '../pages/OrderConfirmation';
import Record from '../pages/Record';
import AbandonedOrders from '../pages/AbandonedOrders';

// Create the router configuration
export const router = createBrowserRouter([
  {
    path: ROUTES.ROOT,
    element: <Navigate to={ROUTES.HOME} replace />,
  },
  {
    path: ROUTES.HOME,
    element: <Home />,
  },
  {
    path: ROUTES.CART,
    element: <Cart />,
  },
  {
    path: ROUTES.ORDER_CONFIRMATION,
    element: <OrderConfirmation />,
  },
  {
    path: ROUTES.RECORD,
    element: <Record />,
  },
  {
    path: ROUTES.ABANDONED_ORDERS,
    element: <AbandonedOrders />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router; 