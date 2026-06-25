import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Pricing from './Pricing';
import Education from './Education';
import Stats from './Stats';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';
import Navbar  from '../Navbar';
function Homepage() {
    return ( 
        <>
        <Hero/>
        <Awards/>
        <Stats/>
        <Pricing/>
        <Education/>
        <OpenAccount/>
        <Footer/>
        <Navbar/>
        </>
     );
}

export default Homepage;