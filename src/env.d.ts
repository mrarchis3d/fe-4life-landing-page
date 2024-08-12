/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_FORMSPREE_KEY: string;
  readonly SECRET_KEY_CAPTCHA: string;
  readonly XATA_BRANCH: string;
  readonly XATA_API_KEY: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
