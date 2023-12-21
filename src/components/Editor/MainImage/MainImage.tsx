import { useState } from 'react';

export const MainImage = () => {
  const [img, setImg] = useState('');
  return (
    <>
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
    </>
  );
};
