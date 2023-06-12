import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import TestimonialSection from '../../Pages/TestimonialSection/TestimonialSection';
import OurServices from '../../Pages/OurServices/OurServices';


const Home = () => {
    return (
        <div >
        <Helmet>
        <title>FluentFun | Home</title>
      </Helmet>
            <Banner></Banner>
            <TestimonialSection></TestimonialSection>
            <OurServices></OurServices>
        </div>
    );
};

export default Home;