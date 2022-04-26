import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { logIn } from '../slices/userSlice';
import users from '../users/index';

const AuthForm = () => {
  const dispatch = useDispatch();
  const [authFailed, setAuthFailed] = useState(false);
  const inputEl = useRef(null);
  const f = useFormik({
    initialValues: {
      login: '',
      password: '',
    },
    onSubmit: (values, { resetForm }) => {
      setAuthFailed(false);
      const { login, password } = values;
      const user = users.find((u) => u.login === login);
      debugger
      if (user.password === password) {
        dispatch(logIn(user));
      } else {
        setAuthFailed(true);
        inputEl.current.select();
      }
      resetForm({ value: '' });
    },
  });

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  return (
    <>
      <form className='form' onSubmit={f.handleSubmit}>
        <h2 className='form__title'>Вход в нарнию</h2>
        <div className="form__row">
          <label className='form__label' htmlFor="login">Логин</label>
          <input
            ref={inputEl}
            className='form__input'
            id="login"
            name="login"
            type="text"
            onChange={f.handleChange}
            value={f.values.login}
          />
        </div>
        <div className="form__row">
          <label className='form__label' htmlFor="password">Пароль</label>
          <input
            className='form__input'
            id="password"
            name="password"
            type="password"
            onChange={f.handleChange}
            value={f.values.password}
          />
        </div>
        <button className='button button_primary' type="submit">Добавить</button>
      </form>
    </>
  )
};

export default AuthForm;