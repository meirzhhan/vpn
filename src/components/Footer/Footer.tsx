import cl from './Footer.module.scss';

const about = [
  'Политика конфиденциальности',
  'Условия использования',
  'Контакты',
];
const nav = [
  'Главная',
  'Почему именно мы?',
  'Тарифы',
  'F.A.Q.',
  'Доступные регионы',
];

const Footer = () => {
  return (
    <div className={cl.footer}>
      <div className={cl.footer__container}>
        <span className={cl.footer__left}>
          VPN.kz - новейшая, гениальная разработка умом. Мы всегда стремимся
          сделать наш сервис лучше и качественнее для того, чтобы наши
          пользователи получили более комфортные условия использования.
          Вдохновлять и питать дух – каждого человека, с каждым байтом
          информации проходящим через нашу сеть.
        </span>

        <div className={cl.footer__right}>
          <div>
            <h1>VPN.kz</h1>
            {about.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <div>
            <h1>Навигация</h1>
            {nav.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
