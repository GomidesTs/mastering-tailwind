'use client';

import { User } from 'lucide-react';
import Image from 'next/image';
import { useMemo } from 'react';

import { useFileInput } from '../FileInputRoot/FileInputRoot';

export const FileInputImagePreview = () => {
  const { files } = useFileInput();

  const previewURL = useMemo(() => {
    if (files.length === 0) {
      return null;
    }

    return URL.createObjectURL(files[0]);
  }, [files]);

  if (previewURL === null) {
    return (
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50">
        <User className="h-8 w-8 text-violet-500" />
      </div>
    );
  }

  return (
    <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full">
      <Image
        src={previewURL}
        alt="Preview Image Upload"
        className="object-cover"
        height={100}
        width={100}
      />
    </div>
  );
};
