import { useState } from 'react';
import './ArticleDescriptionForm.css';

export const ArticleDescriptionForm = () => {
  const [img, setImg] = useState('');
  const [date, setDate] = useState('mm.day.year');

  return (
    <form action="#/" className="description-form">
      <input
        type="text"
        placeholder="Title for article"
        className="description-form__title"
      />
      <input
        type="text"
        value={img}
        onChange={(e) => setImg(e.target.value)}
        placeholder="Main image link"
        className={['description-form__img', img ? 'hide' : ''].join(' ')}
      />
      {img ? (
        <button
          type="button"
          className="article-main-img"
          onClick={() => {
            setImg('');
          }}
        >
          <img src={img} alt="main-img" />
        </button>
      ) : null}
      <span className={['datepicker-toggle'].join(' ')}>
        <div className="datepicker-toggle-button">
          <div className="mounth">Mounth</div>
          <div className="day">Day</div>
          <div className="year">Year</div>
        </div>
        <input
          type="date"
          required
          className={['datepicker-input'].join(' ')}
        />
      </span>
    </form>
  );
};
