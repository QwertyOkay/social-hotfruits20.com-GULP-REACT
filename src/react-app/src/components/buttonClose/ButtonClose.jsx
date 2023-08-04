import { GrFormClose } from 'react-icons/gr';

import styles from './ButtonClose.module.scss';

function ButtonClose({ type = 'button', onClick }) {
  return (
    <button type={type} className={styles.closeBtn} onClick={onClick}>
      <GrFormClose size={40} />
    </button>
  );
}

export default ButtonClose;
