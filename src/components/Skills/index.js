import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const useStyles = makeStyles((theme) => ({
    icon: {
        minWidth: '30px',
        color: '#9c2fe0'
    },
    item: {
        padding: 0
    }
}));

const Skills = () => {
    const classes = useStyles();
    
    return(
        <Container>
            <Grid container direction='row' justify='center' alignItems='flex-start' spacing={8}>
                <Grid item xs={3}>
                    <h3>Front End</h3>
                    <List>
                            <ListItem className={classes.item}>
                                <ListItemIcon className={classes.icon}>
                                    <i className="devicon-html5-plain"></i>
                                </ListItemIcon>
                                <ListItemText primary='HTML' />
                            </ListItem>
                            <ListItem className={classes.item}>
                                <ListItemIcon className={classes.icon}>
                                    <i className="devicon-css3-plain"></i>
                                </ListItemIcon>
                                <ListItemText primary='CSS' />
                            </ListItem>
                            <ListItem className={classes.item}>
                                <ListItemIcon className={classes.icon}>
                                    <i className="devicon-javascript-plain"></i>
                                </ListItemIcon>
                                <ListItemText primary='JavaScript' />
                            </ListItem>
                            <ListItem className={classes.item}>
                                <ListItemIcon className={classes.icon}>
                                    <i className="devicon-jquery-plain"></i>
                                </ListItemIcon>
                                <ListItemText primary='jQuery' />
                            </ListItem>
                            <ListItem className={classes.item}>
                                <ListItemIcon className={classes.icon}>
                                    <i className="devicon-react-original"></i>
                                </ListItemIcon>
                                <ListItemText primary='React' />
                            </ListItem>
                            <ListItem className={classes.item}>
                                <ListItemIcon className={classes.icon}>
                                    <i className="devicon-bootstrap-plain"></i>
                                </ListItemIcon>
                                <ListItemText primary='Bootstrap' />
                            </ListItem>
                            <ListItem className={classes.item}>
                                <ListItemIcon className={classes.icon}>
                                    <i className="devicon-materialui-plain"></i>
                                </ListItemIcon>
                                <ListItemText primary='Material UI' />
                            </ListItem>
                            <ListItem className={classes.item}>
                                <ListItemIcon className={classes.icon}>
                                    <i className="devicon-foundation-plain"></i>
                                </ListItemIcon>
                                <ListItemText primary='Foundation' />
                            </ListItem>
                    </List>
                </Grid>
                <Grid item xs={3}>
                    <h3>Back End</h3>
                    <ListItem className={classes.item}>
                        <ListItemIcon className={classes.icon}>
                            <i className="devicon-express-original"></i>
                        </ListItemIcon>
                        <ListItemText primary='Express' />
                    </ListItem>
                    <ListItem className={classes.item}>
                        <ListItemIcon className={classes.icon}>
                            <i className="devicon-nodejs-plain"></i>
                        </ListItemIcon>
                        <ListItemText primary='Node' />
                    </ListItem>
                    <ListItem className={classes.item}>
                        <ListItemIcon className={classes.icon}>
                            <i className="devicon-mysql-plain"></i>
                        </ListItemIcon>
                        <ListItemText primary='MySQL' />
                    </ListItem>
                    <ListItem className={classes.item}>
                        <ListItemIcon className={classes.icon}>
                            <i className="devicon-mongodb-plain"></i>
                        </ListItemIcon>
                        <ListItemText primary='MongoDB' />
                    </ListItem>
                    <ListItem className={classes.item}>
                        <ListItemIcon className={classes.icon}>
                            <i className="devicon-sequelize-plain"></i>
                        </ListItemIcon>
                        <ListItemText primary='Sequelize' />
                    </ListItem>
                </Grid>
                <Grid item xs={3}>
                    <h3>Tools</h3>
                    <ListItem className={classes.item}>
                        <ListItemIcon className={classes.icon}>
                            <i className="devicon-git-plain"></i>
                        </ListItemIcon>
                        <ListItemText primary='Git' />
                    </ListItem>
                    <ListItem className={classes.item}>
                        <ListItemIcon className={classes.icon}>
                            <i className="devicon-github-original"></i>
                        </ListItemIcon>
                        <ListItemText primary='GitHub' />
                    </ListItem>
                    <ListItem className={classes.item}>
                        <ListItemIcon className={classes.icon}>
                            <i className="devicon-gitlab-plain"></i>
                        </ListItemIcon>
                        <ListItemText primary='GitLab' />
                    </ListItem>
                    <ListItem className={classes.item}>
                        <ListItemIcon className={classes.icon}>
                            <i className="devicon-npm-original-wordmark"></i>
                        </ListItemIcon>
                        <ListItemText primary='npm' />
                    </ListItem>
                    <ListItem className={classes.item}>
                        <ListItemIcon className={classes.icon}>
                            <i className="devicon-heroku-original"></i>
                        </ListItemIcon>
                        <ListItemText primary='Heroku' />
                    </ListItem>
                    <ListItem className={classes.item}>
                        <ListItemIcon className={classes.icon}>
                            <i className="devicon-visualstudio-plain"></i>
                        </ListItemIcon>
                        <ListItemText primary='Visual Studio Code' />
                    </ListItem>
                </Grid>
                <Grid item xs={3}>
                    <h3>Other</h3>
                    <ListItem className={classes.item}>
                        <ListItemIcon className={classes.icon}>
                            <i className="devicon-illustrator-plain"></i>
                        </ListItemIcon>
                        <ListItemText primary='Illustrator' />
                    </ListItem>
                    <ListItem className={classes.item}>
                        <ListItemIcon className={classes.icon}>
                            <i className="devicon-photoshop-plain"></i>
                        </ListItemIcon>
                        <ListItemText primary='Photoshop' />
                    </ListItem>
                    <ListItem className={classes.item}>
                        <ListItemIcon className={classes.icon}>
                            <i className="devicon-hxd-plain"></i>
                        </ListItemIcon>
                        <ListItemText primary='XD' />
                    </ListItem>
                    <ListItem className={classes.item}>
                        <ListItemIcon className={classes.icon}>
                            <i className="devicon-handlebars-plain"></i>
                        </ListItemIcon>
                        <ListItemText primary='Handlebars' />
                    </ListItem>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Skills;