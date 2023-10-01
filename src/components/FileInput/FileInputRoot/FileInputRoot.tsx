'use client';

import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState
} from 'react';

export type FileInputRoot = ComponentProps<'div'>;

type FileInputContextType = {
  id: string;
  files: File[];
  onFilesSelected: (files: File[]) => void;
};

const FileInputContext = createContext({} as FileInputContextType);

export const FileInputRoot = (props: FileInputRoot) => {
  const id = useId();
  const [files, setFiles] = useState<File[]>([]);

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected: setFiles }}>
      <div {...props} />
    </FileInputContext.Provider>
  );
};

export const useFileInput = () => useContext(FileInputContext);
