import React from 'react';
import HeroSection from '../../HeroSection';
import Footer from '../Footer/Footer';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Navbar from '../../Navbar';

function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjFour} />
      <Footer/>
    </>
  );
}

export default Home;