import {
  useCallback,
  useEffect,
  useTranslation,
} from '~/shared/lib/hooks/hooks.js';
import { storage, StorageKey } from '~/shared/lib/storage/storage.js';

const useLanguage = (): void => {
  const { i18n } = useTranslation();

  const saveLanguage = useCallback(() => {
    storage.set(StorageKey.LANGUAGE, i18n.language);
  }, [i18n.language]);

  useEffect(() => {
    window.addEventListener('beforeunload', saveLanguage);

    return () => {
      window.removeEventListener('beforeunload', saveLanguage);
    };
  }, [saveLanguage]);
};

export { useLanguage };
