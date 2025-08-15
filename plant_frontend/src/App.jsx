import React from 'react'
import Header from './components/Header'
import CategoryBar from './components/CategoryBar'
import HeroSlider from './components/HeroSlider'
import FeaturedProducts from './components/FeaturedProducts'
import BannersSection from './components/BannersSection'
import BestSeller from './components/BestSeller'
import IndoorPlants from './components/IndoorPlants'
import OutdoorPlants from './components/OutdoorPlants'
import Accessories from './components/Accessories'
import Testimonials from './components/Testimonials'
import PlantOffers from './components/PlantOffers'
import Footer from './components/Footer'
import NewArrivals from './components/NewArrivals'

const App = () => {
  return (
    <div>
     <Header/>
     <CategoryBar/>
     <HeroSlider/>
     <FeaturedProducts/>
     <BannersSection/>
     <BestSeller/>
     <IndoorPlants/>
     <OutdoorPlants/>
     <Accessories/>
     <NewArrivals/>
     <Testimonials/>
     <PlantOffers/>
     <Footer/>
    </div>
  )
}

export default App
