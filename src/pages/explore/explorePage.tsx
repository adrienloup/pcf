import { useTranslation } from 'react-i18next';

function ExplorePage() {
  const { t } = useTranslation();

  return <div>{t('explore.titlePage')}</div>;
}

export default ExplorePage;
