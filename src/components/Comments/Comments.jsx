import './Comments.scss';
import avatar1 from '../../assets/images/user1.jpg';
import avatar2 from '../../assets/images/user2.jpg';
import avatar3 from '../../assets/images/user3.jpg';

const Comments = () => {
  const commentsData = [
    {
      avatar: avatar1,
      name: 'Константинов Михаил Павлович',
      city: 'Санкт-Петербург',
      content:
        'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы ',
    },
    {
      avatar: avatar2,
      name: 'Иван Иванов',
      city: 'Санкт-Петербург',
      content:
        'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.',
    },
    {
      avatar: avatar3,
      name: 'Артем Корнилов',
      city: 'Самара',
      content:
        'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.',
    },
  ];

  return (
    <section className="comments" id="comments">
      <h2 className="comments__title">Отзывы</h2>
      <div className="comments__wrapper">
        <button
          className="comments__prev-btn comments__btn"
          type="button"
        ></button>
        <ul className="comments__cards">
          {commentsData.map((comment) => {
            return (
              <li className="comments__card" key={comment.name}>
                <div className="comments__user">
                  <img
                    className="comments__avatar"
                    src={comment.avatar}
                    alt="Аватар пользователя"
                  />
                  <div className="comments__user-info">
                    <h3 className="comments__user-name">{comment.name}</h3>
                    <p className="comments__user-city">{comment.city}</p>
                  </div>
                </div>
                <p className="comments__content">{comment.content}</p>
              </li>
            );
          })}
        </ul>
        <button
          className="comments__btn comments__btn_type_next"
          type="button"
        ></button>
      </div>
    </section>
  );
};

export default Comments;
