import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { toggleAsideEditor } from '../../store/appReducer/appReducer';
import { joinClasses } from '../../utils/joinClasses';
import { AsideToggleButton } from '../Buttons/AsideToggleButton/AsideToggleButton';
import './asidePopupEditor.css';

export const AsidePopupEditor = () => {
  const dispatch = useAppDispatch();
  const { openAsideEditor } = useAppSelector((state) => state.appReducer);

  return (
    <div className={joinClasses(['popup', openAsideEditor ? 'opened' : ''])}>
      <div className="popup__cover" />
      <div className="popup__body">
        <AsideToggleButton
          func={() => {
            dispatch(toggleAsideEditor());
          }}
          cls={['side-bar__button', 'opened']}
        />
      </div>
    </div>
  );
};
