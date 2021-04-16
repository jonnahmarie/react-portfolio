import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper  from '@material-ui/core/Paper';

import About from '../About/TitleCard.js';
import Education from '../Education/TitleCard.js';
import Skills from '../Skills/TitleCard.js';
import Work from '../Work/TitleCard.js';

const useStyles = (makeStyles(theme => ({
    paper: {
        padding: '1%',
        marginTop: '2%',
        height: theme.spacing(70)
    }
})))

const Layout = () => {
    const classes = useStyles();

    return(
        <Container>
            <Paper elevation={3} className={classes.paper}>
                <Grid container spacing={0}>
                    <Grid item xs={3}>
                        <Work />
                    </Grid>
                    <Grid item xs={3}>
                        <Skills />
                    </Grid>
                    <Grid item xs={3}>
                        <Education />
                    </Grid>
                    <Grid item xs={3}>
                        <About />
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    )
}

export default Layout;