import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AssignmentIcon from '@material-ui/icons/Assignment';

import Resume from '../../assets/data/JonnahMariePangilinanResume2021.pdf';

const useStyles = makeStyles((theme) => ({
    icon: {
        color: '#714ce0',
        '&:hover, &.Mui-focusVisible': {
            color: '#aac9eb',
            backgroundColor: '#ecf2fd'
        }
    },
    link: {
        color: '#e610e2',
        textDecoration: 'none',
        '&:hover, &:active, &.Mui-focusVisible': {
            color: '#714ce0 '
        }
    },
    resume: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        color: '#e610e2',
        textDecoration: 'none',
        '&:hover, &:active, &.Mui-focusVisible': {
            color: '#714ce0 '
        }
    }
}));

const Footer = () => {
    const classes = useStyles();

    return(
        <Container>
            <Grid container direction='row' justify='center' alignItems='center' spacing={0}>
                <Grid item xs={3} />
                <Grid item xs={4}>
                    <IconButton className={classes.icon} aria-label='GitHub.com' onClick={() => window.open('https://github.com/jonnahmarie')}><GitHubIcon /></IconButton>
                    <IconButton className={classes.icon} aria-label='jonnah.marie@gmail.com' onClick={() => window.open('mailto:jonnah.marie@gmail.com')}><EmailIcon /></IconButton>
                    <IconButton className={classes.icon} aria-label='LinkedIn.com' onClick={() => window.open('https://www.linkedin.com/in/jonnahmariepangilinan/')}><LinkedInIcon /></IconButton>
                </Grid>
                <Grid item xs={2}>
                    <a href={Resume} target='_blank' rel='noreferrer' className={classes.resume}><AssignmentIcon style={{color:'#714ce0'}} /> View Resume</a>
                </Grid>
                <Grid item xs={3} />
            </Grid>
            <span>
            Powered by <a href='https://reactjs.org/' target='_blank' rel='noreferrer' className={classes.link}>React <i className="devicon-react-original"></i></a> | Developed and Designed by Jonnah Marie Pangilinan &copy; 2021
            </span>
        </Container>
    )
}

export default Footer;