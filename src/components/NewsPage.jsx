import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AddNewsForm from './AddNewsForm';

const createNewsItem = (item) => {
  const { id, name, content, createAt } = item;
  return (
    <div key={id} className="news-item">
      <h3>{name}</h3>
      <p>{content}</p>
      <p>{createAt.toLocaleDateString('ru-RU', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
    </div>
  );
};

const NewsPage = () => {
  const inputEl = useRef(null);
  const news = useSelector((state) => state.news);
  const [searchState, setSearchState] = useState('');
  const foundNews = news.filter((item) => {
    if (searchState === '') {
      return item;
    }
    return item.name.includes(searchState);
  });

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  return (
    <>
      <h1>Новости</h1>
      <form className='search-form'>
        <input ref={inputEl}
          type="text"
          value={searchState}
          onChange={(e) => setSearchState(e.target.value)}
          className='search-form__input'
          name="search-news"
          placeholder="Введите название новости" />
      </form>
      <AddNewsForm />
      <div className="news-container">
        {foundNews.length > 0 ? foundNews?.map(createNewsItem) : <p>Новости не найдены ;(</p>}
      </div>
    </>
  );
};

export default NewsPage;