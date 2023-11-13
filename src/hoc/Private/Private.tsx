import './private.css';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { MAIN } from '../../constants/pathes/common-pathes';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { useAppSelector } from '../../hooks/hooks';
// import { ROLE_GUEST } from '../../constants/role/role';

export const Private = (props: { children: JSX.Element }) => {
  const { children } = props;
  const { role } = useAppSelector((store) => store.appReducer);
  const location = useLocation();

  return (
    <>
      <Header role={role} />
      <main
        className={[
          'main',
          location.pathname !== `/${MAIN}` ? 'default-main' : '',
        ].join(' ')}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};
