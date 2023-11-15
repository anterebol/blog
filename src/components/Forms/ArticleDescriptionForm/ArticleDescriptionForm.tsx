import { useState } from 'react';
import './ArticleDescriptionForm.css';
import { months } from '../../../hoc/Private/months/months';

const initialDate = {
  year: 'Year',
  month: 'Month',
  day: 'Day',
};

export const ArticleDescriptionForm = () => {
  const [img, setImg] = useState('');
  const [date, setDate] = useState({ ...initialDate });

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
          <div className="mounth">{date.month}</div>
          <div className="day">{date.day}</div>
          <div className="year">{date.year}</div>
        </div>
        <input
          type="date"
          onChange={(e) => {
            const currentDate = { ...date };
            const [year, numberMonth, day] = e.target.value.split(
              '-'
            ) as Array<string>;
            currentDate.year = year;
            currentDate.month = months[numberMonth];
            currentDate.day = day;
            setDate({ ...currentDate });
          }}
          required
          className={['datepicker-input'].join(' ')}
        />
      </span>
    </form>
  );
};
