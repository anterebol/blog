import textIcon from '../../assets/editorIcons/add-text.svg';
import imageIcon from '../../assets/editorIcons/add-image.svg';
import listIcon from '../../assets/editorIcons/list.svg';
import lineIcon from '../../assets/editorIcons/line.svg';
import sliderIcon from '../../assets/editorIcons/slider.svg';
import h1 from '../../assets/editorIcons/h1.svg';
import h2 from '../../assets/editorIcons/h2.svg';
import h3 from '../../assets/editorIcons/h3.svg';
import h5 from '../../assets/editorIcons/h5.svg';
import zeroBlockIcon from '../../assets/editorIcons/zero-block.svg';
import addImages from '../../assets/editorIcons/add-images.svg';

export const editorIcons = {
  text: [
    {
      icon: textIcon,
      title: 'text',
      tag: 'p',
      defaultClasses: ['default-text'],
    },
  ],
  title: [
    {
      icon: h1,
      title: 'title',
      tag: 'h1',
      defaultClasses: ['default-title'],
    },
    {
      icon: h2,
      tag: 'h2',
      title: 'subtitle',
      defaultClasses: ['default-title'],
    },
    {
      icon: h3,
      tag: 'h3',
      title: 'middle',
      defaultClasses: ['default-title'],
    },
    {
      icon: h5,
      tag: 'h5',
      title: 'small',
      defaultClasses: ['default-title'],
    },
  ],
  image: [
    {
      icon: imageIcon,
      title: 'image',
      tag: 'img',
      defaultClasses: ['default-img'],
    },
    {
      icon: addImages,
      title: 'images',
      tag: 'images',
      defaultClasses: ['default-images'],
      ul: [],
    },
    {
      icon: sliderIcon,
      title: 'slider',
      tag: 'slider',
      defaultClasses: ['default-slider'],
      ul: [],
    },
  ],
  list: [
    {
      icon: listIcon,
      title: 'list',
      ul: ['Example text...'],
      tag: 'ul',
      defaultClasses: ['defaylt-list'],
    },
  ],
  'zero block': [
    {
      icon: zeroBlockIcon,
      title: 'block',
      tag: 'div',
      defaultClasses: ['zero-block'],
    },
  ],
  line: [
    {
      icon: lineIcon,
      title: 'line',
      tag: 'line',
      defaultClasses: ['blog-line'],
    },
  ],
};
