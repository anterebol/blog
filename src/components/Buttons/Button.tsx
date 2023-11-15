import { joinClasses } from '../../utils/joinClasses';

export const Button = ({
  type,
  cls,
  title,
  func,
  text,
}: {
  type?: string;
  cls: Array<string>;
  title: string;
  func: () => void;
  text: string;
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
      {text}
    </button>
  );
};
