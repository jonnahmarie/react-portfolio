import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            width: theme.spacing(16),
            height: theme.spacing(16)
        }
    }
}))

const About = () => {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <span>Hello</span>
        </div>
    )
}

export default About;