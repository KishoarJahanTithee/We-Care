import React from 'react';
import { useParams } from 'react-router';
import './GetService.css';
import {data} from './Data';


const GetService = () => {
    const {serviceId} = useParams();

    let getService = data.find((service) => service.id == serviceId);

    return (
        <div className="knowServiceDetail">
            <h2>{getService.name}</h2>
            {/* this booking {serviceId} */}
            <img src={getService.img} alt=" " />
            <p>{getService.description}</p>
            <button className="">BOOK SERVICE</button>
        </div>
    );
};

export default GetService;