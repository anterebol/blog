import './newArticle.css';
import { Link, useParams } from 'react-router-dom';
import plus from '../../../assets/editor/plus.svg';

export const NewArticle = () => {
  const { page } = useParams();

  return (
    <li className="new-article">
      <Link to={`${page}/new`}>
        <div className="new-article__cover">
          <p>ADD NEW ARTICLE</p>
        </div>
        <div className="new-article__plus">
          <img src={plus} alt="add-img" />
        </div>
      </Link>
    </li>
  );
};
