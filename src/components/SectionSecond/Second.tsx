import cl from './Second.module.scss';

const plans = [
  {
    price: 2450,
    month: 1,
  },
  {
    price: 2200,
    month: 3,
    discount: 9,
  },
  {
    price: 2000,
    month: 6,
    discount: 18,
  },
  {
    price: 1600,
    month: 12,
    discount: 31,
  },
  {
    price: 1200,
    month: 24,
    discount: 50,
  },
];

const Second = () => {
  return (
    <div className={cl.second}>
      <h1>СПРАВЕДЛИВАЯ МОДЕЛЬ ЦЕНООБРАЗОВАНИЯ</h1>
      <p className={cl.title}>Выберите подходящий Вам тариф</p>
      <ul>
        {plans.map((plan, index) => (
          <li key={index}>
            {plan.discount && <span className={cl.discount}>Экономия {plan.discount} %</span>}
            <div>
              <span className={cl.price}>{plan.price} ₸</span>
              <p className={cl.top}>/ мес.</p>
            </div>

            <p>{plan.month} мес.</p>
          </li>
        ))}
      </ul>
      <h2 className={cl.second__bottom}>FAQ</h2>
    </div>
  );
};

export default Second;
