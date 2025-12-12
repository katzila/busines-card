export type AppConfig = {
  contactLinks: {
    email: string;
    telegram: string;
    whatsapp: string;
  };
};

const defaultConfig: AppConfig = {
  contactLinks: {
    email: 'anton.tutor@example.com',
    telegram: 'https://t.me/anton_makulin',
    whatsapp: 'https://wa.me/79991234567'
  }
};

type PartialAppConfig = Partial<AppConfig> & {
  contactLinks?: Partial<AppConfig['contactLinks']>;
};

const globalConfig: PartialAppConfig | undefined =
  typeof window !== 'undefined' ? window.APP_CONFIG : undefined;

const config: AppConfig = {
  contactLinks: {
    ...defaultConfig.contactLinks,
    ...(globalConfig?.contactLinks ?? {})
  }
};

declare global {
  interface Window {
    APP_CONFIG?: PartialAppConfig;
  }
}

export default config;
