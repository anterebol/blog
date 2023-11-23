import { useState } from 'react';
import { ImagesType } from '../../types/imagesType';
import { joinClasses } from '../../utils/joinClasses';
import './slider.css';
import left from '../../assets/arrows/left.svg';
import right from '../../assets/arrows/right.svg';
import { Button } from '../Buttons/Button';

export const Slider = ({ id, list, type }: ImagesType) => {
  const [currenImage, setCurrentImage] = useState(0);

  return (
    <div className="slider">
      <Button
        cls={['slider__arrow', 'left-arrow']}
        title="left"
        func={() => {
          if (currenImage > 0) {
            setCurrentImage(currenImage - 1);
          } else {
            setCurrentImage(list?.length - 1);
          }
        }}
        src={left}
      />
      <Button
        cls={['slider__arrow', 'right-arrow']}
        title="right"
        func={() => {
          if (currenImage < list?.length - 1) {
            setCurrentImage(currenImage + 1);
          } else {
            setCurrentImage(0);
          }
        }}
        src={right}
      />
      <ul
        className="slider__list"
        style={{
          width: `${list?.length * 100}%`,
          left: `-${currenImage * 100}%`,
        }}
      >
        {list?.map(({ src, rotation }) => {
          return (
            <li
              key={src}
              className={joinClasses(['slider__image', rotation])}
              style={{ width: `${100 / list.length}%` }}
            >
              <img src={src} alt="slider-img" />
            </li>
          );
        })}
      </ul>
      <div className="slider__points">
        {list?.map((_, index) => {
          const key = `${index}slider-img`;
          return (
            <button
              key={key}
              className={joinClasses([
                'slider__point',
                currenImage === index ? 'active' : '',
              ])}
              type="button"
              onClick={() => {
                setCurrentImage(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
