import styles from './Button.module.scss';

function Button({ children, filled, type = 'button', disabled }) {
  return (
    <button
      className={`${styles.button} ${
        filled ? styles.button_type_filled : styles.button_type_transparent
      } ${disabled ? styles.button_appear_disabled : null}`}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
