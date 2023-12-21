import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { setEditorText } from '../../../store/apiReducer/apiReducer';
import { joinClasses } from '../../../utils/joinClasses';
import './title.css';

export const Title = ({ tag, id }: { tag: string; id: string }) => {
  const dispatch = useAppDispatch();
  const { article } = useAppSelector(
    (state) => state.apiReducer.currentArticle
  );
  const index = parseInt(id, 10);

  return (
    <div className={joinClasses(['editor-header__container', tag])}>
      <input
        value={article[index].text}
        id={id}
        // style={{ height }}
        placeholder="Write title"
        onChange={(e) => {
          dispatch(setEditorText({ id: index, text: e.target.value }));
        }}
      />
    </div>
  );
};
