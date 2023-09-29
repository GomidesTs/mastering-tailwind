import { Search } from 'lucide-react';

import { InputControl, InputPrefix, InputRoot } from '../Input';
import { Logo } from './Logo';
import { MainNavigation } from './MainNavigation';
import { Profile } from './Profile';
import { SettingNavigation } from './SettingNavigation';
import { UsedSpaceWidget } from './UsedSpaceWidget';

export const Sidebar = () => {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />
      <InputRoot>
        <InputPrefix>
          <label htmlFor="search">
            <Search className="h-5 w-5 cursor-pointer text-zinc-500" />
          </label>
        </InputPrefix>

        <InputControl placeholder="Search" id="search" />
      </InputRoot>

      <MainNavigation />

      <div className="mt-auto flex flex-col gap-6">
        <SettingNavigation />
      </div>

      <UsedSpaceWidget />

      <div className="h-px bg-zinc-200" />

      <Profile />
    </aside>
  );
};
