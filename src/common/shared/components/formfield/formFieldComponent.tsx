import { classNames } from '@/src/common/shared/utils/classNames.ts';
import type { FormField } from '@/src/common/shared/components/formfield/formField.ts';
import styles from '@/src/common/shared/components/formfield/formField.module.scss';

export const FormFieldComponent = ({
  children,
  label,
  helperText,
  errorMessage,
  className,
}: FormField) => {
  return (
    <div className={classNames([styles.formfield, className])}>
      {label && <div className={styles.label}>{label}</div>}
      {children}
      {errorMessage ? (
        <div className={styles.errormessage}>{errorMessage}</div>
      ) : helperText ? (
        <div className={styles.helpertext}>{helperText}</div>
      ) : null}
    </div>
  );
};
