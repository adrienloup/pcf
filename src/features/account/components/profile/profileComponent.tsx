import { useAccount } from '@/src/features/account/infrastructure/useAccount.ts';
import { StubbornComponent } from '@/src/features/account/components/stubborn/stubbornComponent.tsx';
import { LoggedComponent } from '@/src/features/account/components/logged/loggedComponent.tsx';
import { LoginComponent } from '@/src/features/account/components/login/loginComponent.tsx';
import styles from '@/src/features/account/components/profile/profile.module.scss';

export const ProfileComponent = () => {
  const { user } = useAccount();

  return (
    <article
      className={styles.profile}
      role="article"
    >
      {user ? (
        <>
          <StubbornComponent />
          <LoggedComponent />
        </>
      ) : (
        // <>
        //   <TurbanComponent>
        //     <TitleComponent
        //       tag="h1"
        //       className={styles.title}
        //     >
        //       {user} profile
        //     </TitleComponent>
        //     <ButtonComponent
        //       className={styles.button}
        //       onClick={setLogout}
        //     >
        //       disconnect
        //     </ButtonComponent>
        //   </TurbanComponent>
        //   <div className={styles.inner}>
        //     <ResumeComponent />
        //   </div>
        // </>
        <LoginComponent />
      )}
    </article>
  );
};
