import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ADMIN } from '../../constants/pathes/admin-pathes';
import { NewArticle } from '../ArticleList/NewArticle/NewArticle';
import { GalleryItem } from './GalleryItem/GalleryItem';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { getGallery } from '../../store/apiReducer/api/api';

export const GalleryList = ({
  page,
  isAdmin,
}: {
  page: string;
  isAdmin?: boolean;
}) => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const { gallery } = useAppSelector((state) => state.apiReducer);
  useEffect(() => {
    dispatch(getGallery());
  }, []);

  return (
    <ul className="gallery-list">
      {isAdmin ? <NewArticle /> : null}
      {gallery.map(({ src, title, id }) => {
        if (pathname.includes(ADMIN)) {
          return (
            <GalleryItem
              key={id}
              photo={{ src, title, id }}
              page={page}
              isAdmin={isAdmin}
            />
          );
        }
        if (src) {
          return (
            <GalleryItem
              key={title}
              photo={{ src, title, id }}
              page={page}
              isAdmin={isAdmin}
            />
          );
        }
        return null;
      })}
    </ul>
  );
};
