import './sideBar.css';
import { useState } from 'react';
import { ADMIN, ADMIN_ASIDE_BAR } from '../../constants/pathes/admin-pathes';
import Link from '../NavLink/NavLink';
import { SideBarIcon } from './SideBarIcon/SideBarIcon';
import { sideBarImages } from '../../constants/sideBar/sideBarImages';

export const SideBar = () => {
  const [openBar, setOpenBar] = useState(false);
  return (
    <aside className={['side-bar', 'left', openBar ? 'open' : ''].join(' ')}>
      <button
        type="button"
        className={['side-bar__button', openBar ? 'opened' : ''].join(' ')}
        onClick={() => setOpenBar(!openBar)}
        title="Open"
      >
        <div className="side-bar__button-line line-1" />
        <div className="side-bar__button-line line-2" />
        <div className="side-bar__button-line line-3" />
      </button>
      <ul className={['side-bar__list', openBar ? 'open' : ''].join(' ')}>
        {/* <li>
          <button
            type="button"
            className={['side-bar__button', openBar ? 'opened' : ''].join(' ')}
            onClick={() => setOpenBar(!openBar)}
            title="Open"
          >
            <div className="side-bar__button-line line-1" />
            <div className="side-bar__button-line line-2" />
            <div className="side-bar__button-line line-3" />
          </button>
        </li> */}
        {Object.values(ADMIN_ASIDE_BAR).map((link) => (
          <li key={link}>
            <Link
              name={openBar ? link : ''}
              link={`/${ADMIN}/${link}`}
              cls={['side-bar__link']}
            >
              <SideBarIcon
                icon={sideBarImages[link]?.img}
                alt={sideBarImages[link]?.alt}
              />
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};
