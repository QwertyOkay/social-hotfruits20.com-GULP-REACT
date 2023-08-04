import React, { useState } from 'react';

import StopModal from 'components/stopModal/StopModal';
import Hero from 'components/hero/Hero';
import Footer from 'components/footer';
import Cookies from 'components/cookies/Cookies';

function Home() {
  const [isOpenStop, setIsOpenStop] = useState(true);
  const [isOpenCookies, setIsOpenCookies] = useState(true);

  return (
    <>
      {isOpenStop && <StopModal showStopModal={setIsOpenStop} />}
      <main>
        <Hero />
      </main>
      <Footer />
      {isOpenCookies && <Cookies showCookies={setIsOpenCookies} />}
    </>
  );
}

export default Home;
