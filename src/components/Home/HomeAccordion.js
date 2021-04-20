import React, { Component } from 'react';
// import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Work from '../Work';
import Skills from '../Skills';
import Education from '../Education';
import About from '../About';

const Accordion = withStyles({
  root: {
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    flexDirection: 'column',
    
    '&:hover': {
      backgroundColor: '#e8effd'
    }
  },
  content: {
    marginBottom: 0,
  },
  expandIcon: {
    marginRight: 0,
    paddingTop:0,
    color: '#9c2fe0'
  }
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

class HomeAccordion extends Component {
  render() {
    return (
      <div>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='project-content' id='project-header'>
            <h1>Projects</h1>
          </AccordionSummary>
          <AccordionDetails>
            <Work />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='skills-content' id='skills-header'>
            <h1>Skills</h1>
          </AccordionSummary>
          <AccordionDetails>
            <Skills />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='education-content' id='education-content'>
            <h1>Education</h1>
          </AccordionSummary>
          <AccordionDetails>
            <Education />
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='about-content' id='about-content'>
            <h1>About</h1>
          </AccordionSummary>
          <AccordionDetails>
            <About />
          </AccordionDetails>
        </Accordion>
      </div>
    )
  }
}

export default HomeAccordion;