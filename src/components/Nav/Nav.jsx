import Logo from '../Logo/Logo';
import './Nav.scss';

const Nav = ({ isMenuOpen, onCloseMenu, onOpenMenu }) => {
  return (
    <nav className={`nav ${isMenuOpen ? 'nav_menu' : ''}`}>
      <div className={`nav__wrapper ${isMenuOpen ? 'nav__wrapper_menu' : ''}`}>
        <Logo isMenuOpen={isMenuOpen} />
        <ul className={`nav__links ${isMenuOpen ? 'nav__links_menu' : ''}`}>
          <li>
            <a
              className={`nav__link ${isMenuOpen ? 'nav__link_menu' : ''}`}
              href="#work"
              onClick={onCloseMenu}
            >
              Как это работает
            </a>
          </li>
          <li>
            <a
              className={`nav__link ${isMenuOpen ? 'nav__link_menu' : ''}`}
              href="#third-block"
              onClick={onCloseMenu}
            >
              3-й блок
            </a>
          </li>
          <li>
            <a
              className={`nav__link ${isMenuOpen ? 'nav__link_menu' : ''}`}
              href="#"
              onClick={onCloseMenu}
            >
              Вопросы и ответы
            </a>
          </li>
          <li>
            <a
              className={`nav__link ${isMenuOpen ? 'nav__link_menu' : ''}`}
              href="#"
            >
              Форма
            </a>
          </li>
        </ul>
        {!isMenuOpen && (
          <button
            className="nav__burger"
            type="button"
            onClick={onOpenMenu}
          ></button>
        )}
        {isMenuOpen && (
          <button
            className="nav__close-menu"
            type="button"
            onClick={onCloseMenu}
          ></button>
        )}
      </div>
    </nav>
  );
};

export default Nav;
