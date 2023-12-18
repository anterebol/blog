/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import './galleryPopup.css';
import { FaExpand } from 'react-icons/fa';
import { IoCloseSharp } from 'react-icons/io5';
import { useState } from 'react';
import { MdOutlineFullscreenExit } from 'react-icons/md';
import { Button } from '../Buttons/Button';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { joinClasses } from '../../utils/joinClasses';
import { toggleGalleryPopup } from '../../store/appReducer/appReducer';
import { DEFAULT_IMG_POPUP } from '../../constants/defaultPopupImg/defaultPopupImg';

const isFullScreen = () => window.screenTop === 0;

export const GalleryPopup = () => {
  const dispatch = useAppDispatch();
  const [fullPage, setFullPage] = useState(false);
  const { src, title } = useAppSelector(
    (state) => state.appReducer.galleryPopupImg
  );
  const closeFullPage = () => {
    document.exitFullscreen();
    document.getElementsByTagName('body')[0].style.overflow = 'visible';
    setFullPage(false);
  };
  const closePopup = () => {
    closeFullPage();
    dispatch(toggleGalleryPopup(DEFAULT_IMG_POPUP));
  };

  const d = () => {
    document.addEventListener('fullscreenchange', () => {
      if (isFullScreen()) {
        closeFullPage();
      }
      // closeFullPage();
    });
  };
  d();

  return (
    <div
      onClick={closePopup}
      className={joinClasses([
        'popup',
        src ? 'opened' : '',
        fullPage ? 'full-page' : '',
      ])}
    >
      <div className="gallery-popup__cover" />
      <div className="gallery-popup__header">
        <Button
          func={() => {
            if (fullPage) {
              closeFullPage();
            } else {
              document.documentElement.requestFullscreen();
              document.getElementsByTagName('body')[0].style.overflow =
                'hidden';
              setFullPage(true);
            }
          }}
          title="Expand"
          cls={['gallery-popup__button']}
        >
          {fullPage ? (
            <MdOutlineFullscreenExit
              style={{ width: 30, height: 30 }}
              color="white"
            />
          ) : (
            <FaExpand style={{ width: 30, height: 20 }} color="white" />
          )}
        </Button>
        <Button func={closePopup} title="Close" cls={['gallery-popup__button']}>
          <IoCloseSharp style={{ width: 30, height: 30 }} color="white" />
        </Button>
      </div>
      <div
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        className="gallery-popup__content"
      >
        <img src={src} alt={title} />
      </div>
    </div>
  );
};
