import { useEffect, useState } from 'react';
import scrollImg from '../../assets/main/mouse-scroll.svg';
import './main.css';

export function Main() {
  const [scrollVisible, setScrollVisible] = useState('');
  useEffect(() => {
    document.addEventListener('scroll', (e) => {
      const html = document.documentElement;
      const { body } = document;

      let scrollTop = html.scrollTop || (body && body.scrollTop) || 0;
      scrollTop -= html.clientTop;

      if (scrollTop > 200) {
        setScrollVisible('unvisible');
      } else {
        setScrollVisible('');
      }
      const width = window.innerWidth;
      const content = document.getElementById('content') as HTMLElement;
      const contentHeight = content?.offsetHeight;

      const parallax = document.getElementById('parallax');
      const parallaxHeight = parallax?.offsetHeight as number;

      const coefficient = (scrollTop / parallaxHeight) * 100;
      const proccent = (scrollTop / contentHeight) * 100;

      const fog = document.getElementById('fog') as HTMLElement;
      const fogZoom = 1 + (width / 10000) * coefficient;
      const fogOpacity = 1 - (1 / 100) * coefficient;

      fog.style.transform = `scale(${fogZoom})`;
      fog.style.opacity = `${fogOpacity}`;
      content.style.opacity = `${1 - fogOpacity}`;

      const mainMountainZoom = 1 + (width / 1000000) * proccent;
      const mainMountain = document.getElementById(
        'main-mountain'
      ) as HTMLElement;
      mainMountain.style.transform = `scale(${mainMountainZoom})`;

      const hrRight = (width / 2000) * coefficient;
      const rightMountainZoom = 1 + width * 0.000005 * coefficient;
      const rightMountain = document.getElementById(
        'right-mountain'
      ) as HTMLElement;
      rightMountain.style.transform = `translate3d(${hrRight}px, 0, 0) scale(${rightMountainZoom})`;

      const hrLeft = (width / 1500) * coefficient;
      const leftMountainZoom = 1 + width * 0.00001 * coefficient;
      const leftMountain = document.getElementById(
        'left-mountain'
      ) as HTMLElement;
      leftMountain.style.transform = `translate3d(${hrLeft}px, 0, 0) scale(${leftMountainZoom})`;
    });
  }, []);

  return (
    <div className="main-page">
      <div className="main-page__container">
        <div className={['scroll', scrollVisible].join(' ')}>
          <h3 className="scroll__title">Scroll down</h3>
          <div className="scroll__img">
            <img src={scrollImg} alt="scroll_img" />
          </div>
        </div>
        <div className="parallax" id="parallax">
          <div
            className="parallax__mountain parallax__mountain-1"
            id="main-mountain"
          />
          <div className="parallax__fog" id="fog" />
          <div
            className="parallax__mountain parallax__mountain-2"
            id="right-mountain"
          />
          <div
            className="parallax__mountain parallax__mountain-3"
            id="left-mountain"
          />
        </div>
        <div className="main-content" id="content">
          <div className="main-content__body">
            <div className="main-content__header">
              <h1 className="main-content__title">Hello!</h1>
              <h2 className="main-content__subtitle">
                My name is Alex and it is my own blog where I will try to tell
                you about myself
              </h2>
            </div>
            <article className="main-content__article">
              <p className="main-content__text">
                This could be a long story. I apologize in advance because I am
                not a native speaker. But I learn it and hope that I will be
                better in future.
              </p>
              <p className="main-content__text">
                Let me try to introduce myself. I am Alekey Gorbach but I have
                pseudonym Alex Festern. I am from Belarus. I am 27 years old and
                my favorite activity is traveling but in current time I live in
                Minsk.
              </p>
              <p className="main-content__text">
                When I was younger I did not have a lot of money and I
                hitchhiked. I have visited different countries, met a lot of
                different people and got acquainted with their interesting
                cultures.
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
