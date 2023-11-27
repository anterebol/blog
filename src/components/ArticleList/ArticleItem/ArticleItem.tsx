import { Link, useLocation, useParams } from 'react-router-dom';
import { ArticleType } from '../../../types/articleType';
import './articleItem.css';
import { joinClasses } from '../../../utils/joinClasses';
import { ADMIN } from '../../../constants/pathes/admin-pathes';
import editorIcon from '../../../assets/editor/headerEditorElement/edit.svg';
import { Button } from '../../Buttons/Button';

export const ArticleItem = ({
  article,
  path,
}: {
  article: ArticleType;
  path: { page: string; pagePath: string };
}) => {
  const { id, title, date, description, img } = article;
  const { page, pagePath } = path;

  return (
    <li key={id} className="blog-article-list__item">
      {page === ADMIN ? (
        <Link to={`/${page}/${pagePath}/${id}`}>
          <Button
            cls={['edit-button']}
            title="Edit"
            src={editorIcon}
            func={() => {
              <Link to={`/${page}/${pagePath}/${id}`} />;
            }}
          />
        </Link>
      ) : null}
      <Link to={`/${pagePath}/${id}`} className="image-link">
        <div className="blog-article-list__item-img">
          <img src={img} alt="article-img" />
        </div>
      </Link>
      <div className="blog-article-list__item-header">
        <Link
          to={`/${pagePath}/${id}`}
          className="blog-article-list__item-link"
        >
          <h2 className="blog-article-list__item-title">{title}</h2>
        </Link>
        <h3 className="blog-article-list__item-date">{date}</h3>
        <div className="article-line" />
      </div>
      <div className="blog-article-list__item-body">
        <p className="blog-article-list__item-description">
          {`${description.split(' ').splice(0, 26).join(' ')} ...`}
        </p>
        <Link
          className={joinClasses([
            'button__read-more',
            'blog-article-list__item-link',
          ])}
          to={`/${pagePath}/${id}`}
        >
          READ MORE <i className='angle-double-right' />
        </Link>
      </div>
    </li>
  );
};
