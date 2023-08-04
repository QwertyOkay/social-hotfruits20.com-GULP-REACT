import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IoMdArrowRoundBack } from 'react-icons/io';
import styles from './Back.module.scss';

const Back = ({ backLink }) => {
  return (
    <div className={styles.backWrap}>
      <Link to={backLink} className={styles.link}>
        <IoMdArrowRoundBack className={styles.svg} size={16} />
        Go back
      </Link>
    </div>
  );
};

export default Back;

Back.propTypes = {
  backLink: PropTypes.string.isRequired,
};
