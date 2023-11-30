import { useCallback, useEffect } from 'react';
import Nav from '../Nav/Nav';
import './Menu.scss';

const Menu = ({ isMenuOpen, onCloseMenu }) => {
  const handleEscPress = useCallback(
    (evt) => evt.key === 'Escape' && onCloseMenu(),
    [onCloseMenu]
  );

  useEffect(() => {
    isMenuOpen
      ? document.addEventListener('keyup', handleEscPress)
      : document.removeEventListener('keyup', handleEscPress);
  }, [isMenuOpen, handleEscPress]);

  return (
    <div className={`popup ${isMenuOpen ? 'popup_opened' : ''}`}>
      <Nav isMenuOpen={isMenuOpen} onCloseMenu={onCloseMenu} />
    </div>
  );
};

export default Menu;
