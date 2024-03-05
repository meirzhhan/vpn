import cl from './LoginBlock.module.scss';

import personsDb from '../../db/db.json';

import devicesImg from '../../assets/devices.png';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { TLoginProps } from '../../pages/Login';

const LoginBlock: React.FC<TLoginProps> = ({ setIsLogged }) => {
  const navigate = useNavigate();
  const [loginValue, setLoginValue] = useState('');
  const [passValue, setPassValue] = useState('');

  const onClickLogin = () => {
    const person = personsDb.find(
      (item) =>
        item.phone === Number(loginValue) ||
        (item.username === loginValue && item.password === passValue),
    );

    if (person && person.role === 'admin') {
      navigate('/');
      console.log('admin logged');
      setIsLogged(true);
    }
    if (person && person.role === 'user') {
      navigate('/start');
      console.log('user logged');
      setIsLogged(true);
    } else {
      // alert('ошибочка');
    }
  };

  return (
    <div className={cl.login}>
      <div className={cl.left}>
        <h1>Авторизация</h1>
        <input
          className={cl.left__input}
          value={loginValue}
          onChange={(e) => setLoginValue(e.target.value)}
          type="text"
          placeholder="Номер телефона или логин"
        />
        <input
          className={cl.left__input}
          value={passValue}
          onChange={(e) => setPassValue(e.target.value)}
          type="password"
          placeholder="Пароль"
        />
        <button className={cl.left__button} onClick={onClickLogin}>
          Войти
        </button>
        <p>Создать аккаунт</p>
      </div>
      <img src={devicesImg} alt="Devices" />
    </div>
  );
};

export default LoginBlock;
