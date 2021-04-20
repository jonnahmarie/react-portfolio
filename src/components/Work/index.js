import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import UWU from '../../assets/img/projects/UWU.gif'
import CodeQuiz from '../../assets/img/projects/Code-Quiz-Demo.gif';
import Burger from '../../assets/img/projects/burger.jpg';
import Cest from '../../assets/img/projects/cest-screenshot.jpg';
import EmployeeDex from '../../assets/img/projects/employee-dex.jpg';
import DayPlanner from '../../assets/img/projects/day-planner.jpg';

const Work = () => {
    return(
        <Container>
            <Grid container justify='space-between' alignItems='center' direction=
                'row' spacing={4}>
                <Grid item className='itemDiv' xs={6} lg={4}>
                    <h3>Pop Culture Search Engine</h3>
                    <img src={UWU} alt="UWU Project" className='projectImg' />
                    <p>
                        UWU is a search engine that allows user to access recommendations for animes, movies, or video games. This is a simple application that utilizes jQuery and 3 separate APIs.
                    </p>
                    <Grid container alignItems='center' direction='row' spacing={2}>
                        <Grid item xs={6}>
                            <Button href='https://github.com/vtaymany/uwu' color='primary'>Github Repository</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button href='https://vtaymany.github.io/uwu/' color='primary'>Live Application</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className='itemDiv' xs={6} lg={4}>
                    <h3>Code Quiz</h3>
                    <img src={CodeQuiz} alt="Code Quiz" className='projectImg' />
                    <p>
                        A simple application with a functional code quiz that utilizes HTML, Bootstrap, and JavaScript. This was an assignment for Unit 4 Web APIs for UCLA's Coding Bootcamp.
                    </p>
                    <Grid container alignItems='center' direction='row' spacing={2}>
                        <Grid item xs={6}>
                            <Button href='https://github.com/jonnahmarie/Code-Quiz' color='primary'>Github Repository</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button href='https://jonnahmarie.github.io/Code-Quiz/' color='primary'>Live Application</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className='itemDiv' xs={6} lg={4}>
                    <h3>Burger Logger</h3>
                    <img src={Burger} alt="Burger Logger" className='projectImg' />
                    <p>
                        A burger logging application that utilizes MySQL, Node.js, Express.js, Handlebars and a self-made ORM. This was an assignment for Unit 13 MVC for UCLA's Coding Bootcamp.
                    </p>
                    <Grid container alignItems='center' direction='row' spacing={2}>
                        <Grid item xs={6}>
                            <Button href='https://github.com/jonnahmarie/burger' color='primary'>Github Repository</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button href='https://damp-caverns-08709.herokuapp.com/' color='primary'>Live Application</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className='itemDiv' xs={6} lg={4}>
                    <h3>C'est Belle Events</h3>
                    <img src={Cest} alt="C'est Belle Events" className='projectImg' />
                    <p>
                        An application built for an established East Coast based event planning business who wanted to maintain a web presence while being maintenance free. This application is built using the MERN stack. 
                    </p>
                    <Grid container alignItems='center' direction='row' spacing={2}>
                        <Grid item xs={6}>
                            <Button href='https://github.com/RickyBlaze100/cest.github.io' color='primary'>Github Repository</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button href='https://polar-wave-44598.herokuapp.com/' color='primary'>Live Application</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className='itemDiv' xs={6} lg={4}>
                    <h3>Employee Directory</h3>
                    <img src={EmployeeDex} alt="EmployeeDex" className='projectImg' />
                    <p>
                        A sortable employee directory application built using ReactJS and the CSS framework, Bootstrap. This was an assignment for Unit 19 React for UCLA's Coding Bootcamp.
                    </p>
                    <Grid container alignItems='center' direction='row' spacing={2}>
                        <Grid item xs={6}>
                            <Button href='https://github.com/jonnahmarie/employee-dex' color='primary'>Github Repository</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button href='https://serene-stream-10506.herokuapp.com/' color='primary'>Live Application</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className='itemDiv' xs={6} lg={4}>
                    <h3>Day Planner</h3>
                    <img src={DayPlanner} alt="Day Planner" className='projectImg' />
                    <p>
                        A simple calendar application that utilizes jQuery, local storage, and the Moment.js API to set the daily schedule. This was an assignment for Unit 5 Third Party APIs for UCLA's Coding Bootcamp.
                    </p>
                    <Grid container alignItems='center' direction='row' spacing={2}>
                        <Grid item xs={6}>
                            <Button href='https://github.com/jonnahmarie/Day-Planner' color='primary'>Github Repository</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button href='https://jonnahmarie.github.io/Day-Planner/' color='primary'>Live Application</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>     
        </Container>
    )
}

export default Work;