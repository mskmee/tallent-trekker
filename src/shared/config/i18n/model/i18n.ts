import { default as i18n } from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import { storage, StorageKey } from '~/shared/lib/storage/storage.js';

import { LanguageOption } from './language-option.enum.js';

void i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: storage.get(StorageKey.LANGUAGE) || LanguageOption.UA,
    debug: import.meta.env.VITE_APP_NODE_ENV === 'development',
    fallbackLng: LanguageOption.EN,
  });

export { default } from 'i18next';
