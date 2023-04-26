import Starter from '../views/starter/starter.jsx';
// ui components
import Alerts from '../views/ui-components/alert.jsx';
import Badges from '../views/ui-components/badge.jsx';
import Buttons from '../views/ui-components/button.jsx';
import Cards from '../views/ui-components/cards.jsx';
import LayoutComponent from '../views/ui-components/layout.jsx';
import PaginationComponent from '../views/ui-components/pagination.jsx';
import PopoverComponent from '../views/ui-components/popover.jsx';

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
    component: Alerts
  },
  {
    path: '/transactions',
    name: 'Transactions',
    icon: 'fas fa-users',
    component: Badges
  },
  {
    path: '/analytics',
    name: 'Analytics',
    icon: 'fas fa-users',
    component: Badges
  },
  {
    path: '/marketing',
    name: 'Marketing',
    icon: 'fas fa-users',
    component: Badges
  },
  {
    path: '/rates',
    name: 'Exchange rates',
    icon: 'fas fa-users',
    component: Badges
  },
  {
    path: '/rates',
    name: 'Exchange rates',
    icon: 'fas fa-chart-line',
    component: Buttons,
    show_if_ana: true
  },
  {
    path: '/checkout',
    name: 'Checkout',
    icon: 'fas fa-sliders-h',
    component: Cards
  },
  {
    path: '/links',
    name: 'Payment Links',
    icon: 'far fa-star',
    component: LayoutComponent
  },
  {
    path: '/contact',
    name: 'Contact',
    icon: 'mdi mdi-phone',
    component: PaginationComponent,
    show_if_send: true
  },
  {
    path: '/Wire',
    name: 'Wire',
    component: PopoverComponent
  },
  { path: '/', pathTo: '/dashboard', name: 'Dashboard', redirect: true }
];
export default ThemeRoutes;
