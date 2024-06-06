import React, { useState } from 'react';
import CountryBlock from '../components/CountryBlock/CountryBlock';
import StartBlock from '../components/StartBlock/StartBlock';

const Start = () => {
  const [activeCountry, setActiveCountry] = useState('США');
  const [activeCity, setActiveCity] = useState('Даллас');
  const [activeUrl, setActiveUrl] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  const setCountryAndCity = (country: string, city: string, url: number) => {
    setIsLoading(true);
    setActiveCountry(country);
    setActiveCity(city);
    setActiveUrl(url);
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  };

  return (
    <div className="start">
      <CountryBlock activeCountry={activeCountry} set={setCountryAndCity} />
      <StartBlock {...{ activeCountry, activeCity, activeUrl, isLoading }} />
    </div>
  );
};

export default Start;
