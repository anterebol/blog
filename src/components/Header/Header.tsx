import './header.css';
import { useLocation } from 'react-router-dom';
import { HeaderNav } from './HeaderNav/HeaderNav';
import { setHeaderNav } from '../../utils/setHeaderLinks';
import { ADMIN } from '../../constants/pathes/admin-pathes';

export const Header = ({ role }: { role: string }) => {
  const { pathname } = useLocation();
  return (
    <header
      className={[
        'header',
        pathname.includes(ADMIN) ? 'header__admin' : '',
      ].join(' ')}
    >
      <div className="header__cover" />
      <div className="header__container">
        <div className="header__logo logo">
          <p>logo</p>
        </div>
        <HeaderNav links={setHeaderNav(role)} />
      </div>
    </header>
  );
};
