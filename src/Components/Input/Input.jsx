import styles from './Input.module.scss';

function Input({ label, handleChange, placeholder, message, error }) {
  return (
    <label className={styles.label}>
      {label}
      <input
        type='text'
        onChange={handleChange}
        placeholder={placeholder}
        className={`${styles.input} ${error ? styles.input__error : null}`}
      />
      <span className={`${styles.message}  ${error ? styles.message__error : null}`}>
        {message}
      </span>
    </label>
  );
}

export default Input;
