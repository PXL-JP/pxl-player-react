/// <reference types="react" />
declare global {
    interface Window {
        initPxlPlayer: (options: PxlPlayerInitOptions & {
            rootElement: HTMLDivElement;
        }) => {};
    }
}
export declare type PxlPlayerInitOptions = {
    eventId: string;
    clientId: string;
    code?: string;
    endpoint?: string;
    secret?: string;
    domain: string;
    i18n?: 'en-US' | 'ja-JP';
};
declare type Props = {
    options: PxlPlayerInitOptions;
    className?: string;
};
export declare const PxlPlayer: ({ options, className }: Props) => JSX.Element;
export {};
