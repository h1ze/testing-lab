import Nav from '../Nav/Nav';
import Promo from '../Promo/Promo';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <Nav />
      <Promo />
    </header>
  );
};

export default Header;
