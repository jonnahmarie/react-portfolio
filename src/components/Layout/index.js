import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import About from '../About';
import Education from '../Education';
import Skills from '../Skills';
import Work from '../Work';

const Layout = () => {
    return(
        <Container>
            <div className='maincontainer'>
                <Grid container spacing={1} direction='column' justify='space-evenly' alignItems='center'>
                    <Grid item>
                        <Work />
                    </Grid>
                    <Grid item>
                        <Skills />
                    </Grid>
                    <Grid item>
                        <Education />
                    </Grid>
                    <Grid item>
                        <About />
                    </Grid>
                </Grid>
            </div>
        </Container>
    )
}

export default Layout;