import { initReactI18next } from 'react-i18next';
import { translation } from '@/src/common/shared/utils/translation.ts';
import { appTranslation } from '@/src/app/appTranslation.ts';
import { factoryTranslation } from '@/src/pages/factory/factoryTranslation.ts';
import { profileTranslation } from '@/src/pages/profile/profileTranslation.ts';
import { shopTranslation } from '@/src/pages/shop/shopTranslation.ts';
import { welcomeTranslation } from '@/src/pages/welcome/welcomeTranslation.ts';
import i18n from 'i18next';

i18n.use(initReactI18next).init({
  resources: translation(
    appTranslation,
    factoryTranslation,
    profileTranslation,
    shopTranslation,
    welcomeTranslation
  ),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
