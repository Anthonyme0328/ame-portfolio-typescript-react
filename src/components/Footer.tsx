import React from 'react'
import {Card, Fab, Grid, Tooltip, Typography} from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

//@ts-ignore
import MovingComponent from 'react-moving-text'

const Footer = () => {

  const handleClickGithub = () => {
    window.open("https://github.com/Anthonyme0328");
  };

  const handleClickLinkedIn = () => {
    window.open("https://www.linkedin.com/in/anthony-erickson-42621b1b9/");
  };



  return (
    <MovingComponent
  type="slideInFromTop"
  duration="850ms"
  delay="0s"
  direction="normal"
  timing="linear"
  iteration="1"
  fillMode="forwards">
    <Card raised sx={{m: 'auto', mt: '5em' , height: '5em', width: '25em', borderRadius: '25em', display: 'flex', justifySelf: 'center'  }}>
      <Grid container >
        <Grid item xs={4}>
            <Typography align='center'>
              <Tooltip arrow placement='top' title='Send me an Email'>
                <Fab variant='circular' sx={{mt: '1em'}}>
                  <EmailIcon onClick={() => window.location.href = 'mailto:anthonymh14@hotmail.com' } fontSize='large'/>
                </Fab>
              </Tooltip>
            </Typography>
        </Grid>
            
        <Grid item xs={4}>
            <Typography align='center'>
              <Tooltip arrow placement='top' title='Checkout my Github'>
                <Fab variant='circular' sx={{mt: '1em'}}>
                  <GitHubIcon onClick={handleClickGithub} fontSize='large'/>
                </Fab>
              </Tooltip>
            </Typography>
        </Grid>

        <Grid item xs={4}>
            <Typography align='center'>
              <Tooltip arrow placement='top' title='Take a look at my LinkedIn'>
                <Fab variant='circular' sx={{mt: '1em'}}>
                  <LinkedInIcon onClick={handleClickLinkedIn} fontSize='large'/>
                </Fab>
              </Tooltip>
            </Typography>
        </Grid>
      </Grid>
    </Card>
</MovingComponent>

    

  )
}

export default Footer