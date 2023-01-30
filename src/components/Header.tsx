import { Card } from '@mui/material'
import Typography from '@mui/material/Typography'
import React from 'react'
// @ts-ignore
import MovingText from 'react-moving-text'


const Header = () => {


  return (
    <Card raised sx={{m: 'auto', mt: '0em', backgroundColor: '#426B69', width: '99%', border: 'solid', borderColor: '#EDF2F4'}}>
      <MovingText
        type="fadeInFromLeft"
        duration="2000ms"
        delay="0s"
        direction="normal"
        timing="linear"
        iteration="1"
        fillMode="forewards">
          <Typography variant='h2' align='center' sx={{m: '.25em', color: '#222E50'}}>
            Anthony Erickson's Portfolio
          </Typography>
      </MovingText>
    </Card>
  )
}

export default Header