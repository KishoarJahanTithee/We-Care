import React from 'react';
import Warrior from '../Warrior/Warrior';
import './FrontWarriors.css';

const warriors = [
    {
        img: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
        name: 'Anna Weasley',
        specialist: 'Gynocologyst'
    },
    {
        img: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        name: 'Nicolas Flammel',
        specialist: 'Medicine'
    },
    {
        img: 'https://images.unsplash.com/photo-1591604021695-0c69b7c05981?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
        name: 'Luna Lovegood',
        specialist: 'Orthopedic'
    }
]

const FrontWarriors = () => {
    return (
        <div className="container">
            <h2>Our Front <span>WARRIORS</span></h2>
            <div className="row mx-auto d-flex text-center doctor-container">
{
    warriors.map(warrior => <Warrior
    key={warrior.name}
    warrior={warrior}
    ></Warrior>)
}
            </div>
        </div>
    );
};

export default FrontWarriors;