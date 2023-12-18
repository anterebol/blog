import './galleryItem.css';
import { useState } from 'react';
import expand from '../../../assets/expand.svg';
import { useAppDispatch } from '../../../hooks/hooks';
import { toggleGalleryPopup } from '../../../store/appReducer/appReducer';
import { Button } from '../../Buttons/Button';
import { removeItem, setImage } from '../../../store/apiReducer/api/api';
import removeIcon from '../../../assets/editor/headerEditorElement/remove-article.svg';
import editorIcon from '../../../assets/editor/headerEditorElement/edit.svg';

export const GalleryItem = ({
  photo,
  page,
  isAdmin,
}: {
  photo: { src: string; title: string; id: string };
  page: string;
  isAdmin?: boolean;
}) => {
  const { id } = photo;
  const [src, setSrc] = useState(photo.src);
  const [title, setTitle] = useState(photo.title);
  const dispatch = useAppDispatch();
  const [loaded, setLoaded] = useState(false);
  const img = document.createElement('img');
  img.onload = () => {
    setLoaded(true);
  };
  img.src = src;
  return (
    <li key={id} className="gallery-item">
      {isAdmin ? (
        <>
          <Button
            cls={[
              'header-editor__article-button',
              src ? 'left-button' : 'right-button',
            ]}
            title="Remove"
            src={removeIcon}
            func={() => {
              dispatch(removeItem({ page, id }));
            }}
          />
          {src ? (
            <Button
              cls={['header-editor__article-button', 'right-button']}
              title="Edit"
              src={editorIcon}
              func={() => {
                dispatch(setImage({ src: '', title: '', id }));
                setSrc('');
                setTitle('');
              }}
            />
          ) : null}
        </>
      ) : null}
      {photo.src && photo.title ? (
        <a
          href="#/"
          onClick={(e) => {
            e.preventDefault();
            dispatch(toggleGalleryPopup({ ...photo }));
          }}
          className="gallery-item__link"
          style={{
            background: loaded
              ? `url(${photo.src}) no-repeat center`
              : 'ghostwhite',
          }}
        >
          <div className="gallery-item__cover" />
          <div className="gallery-item__expand">
            <img src={expand} alt="expand" />
          </div>
          <p className="gallery-item__cover-text">{photo.title}</p>
        </a>
      ) : (
        <div className="gallery-item__form">
          <form action="#">
            <h2>Image form</h2>
            <input
              className="gallery-item__input"
              value={src}
              onChange={(e) => {
                setSrc(e.target.value);
              }}
              placeholder="Image link"
            />
            <input
              className="gallery-item__input"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              placeholder="Image title"
            />
            <Button
              func={() => {
                dispatch(setImage({ src, title, id }));
              }}
              cls={['save-button', 'big']}
              title="Set image"
              text="save"
            />
          </form>
        </div>
      )}
    </li>
  );
};
