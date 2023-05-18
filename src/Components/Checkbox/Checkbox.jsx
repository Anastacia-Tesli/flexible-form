import styles from './Checkbox.module.scss';

function Checkbox({ label, onClick }) {
  return (
    <label className={styles.label}>
      <input type='checkbox' className={styles.checkbox} onClick={onClick} />
      {label}
    </label>
  );
}

export default Checkbox;
