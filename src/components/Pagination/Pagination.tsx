import './pagination.css';
import { NavLink } from 'react-router-dom';
import leftArrow from '../../assets/arrows/left.svg';
import rightArrow from '../../assets/arrows/right.svg';
import Link from '../NavLink/NavLink';
import { Button } from '../Buttons/Button';

const setPagination = (pages: number) => {
  const arrPages = [];
  for (let i = 1; i <= pages; i += 1) {
    arrPages.push(i);
  }
  return arrPages;
};
export const Pagination = ({
  counterPages,
  page,
  currentPage,
}: {
  counterPages: number;
  page: string;
  currentPage: number;
}) => {
  const pages = setPagination(counterPages);

  return (
    <div className="pagination">
      <Button
        title="left-arrow"
        func={() => {}}
        cls={['pagination__item']}
        isDisabled={currentPage === 1}
      >
        {currentPage === 1 ? (
          <img src={leftArrow} alt="left-arrow" />
        ) : (
          <NavLink to={`/${page}/page/${currentPage - 1}`}>
            <img src={leftArrow} alt="left-arrow" />
          </NavLink>
        )}
      </Button>
      {pages.map((number) => {
        return (
          <Link
            key={number}
            cls={['pagination__item', number === currentPage ? 'active' : '']}
            link={`/${page}/page/${number}`}
            name={number.toString()}
          />
        );
      })}
      <Button
        title="right-arrow"
        func={() => {}}
        cls={['pagination__item']}
        isDisabled={currentPage === pages.length}
      >
        {currentPage === pages.length ? (
          <img src={rightArrow} alt="right-arrow" />
        ) : (
          <NavLink to={`/${page}/page/${currentPage + 1}`}>
            <img src={rightArrow} alt="right-arrow" />
          </NavLink>
        )}
      </Button>
    </div>
  );
};
