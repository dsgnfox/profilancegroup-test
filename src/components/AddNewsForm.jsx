import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { uniqueId } from 'lodash';
import { add } from '../slices/newsSlice';

const AddNewsForm = () => {
  const dispatch = useDispatch();

  const f = useFormik({
    initialValues: {
      name: '',
      content: '',
    },
    onSubmit: (values, { resetForm }) => {
      const newNews = { ...values, id: uniqueId(), approved: false, createAt: new Date() }
      dispatch(add(newNews));
      resetForm({ value: '' });
    },
  });

  return (
    <>
      <form className='form' onSubmit={f.handleSubmit}>
        <h2 className='form__title'>Добавить новость</h2>
        <div className="form__row">
          <label className='form__label' htmlFor="name">Название новости</label>
          <input
            className='form__input'
            id="name"
            name="name"
            type="text"
            onChange={f.handleChange}
            value={f.values.name}
          />
        </div>
        <div className="form__row">
          <label className='form__label' htmlFor="content">Содержание</label>
          <textarea
            className='form__textarea'
            id="content"
            name="content"
            type="text"
            rows="10"
            onChange={f.handleChange}
            value={f.values.content}
          />
        </div>
        <button className='button button_primary' type="submit">Добавить</button>
      </form>
    </>
  );
};

export default AddNewsForm;