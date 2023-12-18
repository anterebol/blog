import reboot from '../../../assets/reboot.svg';
import { Button } from '../Button';

export const RotationButton = ({ func }: { func: () => void }) => {
  return (
    <Button
      title="Rotate"
      cls={['header-editor__article-button', 'left-button', 'rotate-button']}
      func={() => {
        func();
      }}
    >
      <img src={reboot} alt="rotate-img" />
    </Button>
  );
};
