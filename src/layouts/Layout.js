import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Carousel from '../components/ui/Carousel';
import Footer from '../components/Footer';
const Layout = ({ children }) => {
    return (
        <div id="page-top">  
            
            <Navigation />
           
            {children}

            <Footer/>
           
        </div>
    );
};
export default Layout;