import './exitModal.css';
import { Button } from '../../Buttons/Button';

export const ExitModal = (props: {
  onCancel: () => void;
  onConfirm: () => void;
}) => {
  const { onCancel, onConfirm } = props;
  return (
    <div className="unsave-editor-popup">
      <div className="unsave-editor-popup__cover" />
      <div className="unsave-editor-popup__container">
        <h2>Warning!</h2>
        <p>Do you really want to leave?</p>
        <p>All unsaved data will be lost</p>
        <div className="unsave-editor-popup__buttons">
          <Button
            cls={['cancel']}
            func={onCancel}
            title="Cancel"
            text="Cancel"
          />

          <Button
            cls={['confirm']}
            func={onConfirm}
            title="Confirm"
            text="Ok"
          />
        </div>
      </div>
    </div>
  );
};
