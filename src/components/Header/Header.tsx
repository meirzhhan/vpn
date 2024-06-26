import cl from './Header.module.scss';

import profileImg from '../../assets/profile.png';
import rocketSvg from '../../assets/rocket.svg';
import { Link, useLocation } from 'react-router-dom';
import React from 'react';

type TProps = {
  setIsLogged: (value: string) => void;
  isLogged: string;
};

const Header: React.FC<TProps> = ({ setIsLogged, isLogged }) => {
  const location = useLocation();

  const isAuth = localStorage.getItem('role') ? true : false;

  const onClickLogOut = () => {
    localStorage.removeItem('role');
    setIsLogged('');
  };

  return (
    <div className={cl.header}>
      <Link to="/" className={cl.header__left}>
        VPN
        <p>.kz</p>
      </Link>
      {location.pathname === '/' && (
        <div className={cl.header__right}>
          {isAuth ? (
            <button onClick={onClickLogOut} className={cl.logoutBtn}>
              Выйти
            </button>
          ) : (
            <Link to="/login" className={cl.header__profile}>
              <img src={profileImg} alt="Profile" />
              <p>Войти</p>
            </Link>
          )}

          <Link to={isAuth ? '/start' : '/login'} className={cl.header__button}>
            НАЧАТЬ
            <img src={rocketSvg} alt="" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
