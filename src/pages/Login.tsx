import React from 'react';
import LoginBlock from '../components/LoginBlock/LoginBlock';

export type TLoginProps = {
  setIsLogged: (isLogged: boolean) => void;
};

const Login: React.FC<TLoginProps> = ({ setIsLogged }) => {
  return (
    <div className="login">
      <LoginBlock setIsLogged={setIsLogged} />
    </div>
  );
};

export default Login;
