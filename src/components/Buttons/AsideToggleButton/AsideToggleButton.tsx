import { joinClasses } from "../../../utils/joinClasses";

export const AsideToggleButton = ({
  func,
  cls,
}: {
  func: () => void;
  cls: Array<string>;
}) => {
  return (
    <button
      type="button"
      className={joinClasses(cls)}
      onClick={() => {
        func();
      }}
      title="Toggle aside bar"
    >
      <div className="side-bar__button-line line-1" />
      <div className="side-bar__button-line line-2" />
      <div className="side-bar__button-line line-3" />
    </button>
  );
};
