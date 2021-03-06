/// <reference types="react" />
declare global {
    interface Window {
        initPxlPlayer: (options: PxlPlayerInitOptions & {
            rootElement: HTMLDivElement;
        }) => {};
        unmountPxlPlayer: () => void;
    }
}
export declare type PxlPlayerInitOptions = {
    eventId: string;
    clientId: string;
    code: string;
    endpoint: string;
    getHeaderAuthorization?: () => string;
    domain: string;
    i18n?: 'en-US' | 'ja-JP';
};
declare type Props = {
    options: PxlPlayerInitOptions;
    className?: string;
    branch?: string;
};
export declare const PxlPlayer: ({ options, className, branch }: Props) => JSX.Element;
export {};
