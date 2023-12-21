import './fullPage.css';
import { useLocation } from 'react-router-dom';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { MAIN } from '../../constants/pathes/navPathes';
import { ADMIN } from '../../constants/pathes/admin-pathes';
import { GalleryPopup } from '../../components/GalleryPopup/GalleryPopup';
import { LOGIN } from '../../constants/pathes/common-pathes';

export const FullPage = (props: { children: JSX.Element }) => {
  const { children } = props;
  const { pathname } = useLocation();

  return (
    <>
      {pathname.includes(LOGIN) ? null : <Header />}
      <GalleryPopup />
      <main
        className={[
          'main',
          pathname.includes(ADMIN) ? 'additional-margin' : '',
        ].join(' ')}
      >
        {children}
      </main>
      {pathname.includes(MAIN) || pathname.includes(LOGIN) ? null : <Footer />}
    </>
  );
};
