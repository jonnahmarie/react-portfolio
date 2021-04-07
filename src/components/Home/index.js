import React from 'react';

import Navbar from '../Navbar';
import Work from '../Work';
import Skills from '../Skills';
import Education from '../Education';
import About from '../About';
import Footer from '../Footer';

const Home = () => {
    return(
        <div>
            <Navbar />
            <Work />
            <Skills />
            <Education />
            <About />
            <Footer />
        </div>
    )
}

export default Home;