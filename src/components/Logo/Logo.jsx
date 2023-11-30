import logo from '../../assets/images/logo.svg';
import './Logo.scss';

const Logo = () => {
  return (
    <a className="logo-link" href="#">
      <img className="logo-link__image" src={logo} alt="Логотип" />
    </a>
  );
};

export default Logo;
