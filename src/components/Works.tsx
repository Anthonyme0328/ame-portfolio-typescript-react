import React from 'react'
import {Card, Typography, CardHeader, Grid, CardMedia, CardContent, Button, Fab, Tooltip} from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';

//@ts-ignore
import WLC from '../images/WLC.png'
//@ts-ignore
import RPS from '../images/RPS.png'
//@ts-ignore
import OSS from '../images/SplashStore.png'
//@ts-ignore
import TDR from '../images/TDR.png'
//@ts-ignore
import DND from '../images/dndStart.png'
//@ts-ignore
import CT from '../images/CT.png'

//@ts-ignore
import MovingComponent from 'react-moving-text'


const Works = () => {

  const handleClickOne = () => {
    window.open('https://anthonyme0328.github.io/wordle-esk-clone/')
  }
  const handleClickGithubWLC = () => {
    window.open('https://github.com/Anthonyme0328/wordle-esk-clone')
  }


  const handleClickTwo = () => {
    window.open('https://anthonyme0328.github.io/Rock_Paper_Scissors_Game/')
  }
  const handleClickGithubRPS = () => {
    window.open('https://github.com/Anthonyme0328/WordGuessGame')
  }


  const handleClickThree = () => {
    window.open('https://anthonyme0328.github.io/StoreSplash1/')
  }
  const handleClickGithubSP = () => {
    window.open('https://github.com/Anthonyme0328/WordGuessGame')
  }


  const handleClickFour = () => {
    window.open('https://anthonyme0328.github.io/to_do_react/')
  }
  const handleClickGithubTDL = () => {
    window.open('https://github.com/Anthonyme0328/to_do_react')
  }


  const handleClickFive = () => {
    window.open('https://anthonyme0328.github.io/dndStartScreen/')
  }
  const handleClickGithubDND = () => {
    window.open('https://github.com/Anthonyme0328/WordGuessGame')
  }


  const handleClickSix = () => {
    window.open('https://anthonyme0328.github.io/crypto_tracker/')
  }
  const handleClickGithubCT = () => {
    window.open('https://github.com/Anthonyme0328/crypto_tracker')
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
            <Card raised sx={{ marginTop: '1em', width: '30em', height: 'auto', ml: 'auto', mr: 'auto', border: 'solid', borderColor: '#EDF2F4', boxShadow: '5px 10px black'}}>
              <CardMedia image={WLC} title='Psy Game' component='img' sx={{maxHeight: '233px'}}></CardMedia>
              <CardContent>
                <Typography variant='h5'>
                  Wordle Like Clone
                </Typography>
                  <Typography variant='body1'>
                    In this React Wordle Clone, you can play your favorite game an unlimited amount times. You get four chances to guess a five letter word. The page, after your guess will black out incorrect keys and you can use either you keyboard or click on the keys on the page. Try it out see if you can win!!
                  </Typography>
              </CardContent> 
              <Button title='Link to the live app' sx={{mt: '1em', mb: '1em', ml: '1em'}} size='small' variant='outlined' onClick={handleClickOne}>Click</Button>
              <Tooltip placement='top' title='Link to the code on Github'>
                <Fab size='small' variant='circular' sx={{mt: '1em', mb: '1em', mr: '1em', float: 'right'}}>
                    <GitHubIcon onClick={handleClickGithubWLC} fontSize='small'/>
                </Fab>
              </Tooltip>
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
            <Card raised sx={{ marginTop: '1em', width: '30em', height: 'auto', ml: 'auto', mr: 'auto', border: 'solid', borderColor: '#EDF2F4',  boxShadow: '5px 10px black'}}>
            <CardMedia image={RPS} title='Rock Paper Scissors' component='img'></CardMedia>
            <CardContent>
            <Typography variant='h5'>
                  Advanced Rock Paper Scissors
                </Typography>
              <Typography>
                Have you seen BBT? Ever wanted to give this game a shot? Play against the computer and see if you can rack up a high enough score. Use's JavaScript and advanced CSS to manipulate the DOM and add some fun effects to the page! Bazinga!
              </Typography>
            </CardContent>
            <Button title='Link to the live app' sx={{mt: '1em', mb: '1em', ml: '1em'}} size='small' variant='outlined' onClick={handleClickTwo}>Click</Button>
            <Tooltip placement='top' title='Link to the code on Github'>
                <Fab size='small' variant='circular' sx={{mt: '1em', mb: '1em', mr: '1em', float: 'right'}}>
                    <GitHubIcon onClick={handleClickGithubRPS} fontSize='small'/>
                </Fab>
            </Tooltip>
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
            <Card raised sx={{ marginTop: '1em', width: '30em', height: 'auto', ml: 'auto', mr: 'auto', border: 'solid', borderColor: '#EDF2F4',  boxShadow: '5px 10px black'}}>
            <CardMedia image={OSS} title='Oganic Store Splash' component='img'></CardMedia>
            <CardContent>
            <Typography variant='h5'>
                 Organic Store Splash Page
                </Typography>
              <Typography>
                This is a mock up of a splash page for an online organic farm retailer. Custom made cards host come of the potential produce you can purchase. Hover over the options to see some advanced mathmatical CSS. Vanilla JavaScript used only instead of the assistance of a component based library.
              </Typography>
            </CardContent>
            <Button title='Link to the live app' sx={{mt: '1em', mb: '1em', ml: '1em'}} size='small' variant='outlined' onClick={handleClickThree}>Click</Button>
            <Tooltip placement='top' title='Link to the code on Github'>
                <Fab size='small' variant='circular' sx={{mt: '1em', mb: '1em', mr: '1em', float: 'right'}}>
                    <GitHubIcon onClick={handleClickGithubSP} fontSize='small'/>
                </Fab>
            </Tooltip>
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
            <Card raised sx={{ marginTop: '1em', width: '30em', height: 'auto', ml: 'auto', mr: 'auto', border: 'solid', borderColor: '#EDF2F4',  boxShadow: '5px 10px black'}}>
            <CardMedia image={TDR} title='To Do List' component='img' sx={{maxHeight: '233px'}}></CardMedia>
            <CardContent>
            <Typography variant='h5'>
                To Do List
                </Typography>
              <Typography>
                Need to track your daily tasks and To Do's? This react based to do tracker allows you to create  a to do, a date, set a reminder, and once it is completed remove it from the list. The page will readjust its size when items are added and removed. Double click an item to remove or add a reminder.
              </Typography>
            </CardContent>
            <Button title='Link to the live app' sx={{mt: '1em', mb: '1em', ml: '1em'}} size='small' variant='outlined' onClick={handleClickFour}>Click</Button>
            <Tooltip placement='top' title='Link to the code on Github'>
                <Fab size='small' variant='circular' sx={{mt: '1em', mb: '1em', mr: '1em', float: 'right'}}>
                    <GitHubIcon onClick={handleClickGithubTDL} fontSize='small'/>
                </Fab>
            </Tooltip>
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
            <Card raised sx={{ marginTop: '1em', width: '30em', height: 'auto', ml: 'auto', mr: 'auto', border: 'solid', borderColor: '#EDF2F4',  boxShadow: '5px 10px black'}}>
            <CardMedia image={DND} title='DND Screen' component='img'></CardMedia>
            <CardContent>
              <Typography>
                Reactive starter page for character select of a DND campaign. Click a character and have watch how the page reveals more info and resizes the remaining options. Just an interactive starter page that will be part of a larger app for game custumization and first time play throughs. 
              </Typography>
            </CardContent>
            <Button title='Link to the live app' sx={{mt: '1em', mb: '1em', ml: '1em'}} size='small' variant='outlined' onClick={handleClickFive}>Click</Button>
            <Tooltip placement='top' title='Link to the code on Github'>
                <Fab size='small' variant='circular' sx={{mt: '1em', mb: '1em', mr: '1em', float: 'right'}}>
                    <GitHubIcon onClick={handleClickGithubDND} fontSize='small'/>
                </Fab>
            </Tooltip>
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
            <Card raised sx={{ marginTop: '1em', width: '30em', height: 'auto', ml: 'auto', mr: 'auto', border: 'solid', borderColor: '#EDF2F4',  boxShadow: '5px 10px black'}}>
            <CardMedia image={CT} title='crypto traker' component='img'></CardMedia>
            <CardContent>
              <Typography>
                An app that allows you to track and see the price, websites, social media, and more of your favorite Crypto Currencies. Refine your seach by typing in a currency you would wish to view and the page will update its contents in real time. Open source API and Axios used.
              </Typography>
            </CardContent>
            <Button title='Link to the live app' sx={{mt: '1em', mb: '1em', ml: '1em'}} size='small' variant='outlined' onClick={handleClickSix}>Click</Button>
            <Tooltip placement='top' title='Link to the code on Github'>
                <Fab size='small' variant='circular' sx={{mt: '1em', mb: '1em', mr: '1em', float: 'right'}}>
                    <GitHubIcon onClick={handleClickGithubCT} fontSize='small'/>
                </Fab>
            </Tooltip>
            </Card>
        </MovingComponent>
      </Grid>

    </Grid>
  </>
)
}

export default Works