import React from 'react';
import LoginBlock from '../components/LoginBlock/LoginBlock';

export interface TLoginProps {
  setIsLogged: (isLogged: string) => void;
}

const Login = ({ setIsLogged }: TLoginProps) => {
  return (
    <div className="login">
      <LoginBlock setIsLogged={setIsLogged} />
    </div>
  );
};

export default Login;
