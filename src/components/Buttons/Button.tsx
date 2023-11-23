import { joinClasses } from '../../utils/joinClasses';
import './button.css';

export const Button = ({
  type,
  cls,
  title,
  func,
  text,
  src,
}: {
  type?: string;
  cls: Array<string>;
  title: string;
  func: () => void;
  text?: string;
  src?: string;
}) => {
  return (
    <button
      type={type || 'button'}
      className={joinClasses(cls)}
      onClick={() => {
        func();
      }}
      title={title}
    >
      {text || (src ? <img src={src} alt={title} /> : null)}
    </button>
  );
};
