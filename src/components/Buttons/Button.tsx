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
  isDisabled,
}: ButtonType) => {
  return (
    <button
      type="button"
      className={joinClasses(cls)}
      onClick={(e) => {
        e.stopPropagation();
        func();
      }}
      disabled={isDisabled}
      title={title}
    >
      {text || (src ? <img src={src} alt={title} /> : null)}
      {children}
    </button>
  );
};
