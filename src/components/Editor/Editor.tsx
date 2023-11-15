import './editor.css';
import plus from '../../assets/plus.svg';
import { ArticleDescriptionForm } from '../Forms/ArticleDescriptionForm/ArticleDescriptionForm';
import { useAppDispatch } from '../../hooks/hooks';
import { toggleAsideEditor } from '../../store/appReducer/appReducer';

export const Editor = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="editor-container">
      <div className="editor__main">
        <ArticleDescriptionForm />
      </div>
      <button
        type="button"
        onClick={() => {
          dispatch(toggleAsideEditor());
        }}
        className="add-element__button"
      >
        <div>
          <img src={plus} alt="plus" />
        </div>
        <p>Add element</p>
      </button>
    </div>
  );
};
