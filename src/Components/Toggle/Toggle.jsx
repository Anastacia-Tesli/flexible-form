import styles from './Toggle.module.scss';

function Toggle({ label, switched, onClick }) {
  return (
    <label className={styles.label}>
      <input type='checkbox' className={styles.toggle} />
      <div
        className={`${styles.switch} ${switched ? styles.switch_type_active : null}`}
        onClick={onClick}
      />
      <div
        className={`${styles.switch__element} ${
          switched ? styles.switch__element_type_active : null
        }`}
        onClick={onClick}
      />
      {label}
    </label>
  );
}

export default Toggle;
