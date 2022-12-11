import React from 'react'
import {Card, Fab, Grid, Tooltip, Typography} from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
//@ts-ignore
import AmePic from '../images/AmePic.jpg'

const About = () => {


  const handleClickGithub = () => {
    window.open("https://github.com/Anthonyme0328");
  };

  const handleClickLinkedIn = () => {
    window.open("https://www.linkedin.com/in/anthony-erickson-42621b1b9/");
  };


  return (


    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Grid container>
          <Grid item xs={3}>
            <img style={{margin: '.5em', boxShadow: '5px 10px #00000065'}} src={AmePic} alt='Pic of Me'/>
          </Grid>

          <Grid item xs={9}>
            <Card raised sx={{margin: '1em'}}>
              <Typography>
                about me
              </Typography>
            </Card>
          </Grid>
        </Grid>

      </Grid>

      <Grid  item xs={6}>
        <Card raised sx={{mt: '1em', mb: '1em'}}>

          <Grid container >

            <Grid item xs={4}>
                <Typography align='center'>
                  <Tooltip arrow placement='top' title='Send me an Email'>
                    <Fab variant='circular'>
                      <EmailIcon onClick={() => window.location.href = 'mailto:anthonymh14@hotmail.com' } fontSize='large'/>
                    </Fab>
                  </Tooltip>
                </Typography>
            </Grid>
            
            <Grid item xs={4}>
                <Typography align='center'>
                  <Tooltip arrow placement='top' title='Checkout my Github'>
                    <Fab variant='circular'>
                      <GitHubIcon onClick={handleClickGithub} fontSize='large'/>
                    </Fab>
                  </Tooltip>
                </Typography>
            </Grid>

            <Grid item xs={4}>
                <Typography align='center'>
                  <Tooltip arrow placement='top' title='Take a look at my LinkedIn'>
                    <Fab variant='circular'>
                      <LinkedInIcon onClick={handleClickLinkedIn} fontSize='large'/>
                    </Fab>
                  </Tooltip>
                </Typography>
            </Grid>

          </Grid>

        </Card>

      </Grid>
    </Grid>
  )
}

export default About