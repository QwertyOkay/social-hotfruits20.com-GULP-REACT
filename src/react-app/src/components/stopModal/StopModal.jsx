import Modal from 'components/modal';
import Button from 'components/button/Button';
import styles from './StopModal.module.scss';

function StopModal({ showStopModal }) {
  return (
    <Modal variant="stopModal" closeModal={() => showStopModal(true)}>
      <div className={styles.popUpText}>
        <p>
          This website only offers free social games and no real-money gaming or
          betting. This website's content is intended for people over the age of
          18.
        </p>
        <p>Do you want to keep using the site?</p>
      </div>
      <div className={styles.popUpButtons}>
        <Button title={'YES'} onClick={() => showStopModal(false)}></Button>
        <Button
          variant="btnNo"
          title={'NO'}
          onClick={() => showStopModal(true)}
        ></Button>
      </div>
    </Modal>
  );
}

export default StopModal;
