import { useEffect } from 'react';
import { HeaderComponent } from '@/src/app/layout/header/headerComponent.tsx';
import { MainComponent } from '@/src/app/layout/main/mainComponent.tsx';
import { FooterComponent } from '@/src/app/layout/footer/footerComponent.tsx';
import type { Layout } from '@/src/app/layout/layout/layout.ts';

function LayoutComponent({ children }: Layout) {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <HeaderComponent />
      <MainComponent>{children}</MainComponent>
      <FooterComponent />
    </>
  );
}

export default LayoutComponent;
