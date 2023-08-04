import Button from 'components/button/Button';
import styles from './Cookies.module.scss';

const Cookies = ({ showCookies }) => {
  return (
    <>
      <div className={styles.cookieBar}>
        <p>
          Our website uses cookies, and by using it, you implicitly consent to
          our Privacy Policy.
        </p>
        <Button title={'OK'} onClick={() => showCookies(false)} />
      </div>
    </>
  );
};

export default Cookies;
