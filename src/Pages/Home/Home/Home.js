import React from 'react';
import Banner from '../Banner/Banner';
import TravellerSay from '../TravellerSay/TravellerSay';
import TravelPackages from '../TravelPackages/TravelPackages';
import WhyTourx from '../WhyTourx/WhyTourx';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TravelPackages></TravelPackages>
            <WhyTourx></WhyTourx>
            <TravellerSay></TravellerSay>
        </div>
    );
};

export default Home;