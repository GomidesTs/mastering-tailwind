import { ComponentProps } from 'react';

export type FileInputRoot = ComponentProps<'div'>;

export const FileInputRoot = (props: FileInputRoot) => {
  return <div {...props} />;
};
