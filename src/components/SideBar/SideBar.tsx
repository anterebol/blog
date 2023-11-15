import './sideBar.css';
import { useState } from 'react';
import { ADMIN, ADMIN_ASIDE_BAR } from '../../constants/pathes/admin-pathes';
import Link from '../NavLink/NavLink';
import { SideBarIcon } from './SideBarIcon/SideBarIcon';
import { sideBarImages } from '../../constants/sideBar/sideBarImages';
import { AsideToggleButton } from '../Buttons/AsideToggleButton/AsideToggleButton';
import { joinClasses } from '../../utils/joinClasses';

export const SideBar = () => {
  const [openBar, setOpenBar] = useState(false);
  return (
    <aside className={joinClasses(['side-bar', 'left', openBar ? 'open' : ''])}>
      <AsideToggleButton
        func={() => setOpenBar(!openBar)}
        cls={['side-bar__button', openBar ? 'opened' : '']}
      />
      <ul className={joinClasses(['side-bar__list', openBar ? 'open' : ''])}>
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
