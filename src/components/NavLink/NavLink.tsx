import { NavLink } from 'react-router-dom';
import { toUpperFirstLetter } from '../../utils/toUpperFirstLetter';
import { joinClasses } from '../../utils/joinClasses';

const Link = ({
  link,
  name = link,
  cls = [],
  children,
}: {
  link: string;
  cls?: Array<string>;
  name?: string;
  children?: JSX.Element;
}) => {
  return (
    <NavLink className={joinClasses(cls)} to={link}>
      {children || null}
      {toUpperFirstLetter(name)}
    </NavLink>
  );
};
export default Link;
