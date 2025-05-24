// import { useAccount } from '@/src/features/account/infrastructure/useAccount.ts';
// import { TitleComponent } from '@/src/common/shared/components/title/titleComponent.tsx';
import { ResumeComponent } from '@/src/features/account/components/resume/resumeComponent.tsx';
import { ButtonComponent } from '@/src/common/shared/components/button/buttonComponent.tsx';
import styles from '@/src/features/account/components/logged/logged.module.scss';
// import { TurbanComponent } from '@/src/common/shared/components/turban/turbanComponent';

export const LoggedComponent = () => {
  // const { user, setLogout } = useAccount();

  return (
    <div className={styles.logged}>
      {/*<TurbanComponent>*/}
      {/*  <TitleComponent*/}
      {/*    tag="h1"*/}
      {/*    className={styles.title}*/}
      {/*  >*/}
      {/*    Connecté en tant que {user}*/}
      {/*  </TitleComponent>*/}
      {/*  <ButtonComponent*/}
      {/*    className={styles.button}*/}
      {/*    onClick={setLogout}*/}
      {/*  >*/}
      {/*    disconnect*/}
      {/*  </ButtonComponent>*/}
      {/*</TurbanComponent>*/}
      {/*<TitleComponent*/}
      {/*  tag="h1"*/}
      {/*  className={styles.title}*/}
      {/*>*/}
      {/*  Connecté en tant que {user}*/}
      {/*</TitleComponent>*/}
      <ResumeComponent />
      <ButtonComponent
        className={styles.button}
        to={'/pcf/factory'}
      >
        continuer
      </ButtonComponent>
    </div>
  );
};
