import { ButtonType } from '../../types/buttonType';
import { joinClasses } from '../../utils/joinClasses';
import './button.css';

export const Button = ({
  cls,
  title,
  func,
  text,
  src,
  children,
}: ButtonType) => {
  return (
    <button
      type="button"
      className={joinClasses(cls)}
      onClick={(e) => {
        e.stopPropagation();
        func();
      }}
      title={title}
    >
      {text || (src ? <img src={src} alt={title} /> : null)}
      {children}
    </button>
  );
};
