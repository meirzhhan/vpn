import React, { useState } from 'react';
import cl from './Third.module.scss';
import arrowUp from '../../assets/arrowUp.svg';

type TProps = {
  question: string;
  answer: string;
};
const ThirdItem: React.FC<TProps> = ({ question, answer }) => {
  const [faqId, setFaqId] = useState(false);

  return (
    <div className={cl.faq} onClick={() => setFaqId(!faqId)}>
      <div className={`${faqId === true ? cl.faq__q + ' activeQuestion' : cl.faq__q}`}>
        <span>{question}</span>
        <img src={arrowUp} alt="" />
      </div>
      <p className={`${faqId === true && cl.faq__show}`}>{answer}</p>
    </div>
  );
};

export default ThirdItem;
