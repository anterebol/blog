import './severalImages.css';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { Button } from '../../../Buttons/Button';
import { joinClasses } from '../../../../utils/joinClasses';
import { RotationButton } from '../../../Buttons/RotationButton/RotationButton';
import { ImagesType } from '../../../../types/imagesType';
import editIcon from '../../../../assets/editor/headerEditorElement/edit.svg';
import removeIcon from '../../../../assets/editor/headerEditorElement/delete-red.svg';
import camera from '../../../../assets/editor/photo-camera.svg';
import { setEditorList } from '../../../../store/apiReducer/apiReducer';

export const SeveralImages = ({ id, list }: ImagesType) => {
  const dispatch = useAppDispatch();
  const index = parseInt(id, 10);
  const { article } = useAppSelector(
    (state) => state.apiReducer.currentArticle
  );
  const images = list || article[index]?.ul || [];
  const text = article[index].text || '';
  const tag = article[index]?.tag;

  return (
    <div className="several-images" id={id}>
      <Button
        cls={['editor-list__button', 'add']}
        title="Add image"
        text="Add image"
        func={() => {
          const imagesSrc = [...images];
          imagesSrc.push({ src: '', rotation: '' });
          dispatch(setEditorList({ index, list: [...imagesSrc] }));
        }}
      />
      <ul className="several-images__list">
        {images.map((image, i: number) => {
          const { src, rotation } = image as { src: string; rotation: string };
          const key = `${i + src}`;
          return (
            <li
              key={key}
              className={joinClasses([
                'several-images__item',
                rotation,
                tag === 'slider' ? 'slider-editor-images' : '',
              ])}
            >
              {src === '' ? (
                <>
                  <div className="several-images__editor">
                    <input
                      placeholder="Please add src for image"
                      value={src}
                      onChange={(e) => {
                        const imagesSrc = [...images];
                        imagesSrc[i] = {
                          src: e.target.value,
                          rotation: rotation || 'horizontal',
                        };
                        dispatch(
                          setEditorList({
                            index,
                            list: [...imagesSrc],
                            text,
                          })
                        );
                      }}
                    />
                    <Button
                      func={() => {
                        const imagesSrc = [...images];
                        imagesSrc.splice(i, 1);
                        dispatch(
                          setEditorList({
                            index,
                            list: [...imagesSrc],
                            text,
                          })
                        );
                      }}
                      src={removeIcon}
                      cls={['remove-button']}
                      title="Remove"
                    />
                  </div>
                  <div className="camera-img">
                    <img src={camera} alt="camera-img" />
                  </div>
                </>
              ) : (
                <>
                  {tag !== 'slider' ? (
                    <RotationButton
                      func={() => {
                        const imagesSrc = [...images];
                        imagesSrc[i] = {
                          src,
                          rotation:
                            rotation === 'vertical' ? 'horizontal' : 'vertical',
                        };
                        dispatch(
                          setEditorList({
                            index,
                            list: [...imagesSrc],
                            text,
                          })
                        );
                      }}
                    />
                  ) : null}
                  <Button
                    func={() => {
                      const imagesSrc = [...images];
                      imagesSrc[i] = {
                        src: '',
                        rotation,
                      };
                      dispatch(
                        setEditorList({
                          index,
                          list: [...imagesSrc],
                          text,
                        })
                      );
                    }}
                    src={editIcon}
                    cls={['header-editor__article-button']}
                    title="Edit"
                  />
                  <img src={src} alt="topic-img" />
                </>
              )}
            </li>
          );
        })}
      </ul>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          dispatch(
            setEditorList({ index, list: [...images], text: e.target.value })
          );
        }}
        placeholder="Write description"
        className={['description-form__img', 'description-form__text'].join(
          ' '
        )}
      />
    </div>
  );
};
