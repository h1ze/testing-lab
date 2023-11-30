import './ThirdBlock.scss';

const ThirdBlock = () => {
  return (
    <section className="third-block" id="third-block">
      <div className="third-block__description">
        <h2 className="third-block__title">
          Круто, ты дошел до третьего блока
        </h2>
        <p className="third-block__paragraph">
          63% опрошенных пользовались кредитами из-за того, что не&nbsp;могли
          покрыть непредвиденные расходы свыше 15&nbsp;000&nbsp;₽.
        </p>
        <p className="third-block__paragraph">
          Доступ к&nbsp;заработанным деньгам помогает отказаться
          от&nbsp;кредитов и экономить деньги на&nbsp;процентах и&nbsp;штрафах.
        </p>
      </div>
      <div className="third-block__picture"></div>
    </section>
  );
};

export default ThirdBlock;
