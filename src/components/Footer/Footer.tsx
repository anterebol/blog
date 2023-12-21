import './footer.css';
import { useLocation } from 'react-router-dom';
import { ADMIN } from '../../constants/pathes/admin-pathes';
import { joinClasses } from '../../utils/joinClasses';
import { socialLinks } from '../../constants/social/social';
import { toUpperFirstLetter } from '../../utils/toUpperFirstLetter';

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
          {Object.entries(socialLinks).map(([name, value]) => {
            const { icon, link } = value;
            return (
              <a
                key={`footer-${name}`}
                className="footer-social__link"
                target="_blank"
                title={toUpperFirstLetter(name)}
                href={link}
                rel="noreferrer"
              >
                {icon}
              </a>
            );
          })}
          {/* <a className="footer-social__link" title={} href="#">
            <FaInstagram />
          </a>
          <a className="footer-social__link" href="#">
            <FaLinkedin />
          </a>
          <a className="footer-social__link" href="#">
            <MdEmail />
          </a>
          <a className="footer-social__link" href="#">
            <FaGithub />
          </a> */}
        </div>
        <p className="footer-description">{footerDescription}</p>
      </div>
    </footer>
  );
};
