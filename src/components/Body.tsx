import React from 'react'
import {Card} from '@mui/material';
import About from './About';

const Body = () => {
  return (
    <Card raised sx={{ marginTop: '1em'}}>
      <About/>
    </Card>
  )
}

export default Body