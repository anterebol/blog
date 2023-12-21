import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export const socialLinks = {
  gitHub: {
    link: 'https://github.com/anterebol',
    icon: <FaGithub />,
  },
  instagram: {
    link: 'https://www.instagram.com/alex_festern/',
    icon: <FaInstagram />,
  },
  linkedin: {
    link: 'https://www.linkedin.com/in/aleksey-gorbach-221854212/',
    icon: <FaLinkedin />,
  },
  email: {
    link: 'mailto:anterebol@gmail.com',
    icon: <MdEmail />,
  },
};
