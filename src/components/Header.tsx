import { Card } from '@mui/material'
import Typography from '@mui/material/Typography'
import React from 'react'
// @ts-ignore
import MovingText from 'react-moving-text'


const Header = () => {


  return (
    <Card raised sx={{ marginTop: '1em'}}>
      <MovingText
        type="fadeInFromLeft"
        duration="2000ms"
        delay="0s"
        direction="normal"
        timing="linear"
        iteration="1"
        fillMode="forewards">
          <Typography variant='h2' align='center' sx={{m: '.25em', color: '#1e4ec7'}}>
            Anthony Erickson's Portfolio
          </Typography>
      </MovingText>
    </Card>
  )
}

export default Header