import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Grow from '@material-ui/core/Grow';
import Avatar from '../../assets/img/me.png';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const Navbar = () => {
  const [grow, setGrow] = useState(false);

  useEffect(() => {
      setGrow(true);
  }, []);

  return (
    <Container style={{marginTop:'2%'}}>
        <Grow in={grow} timeout={700} transition>
            <Paper elevation={3} style={{padding:'2%'}}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <img src={Avatar} alt="Avatar" style={{maxWidth:'100%', height:'auto'}} className='rounded' />
                    </Grid>
                    <Grid item xs={9} style={{paddingLeft:'5%'}}>
                        <h2>
                            Hi there!
                        </h2>
                        <h1>
                            I'm Jonnah Marie Pangilinan, a Full Stack Developer based in Los Angeles.
                        </h1>
                        <h2>
                            Driven and inspired by web interfaces, I am passionate about creating meaningful, immersive and responsive websites through thoughtful design and programming.
                        </h2>
                    </Grid>
                </Grid>
            </Paper>
        </Grow>
    </Container>
  );
}

export default Navbar;