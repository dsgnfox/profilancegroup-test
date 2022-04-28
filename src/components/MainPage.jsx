import { useSelector } from 'react-redux';

const MainPage = () => {
  const user = useSelector((state) => state.user);
  return (
    <>
      <h1>Привет, {user.login ?? 'Гость'}</h1>
    </>
  )
};

export default MainPage;