import { joinClasses } from '../../../utils/joinClasses';

export const ToggleButton = ({
  func,
  cls,
}: {
  func: () => void;
  cls?: Array<string>;
}) => {
  return (
    <button
      type="button"
      className={joinClasses(cls)}
      onClick={func}
      title="Close button"
    >
      <div className="toggle__button-line line-1" />
      <div className="toggle__button-line line-2" />
      <div className="toggle__button-line line-3" />
    </button>
  );
};
