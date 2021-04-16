import React from 'react';

import Navbar from '../Navbar';
import Layout from '../Layout';
import Footer from '../Footer';

const Home = () => {
    return(
        <div display="flex">
            <Navbar />
            <Layout />
            <Footer />
        </div>
    )
}

export default Home;