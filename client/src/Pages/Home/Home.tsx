import React from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Services from '../../components/Services/Services';
import DownBar from '../../components/DownBar/DownBar';

const Home = () => {
  return (
    <div>
        <Header />
        <Hero />
        <Services />
        <DownBar />
    </div>
  )
}

export default Home