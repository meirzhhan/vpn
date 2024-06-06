import cl from './CountryBlock.module.scss';

import usaSvg from '../../assets/countries/usa.svg';
import norwaySvg from '../../assets/countries/norway.svg';
import germanySvg from '../../assets/countries/germany.svg';
import netherlandsSvg from '../../assets/countries/netherlands.svg';
import austriaSvg from '../../assets/countries/austria.svg';
import uaeSvg from '../../assets/countries/uae.svg';
import canadaSvg from '../../assets/countries/canada.svg';
import ukSvg from '../../assets/countries/uk.svg';
import kazakhstanSvg from '../../assets/countries/kazakhstan.svg';
import russiaSvg from '../../assets/countries/russia.svg';

import countries from '../../db/countries.json';
import React from 'react';

// Пропсы не обязательны
type TProps = Partial<{
  activeCountry: string;
  set: (country: string, city: string, url: number) => void;
  managerStyle: { gridTemplateColumns: string; gap: string };
  // url: number;
}>;

export const countryUrls = [
  usaSvg,
  germanySvg,
  netherlandsSvg,
  austriaSvg,
  uaeSvg,
  canadaSvg,
  ukSvg,
  kazakhstanSvg,
  russiaSvg,
];

const CountryBlock: React.FC<TProps> = ({
  activeCountry,
  set,
  managerStyle,
}) => {
  return (
    <div className={cl.country__wrapper} style={managerStyle}>
      {countries.map(({ name, city, availability }, index) => (
        <div
          className={`${
            activeCountry === name ? cl.country + ' activeCountry' : cl.country
          } ${availability ? 'notNice' : cl.nice}`}
          key={index}
          onClick={() => set && set(name, city, index)}
        >
          <div className={cl.country__img}>
            {countryUrls.map(
              (img, id) =>
                index === id && <img key={id} src={img} alt=""></img>,
            )}
          </div>

          <div className={cl.country__info}>
            <div className={cl.country__info__ss}>
              <span>{name}</span>
              <p className={cl.qq}>{availability ? 'Доступно' : 'Скоро'}</p>
            </div>
            <p>{city}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountryBlock;
