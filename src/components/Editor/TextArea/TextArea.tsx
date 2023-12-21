import { useState } from 'react';
import './textArea.css';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { setEditorText } from '../../../store/apiReducer/apiReducer';

export const TextArea = ({ id }: { id: string }) => {
  const dispatch = useAppDispatch();
  const { article } = useAppSelector(
    (state) => state.apiReducer.currentArticle
  );
  const index = parseInt(id, 10) as number;
  const [height, setHeight] = useState(
    (article[index]?.text?.split(/\n/).reduce((acc: number, str: string) => {
      return acc + Math.ceil(str.length / Math.round(window.innerWidth * 0.11));
    }, 0) || 1) * 16
  );
  window.addEventListener('resize', () => {
    if (article) {
      setHeight(
        (article[index]?.text
          ?.split(/\n/)
          .reduce((acc: number, str: string) => {
            return (
              acc + Math.ceil(str.length / Math.round(window.innerWidth * 0.11))
            );
          }, 0) || 1) * 16
      );
    }
  });

  return (
    <textarea
      className="editor-p__textarea"
      value={article[index].text}
      name=""
      id={id}
      style={{ height }}
      placeholder="Write text"
      onChange={(e) => {
        dispatch(setEditorText({ id: index, text: e.target.value }));
        setHeight(e.target.scrollHeight);
      }}
    />
  );
};
