'use client';

import { useAutoAnimate } from '@formkit/auto-animate/react';

import { FileInput } from '../FileInput';
import { useFileInput } from '../FileInputRoot/FileInputRoot';

export const FileInputList = () => {
  const { files } = useFileInput();
  const [parent] = useAutoAnimate();
  return (
    <div ref={parent} className="mt-4 space-y-3">
      {files.map((file) => {
        return (
          <FileInput
            key={file.name}
            name={file.name}
            size={file.size}
            state="complete"
          />
        );
      })}
    </div>
  );
};
