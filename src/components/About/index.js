import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import Avatar from '../../assets/img/me.png';

const About = () => {
    return(
        <Container>
            <Grid container>
                <Grid item xs={4}>
                    <img src={Avatar} alt='avatar' className='rounded' style={{maxWidth:'70%'}} />
                </Grid>
                <Grid item xs={8}>
                    <p>
                        I am a web developer that would describe myself as optimistic and growth-oriented. I have had an interest in web design ever since the tender age of 9 when I saw how a few lines of basic HTML could turn my Neopets profile pages ('userlookups') from drab to fab. This interest spread to Myspace and from there spread to me creating blog templates for Blogger.com. Despite spending my adolescence teaching myself the fundamentals of HTML and CSS, it never occurred to me that I could actually pursue this as a career. After a series of odd jobs and receiving my Bachelor's degree in Zoology, I made the decision to turn my childhood hobby into my adult career path.
                    </p>
                    <p>
                        I am always eager for a challenge and have been finding myself searching for <em>that something</em> that would test my limits. I have found that web development aligns with my innate drive for <span>learning new ideas and problem solving</span> while allowing me to continue <span>exploring my creative side</span>. Having worked as a graphic designer, I am driven and inspired by web interfaces and have a passion for creating meaningful, immersive and responsive web applications. 
                    </p>
                    <p>
                        When I'm not coding, you can find me outside in the garden, or inside exploring knitting and crocheting patterns or trying out new cooking and baking recipes.
                    </p>
                </Grid>
            </Grid>
        </Container>
    )
}

export default About;