import React from 'react'
import {Card, Grid, Typography, Tooltip, Avatar} from '@mui/material'

//@ts-ignore
import AmePic from '../images/AmePic.jpg'
//@ts-ignore
import MovingComponent from 'react-moving-text'


const About = () => {



  return (
    <Grid container spacing={2}>
      <Grid item xs={6} sm={6} md={6} lg={4} xl={4}>
        <MovingComponent
          type="popIn"
          duration="950ms"
          delay="0s"
          direction="normal"
          timing="linear"
          iteration="1"
          fillMode="forwards">
            <Tooltip placement='right' title="What a Handsome Devil">
              <img style={{margin: '.5em', boxShadow: '5px 10px #2A4849', border: 'solid', borderColor: '#EDF2F4', borderRadius: '5px'}} src={AmePic} alt='Pic of Me'/>
            </Tooltip>
        </MovingComponent>
      </Grid>
      <Grid item xs={6} sm={6} md={6} lg={8} xl={8}>
        <Card raised sx={{margin: '1em', height: 'auto', ml: '6.5em', backgroundColor: '#02A2BA', border: 'solid', borderColor: '#EDF2F4'}}>
          <MovingComponent
            type="fadeInFromTop"
            duration="700ms"
            delay="0s"
            direction="normal"
            timing="linear"
            iteration="1"
            fillMode="both">
              <Typography variant='h4' align='center' sx={{color: '#222E50'}}>
                About Me
              </Typography> 
          </MovingComponent>
          <MovingComponent
            type="fadeInFromBottom"
            duration="700ms"
            delay="0s"
            direction="normal"
            timing="linear"
            iteration="1"
            fillMode="both">
              <Typography variant='body1' sx={{mt: '2em', ml: '.5em', mr: '.5em', mb: '1em', fontFamily: 'Avantgarde, TeX Gyre Adventor, URW Gothic L, sans-serif'}}>
                Hi my name is Anthony, I am a Full Stack developer with proven ability to excel in both autonomous and collaborative environments while staying focused on producing quality work under strict deadlines. I thoroughly enjoy creating Full Stack applications with an emphasis on mobile accessibility, quality back-end, and sound database design, and am eager to obtain a challenging position that will facilitate ongoing learning and expansion of my skillset.
              </Typography>
              
          </MovingComponent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default About