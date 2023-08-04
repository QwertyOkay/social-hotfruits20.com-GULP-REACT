import {
  AiFillFacebook,
  AiFillYoutube,
  AiFillInstagram,
  AiFillLinkedin,
} from 'react-icons/ai';
// import { Falinkedin } from 'react-icons/fa';

import styles from './Social.module.scss';

function Social() {
  return (
    <ul className={styles.social}>
      <li>
        <a
          href="https://www.facebook.com"
          aria-label="facebook"
          className={styles.socialLink}
          target="_blank"
          rel="noreferrer"
        >
          <AiFillFacebook size={30} />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com"
          aria-label="instagram"
          className={styles.socialLink}
          target="_blank"
          rel="noreferrer"
        >
          <AiFillInstagram size={30} />
        </a>
      </li>
      <li>
        <a
          href="https://www.youtube.com/"
          aria-label="youtube"
          className={styles.socialLink}
          target="_blank"
          rel="noreferrer"
        >
          <AiFillYoutube size={30} />
        </a>
      </li>
      <li>
        <a
          href="https://linkedin.com/"
          aria-label="linkedin"
          className={styles.socialLink}
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin size={30} />
        </a>
      </li>
    </ul>
  );
}

export default Social;
