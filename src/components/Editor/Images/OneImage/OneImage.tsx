import './oneImage.css';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { joinClasses } from '../../../../utils/joinClasses';
import { ToggleButton } from '../../../Buttons/ToggleButton/ToggleButton';
import { RotationButton } from '../../../Buttons/RotationButton/RotationButton';
import {
  setEditorImage,
  setImageRotation,
} from '../../../../store/apiReducer/apiReducer';

export const OneImage = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch();
  const index = parseInt(id, 10);
  const { src, rotation } = useAppSelector(
    (state) => state.apiReducer.currentArticle.article[index]
  );

  return (
    <>
      <input
        type="text"
        value={src}
        onChange={(e) => {
          dispatch(
            setEditorImage({
              id: index,
              src: e.target.value,
              rotation: rotation || 'horizontal',
            })
          );
        }}
        placeholder="Main image link"
        className={['description-form__img', src ? 'hide' : ''].join(' ')}
      />
      {src ? (
        <div
          className={joinClasses([
            'article-main-img',
            rotation || 'horizontal',
          ])}
        >
          <RotationButton
            func={() => {
              const turnTo =
                rotation === 'vertical' ? 'horizontal' : 'vertical';
              dispatch(
                setImageRotation({
                  id: index,
                  rotation: turnTo,
                })
              );
            }}
          />
          <ToggleButton
            func={() => {
              dispatch(setEditorImage({ id: index, src: '' }));
            }}
            cls={['toggle__button', 'opened']}
          />
          <img src={src} alt="article-img" />
        </div>
      ) : null}
    </>
  );
};
