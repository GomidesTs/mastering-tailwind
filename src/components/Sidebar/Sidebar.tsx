import { Search } from 'lucide-react';

import { Logo } from './Logo';
import { MainNavigation } from './MainNavigation';
import { SettingNavigation } from './SettingNavigation';
import { UsedSpaceWidget } from './UsedSpaceWidget';

export const Sidebar = () => {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />
      <div className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm">
        <label htmlFor="search">
          <Search className="h-5 w-5 text-zinc-500" />
        </label>

        <input
          className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
          placeholder="Search"
          id="search"
        />
      </div>

      <MainNavigation />

      <div className="mt-auto flex flex-col gap-6">
        <SettingNavigation />
      </div>

      <UsedSpaceWidget />
    </aside>
  );
};
