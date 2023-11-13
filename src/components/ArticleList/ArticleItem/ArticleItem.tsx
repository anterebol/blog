import { useLocation } from 'react-router-dom';
import './articleItem.css';
import { ADMIN } from '../../../constants/pathes/admin-pathes';

export const ArticleItem = ({
  article,
}: {
  article: {
    id: string;
    title: string;
    date: string;
    description: string;
    img: string;
  };
}) => {
  const { id, title, date, description, img } = article;
  const { pathname } = useLocation();

  return (
    <li key={id} className="blog-article-list__item">
      <div
        className={
          pathname.includes(ADMIN) ? 'blog-article-list__item-cover' : ''
        }
      />
      <div className="blog-article-list__item-box">
        <div
          className="blog-article-list__item-img"

        >
          <img src={img} alt="article-img" />
        </div>
        <h2 className="blog-article-list__item-title">{title}</h2>
        <h3 className="blog-article-list__item-date">{date}</h3>
        <div className="article-line" />
        <p className="blog-article-list__item-description">{description}</p>
        <button type="button" className="button__ read-more">
          READ MORE
        </button>
      </div>
    </li>
  );
};
