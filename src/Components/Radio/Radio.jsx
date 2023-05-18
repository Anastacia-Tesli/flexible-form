import styles from './Radio.module.scss';

function Radio({ label, name, value, checked, setRadioSelect }) {
  function handleChange() {
    setRadioSelect(label);
  }
  return (
    <label className={styles.label}>
      <input
        type='radio'
        className={styles.radio}
        onChange={handleChange}
        checked={checked}
        name={name}
        value={value}
      />
      {label}
    </label>
  );
}

export default Radio;
