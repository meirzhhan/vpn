import React from 'react';
import ManagerCountries from '../components/ManagerBlock/ManagerCountries';
import ManagerUsers from '../components/ManagerBlock/ManagerUsers';
import ManagerWarnings from '../components/ManagerBlock/ManagerWarnings';

import cl from '../components/ManagerBlock/Manager.module.scss';

const Manager = () => {
  return (
    <div className="manager-container">
      <div className={cl.manager__wrapper}>
        <ManagerCountries />
        <ManagerUsers />
        <ManagerWarnings />
      </div>
    </div>
  );
};

export default Manager;
