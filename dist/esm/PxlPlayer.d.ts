import { PxlPlayerInitOptions } from 'pxl-player';
declare type Props = {
    options: Omit<PxlPlayerInitOptions, 'rootElement'>;
    className?: string;
};
export declare const PxlPlayer: ({ options, className }: Props) => JSX.Element;
export {};
