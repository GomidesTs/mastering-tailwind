import {
  BarChart,
  CheckSquare,
  Flag,
  Home,
  SquareStack,
  Users
} from 'lucide-react';

import { NavItem } from '../NavItem';

export const MainNavigation = () => {
  return (
    <nav>
      <NavItem title="Home" icon={Home} />
      <NavItem title="Dashboard" icon={BarChart} />
      <NavItem title="Projects" icon={SquareStack} />
      <NavItem title="Tasks" icon={CheckSquare} />
      <NavItem title="Reporting" icon={Flag} />
      <NavItem title="Users" icon={Users} />
    </nav>
  );
};
