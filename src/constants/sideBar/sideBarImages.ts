import galleryImg from '../../assets/asideBar/gallery.svg';
import portfolioImg from '../../assets/asideBar/portfolio.svg';
import travelImg from '../../assets/asideBar/travel.svg';
import liveImg from '../../assets/asideBar/live.svg';
import {
  GALLERY,
  LIVE_TOPICS,
  PORTFOLIO,
  TRAVEL_BLOG,
} from '../pathes/private-pathes';

export const sideBarImages = {
  gallery: {
    img: galleryImg,
    alt: GALLERY,
  },
  travel: {
    img: travelImg,
    alt: TRAVEL_BLOG,
  },
  portfolio: {
    img: portfolioImg,
    alt: PORTFOLIO,
  },
  live: {
    img: liveImg,
    alt: LIVE_TOPICS,
  },
};
