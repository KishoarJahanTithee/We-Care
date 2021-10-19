import React from 'react';
import Banner from './Banner/Banner';
import FrontWarriors from './FrontWarriors/FrontWarriors';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <Services></Services>
           <FrontWarriors></FrontWarriors>
        </div>
    );
};

export default Home;