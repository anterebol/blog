import { useAppSelector } from '../../hooks/hooks';
import { joinClasses } from '../../utils/joinClasses';
import { setHeaderNav } from '../../utils/setHeaderLinks';
import { HeaderNav } from '../Header/HeaderNav/HeaderNav';
import './sideNav.css';

export const SideNav = () => {
  const { openedAsideNav } = useAppSelector((state) => state.appReducer);
  return (
    <div className={joinClasses(['side-nav', openedAsideNav ? 'opened' : ''])}>
      <div className="side-nav__cover" />
      <HeaderNav links={setHeaderNav()} />
    </div>
  );
};
