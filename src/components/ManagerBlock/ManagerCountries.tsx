import React from 'react';
import cl from './Manager.module.scss';
import CountryBlock from '../CountryBlock/CountryBlock';

const ManagerCountries = () => {
  const managerStyle = { gridTemplateColumns: 'none', gap: '10px' };

  return (
    <div className={cl.manager}>
      <CountryBlock managerStyle={managerStyle} />
    </div>
  );
};

export default ManagerCountries;
