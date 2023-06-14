import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import TestimonialSection from '../../Pages/TestimonialSection/TestimonialSection';
import OurServices from '../../Pages/OurServices/OurServices';
import PopularInstructor from '../../Pages/PopularInstructor/PopularInstructor';
import TopClasses from '../../Pages/TopClasses/TopClasses';
import ImageGallery from '../../Pages/ImagesGallery/ImagesGallery';


const Home = () => {
    return (
        <div >
        <Helmet>
        <title>FluentFun | Home</title>
      </Helmet>
            <Banner></Banner>
            <TopClasses></TopClasses>
            <PopularInstructor></PopularInstructor>
            <ImageGallery></ImageGallery>
            <OurServices></OurServices>

            <TestimonialSection></TestimonialSection>
        </div>
    );
};

export default Home;