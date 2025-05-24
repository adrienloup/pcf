import { useId, useState } from 'react';
import { classNames } from '@/src/common/shared/utils/classNames.ts';
import { FormFieldComponent } from '@/src/common/shared/components/formfield/formFieldComponent.tsx';
import { IconComponent } from '@/src/common/shared/components/icon/iconComponent.tsx';
import type { TextField } from '@/src/common/shared/components/textfield/textField.ts';
import styles from '@/src/common/shared/components/textfield/textfield.module.scss';

export const TextFieldComponent = ({
  className,
  id,
  label,
  placeholder = 'placeholder',
  helperText,
  errorMessage,
  value,
  prefix,
  suffix,
  status,
  onChange,
}: TextField) => {
  const uId = useId();
  const [focus, setFocus] = useState(false);

  return (
    <FormFieldComponent
      label={label}
      helperText={helperText}
      errorMessage={errorMessage}
    >
      <div
        className={classNames([
          styles.textfield,
          focus ? styles.focus : '',
          status ? styles[status] : errorMessage ? styles.error : '',
          className,
        ])}
      >
        {prefix && (
          <IconComponent
            icon={prefix}
            className={styles.icon}
          />
        )}
        <input
          type="text"
          id={id ? id : uId}
          className={styles.input}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        {suffix && (
          <IconComponent
            icon={suffix}
            className={styles.icon}
          />
        )}
      </div>
    </FormFieldComponent>
  );
};
