import waiting from '../../assets/images/waiting.svg';
import truck from '../../assets/images/delivery-truck.svg';
import secure from '../../assets/images/secure.svg';
import bags from '../../assets/images/money-bags.svg';
import './HowItWork.scss';

const HowItWork = () => {
  const data = [
    {
      img: waiting,
      heading: 'Прочитай задание внимательно',
      text: 'Думаю у тебя не займет это больше двух-трех минут',
    },
    {
      img: truck,
      heading: 'Изучи весь макет заранее',
      text: 'Подумай как это будет работать на разных разрешениях и при скролле',
    },
    {
      img: secure,
      heading: 'Сделай хорошо',
      text: 'Чтобы мы могли тебе доверить подобные задачи в будущем',
    },
    {
      img: bags,
      heading: 'Получи предложение',
      text: 'Ну тут все просто, не я придумал правила, но думаю так и будет)))',
    },
  ];

  return (
    <section className="work">
      <h2 className="work__title">Как это работает</h2>
      <ul className="work__list">
        {data.map((el) => {
          return (
            <li className="work__item" key={el.heading}>
              <img className="work__img" src={el.img} />
              <h3 className="work__heading">{el.heading}</h3>
              <p className="work__text">{el.text}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default HowItWork;
