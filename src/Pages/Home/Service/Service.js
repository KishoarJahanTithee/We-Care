import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {id, name, img, description} = service;
    return (
        <div className="card service text-center mx-auto col-3">
           <h4>{name}</h4>
            <p>{description}</p>
            <img src={img} alt="" />
            <Link to={`/service/${id}`}>
            <button className="btn btn-light">Get {name.toLowerCase()}</button>
            </Link>
           
        </div>
    );
};

export default Service;