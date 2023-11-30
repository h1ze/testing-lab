import { useState } from 'react';
import './App.css';
import Comments from './components/Comments/Comments';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HowItWork from './components/HowItWork/HowItWork';
import ThirdBlock from './components/ThirdBlock/ThirdBlock';
import Menu from './components/Menu/Menu';

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="app">
      <Header onOpenMenu={toggleMenu} />
      <main>
        <HowItWork />
        <ThirdBlock />
        <Comments />
      </main>
      <Footer />
      <Menu isMenuOpen={isMenuOpen} onCloseMenu={toggleMenu} />
    </div>
  );
}

export default App;
