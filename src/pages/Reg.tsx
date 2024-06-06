import React from 'react';
import RegBLock from '../components/RegBlock/RegBlock';

export interface TLoginProps {
  setIsLogged: (isLogged: string) => void;
}

const Reg = ({ setIsLogged }: TLoginProps) => {
  return (
    <div className="login">
      <RegBLock setIsLogged={setIsLogged} />
    </div>
  );
};

export default Reg;
