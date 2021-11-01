import React, { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    initPxlPlayer: (options: PxlPlayerInitOptions & { rootElement: HTMLDivElement }) => {};
    unmountPxlPlayer: () => void;
  }
}

export type PxlPlayerInitOptions = {
  eventId: string;
  clientId: string;
  code: string;
  endpoint: string;
  getHeaderAuthorization?: () => string;
  domain: string;
  i18n?: 'en-US' | 'ja-JP';
};

type Props = {
  options: PxlPlayerInitOptions;
  className?: string;
  branch?: string;
};

export const PxlPlayer = ({ options, className, branch }: Props) => {
  const element = useRef<HTMLDivElement>(null);
  const [loaded, isLoaded] = useState(false);

  useEffect(() => {
    loadPlayerScript(() => {
      isLoaded(true);
    }, branch);
    return () => {
      window.unmountPxlPlayer();
    };
  }, []);

  useEffect(() => {
    if (loaded) {
      if (!element.current) {
        return;
      }
      const data = {
        ...options,
        rootElement: element.current
      };
      if (window.initPxlPlayer) {
        window.initPxlPlayer(data);
      } else {
        setTimeout(() => {
          window.initPxlPlayer(data);
        }, 1000);
      }
    }
  }, [loaded]);

  return (
    <>
      <div style={{ width: '100%', height: '100%' }} className={className} ref={element} />
    </>
  );
};

const loadPlayerScript = (callback: () => void, branch?: string) => {
  const existingScript = document.getElementById('pxl-player-script');
  if (!existingScript) {
    const script = document.createElement('script');
    script.src = branch ? `https://player.pxl.jp/b/${branch}/l/en-US/player.js` : 'https://player.pxl.jp/l/en-US/player.js';
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
