import Logo from '../Logo/Logo';
import './Nav.scss';

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__wrapper">
        <Logo />
        <ul className="nav__links">
          <li>
            <a className="nav__link" href="#">
              Как это работает
            </a>
          </li>
          <li>
            <a className="nav__link" href="#">
              3-й блок
            </a>
          </li>
          <li>
            <a className="nav__link" href="#">
              Вопросы и ответы
            </a>
          </li>
          <li>
            <a className="nav__link" href="#">
              Форма
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
