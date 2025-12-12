/**
 * Configuration system for the business card application.
 * 
 * This module provides a runtime configuration system that allows deployments
 * to override contact information without rebuilding the application.
 * 
 * Configuration can be customized by modifying `public/config.js` to set
 * `window.APP_CONFIG` with the desired values. The structure should match:
 * 
 * ```javascript
 * window.APP_CONFIG = {
 *   contactLinks: {
 *     email: 'your.email@example.com',
 *     telegram: 'https://t.me/your_username',
 *     whatsapp: 'https://wa.me/your_number'
 *   }
 * };
 * ```
 * 
 * Any values not provided in `window.APP_CONFIG` will fall back to defaults.
 */

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

/**
 * Returns the application configuration at runtime.
 * 
 * This function merges default configuration with values from `window.APP_CONFIG`
 * if available. It's safe to call during SSR as it handles the case where the
 * window object doesn't exist.
 * 
 * @returns {AppConfig} The merged configuration object
 */
export function getConfig(): AppConfig {
  const globalConfig: PartialAppConfig | undefined =
    typeof window !== 'undefined' ? window.APP_CONFIG : undefined;
  
  return {
    contactLinks: {
      ...defaultConfig.contactLinks,
      ...(globalConfig?.contactLinks ?? {})
    }
  };
}

declare global {
  interface Window {
    APP_CONFIG?: PartialAppConfig;
  }
}
