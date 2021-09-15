# Pxl Player React

Pxl Player React is a wrapper of the Pxl Player for React projects.

## Install

```
npm i --save @pxljp/pxl-player-react
```

## Usage

### Parameters

```typescript
export type PxlPlayerInitOptions = {
  eventId: string; // Event from pxl
  clientId: string; // Your OAuth2 client id
  code: string; // Code for OAuth2 authentication
  endpoint: string; // Endpoint used with `domain` to call for authentification
  domain: string; // Your pxl domain address (https://XXX.asn.jp)
  rootElement: RootElement; // The HTML element to add the pxl player as child
  i18n?: Language; // optional, en_US by default, interface language setup (en_US or ja_JP)
};
```

| Attribute     | Type                       | required? | default value | Description                                        |
| ------------- | -------------------------- | --------- | ------------- | -------------------------------------------------- |
| `eventId`     | `string`                   | required  | none          | Event id coming from admin.pxl                     |
| `clientId`    | `string`                   | required  | none          | OAuth2 client id                                   |
| `code`        | `string`                   | required  | none          | OAuth2 code used for authentication                |
| `endpoint`    | `string`                   | required  | none          | OAuth2 endpoint used with `domain`                 |
| `domain`      | `string`                   | required  | none          | Domain URL of your pxl artist (https://XXX.asn.jp) |
| `rootElement` | `HTMLElement` or `Element` | required  | none          | The HTML element to add the pxl player as child    |
| `i18n`        | `string`                   | optional  | `en_US`       | Interface language (`en_US` or `ja_JP`)            |

```typescript jsx
export const PagePlayer = () => {
  const element = useRef<HTMLDivElement>(null);

  initPxlPlayer({
    rootElement: element.current,
    clientId: 'XXXX',
    code: 'YYYY',
    endpoint: 'uri/to/endpoint',
    eventId: 'EVENT-ID-XXXX-YYYY-ZZZZ',
    domain: 'https://YOUR-ARTIST.asn.jp/',
    i18n: 'en_US',
    useChat: false,
  });
  return (
    <>
      <div ref={element} />
    </>
  );
};
```
