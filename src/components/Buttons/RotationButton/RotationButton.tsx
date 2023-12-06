import './rotationButton.css';
import reboot from '../../../assets/reboot.svg';

export const RotationButton = ({ func }: { func: () => void }) => {
  return (
    <button
      type="button"
      className="rotate-button"
      onClick={() => {
        func();
      }}
    >
      <img src={reboot} alt="rotate-img" />
    </button>
  );
};
