import { useEffect, useState } from 'react';
import {
  MAXIMUM_SYMBOLS,
  MINIMAL_SYMBOLS,
  SYMBOLS_DEFAULT,
  SYMBOLS_ERROR,
} from '../../utils/constants';
import Checkbox from '../Checkbox/Checkbox';
import Input from '../Input/Input';
import Toggle from '../Toggle/Toggle';
import Radio from '../Radio/Radio';
import styles from './Form.module.scss';
import Button from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';

function Form() {
  const [switched, setSwitched] = useState(false);
  const [checked, setChecked] = useState(false);
  const [option, setOption] = useState('');
  const [radioSelect, setRadioSelect] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [input, setInput] = useState('');
  const [passwordMessage, setPasswordMessage] = useState(SYMBOLS_DEFAULT);

  function handlePasswordChange(e) {
    setPassword(e.target.value);
    if (e.target.value.length < MINIMAL_SYMBOLS) {
      setPasswordMessage(SYMBOLS_ERROR);
      setError(true);
    } else if (e.target.value.length > MAXIMUM_SYMBOLS) {
      setPasswordMessage(SYMBOLS_ERROR);
      setError(true);
    } else {
      setPasswordMessage(SYMBOLS_DEFAULT);
      setError(false);
    }
  }

  useEffect(() => {
    if (!error && password !== '' && username !== '' && switched && checked) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [error, switched, password, username, checked]);

  function handleSubmit(e) {
    e.preventDefault();
    alert(
      JSON.stringify({
        username: username,
        password: password,
        input: input,
        remember: checked,
        switch: switched,
        dropdown: option,
        radioSelection: radioSelect,
      }),
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <fieldset className={styles.form__fieldset}>
        <Input
          label='Username'
          placeholder='Enter username'
          value={username || ''}
          handleChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <Input
          label='Password'
          placeholder='Enter password'
          value={password || ''}
          handleChange={handlePasswordChange}
          message={passwordMessage}
          error={error}
        />
        <Input
          label='Input Text Label'
          placeholder='Type here'
          message={'Assistive Text'}
          handleChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <Checkbox label='Remember me' onClick={() => setChecked(!checked)} />
        <Toggle
          label={switched ? 'on' : 'off'}
          onClick={() => setSwitched(!switched)}
          switched={switched}
        />
        <Radio
          label='Radio selection 1'
          name='selection'
          value='1'
          setRadioSelect={setRadioSelect}
        />
        <Radio
          label='Radio selection 2'
          name='selection'
          value='2'
          setRadioSelect={setRadioSelect}
        />
        <Radio
          label='Radio selection 3'
          name='selection'
          value='3'
          setRadioSelect={setRadioSelect}
        />
        <Dropdown
          label='Dropdown Title'
          setOption={setOption}
          option_one={'Dropdown option'}
          option_two={'Dropdown option 1'}
          option_three={'Dropdown option 2'}
        />
      </fieldset>
      <div className={styles.form__buttons}>
        <Button>Cancel</Button>
        <Button filled disabled={!isValid} type='submit'>
          Next
        </Button>
      </div>
    </form>
  );
}

export default Form;
