import React from 'react';

import Navbar from '../Navbar';
import Footer from '../Footer';
import HomeAccordion from './HomeAccordion.js';

const Home = () => {
    return(
        <div>
            <Navbar />
            <HomeAccordion />
            <div className='footer'>
                <Footer />
            </div>
        </div>
    )
}

export default Home;