import React, { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    initPxlPlayer: (options: PxlPlayerInitOptions & { rootElement: HTMLDivElement }) => {};
  }
}

export type PxlPlayerInitOptions = {
  eventId: string;
  clientId: string;
  accessToken: string;
  refreshToken: string;
  domain: string;
  i18n?: 'en-US' | 'ja-JP';
  useChat?: boolean;
};

type Props = {
  options: PxlPlayerInitOptions;
  className?: string;
};

export const PxlPlayer = ({ options, className }: Props) => {
  const element = useRef<HTMLDivElement>(null);
  const [loaded, isLoaded] = useState(false);

  useEffect(() => {
    loadPlayerScript(() => {
      isLoaded(true);
    });
  });

  useEffect(() => {
    console.log(options);
    if (loaded) {
      if (!element.current) {
        return;
      }
      const data = {
        ...options,
        rootElement: element.current,
      };
      window.initPxlPlayer(data);
    }
  }, [loaded]);

  return (
    <>
      <div style={{ width: '100%', height: '100%' }} className={className} ref={element} />
    </>
  );
};

const loadPlayerScript = (callback: () => void) => {
  const existingScript = document.getElementById('pxl-player-script');
  if (!existingScript) {
    const script = document.createElement('script');
    script.src = 'https://player.pxl.jp/l/en-US/player.js';
    script.async = false;
    script.id = 'pxl-player-script';
    document.body.appendChild(script);
    script.onload = () => {
      if (callback) {
        callback();
      }
    };
  }
  if (existingScript && callback) {
    callback();
  }
};
