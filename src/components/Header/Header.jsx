import Nav from '../Nav/Nav';
import Promo from '../Promo/Promo';
import './Header.scss';

const Header = ({ onOpenMenu }) => {
  return (
    <header className="header">
      <Nav onOpenMenu={onOpenMenu} />
      <Promo />
    </header>
  );
};

export default Header;
