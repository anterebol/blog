import { useState } from 'react';
import { Button } from '../../Buttons/Button';
import './editorList.css';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import removeIcon from '../../../assets/editor/headerEditorElement/delete-red.svg';
import { setEditorList } from '../../../store/apiReducer/apiReducer';

export const List = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch();
  const { article } = useAppSelector(
    (state) => state.apiReducer.currentArticle
  );
  const [height, setHeight] = useState('16px');
  const index = parseInt(id, 10);
  const currentList = (article[index]?.ul || []) as Array<string>;

  return (
    <div className="editor-list" id={id}>
      <textarea
        className="editor-list__title"
        value={currentList[0] as string}
        name="ul-title"
        placeholder="Please write title for list"
        onChange={(e) => {
          const [, ...rest] = currentList;
          dispatch(setEditorList({ index, list: [e.target.value, ...rest] }));
        }}
      />
      <Button
        cls={['editor-list__button', 'add']}
        title="Add list item"
        text="Add list item"
        func={() => {
          const listArr = [...currentList];
          listArr.push('Text example...');
          dispatch(setEditorList({ index, list: [...listArr] }));
        }}
      />
      <ul className="editor-list">
        {currentList.slice(1)?.map((text: string, i: number) => {
          const key = `${i}li`;
          return (
            <li key={key}>
              <div className="list-circle" />
              <textarea
                style={{ height }}
                placeholder="Please write your text"
                value={text}
                onChange={(e) => {
                  const listArr = [...currentList];
                  listArr[i + 1] = e.target.value;
                  dispatch(setEditorList({ index, list: [...listArr] }));
                  setHeight(`${e.target.scrollHeight}px`);
                }}
              />
              <Button
                func={() => {
                  const list = [...currentList];
                  list.splice(i + 1, 1);
                  dispatch(setEditorList({ index, list: [...list] }));
                }}
                src={removeIcon}
                cls={['remove-button']}
                title="Remove"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
