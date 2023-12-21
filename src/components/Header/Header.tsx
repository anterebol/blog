import './header.css';
import { useLocation } from 'react-router-dom';
import { HeaderNav } from './HeaderNav/HeaderNav';
import { setHeaderNav } from '../../utils/setHeaderLinks';
import logo from '../../assets/tent.png';
import { MAIN } from '../../constants/pathes/navPathes';
import { ADMIN } from '../../constants/pathes/admin-pathes';
import { ToggleButton } from '../Buttons/ToggleButton/ToggleButton';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { toggleAsideNav } from '../../store/appReducer/appReducer';
import { SideNav } from '../SideNav/SideNav';
import { joinClasses } from '../../utils/joinClasses';

const additionalHeaderClass = (page: string) => {
  switch (true) {
    case page.includes(ADMIN):
      return 'header__admin';
    case page.includes(MAIN):
      return 'header__main';
    default:
      return '';
  }
};

export const Header = () => {
  const dispatch = useAppDispatch();
  const { openedAsideNav } = useAppSelector((state) => state.appReducer);
  const { pathname } = useLocation();

  return (
    <header
      id="header"
      className={joinClasses(['header', additionalHeaderClass(pathname)])}
    >
      <div className="header__container">
        <div className="header__logo logo">
          <img src={logo} alt="logo" />
          <h1 className="header__logo-text">Festern travel</h1>
        </div>
        <HeaderNav links={setHeaderNav()} />
        <ToggleButton
          func={() => {
            dispatch(toggleAsideNav());
          }}
          cls={[
            'toggle__button',
            'nav-btn',
            openedAsideNav ? 'open-aside' : '',
          ]}
        />
      </div>
      <SideNav />
    </header>
  );
};
