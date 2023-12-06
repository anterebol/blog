import Link from '../../NavLink/NavLink';
import './headerNav.css';

export const HeaderNav = ({ links }: { links: Array<string> }) => {
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
      </ul>
    </nav>
  );
};
