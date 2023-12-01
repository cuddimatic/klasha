import Starter from '../views/starter.jsx';
import Balance from '../views/balance.jsx';
import Transactions from '../views/transactions.jsx';
import Analytics from '../views/analytics.jsx';
import Checkout from '../views/checkout.jsx';
import Payment from '../views/payment.jsx';
import Contact from '../views/contact.jsx';
import Wire from '../views/wire.jsx';

var ThemeRoutes = [
  { 
    path: '/dashboard', 
    name: 'Dashboard', 
    icon: 'mdi texe-red mdi-gauge', 
    component: Starter 
  },
  {
    path: '/balances',
    name: 'Balances',
    icon: 'mdi mdi-wallet',
    component: Balance
  },
  {
    path: '/transactions',
    name: 'Transactions',
    icon: 'fas fa-users',
    component: Transactions
  },
  {
    path: '/analytics',
    name: 'Analytics',
    icon: 'fas fa-users',
    component: Transactions
  },
  {
    path: '/marketing',
    name: 'Marketing',
    icon: 'fas fa-users',
    component: Transactions
  },
  {
    path: '/rates',
    name: 'Exchange rates',
    icon: 'fas fa-users',
    component: Transactions
  },
  {
    path: '/rates',
    name: 'Exchange rates',
    icon: 'fas fa-chart-line',
    component: Analytics,
    show_if_ana: true
  },
  {
    path: '/checkout',
    name: 'Checkout',
    icon: 'fas fa-sliders-h',
    component: Checkout
  },
  {
    path: '/links',
    name: 'Payment Links',
    icon: 'far fa-star',
    component: Payment
  },
  {
    path: '/contact',
    name: 'Contact',
    icon: 'mdi mdi-phone',
    component: Contact,
    show_if_send: true
  },
  {
    path: '/Wire',
    name: 'Wire',
    component: Wire
  },
  { path: '/', pathTo: '/dashboard', name: 'Dashboard', redirect: true }
];
export default ThemeRoutes;
