import React from 'react';
import Main from '../../components/main/Main';
import Offer from '../../components/offer/Offer';
import Banner from '../../components/banner/Banner';

const Home = () => {
  return (
    <div>
      <Banner/>
      <Main />
      <Offer />
    </div>
  )
}

export default Home