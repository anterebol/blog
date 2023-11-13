import Link from '../../NavLink/NavLink';
import './headerNav.css';

export const HeaderNav = ({ links }: { links: Array<string> }) => {
  return (
    <nav className="header__nav">
      <ul className="nav__list">
        {links.map((link: string) => (
          <li key={link}>
            <Link link={link} cls={['header__link']} />
          </li>
        ))}
      </ul>
    </nav>
  );
};
