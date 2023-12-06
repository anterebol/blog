import galleryImg from '../../assets/asideBar/gallery.svg';
import portfolioImg from '../../assets/asideBar/portfolio.svg';
import travelImg from '../../assets/asideBar/travel.svg';
import liveImg from '../../assets/asideBar/live.svg';
import {
  GALLERY,
  TRAVEL_BLOG,
  PORTFOLIO,
  LIVE_TOPICS,
} from '../pathes/navPathes';

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
} as unknown as { [key: string]: { img: string; alt: string } };
