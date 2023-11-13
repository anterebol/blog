import './newArticle.css';
import { Link, useLocation, useMatch, useParams } from 'react-router-dom';
import plus from '../../../assets/plus.svg';
import { createDynamicPath } from '../../../utils/createDynamicPath';

export const NewArticle = () => {
  const { page } = useParams();
  console.log(page);
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
