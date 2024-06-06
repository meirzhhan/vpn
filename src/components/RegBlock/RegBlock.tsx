import cl from './RegBlock.module.scss';

import personsDb from '../../db/db.json';

import devicesImg from '../../assets/devices.png';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { TLoginProps } from '../../pages/Login';

const RegBlock: React.FC<TLoginProps> = ({ setIsLogged }) => {
  const navigate = useNavigate();
  const [loginValue, setLoginValue] = useState('');
  const [passValue, setPassValue] = useState('');

  const onClickLogin = () => {
    // const person = personsDb.find(
    //   (item) =>
    //     item.phone === Number(loginValue) ||
    //     (item.username === loginValue && item.password === passValue),
    // );
    if (passValue && loginValue) {
      const dbStr = localStorage.getItem('db');
      const dbArr = dbStr ? JSON.parse(dbStr) : personsDb;
      dbArr.push({
        role: 'user',
        id: Math.floor(Math.random() * 1000 + 1),
        phone: loginValue,
        username: loginValue,
        password: passValue,
      });
      localStorage.setItem('db', JSON.stringify(dbArr));
      navigate('/start');
      setIsLogged('user');
      localStorage.setItem('role', 'user');
    } else {
      alert('incorrect login or password');
    }
  };

  return (
    <div className={cl.login}>
      <div className={cl.left}>
        <h1>Регистрация</h1>
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

export default RegBlock;
