import React from 'react';
import { useParams } from 'react-router';
import './GetService.css';

const GetService = () => {
    const {serviceId} = useParams();
    return (
        <div>
            this booking {serviceId}
        </div>
    );
};

export default GetService;