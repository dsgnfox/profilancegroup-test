import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from './slices/userSlice';
import './style/App.scss';
import logo from './images/logo.svg';
import MainPage from './components/MainPage';
import NewsPage from './components/NewsPage';
import AuthForm from './components/AuthForm';
import Modal from './components/Modal';

const AuthButton = ({ user, setShowModal }) => {
  const { login } = user;
  const dispatch = useDispatch();

  return (
    login
      ? <button type="button" onClick={() => dispatch(logOut())} className="button button_primary">Выход</button>
      : <button type="button" onClick={() => setShowModal(true)} className="button button_primary">Вход</button>
  );
};

const App = () => {
  const user = useSelector((state) => state.user);
  const [showModal, setShowModal] = useState(false);

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
              <AuthButton user={user} setShowModal={setShowModal}/>
            </nav>
          </div>
        </div>
      </header>
      <main className="main">
        <div className="container">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/news" element={<NewsPage />} />
          </Routes>
        </div>
      </main>
      <footer className="footer">
        <div className="container">
          <a className='link link_light' href="https://github.com/dsgnfox/profilancegroup-test/" target="_blank" rel="noreferrer">dsgnfox</a> @ 2022
        </div>
      </footer>
      <Modal show={showModal} setShow={setShowModal}>
        <AuthForm setShowModal={setShowModal} />
      </Modal>
    </Router>
  )
};

export default App;
