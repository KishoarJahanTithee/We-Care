import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
        
        const [services, setServices] = useState([])
        useEffect( () => {
            fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
        } ,[])

    return (
        <div>
        <div className="mt-5 service-header">
       <h2>Our <span>Services</span></h2>
        </div>
        <div className="service-container row d-flex text-center mx-auto">
            {
                services.map(service =><Service
                key={service.id}
                name={service.name}
                service={service}
                ></Service>)
            }
        </div>
        </div>
    );
};

export default Services;