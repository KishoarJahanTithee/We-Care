import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner">
           <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.istockphoto.com/photos/doctor-man-with-stethoscope-in-hospital-picture-id638377134?b=1&k=20&m=638377134&s=170667a&w=0&h=eBTmu92tLLLN_FEl4qAxY9TYbR_MHx5LjVvuBby9HqE="
      alt="First slide"
    />
    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.istockphoto.com/photos/vaccination-or-drug-concept-image-picture-id1267049795?b=1&k=20&m=1267049795&s=170667a&w=0&h=cqxQQw2ExymRGGnk_BcsTSdgynxggVZX-x9UQc_ekCQ="
      alt="Second slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://media.istockphoto.com/photos/online-doctor-consultation-picture-id1224267234?b=1&k=20&m=1224267234&s=170667a&w=0&h=obwPQy5bkGcSfo8fJyuwcZ_Wj0zPRyP5R4jwWbIl9zg="
      alt="Third slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
  );
  };    

export default Banner;