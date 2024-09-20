/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_WARBLER_JS_DOMAIN: string;
  readonly VITE_WARBLER_CLI_DOMAIN: string;
}
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
