import React, { useEffect, useRef } from 'react';
import { initPxlPlayer, PxlPlayerInitOptions } from 'pxl-player';

type Props = {
  options: Omit<PxlPlayerInitOptions, 'rootElement'>;
  className?: string;
};

export const PxlPlayer = ({ options, className }: Props) => {
  const element = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!element.current) {
      return;
    }
    const data: PxlPlayerInitOptions = {
      ...options,
      rootElement: element.current,
    };
    initPxlPlayer(data);
  });

  return (
    <>
      <div style={{ width: '100%', height: '100%' }} className={className} ref={element} />
    </>
  );
};
