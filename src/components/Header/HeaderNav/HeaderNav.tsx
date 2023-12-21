import { ADMIN } from '../../../constants/pathes/admin-pathes';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { logout } from '../../../store/apiReducer/api/api';
import { Button } from '../../Buttons/Button';
import Link from '../../NavLink/NavLink';
import './headerNav.css';

export const HeaderNav = ({ links }: { links: Array<string> }) => {
  const dispatch = useAppDispatch();
  const { uid } = useAppSelector((store) => store.apiReducer);
  return (
    <nav className="header__nav">
      <ul className="nav">
        {links.map((link: string) => (
          <li className="nav__item" key={link}>
            <Link link={link} cls={['header__link']}>
              <div className="nav__item-line" />
            </Link>
          </li>
        ))}
        {uid ? (
          <>
            <li className="nav__item" key="logout">
              <Link link={ADMIN} cls={['header__link']}>
                <div className="nav__item-line" />
              </Link>
            </li>
            <li className="nav__item" key="logout1">
              <Button
                text="Logout"
                title="Logout"
                cls={['header__link']}
                func={() => {
                  dispatch(logout());
                }}
              >
                <div className="nav__item-line" />
              </Button>
            </li>
          </>
        ) : null}
      </ul>
    </nav>
  );
};
