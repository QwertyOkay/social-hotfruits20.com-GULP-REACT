import React, { useState } from 'react';

import Container from 'components/container/Container';
import FormModal from 'components/formModal/FormModal';

import styles from './Hero.module.scss';
import homeImage from 'images/game.jpg';
import Button from 'components/button/Button';
import Section from 'components/section/Section';

function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Section>
      <Container className={styles.heroContainer}>
        <h1 className={styles.heroTitle}>
          Engage in a free social gaming activity!
        </h1>
        <div className={styles.homeImgWrap}>
          <img
            src={homeImage}
            alt="Colt Lightning poster"
            width="1200"
            height="600"
            className={styles.gameImg}
          />
        </div>
        <div className={styles.btnContainer}>
          <Button
            variant="btnForm"
            title={'Play'}
            onClick={() => setIsOpen(true)}
          />

          {isOpen && <FormModal setIsOpen={setIsOpen} />}
        </div>
      </Container>
    </Section>
  );
}

export default Hero;
