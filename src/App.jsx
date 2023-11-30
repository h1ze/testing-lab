import './App.css';
import Comments from './components/Comments/Comments';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HowItWork from './components/HowItWork/HowItWork';
import ThirdBlock from './components/ThirdBlock/ThirdBlock';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <HowItWork />
        <ThirdBlock />
        <Comments />
      </main>
      <Footer />
    </div>
  );
}

export default App;
