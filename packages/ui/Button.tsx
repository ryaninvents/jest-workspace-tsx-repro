import React, { ComponentProps } from 'react';

export default function Button({ style, ...props }: ComponentProps<'button'>) {
  return (
    <button
      style={{ color: 'white', backgroundColor: 'steelblue', ...style }}
      {...props}
    />
  );
}
