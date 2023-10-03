import { LogOut } from 'lucide-react';
import Image from 'next/image';

import { Button } from '@/components/Button';

export const Profile = () => {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <Image
        src="https://github.com/GomidesTs.png"
        width={40}
        height={40}
        alt="github profile picture"
        className="rounded-lg"
      ></Image>

      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Tulio Gomides
        </span>
        <span className="truncate text-sm text-zinc-500">
          gomidests@gomidesweb.com.br
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  );
};
