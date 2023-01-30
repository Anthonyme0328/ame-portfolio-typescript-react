import React from 'react'
import {Card, Typography, CardHeader, Grid, CardMedia, CardContent, Button} from '@mui/material'

//@ts-ignore
import PsyGame from '../images/PsyGame.png'
//@ts-ignore
import RPS from '../images/RPS.png'
//@ts-ignore
import OSS from '../images/SplashStore.png'
//@ts-ignore
import ToDo from '../images/toDo.png'

//@ts-ignore
import MovingComponent from 'react-moving-text'

const Works = () => {

  const handleClickOne = () => {
    window.open('https://anthonyme0328.github.io/WordGuessGame/')
  }

  const handleClickTwo = () => {
    window.open('https://anthonyme0328.github.io/Rock_Paper_Scissors_Game/')
  }

  const handleClickThree = () => {
    window.open('https://anthonyme0328.github.io/StoreSplash1/')
  }

  const handleClickFour = () => {
    window.open('https://anthonyme0328.github.io/to-do-list/')
  }

  const handleClickFive = () => {
    window.open('https://anthonyme0328.github.io/WordGuessGame/')
  }

  const handleClickSix = () => {
    window.open('https://anthonyme0328.github.io/WordGuessGame/')
  }

return (
  <>
  {/* start of Grid container with spacing to give space between cards */}
    <Grid container spacing={2}>
      {/* start of individual mui grid items each share half the space of 12 so expect 3 rows of 2 cards */}
      <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
        {/* item 1 */}
        <MovingComponent
          type="slideInFromLeft"
          duration="700ms"
          delay="0s"
          direction="normal"
          timing="linear"
          iteration="1"
          fillMode="forwards">
            <Card raised sx={{ marginTop: '1em', width: '30em', height: 'auto', ml: 'auto', mr: 'auto', border: 'solid', borderColor: '#EDF2F4'}}>
              <CardMedia image={PsyGame} title='Psy Game' component='img' ></CardMedia>
              <CardContent>
                  <Typography>
                    One
                  </Typography>
              </CardContent> 
              <Button sx={{mt: '1em', mb: '1em', ml: '1em'}} size='small' variant='outlined' onClick={handleClickOne}>Click</Button>
            </Card>
        </MovingComponent>
      </Grid>

        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          {/* item 2 */}
          <MovingComponent
          type="slideInFromRight"
          duration="700ms"
          delay="0s"
          direction="normal"
          timing="linear"
          iteration="1"
          fillMode="forwards">
            <Card raised sx={{ marginTop: '1em', width: '30em', height: 'auto', ml: 'auto', mr: 'auto', border: 'solid', borderColor: '#EDF2F4'}}>
            <CardMedia image={RPS} title='Rock Paper Scissors' component='img'></CardMedia>
            <CardContent>
              <Typography>
                Two
              </Typography>
            </CardContent>
            <Button sx={{mt: '1em', mb: '1em', ml: '1em'}} size='small' variant='outlined' onClick={handleClickTwo}>Click</Button>
            </Card>
        </MovingComponent>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          {/* item 3 */}
          <MovingComponent
          type="slideInFromLeft"
          duration="700ms"
          delay=".25s"
          direction="normal"
          timing="linear"
          iteration="1"
          fillMode="forwards">
            <Card raised sx={{ marginTop: '1em', width: '30em', height: 'auto', ml: 'auto', mr: 'auto', border: 'solid', borderColor: '#EDF2F4'}}>
            <CardMedia image={OSS} title='Oganic Store Splash' component='img'></CardMedia>
            <CardContent>
              <Typography>
                Three
              </Typography>
            </CardContent>
            <Button sx={{mt: '1em', mb: '1em', ml: '1em'}} size='small' variant='outlined' onClick={handleClickThree}>Click</Button>
            </Card>
        </MovingComponent>
        </Grid>

      <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
        {/* item 4 */}
        <MovingComponent
          type="slideInFromRight"
          duration="700ms"
          delay=".25s"
          direction="normal"
          timing="linear"
          iteration="1"
          fillMode="forwards">
            <Card raised sx={{ marginTop: '1em', width: '30em', height: 'auto', ml: 'auto', mr: 'auto', border: 'solid', borderColor: '#EDF2F4'}}>
            <CardMedia image={ToDo} title='Four' component='img'></CardMedia>
            <CardContent>
              <Typography>
                Four
              </Typography>
            </CardContent>
            <Button sx={{mt: '1em', mb: '1em', ml: '1em'}} size='small' variant='outlined' onClick={handleClickFour}>Click</Button>
            </Card>
        </MovingComponent>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
        {/* item 5 */}
        <MovingComponent
          type="slideInFromLeft"
          duration="700ms"
          delay=".5s"
          direction="normal"
          timing="linear"
          iteration="1"
          fillMode="forwards">
            <Card raised sx={{ marginTop: '1em', width: '30em', height: 'auto', ml: 'auto', mr: 'auto', border: 'solid', borderColor: '#EDF2F4'}}>
            <CardMedia image='' title='Five'></CardMedia>
            <CardContent>
              <Typography>
                Two
              </Typography>
            </CardContent>
            <Button sx={{mt: '1em', mb: '1em', ml: '1em'}} size='small' variant='outlined' onClick={handleClickFive}>Click</Button>
            </Card>
        </MovingComponent>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
        {/* item 6 */}
        <MovingComponent
          type="slideInFromRight"
          duration="700ms"
          delay=".5s"
          direction="normal"
          timing="linear"
          iteration="1"
          fillMode="forwards">
            <Card raised sx={{ marginTop: '1em', width: '30em', height: 'auto', ml: 'auto', mr: 'auto', border: 'solid', borderColor: '#EDF2F4'}}>
            <CardMedia image='' title='Six'></CardMedia>
            <CardContent>
              <Typography>
                Two
              </Typography>
            </CardContent>
            <Button sx={{mt: '1em', mb: '1em', ml: '1em'}} size='small' variant='outlined' onClick={handleClickSix}>Click</Button>
            </Card>
        </MovingComponent>
      </Grid>

    </Grid>
  </>
)
}

export default Works