import cl from './LoginBlock.module.scss';

import personsDb from '../../db/db.json';

import devicesImg from '../../assets/devices.png';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { TLoginProps } from '../../pages/Login';

const LoginBlock: React.FC<TLoginProps> = ({ setIsLogged }) => {
  const navigate = useNavigate();
  const [loginValue, setLoginValue] = useState('');
  const [passValue, setPassValue] = useState('');

  useEffect(() => {
    const isUserAuth =
      localStorage.getItem('role') === 'user' ? 'user' : 'admin';

    if (isUserAuth === 'user') {
      setIsLogged(isUserAuth);
    }
    if (isUserAuth === 'admin') {
      setIsLogged(isUserAuth);
    }
  }, [setIsLogged]);

  const onClickLogin = () => {
    const locolDb = localStorage.getItem('db')
      ? localStorage.getItem('db')
      : JSON.stringify(personsDb);
    if (locolDb !== null) {
      const person = JSON.parse(locolDb).find(
        (item: any) =>
          item.phone === Number(loginValue) ||
          (item.username === loginValue && item.password === passValue),
      );

      if (person && person.role === 'admin') {
        navigate('/manager');
        console.log('admin logged');
        setIsLogged('admin');
        localStorage.setItem('role', 'admin');
      }
      if (person && person.role === 'user') {
        navigate('/start');
        console.log('user logged');
        setIsLogged('user');
        localStorage.setItem('role', 'user');
      } else {
        alert('incorrect login or password');
      }
    }
  };

  const goToReg = () => {
    navigate('/reg');
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
        <p onClick={goToReg}>Создать аккаунт</p>
      </div>
      <img src={devicesImg} alt="Devices" />
    </div>
  );
};

export default LoginBlock;
