import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Providers } from '@/src/providers.tsx';
import { version } from '@/package.json';
import App from '@/src/app/app.tsx';
import '@/src/common/i18n';

createRoot(document.getElementById('_pcf_3mma_0')!).render(
  <StrictMode>
    <Providers>
      <App />
    </Providers>
  </StrictMode>
);

console.log(`%c[pcf] ${version} @jff`, 'font-weight: bold; color: #5b00ff;');
