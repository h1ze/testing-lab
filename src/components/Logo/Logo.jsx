import logo from '../../assets/images/logo.svg';
import logo_menu from '../../assets/images/logo-menu.svg';
import './Logo.scss';

const Logo = ({ isMenuOpen }) => {
  return (
    <a className="logo-link" href="#">
      <img
        className={`logo-link__image ${
          isMenuOpen ? 'logo-link__image_menu' : ''
        }`}
        src={isMenuOpen ? logo_menu : logo}
        alt="Логотип"
      />
    </a>
  );
};

export default Logo;
