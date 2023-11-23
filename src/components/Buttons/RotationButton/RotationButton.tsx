import './rotationButton.css';
import reboot from '../../../assets/reboot.svg';

export const RotationButton = ({
  func,
  cls,
}: {
  func: () => void;
  cls: Array<string>;
}) => {
  return (
    <button
      type="button"
      className="rotate-img"
      onClick={() => {
        func();
      }}
    >
      <img src={reboot} alt="rotate-img" />
    </button>
  );
};
