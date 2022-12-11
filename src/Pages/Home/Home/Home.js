import React from 'react';
import Banner from '../Banner/Banner';
import Info from '../Info/Info';
import MyProjects from '../MyProjects/MyProjects';
import Skill from '../Skill/Skill';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MyProjects></MyProjects>
            <Skill></Skill>
            <Info></Info>
        </div>
    );
};

export default Home;