import styles from './Dropdown.module.scss';

function Dropdown({ label, option_one, option_two, option_three, setOption }) {
  return (
    <label className={styles.label}>
      {label}
      <select name='options' id='options' className={styles.select}>
        <option
          className={styles.option}
          value='0'
          onChange={() => {
            setOption(option_one);
          }}
        >
          {option_one}
        </option>
        <option
          className={styles.option}
          value='1'
          onChange={() => {
            setOption(option_two);
          }}
        >
          {option_two}
        </option>
        <option
          className={styles.option}
          value='2'
          onChange={() => {
            setOption(option_three);
          }}
        >
          {option_three}
        </option>
      </select>
    </label>
  );
}

export default Dropdown;
