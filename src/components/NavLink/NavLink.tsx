import { NavLink } from 'react-router-dom';
import { toUpperFirstLetter } from '../../utils/toUpperFirstLetter';

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
    <NavLink className={cls?.join(' ')} to={link}>
      {children}
      {toUpperFirstLetter(name)}
    </NavLink>
  );
};
export default Link;
