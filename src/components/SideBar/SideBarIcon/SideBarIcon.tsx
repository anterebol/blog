import { toUpperFirstLetter } from '../../../utils/toUpperFirstLetter';
import './sideBarIcon.css';

export const SideBarIcon = ({ icon, alt }: { icon: string; alt: string }) => {
  return (
    <div className="side-bar__icon">
      <img src={icon} alt={alt} title={toUpperFirstLetter(alt)} />
    </div>
  );
};
