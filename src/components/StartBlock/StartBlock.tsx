import React, { useState } from 'react';
import cl from './StartBlock.module.scss';
import clCountry from '../CountryBlock/CountryBlock.module.scss';

import loadingSvg from '../../assets/loading.svg';

import { countryUrls } from '../CountryBlock/CountryBlock';

type TProps = {
  activeCountry: string;
  activeCity: string;
  activeUrl: number;
  isLoading: boolean;
};

const StartBlock: React.FC<TProps> = ({ activeCountry, activeCity, activeUrl, isLoading }) => {
  const [isOn, setIsOn] = useState(false);
  const [isWorking, setIsWorking] = useState(false);

  const onClickStart = () => {
    setIsWorking(true);
    setTimeout(() => {
      setIsOn(!isOn);
      console.log('1');
      setIsWorking(false);
    }, 2000);
    console.log('2');
  };

  const xd = countryUrls[activeUrl];
  console.log(xd);
  console.log(isLoading);
  return (
    <div className={cl.start__wrapper}>
      <div className={cl.start}>
        <p>Статус:</p>
        <p>{isOn ? 'Подключено' : 'Отключено'}</p>
      </div>
      <li></li>
      <div className={cl.start}>
        <p>IP Сервера:</p>
        <p>94.131.109.66</p>
      </div>
      <li></li>
      <div className={cl.start}>
        <p>Премиум:</p>
        <p>Отсутсвует</p>
      </div>

      <div className={cl.info}>
        <div
          className={clCountry.country}
          style={{ background: 'transparent', border: 'none', cursor: 'default', padding: '0' }}>
          <div className={clCountry.country__img}>{!isLoading && <img src={xd} alt="" />}</div>
          <div className={clCountry.country__info}>
            <span>{!isLoading && activeCountry}</span>
            <p>{!isLoading && activeCity}</p>
          </div>
          {(isWorking || isLoading) && <img className={cl.info__loading} src={loadingSvg} alt="" />}
        </div>

        <button onClick={onClickStart} disabled={isWorking}>
          {!isLoading && !isOn ? 'Отключить' : 'Подключить'}
          {/* {!isOn ? 'Подключить' : 'Отключить'} */}
        </button>
      </div>
    </div>
  );
};

export default StartBlock;
