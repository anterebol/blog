import './articleList.css';
import { ArticleItem } from './ArticleItem/ArticleItem';
import { NewArticle } from './NewArticle/NewArticle';

export const ArticleList = () => {
  const articles = [
    {
      id: '1',
      title: 'Georgia',
      date: 'Octover 7, 2021',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolor odio facere ea quibusdam! Obcaecati ipsa eius quia in, asperiores omnis ex modi? Deleniti quibusdam perferendis nulla eaque dolorem? Culpa?',
      img: 'https://sun9-68.userapi.com/impg/cbFsilXqbW_nmvOzaNzRZaYrKkvP2myd2SH-oA/1IOUkQNc5aU.jpg?size=2560x1440&quality=96&sign=ad9486c8ebac2a40e93f7ac732946442&type=album',
    },
    {
      id: '2',
      title: 'My first day in China',
      date: 'Octover 7, 2021',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolor odio facere ea quibusdam! Obcaecati ipsa eius quia in, asperiores omnis ex modi? Deleniti quibusdam perferendis nulla eaque dolorem? Culpa?',
      img: 'https://sun9-5.userapi.com/impg/c857620/v857620967/13212d/3mYDwl_Szrc.jpg?size=1333x750&quality=96&sign=706adfacd0b6b04ad0da12ef6399a02b&type=album',
    },
    {
      id: '1',
      title: 'Georgia',
      date: 'Octover 7, 2021',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolor odio facere ea quibusdam! Obcaecati ipsa eius quia in, asperiores omnis ex modi? Deleniti quibusdam perferendis nulla eaque dolorem? Culpa?',
      img: 'https://sun9-68.userapi.com/impg/cbFsilXqbW_nmvOzaNzRZaYrKkvP2myd2SH-oA/1IOUkQNc5aU.jpg?size=2560x1440&quality=96&sign=ad9486c8ebac2a40e93f7ac732946442&type=album',
    },
    {
      id: '2',
      title: 'My first day in China',
      date: 'Octover 7, 2021',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolor odio facere ea quibusdam! Obcaecati ipsa eius quia in, asperiores omnis ex modi? Deleniti quibusdam perferendis nulla eaque dolorem? Culpa?',
      img: 'https://sun9-5.userapi.com/impg/c857620/v857620967/13212d/3mYDwl_Szrc.jpg?size=1333x750&quality=96&sign=706adfacd0b6b04ad0da12ef6399a02b&type=album',
    },
  ];
  return (
    <ul className="blog-article-list">
      <NewArticle />
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </ul>
  );
};
