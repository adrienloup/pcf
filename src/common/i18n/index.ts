import { initReactI18next } from 'react-i18next';
import { translation } from '@/src/common/shared/utils/translation.ts';
import { appTranslation } from '@/src/app/appTranslation.ts';
import { factoryTranslation } from '@/src/pages/factory/factoryTranslation.ts';
import { shopTranslation } from '@/src/pages/shop/shopTranslation.ts';
import i18n from 'i18next';

i18n.use(initReactI18next).init({
  resources: translation(appTranslation, factoryTranslation, shopTranslation),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
