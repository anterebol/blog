import './footer.css';
import { FaInstagram, FaLinkedin, FaFacebookF } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import Link from '../NavLink/NavLink';
import { ADMIN } from '../../constants/pathes/admin-pathes';
import { joinClasses } from '../../utils/joinClasses';

const footerDescription = `This web-site created only as a pet-project and haven't commercial aspects`;
export const Footer = () => {
  const { pathname } = useLocation();
  return (
    <footer
      className={joinClasses([
        'footer',
        pathname.includes(ADMIN) ? 'invisible' : '',
      ])}
    >
      <div className="footer__container">
        <div className="footer-social">
          <a className="footer-social__link" href="#">
            <FaInstagram />
          </a>
          <a className="footer-social__link" href="#">
            <FaLinkedin />
          </a>
          <a className="footer-social__link" href="#">
            <MdEmail />
          </a>
          <a className="footer-social__link" href="#">
            <FaFacebookF />
          </a>
        </div>
        <p className="footer-description">{footerDescription}</p>
      </div>
      <div>
        <Link cls={['footer-admin-link', 'header__link']} link={ADMIN} />
      </div>
    </footer>
  );
};
