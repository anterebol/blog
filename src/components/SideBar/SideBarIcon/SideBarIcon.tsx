import { joinClasses } from '../../../utils/joinClasses';
import { toUpperFirstLetter } from '../../../utils/toUpperFirstLetter';
import './sideBarIcon.css';

export const SideBarIcon = ({
  icon,
  alt,
  cls = [],
}: {
  icon: string;
  alt: string;
  cls?: Array<string>;
}) => {
  return (
    <div className={joinClasses(['side-bar__icon', ...cls])}>
      <img src={icon} alt={alt} title={toUpperFirstLetter(alt)} />
    </div>
  );
};
