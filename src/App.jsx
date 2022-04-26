import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation,
} from 'react-router-dom';
import './style/App.scss';
import logo from './images/logo.svg';
import MainPage from './components/MainPage';
import NewsPage from './components/NewsPage';
import AuthForm from './components/AuthForm';

const App = () => {
  return (
    <Router>
      <header className="header">
        <div className="container">
          <div className="header__container">
            <div className="header__logo">
              <Link to="/">
                <img src={logo} alt="Logo" />
              </Link>
            </div>
            <nav className="nav">
              <Link to="/news" className="nav__link">Новости</Link>
              <button type="button" className="button button_primary">Вход/Выход</button>
            </nav>
          </div>
        </div>
      </header>
      <main className="container">
        <AuthForm />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/news" element={<NewsPage />} />
        </Routes>
      </main>
    </Router>
  )
};

export default App;
