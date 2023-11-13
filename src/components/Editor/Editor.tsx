import './editor.css';
import plus from '../../assets/plus.svg';
import { ArticleDescriptionForm } from '../Forms/ArticleDescriptionForm/ArticleDescriptionForm';

export const Editor = () => {
  return (
    <div className="editor-container">
      <div className="editor__main">
        <ArticleDescriptionForm />
      </div>
      <button type="button" className="add-element__button">
        <div>
          <img src={plus} alt="plus" />
        </div>
        <p>Add element</p>
      </button>
    </div>
  );
};
