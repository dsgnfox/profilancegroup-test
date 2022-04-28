import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddNewsForm from './AddNewsForm';
import { remove, update } from '../slices/newsSlice';
import * as role from '../users/role';

const NewsItem = ({ user, news }) => {
  const { id, name, content, createAt, approved } = news;
  const date = new Date(createAt);
  const dispatch = useDispatch();

  return (
    <div className="news-item">
      <div className="news-item__body">
        <h3>{name}</h3>
        <p>{content}</p>
        <p>{date.toLocaleDateString('ru-RU', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </div>
      {
      user.role === role.ADMIN
        ? <div className="news-item__footer">
            <div className="button-group">
              {!approved ? <button type='button' className='button button_primary' onClick={() => dispatch(update({ id, changes: {approved: true} }))}>Одобрить</button> : null}
              <button type='button' className='button button_danger' onClick={() => dispatch(remove({ id }))}>Удалить</button>
            </div>
          </div>
        : null
      }
    </div>
  );
};

const NewsPage = () => {
  const [searchState, setSearchState] = useState('');
  const { news, user } = useSelector((state) => state);
  const newsForCurrentUser = user.role === role.GUEST ? news.filter((i) => i.approved) : news;
  const foundNews = newsForCurrentUser.filter((item) => {
    if (searchState === '') {
      return item;
    }
    return item.name.includes(searchState);
  });

  return (
    <>
      <h1>Новости</h1>
      {
      foundNews.length > 0
        ? <form className='search-form'>
            <input type="text"
              value={searchState}
              onChange={(e) => setSearchState(e.target.value)}
              className='search-form__input'
              name="search-news"
              placeholder="Введите название новости" />
          </form>
        : null
      }
      {user.role !== role.GUEST ? <AddNewsForm /> : null}
      <div className="news-container">
        {foundNews.length > 0 ? foundNews?.map((i) => <NewsItem key={i.id} user={user} news={i}/>) : <p>Новости не найдены ;(</p>}
      </div>
    </>
  );
};

export default NewsPage;