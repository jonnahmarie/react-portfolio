import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    icon: {
        minWidth: '30px',
    },
    item: {
        padding: 0
    }
}));

const Education = () => {
    const classes = useStyles();

    return(
        <Container>
            <div style={{textAlign:'center'}}>
                <h1>Education</h1>
            </div>
            <Grid container>
                <Grid item xs={12}>
                    <List>
                        <ListItem className={classes.item}>
                            <ListItemIcon className={classes.icon}>
                                <i className="fas fa-graduation-cap"></i>
                            </ListItemIcon>
                            <ListItemText primary='University of Otago | Dunedin, New Zealand' secondary='2020 | BSc in Zoology, Minor in Ecology' />
                        </ListItem>
                        <ListItem className={classes.item}>
                            <ListItemIcon className={classes.icon}>
                                <i className="fas fa-graduation-cap"></i>
                            </ListItemIcon>
                            <ListItemText primary='UCLA Extension | Los Angeles, California' secondary='2021 | Full Stack Web Development Certificate' />
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Education;