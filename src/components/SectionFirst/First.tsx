import cl from './First.module.scss';

import devicesImg from '../../assets/devices.png';
import pcImg from '../../assets/pc.7d21d409.svg';
import mobileImg from '../../assets/mobile.ead1198a.svg';

const texts = ['Быстро', 'Безопасно', 'Надежно'];
const platforms = ['ПК', 'Моб. устройства'];

const First = () => {
  return (
    <div className={cl.first}>
      <div className={cl.first__info}>
        <h1>Профессиональный VPN-сервис</h1>
        <ul className={cl.first__info__points}>
          {texts.map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </ul>
        <p>Быстрая работа с огромным количеством серверов по всему миру</p>

        <ul className={cl.first__info__platforms}>
          {platforms.map((platform, index) => (
            <li key={index}>
              <img src={index === 0 ? pcImg : mobileImg} alt="" />
              <p>{platform}</p>
            </li>
          ))}
        </ul>
      </div>

      <img src={devicesImg} alt="Devices" />
    </div>
  );
};

export default First;
