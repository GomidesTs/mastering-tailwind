import { Cog, LifeBuoy } from 'lucide-react';

import { NavItem } from '../NavItem';

export const SettingNavigation = () => {
  return (
    <nav className="space-y-0.5">
      <NavItem title="Support" icon={LifeBuoy} />
      <NavItem title="Settings" icon={Cog} />
    </nav>
  );
};
