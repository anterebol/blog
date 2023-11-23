import './ArticleDescriptionForm.css';
import { months } from '../../../constants/months/months';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import {
  setArticleDate,
  setArticleTitle,
  setArticleImg,
} from '../../../store/appReducer/appReducer';
import { ToggleButton } from '../../Buttons/ToggleButton/ToggleButton';

export const ArticleDescriptionForm = () => {
  const dispatch = useAppDispatch();
  const { articleMainInfo } = useAppSelector((state) => state.appReducer);
  const { date, title, mainImg } = articleMainInfo;

  return (
    <form action="#/" className="description-form">
      <fieldset>
        <legend>Main article information</legend>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            dispatch(setArticleTitle(e.target.value));
          }}
          placeholder="Title for article"
          className="description-form__title"
        />
        <input
          type="text"
          value={mainImg}
          onChange={(e) => {
            dispatch(setArticleImg(e.target.value));
          }}
          placeholder="Main image link"
          className={['description-form__img', mainImg ? 'hide' : ''].join(' ')}
        />
        {mainImg ? (
          <div className="article-main-img">
            <ToggleButton
              func={() => {
                dispatch(setArticleImg(''));
              }}
              cls={['toggle__button', 'opened']}
            />
            <img src={mainImg} alt="main-img" />
          </div>
        ) : null}
        <div className="description-form__date">
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
                dispatch(setArticleDate(currentDate));
              }}
              required
              className={['datepicker-input'].join(' ')}
            />
          </span>
        </div>
      </fieldset>
    </form>
  );
};
