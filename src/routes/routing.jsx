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
    path: '/customers',
    name: 'Customers',
    icon: 'fas fa-users',
    component: Badges
  },
  {
    path: '/analytics',
    name: 'Analytics',
    icon: 'fas fa-chart-line',
    component: Buttons,
    show_if_ana: true
  },
  {
    path: '/settings',
    name: 'Settings',
    icon: 'fas fa-sliders-h',
    component: Cards
  },
  {
    path: '/team',
    name: 'Team',
    icon: 'far fa-star',
    component: LayoutComponent
  },
  {
    path: '/contact',
    name: 'Contact',
    icon: 'mdi mdi-phone',
    component: PaginationComponent
  },
  {
    path: '/logout',
    name: 'Logout',
    icon: 'fas fa-sign-out-alt',
    component: PopoverComponent
  },
  { path: '/', pathTo: '/dashboard', name: 'Dashboard', redirect: true }
];
export default ThemeRoutes;
