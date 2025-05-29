import { useAccount } from '@/src/features/account/infrastructure/useAccount.ts';
import { StubbornComponent } from '@/src/features/account/components/profile/stubborn/stubbornComponent.tsx';
import { ResumeComponent } from '@/src/features/account/components/profile/resume/resumeComponent.tsx';
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
          <ResumeComponent />
        </>
      ) : (
        <LoginComponent />
      )}
    </article>
  );
};
