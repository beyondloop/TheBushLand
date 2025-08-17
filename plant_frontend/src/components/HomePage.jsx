import React from 'react';

import CategoryBar from '../components/CategoryBar';
import HeroSlider from '../components/HeroSlider';
import FeaturedProducts from '../components/FeaturedProducts';
import BannersSection from '../components/BannersSection';
import BestSeller from '../components/BestSeller';
import IndoorPlants from '../components/IndoorPlants';
import OutdoorPlants from '../components/OutdoorPlants';
import Accessories from '../components/Accessories';
import NewArrivals from '../components/NewArrivals';
import Testimonials from '../components/Testimonials';
import PlantOffers from '../components/PlantOffers';


const HomePage = () => {
  return (
    <>
      <HeroSlider />
      <FeaturedProducts />
      <BannersSection />
      <BestSeller limit={4}/>
      <IndoorPlants limit={4}/>
      <OutdoorPlants limit={4}/>
      <Accessories />
      <NewArrivals />
      <Testimonials />
      <PlantOffers />
      
    
    </>
  );
};

export default HomePage;
